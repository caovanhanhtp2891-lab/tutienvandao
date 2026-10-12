export const REALMS=['Luyện Khí','Trúc Cơ','Kim Đan','Nguyên Anh','Hóa Thần','Luyện Hư','Hợp Thể','Đại Thừa','Độ Kiếp'];
export const JOBS={wood:'Đốn linh mộc',herb:'Trồng linh thảo',ore:'Khai linh khoáng',qi:'Tu luyện',idle:'Nghỉ ngơi'};
export const BUILDINGS=[
 {id:'hall',name:'Tông Môn Điện',desc:'Trung tâm tông môn. Tăng giới hạn đệ tử và tốc độ tạo linh thạch.',resource:'stone',rate:1.8,color:'#4e786b'},
 {id:'wood',name:'Linh Mộc Lâm',desc:'Linh mộc dùng để mở rộng và nâng cấp các công trình.',resource:'wood',rate:1.1,color:'#7f8a57'},
 {id:'herb',name:'Linh Thảo Viên',desc:'Linh thảo để luyện đan. Đệ tử Mộc linh căn nhận thêm 25% sản lượng.',resource:'herb',rate:.7,color:'#8b9b63'},
 {id:'ore',name:'Linh Khoáng Sơn',desc:'Linh khoáng giúp rèn luyện pháp bảo và nâng cấp công trình.',resource:'ore',rate:.6,color:'#7c88a0'},
 {id:'qi',name:'Tụ Linh Trận',desc:'Thu nạp linh khí cho tông sư và đệ tử. Tăng cấp để tu luyện nhanh hơn.',resource:'qi',rate:.8,color:'#659b93'},
 {id:'alchemy',name:'Luyện Đan Các',desc:'Mở khóa công thức đan dược và tăng hiệu quả dược tính.',resource:null,rate:0,color:'#af7953'}
];
export const RECIPES=[
 {id:'qi',name:'Tụ Khí Đan',desc:'+120 linh khí. Dùng để tu luyện hoặc đột phá.',cost:{herb:45,stone:90},level:1,icon:'pill',color:'#719b7b'},
 {id:'power',name:'Hộ Mạch Đan',desc:'Đội hình tăng 25% công và máu trong một lần xuất chiến.',cost:{herb:90,ore:35,stone:160},level:1,icon:'pill',color:'#bd9253'},
 {id:'realm',name:'Trúc Cơ Đan',desc:'Cần cho các lần đột phá từ Kim Đan trở lên.',cost:{herb:160,ore:80,stone:300},level:2,icon:'pill',color:'#9392b8'}
];
const NAMES=['Mộc Thanh','Bạch Vân','Lạc Hàn','Lâm Trúc','Tử Nghiên','Hàn Phong','Vân Dao','Liễu Tâm','Tần Dạ','Thanh Liên','Bạch Uyên','Mộ Dung'];
export const ELEMENTS={Mộc:{color:'#7c9469',bonus:'Linh thảo +25%',skill:'Thanh Mộc Hồi Xuân'},Kim:{color:'#bda36a',bonus:'Linh khoáng +25%',skill:'Vạn Kiếm Quy Tông'},Thủy:{color:'#7498aa',bonus:'Linh khí +25%',skill:'Băng Tâm Quyết'},Hỏa:{color:'#bb7b66',bonus:'Sát thương +15%',skill:'Liệt Diễm Trảm'},Thổ:{color:'#ae986d',bonus:'Linh mộc +25%',skill:'Sơn Hà Hộ Thể'}};
export const CHAPTERS=[
 {name:'Trúc Lâm Cốc',sub:'Linh thú quấy nhiễu khu rừng phía nam',color:'#759174',enemies:['Mộc Yêu','Sơn Lang','Linh Xà','Sơn Lang','Mộc Yêu']},
 {name:'Hàn Sương Động',sub:'Theo dấu linh mạch dưới lòng núi',color:'#789ca7',enemies:['Băng Linh','Hàn Hồ','Thạch Yêu','Hàn Hồ','Băng Linh']},
 {name:'Xích Diễm Sơn',sub:'Ngọn lửa cổ xưa chưa từng tắt',color:'#b78267',enemies:['Hỏa Linh','Viêm Lang','Hỏa Phượng','Viêm Lang','Hỏa Linh']},
 {name:'Vân Hải Cổ Tự',sub:'Những lời thì thầm từ ngôi cổ tự',color:'#9c92aa',enemies:['Ảnh Linh','Thạch Vệ','Cổ Long','Thạch Vệ','Ảnh Linh']},
 {name:'Thiên Kiếp Đài',sub:'Thử thách cuối cùng của một tông sư',color:'#a19570',enemies:['Lôi Linh','Thiên Vệ','Lôi Long','Thiên Vệ','Lôi Linh']}
];
export const QUESTS=[
 {id:'assign',name:'Đệ tử xuống núi',desc:'Giao việc cho ít nhất 2 đệ tử',target:2,reward:{stone:300,herb:50},value:s=>s.disciples.filter(d=>!['idle','qi'].includes(d.job)).length},
 {id:'upgrade',name:'Tiên môn khởi sắc',desc:'Nâng cấp một công trình',target:1,reward:{stone:350,wood:100},value:s=>s.stats.upgrades},
 {id:'craft',name:'Đan hương vấn vít',desc:'Luyện thành công một viên đan',target:1,reward:{stone:250,herb:80},value:s=>s.stats.crafted},
 {id:'recruit',name:'Hữu duyên đồng hành',desc:'Thu nhận thêm 2 đệ tử',target:2,reward:{stone:500,qi:100},value:s=>s.stats.recruits},
 {id:'battle',name:'Bình yên Trúc Lâm',desc:'Chiến thắng một trận bí cảnh',target:1,reward:{stone:600,wood:150,herb:100},value:s=>s.stats.wins},
 {id:'realm',name:'Một bước tiên đồ',desc:'Đột phá lên Trúc Cơ',target:1,reward:{stone:700,ore:120},value:s=>s.realm},
 {id:'chapter',name:'Vượt ngàn mây',desc:'Mở khóa Hàn Sương Động',target:3,reward:{stone:1200,qi:300},value:s=>s.stats.wins}
];
const clone=x=>JSON.parse(JSON.stringify(x));
export function newGame(now=Date.now()) {return {version:1,stone:2400,wood:650,herb:180,ore:220,qi:90,realm:0,pills:{qi:1,power:1,realm:0},buff:false,scrolls:2,buildings:Object.fromEntries(BUILDINGS.map(b=>[b.id,1])),disciples:[{id:1,name:'Mộc Thanh',element:'Mộc',rarity:'Hiếm',talent:1.2,level:1,job:'herb',appearance:0},{id:2,name:'Bạch Vân',element:'Kim',rarity:'Hiếm',talent:1.2,level:1,job:'ore',appearance:1},{id:3,name:'Lạc Hàn',element:'Thủy',rarity:'Thường',talent:1,level:1,job:'qi',appearance:2}],team:[1,2,3],nextId:4,chapter:0,stages:[0,0,0,0,0],stats:{upgrades:0,crafted:0,recruits:0,wins:0,meditations:0},claimed:[],log:[{text:'Thanh Vân Tông khai sơn. Ba đệ tử đầu tiên đã sẵn sàng!',time:now}],lastAt:now,lastMeditate:0,sound:false};}
export function validSave(s){
 if(!s||s.version!==1||!Array.isArray(s.disciples)||s.disciples.length>40||!s.disciples.length||!s.buildings||!s.pills||!s.stats||!Array.isArray(s.stages)||s.stages.length!==5||!Array.isArray(s.team)||!Array.isArray(s.claimed)||!Array.isArray(s.log))return false;
 if(!['stone','wood','herb','ore','qi','lastAt','nextId','realm','chapter','scrolls'].every(k=>Number.isFinite(s[k])&&s[k]>=0))return false;
 if(typeof s.sound!=='boolean'||typeof s.buff!=='boolean'||!Number.isFinite(s.lastMeditate))return false;
 if(!Number.isInteger(s.realm)||s.realm>=REALMS.length||!Number.isInteger(s.chapter)||s.chapter>=CHAPTERS.length)return false;
 if(!BUILDINGS.every(b=>Number.isInteger(s.buildings[b.id])&&s.buildings[b.id]>=1&&s.buildings[b.id]<=10))return false;
 if(!['qi','power','realm'].every(k=>Number.isInteger(s.pills[k])&&s.pills[k]>=0))return false;
 if(!['upgrades','crafted','recruits','wins','meditations'].every(k=>Number.isFinite(s.stats[k])&&s.stats[k]>=0))return false;
 if(!s.disciples.every(d=>Number.isInteger(d.id)&&typeof d.name==='string'&&d.name.length<=40&&ELEMENTS[d.element]&&JOBS[d.job]&&Number.isFinite(d.talent)&&d.talent>=1&&d.talent<=2&&Number.isInteger(d.level)&&d.level>=1&&d.level<=50))return false;
 if(!s.disciples.every(d=>['Thường','Hiếm','Thiên tài'].includes(d.rarity)&&Number.isInteger(d.appearance)&&d.appearance>=0&&d.appearance<=5))return false;
 if(new Set(s.disciples.map(d=>d.id)).size!==s.disciples.length||s.nextId<=Math.max(...s.disciples.map(d=>d.id)))return false;
 if(s.team.length>5||new Set(s.team).size!==s.team.length||!s.team.every(id=>s.disciples.some(d=>d.id===id)))return false;
 return s.stages.every(n=>Number.isInteger(n)&&n>=0&&n<=3);
}
export function restore(raw,now=Date.now()){let s;try{s=JSON.parse(raw)}catch{}if(!validSave(s))return {state:newGame(now),offline:null,recovered:!!raw};s=clone(s);const secs=Math.min(Math.max((now-s.lastAt)/1000,0),28800);const before=Object.fromEntries(['stone','wood','herb','ore','qi'].map(k=>[k,s[k]]));tick(s,now);const gains=Object.fromEntries(Object.keys(before).map(k=>[k,Math.floor(s[k]-before[k])]));return {state:s,offline:secs>=30?{secs,gains}:null,recovered:false};}
export function capacity(s){return 5+s.buildings.hall*2;}
export function rates(s){const out={stone:0,wood:0,herb:0,ore:0,qi:0};for(const b of BUILDINGS){if(!b.resource)continue;let rate=b.rate*s.buildings[b.id];for(const d of s.disciples){if(d.job!==b.id)continue;const matched=(b.id==='herb'&&d.element==='Mộc')||(b.id==='ore'&&d.element==='Kim')||(b.id==='wood'&&d.element==='Thổ')||(b.id==='qi'&&d.element==='Thủy');rate+=b.rate*d.talent*(1+(d.level-1)*.15)*(matched?1.25:1);}out[b.resource]=rate;}return out;}
export function tick(s,now=Date.now()){const sec=Math.min(Math.max((now-s.lastAt)/1000,0),28800);const r=rates(s);Object.keys(r).forEach(k=>s[k]=Math.min(1e9,s[k]+r[k]*sec));s.lastAt=now;return sec;}
export function canAfford(s,cost){return Object.entries(cost).every(([k,v])=>s[k]>=v);}
function spend(s,cost){Object.entries(cost).forEach(([k,v])=>s[k]-=v);}
function add(s,reward){Object.entries(reward).forEach(([k,v])=>s[k]=Math.min(1e9,s[k]+v));}
export function log(s,text){s.log.unshift({text,time:Date.now()});s.log=s.log.slice(0,25);}
export function upgradeCost(s,id){const n=s.buildings[id];return {stone:Math.floor(180*n**1.65),wood:Math.floor(75*n**1.4),ore:Math.floor(30*n**1.35)};}
export function upgrade(s,id){if(!BUILDINGS.some(b=>b.id===id))return 'Công trình không tồn tại.';if(s.buildings[id]>=10)return 'Công trình đã đạt cấp tối đa.';const c=upgradeCost(s,id);if(!canAfford(s,c))return 'Chưa đủ tài nguyên để nâng cấp.';spend(s,c);s.buildings[id]++;s.stats.upgrades++;log(s,`${BUILDINGS.find(b=>b.id===id).name} đạt cấp ${s.buildings[id]}.`);return null;}
export function assign(s,id,job){if(!JOBS[job])return 'Công việc không hợp lệ.';const d=s.disciples.find(x=>x.id===id);if(!d)return 'Không tìm thấy đệ tử.';d.job=job;return null;}
export function recruitCost(s){return 350+s.stats.recruits*60;}
export function recruit(s,rng=Math.random){if(s.disciples.length>=capacity(s))return {error:'Tông môn đã đầy. Hãy nâng Tông Môn Điện.'};const c=recruitCost(s);if(!s.scrolls&&s.stone<c)return {error:'Chưa đủ linh thạch để chiêu mộ.'};if(s.scrolls)s.scrolls--;else s.stone-=c;const roll=rng();const rare=(s.stats.recruits+1)%5===0||roll>.88?'Thiên tài':roll>.38?'Hiếm':'Thường';const i=s.nextId++;const elements=Object.keys(ELEMENTS);const d={id:i,name:NAMES[(i-1)%NAMES.length]+(i>12?' '+Math.ceil(i/12):''),element:elements[Math.floor(rng()*5)%5],rarity:rare,talent:rare==='Thiên tài'?1.6:rare==='Hiếm'?1.2:1,level:1,job:'qi',appearance:(i-1)%6};s.disciples.push(d);if(s.team.length<5)s.team.push(d.id);s.stats.recruits++;log(s,`${d.name} (${rare}, ${d.element}) gia nhập tông môn.`);return {disciple:d};}
export function discipleCost(d){return {stone:70*d.level,qi:15*d.level};}
export function train(s,id){const d=s.disciples.find(x=>x.id===id);if(!d)return 'Không tìm thấy đệ tử.';if(d.level>=50)return 'Đệ tử đã đạt cấp tối đa.';const c=discipleCost(d);if(!canAfford(s,c))return 'Chưa đủ linh thạch hoặc linh khí.';spend(s,c);d.level++;return null;}
export function realmCost(s){return {qi:Math.floor(150*(s.realm+1)**1.8),stone:Math.floor(250*(s.realm+1)**1.5),herb:50*(s.realm+1)};}
export function breakthrough(s){if(s.realm>=REALMS.length-1)return 'Đã đạt cảnh giới cao nhất.';const c=realmCost(s);if(!canAfford(s,c))return 'Chưa đủ tài nguyên để đột phá.';if(s.realm>=1&&!s.pills.realm)return 'Cần một Trúc Cơ Đan. Luyện Đan Các cấp 2 sẽ mở công thức.';spend(s,c);if(s.realm>=1)s.pills.realm--;s.realm++;log(s,`Tông sư đột phá ${REALMS[s.realm]}! Toàn đội được tăng sức mạnh.`);return null;}
export function meditate(s,now=Date.now()){if(now-s.lastMeditate<650)return false;s.lastMeditate=now;s.qi=Math.min(1e9,s.qi+12+s.buildings.qi*3+s.realm*5);s.stats.meditations++;return true;}
export function craft(s,id){const r=RECIPES.find(x=>x.id===id);if(!r)return 'Công thức không tồn tại.';if(s.buildings.alchemy<r.level)return `Cần Luyện Đan Các cấp ${r.level}.`;if(!canAfford(s,r.cost))return 'Chưa đủ nguyên liệu luyện đan.';spend(s,r.cost);s.pills[id]++;s.stats.crafted++;log(s,`Luyện thành công ${r.name}.`);return null;}
export function usePill(s,id){if(!s.pills[id])return 'Chưa có đan dược này.';if(id==='realm')return 'Trúc Cơ Đan tự dùng khi đột phá cảnh giới.';if(id==='power'&&s.buff)return 'Hộ Mạch Đan đang có hiệu lực.';s.pills[id]--;if(id==='qi')s.qi+=120+10*(s.buildings.alchemy-1);if(id==='power')s.buff=true;return null;}
export function claim(s,id){const q=QUESTS.find(x=>x.id===id);if(!q||s.claimed.includes(id)||q.value(s)<q.target)return 'Nhiệm vụ chưa hoàn thành hoặc đã nhận thưởng.';add(s,q.reward);s.claimed.push(id);return null;}
export function toggleTeam(s,id){if(!s.disciples.some(d=>d.id===id))return 'Không tìm thấy đệ tử.';if(s.team.includes(id)){if(s.team.length===1)return 'Đội hình cần ít nhất một đệ tử.';s.team=s.team.filter(x=>x!==id);}else{if(s.team.length===5)return 'Đội hình tối đa 5 đệ tử.';s.team.push(id);}return null;}
export function fighter(d,s){const a=1+(d.level-1)*.2;const realm=1+s.realm*.25;const buff=s.buff?1.25:1;return {...d,maxHp:Math.round(210*d.talent*a*realm*buff),hp:Math.round(210*d.talent*a*realm*buff),atk:Math.round(40*d.talent*a*realm*buff*(d.element==='Hỏa'?1.15:1)),def:Math.round(9*a*realm),energy:0,side:'ally'};}
export function power(s){return s.team.reduce((n,id)=>{const d=s.disciples.find(x=>x.id===id);if(!d)return n;const f=fighter(d,s);return n+f.atk*5+f.maxHp+f.def*3},0);}
export function enemyPower(ch,stage){return Math.round(2200*(1+ch*.7+stage*.28));}
export function beginBattle(s,ch=s.chapter){if(!Number.isInteger(ch)||ch<0||ch>s.chapter)return {error:'Bí cảnh chưa được mở khóa.'};const stage=s.stages[ch]>=3?2:s.stages[ch];const scale=1+ch*.7+stage*.28;const allies=s.team.map(id=>s.disciples.find(d=>d.id===id)).filter(Boolean).map(d=>fighter(d,s));if(!allies.length)return {error:'Hãy chọn ít nhất một đệ tử.'};const enemies=CHAPTERS[ch].enemies.map((name,i)=>({id:100+i,name,element:['Mộc','Thổ','Hỏa','Thủy','Kim'][i],appearance:i,maxHp:Math.round(190*scale*(i===2?1.4:1)),hp:Math.round(190*scale*(i===2?1.4:1)),atk:Math.round(30*scale*(i===2?1.3:1)),def:Math.round(6*scale),energy:0,side:'enemy'}));const b={chapter:ch,stage,round:0,allies,enemies,turn:0,order:[],events:[],status:'fighting',rewarded:false,usedBuff:s.buff};s.buff=false;return {battle:b};}
export function battleStep(b,rng=Math.random){if(b.status!=='fighting')return null;const living=()=>[...b.allies,...b.enemies].filter(f=>f.hp>0);if(!b.order.length){b.round++;b.order=living().map(f=>({id:f.id,side:f.side}));}
 let actor;while(b.order.length&&!actor){const ref=b.order.shift();actor=living().find(f=>f.id===ref.id&&f.side===ref.side);}if(!actor)return null;
 const friends=actor.side==='ally'?b.allies:b.enemies;const foes=(actor.side==='ally'?b.enemies:b.allies).filter(f=>f.hp>0);if(!foes.length){b.status=actor.side==='ally'?'won':'lost';return null;}
 actor.energy++;const skill=actor.energy>=3;let event;
 if(skill&&actor.element==='Mộc'&&friends.some(f=>f.hp>0&&f.hp<f.maxHp*.8)) {const target=friends.filter(f=>f.hp>0).sort((a,z)=>a.hp/a.maxHp-z.hp/z.maxHp)[0];const amount=Math.min(target.maxHp-target.hp,Math.round(actor.atk*2.1));target.hp+=amount;event={actor:actor.id,target:target.id,side:actor.side,targetSide:actor.side,heal:true,amount,skill:true,text:`${actor.name} • Thanh Mộc Hồi Xuân +${amount}`};}
 else {const target=foes[Math.floor(rng()*foes.length)%foes.length];const critical=rng()<.12;const amount=Math.max(5,Math.round((actor.atk*(skill?1.9:1)-target.def*.55)*(critical?1.5:1)*(.92+rng()*.16)));target.hp=Math.max(0,target.hp-amount);event={actor:actor.id,target:target.id,side:actor.side,targetSide:target.side,amount,critical,skill,text:`${actor.name} ${skill?ELEMENTS[actor.element].skill:'tấn công'} ${target.name}: −${amount}${critical?' (bạo kích)':''}`};}
 if(skill)actor.energy=0;b.events.unshift(event);b.events=b.events.slice(0,8);b.turn++;
 if(!b.enemies.some(f=>f.hp>0))b.status='won';else if(!b.allies.some(f=>f.hp>0)||b.round>60)b.status='lost';return event;
}
export function settleBattle(s,b){if(b.status==='fighting'||b.rewarded)return null;b.rewarded=true;if(b.status==='lost'){log(s,'Đội thám hiểm trở về an toàn. Hãy tu luyện trước khi tái chiến.');return {won:false};}const reward={stone:300+b.chapter*180+b.stage*90,wood:70+b.chapter*40,herb:60+b.stage*25,ore:50+b.chapter*25,qi:45+b.stage*20};add(s,reward);s.stats.wins++;s.stages[b.chapter]=Math.min(3,s.stages[b.chapter]+1);if(s.stages[b.chapter]>=3&&b.chapter===s.chapter&&s.chapter<CHAPTERS.length-1)s.chapter++;log(s,`Chiến thắng ${CHAPTERS[b.chapter].name} tầng ${b.stage+1}! +${reward.stone} linh thạch.`);return {won:true,reward};}
