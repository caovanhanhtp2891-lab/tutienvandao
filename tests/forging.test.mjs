import test from 'node:test';
import assert from 'node:assert/strict';
import * as G from '../dist/journey.js';
import * as S from '../dist/saves.js';

const NOW=1791849600000;
function member(){const s=G.preview('member',NOW);s.training=false;s.stone=100000;s.ore=100000;return s;}
function unchanged(s,action){const before=JSON.stringify(s);assert.ok(action());assert.equal(JSON.stringify(s),before);}

test('enhancing consumes exact ingredients, raises equipped stats, and preserves quantity',()=>{
 const s=member();s.items.jade=1;G.equip(s,'jade');const before=G.stats(s),cost=G.enhancementStatus(s,'jade').cost;
 assert.deepEqual(cost,{stone:80,ore:8});assert.equal(G.enhance(s,'jade'),null);
 assert.equal(s.stone,100000-cost.stone);assert.equal(s.ore,100000-cost.ore);assert.equal(s.items.jade,1);
 assert.equal(s.enhancements.jade,1);const a=G.artifactStats(s,'jade');
 assert.equal(a.attack,14);assert.equal(a.defense,30);assert.equal(a.hp,184);
 assert.ok(G.stats(s).atk>before.atk);assert.ok(G.stats(s).def>before.def);assert.ok(G.stats(s).maxHp>before.maxHp);
 assert.ok(G.validSave(s));
});

test('enhancement gates each realm, scales costs and stops at +10 without spending',()=>{
 const s=member();
 for(let realm=1;realm<=5;realm++){
  s.realm=realm;
  for(let level=(realm-1)*2+1;level<=realm*2;level++){
   assert.deepEqual(G.enhancementStatus(s,'woodSword').cost,{stone:40*level,ore:4*level});
   assert.equal(G.enhance(s,'woodSword'),null);
  }
  unchanged(s,()=>G.enhance(s,'woodSword'));
 }
 assert.equal(s.enhancements.woodSword,10);assert.equal(G.artifactStats(s,'woodSword').attack,20);
 s.realm=9;unchanged(s,()=>G.enhance(s,'woodSword'));
});

test('invalid, missing, mortal and unaffordable enhancements leave state untouched',()=>{
 const s=member();for(const id of ['missing','sword','jade','pillQi'])unchanged(s,()=>G.enhance(s,id));
 s.stone=39;unchanged(s,()=>G.enhance(s,'woodSword'));s.stone=100;s.ore=3;unchanged(s,()=>G.enhance(s,'woodSword'));
 const mortal=G.newGame(NOW);unchanged(mortal,()=>G.enhance(mortal,'woodSword'));
});

test('enhancement is attached to artifact type and survives switching equipment and duplicate drops',()=>{
 const s=member();G.enhance(s,'woodSword');const boosted=G.stats(s);
 s.items.jade=1;G.equip(s,'jade');G.addItem(s,'woodSword');G.equip(s,'woodSword');
 assert.deepEqual(G.stats(s),boosted);assert.equal(G.artifactStats(s,'woodSword').level,1);
 assert.equal(s.items.woodSword,2);
});

test('dismantling duplicate artifacts awards once per copy and keeps enhanced equipment usable',()=>{
 const s=member();G.enhance(s,'woodSword');s.items.woodSword=3;
 const before=G.stats(s),stone=s.stone,ore=s.ore;
 assert.equal(G.dismantleStatus(s,'woodSword').available,2);
 assert.equal(G.dismantle(s,'woodSword'),null);assert.equal(G.dismantle(s,'woodSword'),null);
 assert.equal(s.items.woodSword,1);assert.equal(s.stone,stone+30);assert.equal(s.ore,ore+4);
 assert.deepEqual(G.stats(s),before);assert.equal(s.artifact,'woodSword');
 unchanged(s,()=>G.dismantle(s,'woodSword'));assert.ok(G.validSave(s));
});

test('dismantling keeps unlearned manuals and never removes a learned technique',()=>{
 const s=member();s.items.sword=2;
 assert.equal(G.dismantle(s,'sword'),null);assert.equal(s.items.sword,1);unchanged(s,()=>G.dismantle(s,'sword'));
 G.learn(s,'sword');G.addItem(s,'sword');const before=G.stats(s);
 assert.equal(G.dismantle(s,'sword'),null);assert.equal(s.items.sword,0);assert.ok(s.learned.includes('sword'));
 assert.equal(s.technique,'sword');assert.deepEqual(G.stats(s),before);assert.ok(G.validSave(s));
});

test('pills, unknown items, absent duplicates and full storage cannot be dismantled',()=>{
 const s=member();for(const id of ['pillQi','missing','heaven','woodSword'])unchanged(s,()=>G.dismantle(s,id));
 s.items.woodSword=2;s.stone=1e12;unchanged(s,()=>G.dismantle(s,'woodSword'));
 s.stone=100;s.ore=1e12;unchanged(s,()=>G.dismantle(s,'woodSword'));
});

test('forging is blocked during battle and battle snapshots survive save/restore',()=>{
 const s=member();s.items.woodSword=2;G.enhance(s,'woodSword');
 const stats=G.stats(s);G.startBattle(s,'dungeon','forest');
 assert.equal(s.battle.hero.atk,stats.atk);unchanged(s,()=>G.enhance(s,'woodSword'));unchanged(s,()=>G.dismantle(s,'woodSword'));
 const restored=G.restore(JSON.stringify(s),NOW);assert.equal(restored.recovered,false);assert.deepEqual(restored.state.battle,s.battle);
 while(restored.state.battle.status==='fighting')G.battleStep(restored.state);
 const result=JSON.stringify(restored.state);G.settleBattle(restored.state);assert.equal(JSON.stringify(restored.state),result);
 assert.ok(G.validSave(restored.state));
});

test('old v2 saves migrate without losing progress, including current and backup saves',()=>{
 const old=member();delete old.enhancements;
 const before=G.stats(old),raw=JSON.stringify(old);assert.ok(G.validSave(old));
 const result=G.restore(raw,NOW);assert.equal(result.recovered,false);assert.deepEqual(result.state.enhancements,{});
 assert.deepEqual(G.stats(result.state),before);assert.equal(result.state.name,old.name);assert.equal(result.state.stone,old.stone);
 const map=new Map([[S.KEY,raw]]),storage={getItem:k=>map.get(k)??null,setItem:(k,v)=>map.set(k,v)};
 const loaded=S.readGame(storage,NOW).state;G.enhance(loaded,'woodSword');S.saveGame(storage,loaded,0,NOW);
 assert.equal(S.readGame(storage,NOW).state.enhancements.woodSword,1);assert.equal(S.readBackup(storage).state.name,old.name);
});

test('malformed enhancement imports are rejected and do not overwrite existing saves',()=>{
 const base=member(),bad=[null,[],7,{'woodSword':-1},{'woodSword':11},{'woodSword':1.5},{'woodSword':'2'},{'missing':1},{'jade':1}];
 for(const enhancements of bad){const s=structuredClone(base);s.enhancements=enhancements;assert.equal(G.validSave(s),false);assert.equal(G.restore(JSON.stringify(s),NOW).recovered,true);}
 base.enhancements.woodSword=2;assert.ok(G.validSave(base));
 const original=JSON.stringify(base),map=new Map([[S.KEY,original]]),storage={getItem:k=>map.get(k)??null,setItem:(k,v)=>map.set(k,v)};
 base.enhancements.woodSword=11;assert.throws(()=>S.saveGame(storage,base,0,NOW));assert.equal(map.get(S.KEY),original);
});

test('story choices cannot erase an ongoing event battle or its one-time reward',()=>{
 const s=member();s.pendingEvent={id:'quarrel',personId:null,at:s.gameMinutes};s.herb=100;
 assert.ok(G.resolveEvent(s,2).battle);
 for(const choice of [0,1,2])unchanged(s,()=>G.resolveEvent(s,choice).error);
 while(s.battle.status==='fighting')G.battleStep(s);
 assert.equal(s.pendingEvent,null);assert.equal(s.stats.events,1);assert.ok(s.battle.result.won);
 const settled=JSON.stringify(s);G.settleBattle(s);assert.equal(JSON.stringify(s),settled);
});
