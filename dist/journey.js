import * as Legacy from './game.js';
export const DAY=1440,YEAR=365*DAY;
export const REALMS=['Phàm nhân','Luyện Khí','Trúc Cơ','Kim Đan','Nguyên Anh','Hóa Thần','Luyện Hư','Hợp Thể','Đại Thừa','Độ Kiếp'];
export const MILESTONE_IDS=['admit','mission','diligent','travel','friend','victory','outer','foundation','core','champion','founder','void','master'];
export const RANKS=['Tạp dịch','Ngoại môn','Nội môn','Trọng tâm','Chân truyền','Thánh tử','Trưởng lão','Chưởng môn'];
export const SECTS=[
 {id:'cloud',name:'Thanh Vân Tông',element:'Mộc',min:0,bonus:1.12,book:'wood',motto:'Tâm an giữa núi xanh, tiên đạo tự sinh.',desc:'Thu nhận mọi linh căn. Chú trọng đạo tâm và bồi dưỡng từ tạp dịch.',style:0},
 {id:'sword',name:'Thiên Kiếm Tông',element:'Kim',min:58,bonus:1.2,book:'sword',motto:'Một kiếm phá vạn pháp.',desc:'Kiếm tu chính đạo. Cần tư chất khá, Kim linh căn có lợi thế.',style:1},
 {id:'herb',name:'Linh Dược Cốc',element:'Mộc',min:45,bonus:1.16,book:'wood',motto:'Một nhành linh thảo, một đời tiên duyên.',desc:'Luyện đan và chữa trị. Có nhiệm vụ dược viên, công pháp hồi phục.',style:0},
 {id:'moon',name:'Hàn Nguyệt Cung',element:'Thủy',min:55,bonus:1.2,book:'water',motto:'Tâm như băng nguyệt, đạo như trường hà.',desc:'Thủy tu và thân pháp. Đạo tâm và sự kiên nhẫn là nền tảng.',style:3},
 {id:'fire',name:'Xích Diễm Sơn',element:'Hỏa',min:50,bonus:1.18,book:'fire',motto:'Lửa thử chân tâm, chiến sinh đại đạo.',desc:'Pháp thuật Hỏa hệ, rèn luyện bằng thử thách và chiến đấu.',style:2},
 {id:'earth',name:'Vạn Pháp Môn',element:'Thổ',min:65,bonus:1.25,book:'earth',motto:'Vạn pháp đồng nguyên, bền chí thành tiên.',desc:'Trận pháp, luyện khí và hộ thể. Yêu cầu tư chất cao nhất.',style:4}
];
export const BOOKS=[
 {id:'basic',name:'Dẫn Khí Quyết',grade:'Phàm phẩm',attack:.04,defense:0,speed:0,training:.1,skill:'Dẫn Khí Trảm',desc:'Dẫn linh khí nhập thể. Tốc độ tu luyện +10%.'},
 {id:'wood',name:'Thanh Mộc Trường Sinh',grade:'Linh phẩm',attack:.08,defense:.08,speed:0,training:.15,skill:'Trường Sinh Hồi Xuân',desc:'Tốc độ tu luyện +15%, thi triển kỹ năng hồi phục.'},
 {id:'sword',name:'Vạn Kiếm Quy Tông',grade:'Linh phẩm',attack:.2,defense:0,speed:.04,training:.12,skill:'Vạn Kiếm Quy Tông',desc:'Công kích +20%, tốc độ tu luyện +12%.'},
 {id:'water',name:'Hàn Sương Tâm Pháp',grade:'Linh phẩm',attack:.1,defense:.12,speed:.08,training:.14,skill:'Hàn Nguyệt Trảm',desc:'Hộ thể và thân pháp, tốc độ tu luyện +14%.'},
 {id:'fire',name:'Liệt Diễm Chân Kinh',grade:'Linh phẩm',attack:.24,defense:0,speed:0,training:.1,skill:'Liệt Diễm Phần Thiên',desc:'Công kích +24%, tốc độ tu luyện +10%.'},
 {id:'earth',name:'Sơn Hà Hộ Thể',grade:'Linh phẩm',attack:.08,defense:.3,speed:0,training:.1,skill:'Sơn Hà Trấn Áp',desc:'Phòng ngự +30%, tốc độ tu luyện +10%.'},
 {id:'wind',name:'Lăng Ba Vô Ảnh',grade:'Huyền phẩm',attack:.18,defense:.12,speed:.15,training:.22,skill:'Vô Ảnh Liên Trảm',desc:'Né tránh +15%, tốc độ tu luyện +22%.'},
 {id:'heaven',name:'Thái Hư Thiên Đạo',grade:'Địa phẩm',attack:.45,defense:.3,speed:.1,training:.45,skill:'Thái Hư Phá Giới',desc:'Công kích +45%, tu luyện +45%. Cơ duyên hiếm trong đại tỷ và bí cảnh.'}
];
export const ARTIFACTS=[
 {id:'woodSword',name:'Mộc Kiếm',grade:'Phàm phẩm',attack:8,defense:0,hp:0,desc:'Thanh kiếm đầu tiên của người nhập đạo.'},
 {id:'windSword',name:'Thanh Phong Kiếm',grade:'Linh phẩm',attack:30,defense:4,hp:50,desc:'Lưỡi kiếm nhẹ, tăng đáng kể công kích.'},
 {id:'jade',name:'Hộ Tâm Linh Ngọc',grade:'Linh phẩm',attack:12,defense:26,hp:160,desc:'Linh ngọc bảo vệ tâm mạch khi tỷ thí.'},
 {id:'seal',name:'Trấn Sơn Ấn',grade:'Huyền phẩm',attack:70,defense:45,hp:260,desc:'Cổ ấn tìm thấy trong di tích và đại tỷ.'},
 {id:'phoenix',name:'Xích Phượng Pháp Châu',grade:'Địa phẩm',attack:150,defense:65,hp:450,desc:'Pháp bảo hiếm, thích hợp cho tu sĩ cảnh giới cao.'}
];
export const SHOP=[
 {id:'pillQi',name:'Tụ Khí Đan',cost:25,kind:'pill',desc:'Nhận 90 điểm tu vi, tự tăng tiểu cảnh khi đủ.'},
 {id:'pillHeal',name:'Hồi Nguyên Đan',cost:20,kind:'pill',desc:'Dùng trước trận: tăng sinh lực và công kích 25% trong một trận.'},
 {id:'pillBreak',name:'Phá Cảnh Đan',cost:100,kind:'pill',desc:'Tiêu hao khi đột phá từ Trúc Cơ lên cảnh giới cao hơn.'},
 {id:'windSword',name:'Thanh Phong Kiếm',cost:90,kind:'artifact',desc:'Công kích +30, phòng ngự +4, sinh lực +50.'},
 {id:'jade',name:'Hộ Tâm Linh Ngọc',cost:120,kind:'artifact',desc:'Phòng ngự +26, sinh lực +160.'},
 {id:'wind',name:'Lăng Ba Vô Ảnh',cost:180,kind:'book',desc:'Học thân pháp và tăng tốc độ tu luyện.'},
 {id:'seal',name:'Trấn Sơn Ấn',cost:400,kind:'artifact',desc:'Pháp bảo Huyền phẩm, dùng cho các thử thách khó.'},
 {id:'heaven',name:'Thái Hư Thiên Đạo',cost:950,kind:'book',desc:'Công pháp cao cấp, dành cho đệ tử có nhiều cống hiến.'}
];
export const MISSIONS=[
 {id:'sweep',name:'Chăm sóc sơn môn',minutes:30,rank:0,contribution:12,stone:20,herb:3,desc:'Quét bậc đá và thắp đèn trước điện chính.'},
 {id:'garden',name:'Chăm nom linh điền',minutes:45,rank:0,contribution:18,stone:25,herb:12,desc:'Tưới linh thảo, phân biệt cây dược liệu.'},
 {id:'deliver',name:'Hộ tống thư tông môn',minutes:60,rank:0,contribution:24,stone:40,herb:0,desc:'Đưa thư đến trạm dịch dưới chân núi.'},
 {id:'patrol',name:'Tuần tra linh mạch',minutes:90,rank:1,contribution:40,stone:65,ore:10,wood:12,desc:'Kiểm tra trận pháp và những dấu chân lạ.'},
 {id:'herbs',name:'Thu thập linh dược',minutes:120,rank:1,contribution:55,stone:70,herb:25,desc:'Đến khe núi tìm linh thảo theo ủy thác.'},
 {id:'guard',name:'Hộ pháp luyện đan',minutes:180,rank:2,contribution:85,stone:110,ore:15,desc:'Hộ pháp, duy trì linh hỏa cho đan sư.'},
 {id:'teaching',name:'Chỉ dẫn hậu bối',minutes:240,rank:3,contribution:120,stone:180,herb:35,desc:'Truyền kinh nghiệm tu luyện cho người mới.'},
 {id:'sectGuard',name:'Bảo vệ tông môn',minutes:300,rank:4,contribution:180,stone:280,ore:35,desc:'Kiểm tra hộ sơn đại trận và bảo vệ đoàn đệ tử.'}
];
export const AREAS=[
 {id:'forest',name:'Trúc Lâm Cốc',realm:1,stage:1,enemy:'Mộc Yêu',style:0,desc:'Linh thảo, công pháp sơ cấp và linh thú trong rừng trúc.'},
 {id:'frost',name:'Hàn Sương Động',realm:1,stage:5,enemy:'Hàn Hồ',style:1,desc:'Cổ động chứa linh khoáng và thân pháp thất truyền.'},
 {id:'flame',name:'Xích Diễm Sơn',realm:2,stage:1,enemy:'Viêm Linh',style:2,desc:'Tìm linh hỏa, pháp bảo và cổ kinh Hỏa hệ.'},
 {id:'temple',name:'Vân Hải Cổ Tự',realm:3,stage:1,enemy:'Thạch Vệ',style:3,desc:'Di tích trên biển mây, nhiều cơ duyên hiếm.'},
 {id:'thunder',name:'Thiên Kiếp Đài',realm:4,stage:1,enemy:'Lôi Long',style:4,desc:'Thử thách cổ xưa dành cho tu sĩ cảnh giới cao.'}
];
const PEOPLE=['Lâm Thanh','Bạch Vân','Tử Nghiên','Hàn Phong','Mộc Thanh','Liễu Tâm','Vân Dao','Tần Dạ'];
const PROMOTION=[{realm:1,stage:1,merit:0},{realm:1,stage:3,merit:35},{realm:1,stage:6,merit:100},{realm:2,stage:1,merit:240},{realm:2,stage:6,merit:500},{realm:3,stage:5,merit:950},{realm:4,stage:1,merit:1700},{realm:5,stage:1,merit:3600}];
const finite=(n,min=0,max=1e12)=>Number.isFinite(n)&&n>=min&&n<=max;
const clamp=(n,a,b)=>Math.max(a,Math.min(b,n));
export function newGame(now=Date.now(),seed=(now>>>0)||12345){return {version:2,claimedMilestones:[],name:'Vân Du',gender:'male',portrait:6,realm:0,stage:1,xp:0,root:null,potential:null,sectId:null,rank:0,path:'mortal',training:false,stone:25,herb:0,ore:0,wood:0,contribution:0,merit:0,reputation:0,karma:0,items:{},learned:[],technique:null,artifact:null,buff:false,gameMinutes:0,lastAt:now,seed:seed>>>0,exam:null,activity:null,battle:null,pendingEvent:null,nextStory:3*DAY,contacts:[],annualYears:[],annualNext:1,tournament:null,completedAnnual:[],cooldowns:{},foundation:null,sectName:'',stats:{missions:0,journeys:0,wins:0,promotions:0,annualWins:0,events:0},log:[{time:0,text:'Một phàm nhân đến dưới chân núi. Tiên đồ đang chờ phía trước.'}],sound:false};}
export function random(s){s.seed=(Math.imul(s.seed,1664525)+1013904223)>>>0;return s.seed/4294967296;}
export function addLog(s,text){s.log.unshift({time:s.gameMinutes,text});s.log=s.log.slice(0,60);}
export function calendar(s){const minutes=Math.floor(s.gameMinutes),day=Math.floor(minutes/DAY),doy=day%365;const lengths=[31,28,31,30,31,30,31,31,30,31,30,31];let month=0,d=doy;while(d>=lengths[month])d-=lengths[month++];return {year:Math.floor(day/365)+1,month:month+1,day:d+1,hour:Math.floor(minutes%DAY/60),minute:minutes%60,age:16+Math.floor(day/365)};}
export function sect(s){return SECTS.find(x=>x.id===s.sectId)||null;}
export function rankName(s){if(s.path==='mortal')return 'Chưa nhập đạo';if(s.path==='founder')return 'Tông chủ';return s.rank===5?(s.gender==='female'?'Thánh nữ':'Thánh tử'):RANKS[s.rank];}
export function realmName(s){return REALMS[s.realm]+(s.realm?' · Tầng '+s.stage:'');}
export function rootName(s){return s.root?s.root.quality+' · '+s.root.elements.join(' / '):'Chưa đo linh căn';}
export function goal(s){return Math.floor(75*(s.realm||1)**2.5*s.stage**1.22);}
export function trainingRate(s){if(!s.realm)return 0;const t=BOOKS.find(x=>x.id===s.technique);const match=sect(s)?.element;const affinity=match&&s.root.elements.includes(match)?1.2:1;return .7*(.65+s.potential/100)*(.7+s.root.purity/150)*(sect(s)?.bonus||1.12)*affinity*(1+(t?.training||0));}
export function gainXP(s,xp){if(!s.realm)return;const old=s.stage;s.xp+=xp;while(s.stage<9&&s.xp>=goal(s)){s.xp-=goal(s);s.stage++;}if(s.stage===9)s.xp=Math.min(s.xp,goal(s));if(old!==s.stage)addLog(s,`Tu vi tiến triển: ${realmName(s)}.`);}
export function measureRoot(s){if(s.root)return s.root;const names=['Kim','Mộc','Thủy','Hỏa','Thổ'],main=names[Math.floor(random(s)*5)];const grade=1+Math.floor(random(s)*5),elements=[main];if(grade<=2)elements.push(names[(names.indexOf(main)+1+Math.floor(random(s)*4))%5]);s.root={elements,grade,purity:40+Math.floor(random(s)*56),quality:['Tạp linh căn','Song linh căn','Chân linh căn','Địa linh căn','Thiên linh căn'][grade-1]};addLog(s,'Trắc linh thạch xác định: '+rootName(s)+'.');return s.root;}
export function measurePotential(s){if(!s.root)return 'Hãy đo linh căn trước.';if(s.potential!==null)return null;s.potential=35+Math.floor(random(s)*61);addLog(s,'Tư chất được xác định: '+s.potential+'/100.');return null;}
export function examScore(s,id){const chosen=SECTS.find(x=>x.id===id);if(!chosen||!s.root||s.potential===null)return 0;return Math.round(s.potential*.7+s.root.purity*.3+(s.root.elements.includes(chosen.element)?12:0));}
export function beginExam(s,id){if(s.path!=='mortal')return 'Bạn đã nhập đạo.';if(!SECTS.some(x=>x.id===id))return 'Tông môn không tồn tại.';s.exam={sectId:id,phase:0,virtue:0};return null;}
export const EXAM_QUESTIONS=[
 {text:'Một thí sinh kiệt sức trên bậc đá. Bạn sẽ làm gì?',choices:['Giúp người đó lên bậc cuối','Tiếp tục, tránh làm hại ai','Chế giễu rồi bỏ đi'],points:[2,1,0]},
 {text:'Trưởng lão hỏi: vì sao ngươi muốn tu tiên?',choices:['Để mạnh lên và bảo vệ điều mình quý trọng','Để hiểu đạo và tìm giới hạn bản thân','Để chiếm hết bảo vật của người khác'],points:[2,2,0]},
 {text:'Ảo trận cho thấy một lối tắt nguy hiểm. Bạn chọn?',choices:['Quan sát trận văn, bước chắc chắn','Giữ bình tĩnh và hỏi người dẫn đường','Nhắm mắt lao vào bất chấp'],points:[2,1,0]}
];
export function examChoice(s,index){if(!s.exam||!s.root||s.potential===null)return {error:'Cần đo linh căn và tư chất.'};if(!Number.isInteger(index)||index<0||index>2)return {error:'Lựa chọn không hợp lệ.'};const q=EXAM_QUESTIONS[s.exam.phase];if(!q)return {error:'Khảo hạch đã kết thúc.'};s.exam.virtue+=q.points[index];s.exam.phase++;if(s.exam.phase<3)return {next:true};const chosen=SECTS.find(x=>x.id===s.exam.sectId),score=examScore(s,chosen.id),virtue=s.exam.virtue;s.exam=null;if(score<chosen.min||virtue<3){addLog(s,`Chưa đạt khảo hạch ${chosen.name}. Linh căn và tư chất đã được lưu.`);return {passed:false,score,virtue,sect:chosen.name};}s.sectId=chosen.id;s.path='member';s.realm=1;s.stage=1;s.rank=0;s.training=true;s.learned=['basic'];s.technique='basic';s.items={woodSword:1,pillQi:1,pillHeal:1};s.artifact='woodSword';s.stone+=100;s.herb+=12;s.karma+=virtue;s.nextStory=s.gameMinutes+3*DAY;addLog(s,`Gia nhập ${chosen.name}, trở thành Tạp dịch. Nhận Dẫn Khí Quyết và Mộc Kiếm.`);return {passed:true,score,virtue,sect:chosen.name};}
function reward(s,r){for(const k of ['stone','herb','ore','wood'])if(r[k])s[k]=Math.min(1e12,s[k]+r[k]);if(r.contribution){s.contribution+=r.contribution;s.merit+=r.contribution;}if(r.xp)gainXP(s,r.xp);}
export function addItem(s,id,n=1){s.items[id]=(s.items[id]||0)+n;}
export function activityStart(s,type,id){if(s.path==='mortal')return 'Cần nhập tông môn trước.';if(s.activity)return 'Bạn đang có một hoạt động chưa hoàn thành.';if(s.battle?.status==='fighting')return 'Hãy hoàn thành trận đấu trước.';let minutes,name;
 if(type==='mission'){const m=MISSIONS.find(x=>x.id===id);if(!m||s.rank<m.rank&&s.path!=='founder')return 'Chức danh chưa đủ để nhận nhiệm vụ.';minutes=m.minutes;name=m.name;}
 else if(type==='travel'){minutes=90;name='Lịch luyện dưới núi';}
 else if(type==='exchange'){if(s.rank<1&&s.path!=='founder')return 'Ngoại môn trở lên mới được cử đi giao lưu.';if((s.cooldowns.exchange||0)>s.gameMinutes)return 'Chưa đến lượt giao lưu tiếp theo.';if(s.stone<30)return 'Cần 30 linh thạch làm lộ phí.';s.stone-=30;minutes=240;name='Giao lưu các tông môn';}
 else return 'Hoạt động không hợp lệ.';
 s.activity={type,id,name,started:s.gameMinutes,finish:s.gameMinutes+minutes};addLog(s,'Bắt đầu '+name+' ('+minutes+' phút trong game).');return null;
}
function meet(s,hostile=false){const i=Math.floor(random(s)*PEOPLE.length),id='npc'+i;let p=s.contacts.find(x=>x.id===id);if(!p){p={id,name:PEOPLE[i],portrait:i%6,affinity:0,visits:0};s.contacts.push(p);}p.affinity=clamp(p.affinity+(hostile?-25:20),-100,100);return p;}
function drop(s,quality=0){const roll=random(s);let id;if(roll<.25)id='pillQi';else if(roll<.45)id='pillHeal';else if(roll<.6)id='pillBreak';else if(roll<.76)id=['wood','sword','water','fire','earth'][Math.floor(random(s)*5)];else if(roll<.92)id=quality>=2?'seal':'windSword';else id=quality>=3?'phoenix':'wind';addItem(s,id);return id;}
function finishActivity(s){const a=s.activity;if(!a||a.finish>s.gameMinutes)return null;s.activity=null;let r,loot=null,friend=null;if(a.type==='mission'){const m=MISSIONS.find(x=>x.id===a.id);r={...m,xp:15+m.rank*12};s.stats.missions++;if(random(s)<.15)loot=drop(s,s.realm);}
 else if(a.type==='travel'){r={stone:35+s.realm*12,herb:10+s.realm*4,wood:10+s.realm*5,xp:20+s.realm*10};s.stats.journeys++;loot=drop(s,s.realm);friend=meet(s,random(s)<.25);}
 else {r={stone:50,contribution:55,xp:35};loot=drop(s,s.realm);friend=meet(s,false);s.cooldowns.exchange=s.gameMinutes+DAY;}
 reward(s,r);addLog(s,`${a.name} hoàn thành. ${r.contribution?'+'+r.contribution+' cống hiến. ':''}${loot?'Nhặt được '+itemName(loot)+'. ':''}${friend?'Gặp '+friend.name+' ('+(friend.affinity<0?'nảy sinh hiềm khích':'kết giao')+').':''}`);return {name:a.name,reward:r,loot,friend};}
export const STORIES={
 quarrel:{name:'Xích mích với đồng môn',text:'Một đồng môn trách bạn lấy mất phần linh thảo của họ. Người ấy đang đứng trước cửa phòng.',options:['Giải thích và chia sẻ linh thảo','Nhờ chấp sự phân xử','Tỷ thí để giải quyết']},
 traveler:{name:'Người bạn dưới chân núi',text:'Một tu sĩ bị thương nhờ bạn giúp đỡ. Trên áo người ấy có phù hiệu của tông môn khác.',options:['Giúp bằng 5 linh thảo','Trò chuyện và chỉ đường về sơn môn','Lấy túi đồ của người ấy rồi bỏ đi']},
 relic:{name:'Cổ thư trong vách đá',text:'Trong một khe đá, bạn phát hiện hộp cổ có trận văn mờ nhạt. Linh khí đang dao động.',options:['Từ tốn giải trận để lấy cổ thư','Ghi nhớ vị trí, báo lại tông môn','Phá hộp để đoạt bảo vật']},
 rival:{name:'Kẻ thù tìm đến cửa',text:'Một người từng xích mích với bạn đã tìm đến sơn môn, công khai yêu cầu tỷ thí.',options:['Ra đối mặt và tỷ thí','Nhờ trưởng lão bảo vệ · 80 cống hiến','Đàm phán · 100 linh thạch']},
 friend:{name:'Hữu duyên đồng hành',text:'Người bạn cũ mang theo tin về một di tích và mời bạn trao đổi kinh nghiệm tu luyện.',options:['Cùng luận đạo','Tặng 25 linh thạch để kết thân','Hẹn lần khác, giữ mối giao tình']}
};
function createStory(s){const enemies=s.contacts.filter(x=>x.affinity<=-20),friends=s.contacts.filter(x=>x.affinity>=30);let id;if(enemies.length&&random(s)<.6)id='rival';else if(friends.length&&random(s)<.3)id='friend';else id=['quarrel','traveler','relic'][Math.floor(random(s)*3)];const npc=id==='rival'?enemies[0]:id==='friend'?friends[0]:null;s.pendingEvent={id,personId:npc?.id||null,at:s.gameMinutes};addLog(s,'Cốt truyện mới: '+STORIES[id].name+'.');}
export function advance(s,now=Date.now()){const seconds=Math.max(0,(now-s.lastAt)/1000);if(!seconds)return {seconds:0,changed:false,activity:null};const oldStage=s.stage,oldAnnual=s.annualYears.length,oldEvent=!!s.pendingEvent,oldMinute=s.gameMinutes;s.gameMinutes=Math.min(1e12,s.gameMinutes+seconds);s.lastAt=Math.max(now,s.lastAt);
 if(s.training&&s.realm){const active=s.activity?Math.max(0,Math.min(seconds,s.activity.finish-oldMinute)):0;const factor=s.battle?.status==='fighting'?.25:1;gainXP(s,trainingRate(s)*(seconds-active*.65)*factor);}
 const activity=finishActivity(s);
 const completedYear=Math.floor(s.gameMinutes/YEAR);if(s.path!=='mortal'&&completedYear>=s.annualNext){const start=Math.max(s.annualNext,completedYear-2);for(let y=start;y<=completedYear;y++)if(!s.annualYears.includes(y)&&!s.completedAnnual.includes(y))s.annualYears.push(y);s.annualYears=s.annualYears.slice(-3);if(s.tournament&&!s.annualYears.includes(s.tournament.year))s.annualYears=[s.tournament.year,...s.annualYears.slice(-2)];s.annualNext=completedYear+1;addLog(s,`Đại tỷ tông môn năm ${completedYear} đã khai hội. Có thể tham dự trong Hoạt động.`);}
 if(s.path==='mortal')s.annualNext=completedYear+1;
 if(s.path!=='mortal'&&!s.pendingEvent&&s.gameMinutes>=s.nextStory){createStory(s);s.nextStory=s.gameMinutes+(3+Math.floor(random(s)*5))*DAY;}
 if(s.foundation)Legacy.tick(s.foundation,now);
 return {seconds,activity,changed:oldStage!==s.stage||oldAnnual!==s.annualYears.length||oldEvent!==!!s.pendingEvent||!!activity};
}
export function buy(s,id){const item=SHOP.find(x=>x.id===id);if(!item)return 'Mặt hàng không tồn tại.';if(s.path==='mortal')return 'Bạn chưa có quyền đổi đồ tông môn.';if(s.contribution<item.cost)return 'Chưa đủ điểm cống hiến.';s.contribution-=item.cost;addItem(s,id);addLog(s,'Đổi '+item.name+' bằng '+item.cost+' cống hiến.');return null;}
export function itemName(id){return BOOKS.find(x=>x.id===id)?.name||ARTIFACTS.find(x=>x.id===id)?.name||SHOP.find(x=>x.id===id)?.name||id;}
export function learn(s,id){if(!BOOKS.some(x=>x.id===id)||!s.items[id])return 'Bạn chưa có công pháp này.';if(s.learned.includes(id))return 'Công pháp đã học.';s.items[id]--;s.learned.push(id);s.technique=id;addLog(s,'Lĩnh ngộ '+itemName(id)+'.');return null;}
export function equip(s,id){if(BOOKS.some(x=>x.id===id)){if(!s.learned.includes(id))return 'Công pháp chưa được lĩnh ngộ.';s.technique=id;}else if(ARTIFACTS.some(x=>x.id===id)&&s.items[id])s.artifact=id;else return 'Bạn chưa sở hữu pháp bảo này.';return null;}
export function use(s,id){if(!s.items[id])return 'Không có đan dược này.';if(!s.realm)return 'Cần nhập đạo trước.';if(id==='pillBreak')return 'Phá Cảnh Đan tự tiêu hao khi đột phá.';if(id==='pillHeal'&&s.buff)return 'Hồi Nguyên Đan đang có hiệu lực.';if(id!=='pillQi'&&id!=='pillHeal')return 'Vật phẩm không dùng theo cách này.';s.items[id]--;if(id==='pillQi')gainXP(s,90);else s.buff=true;return null;}
export function breakthroughCost(s){return {stone:120*s.realm**2,herb:15*s.realm,pills:s.realm>=2?1:0};}
export function breakthrough(s){if(s.activity||s.battle?.status==='fighting')return 'Hãy hoàn thành hoạt động hoặc tỷ thí trước khi đột phá.';if(!s.realm)return 'Bạn cần nhập tông môn và học dẫn khí trước.';if(s.realm>=9)return 'Đã đạt cảnh giới cao nhất.';if(s.stage<9||s.xp<goal(s))return 'Cần đạt tầng 9 và tích lũy đủ tu vi.';const c=breakthroughCost(s);if(s.stone<c.stone||s.herb<c.herb)return 'Chưa đủ linh thạch hoặc linh thảo.';if(c.pills&&!(s.items.pillBreak>=c.pills))return 'Cần Phá Cảnh Đan. Có thể đổi bằng cống hiến.';s.stone-=c.stone;s.herb-=c.herb;if(c.pills)s.items.pillBreak--;s.realm++;s.stage=1;s.xp=0;addLog(s,'Đột phá thành công: '+realmName(s)+'.');return null;}
export function meditate(s,now=Date.now()){if(!s.realm)return 'Bạn còn là phàm nhân. Hãy nhập tông môn trước.';if(now-(s.lastFocus||0)<900)return 'Hãy giữ nhịp thở, đừng vội.';s.lastFocus=now;gainXP(s,3+s.realm);return null;}
export function promotionRequirement(s){return PROMOTION[Math.min(7,s.rank+1)];}
export function eligible(s,req){return s.realm>req.realm||(s.realm===req.realm&&s.stage>=req.stage);}
export function stats(s){const n=s.realm?10*s.realm+s.stage:0,t=BOOKS.find(x=>x.id===s.technique),a=ARTIFACTS.find(x=>x.id===s.artifact);const friends=Math.min(3,s.contacts.filter(x=>x.affinity>=40).length);const buff=s.buff?1.25:1;return {maxHp:Math.round((140+n*24+(a?.hp||0))*buff),atk:Math.round((14+n*5+(a?.attack||0))*(1+(t?.attack||0)+friends*.04)*buff),def:Math.round((4+n*2+(a?.defense||0))*(1+(t?.defense||0))),dodge:t?.speed||0,skill:t?.skill||'Phàm Nhân Quyền'};}
export function power(s){const p=stats(s);return Math.round(p.maxHp*.4+p.atk*4+p.def*2);}
export function startBattle(s,type,id){if(s.path==='mortal')return {error:'Hãy vượt khảo hạch để nhập đạo trước.'};if(s.activity)return {error:'Hãy hoàn thành hoạt động hiện tại trước.'};if(s.battle?.status==='fighting')return {error:'Đang có một trận đấu.'};let enemy,target=id,scale=1,cost=0;
 if(type==='dungeon'){const a=AREAS.find(x=>x.id===id);if(!a||!eligible(s,{realm:a.realm,stage:a.stage}))return {error:'Cảnh giới chưa đủ để vào bí cảnh.'};const i=AREAS.indexOf(a);enemy={name:a.enemy,hp:330+i*420,atk:40+i*53,def:10+i*17,portrait:7,monster:true};}
 else if(type==='promotion'){if(s.path!=='member'||s.rank>=7)return {error:'Hiện không thể thăng chức theo nhánh này.'};const req=promotionRequirement(s);if(!eligible(s,req))return {error:'Tu vi chưa đạt yêu cầu của chức danh tiếp theo.'};if(s.merit<req.merit)return {error:'Tổng cống hiến chưa đạt yêu cầu.'};if((s.cooldowns.promotion||0)>s.gameMinutes)return {error:'Cần nghỉ ngơi trước khi tỷ thí lại.'};cost=20*(s.rank+1);if(s.contribution<cost)return {error:'Cần '+cost+' cống hiến để đăng ký tỷ thí.'};target=s.rank+1;enemy={name:target>=6?'Trưởng lão khảo hạch':'Đồng môn · '+RANKS[target],hp:270+target*260,atk:35+target*33,def:8+target*13,portrait:target%6,monster:false};}
 else if(type==='annual'){if(!s.annualYears.length&&!s.tournament)return {error:'Đại tỷ diễn ra sau mỗi năm trong game.'};if(!s.tournament)s.tournament={year:s.annualYears[0],round:0};target=s.tournament.year;scale=1+s.tournament.round*.2;const level=s.realm*10+Math.min(s.stage,5);enemy={name:['Đồng môn vòng sơ tuyển','Tinh anh tông môn','Thiên tài chung kết'][s.tournament.round],hp:Math.round((180+level*18)*scale),atk:Math.round((16+level*3.1)*scale),def:Math.round((5+level*1.3)*scale),portrait:s.tournament.round+1,monster:false};}
 else if(type==='event'){if(!s.pendingEvent)return {error:'Sự kiện đã kết thúc.'};const p=s.contacts.find(x=>x.id===s.pendingEvent.personId);enemy={name:p?.name||'Đồng môn bất bình',hp:Math.round(stats(s).maxHp*.9),atk:Math.round(stats(s).atk*.85),def:Math.round(stats(s).def*.8),portrait:p?.portrait||1,monster:false};target=s.pendingEvent.id;}
 else return {error:'Trận đấu không hợp lệ.'};
 if(cost)s.contribution-=cost;const p=stats(s);s.battle={type,target,tournamentRound:type==='annual'?s.tournament.round:null,sectId:s.sectId,status:'fighting',round:0,turn:0,settled:false,hero:{...p,technique:s.technique,hp:p.maxHp,name:s.name,portrait:s.portrait,energy:0},enemy:{...enemy,maxHp:enemy.hp,energy:0},events:[],result:null};s.buff=false;return {battle:s.battle};}
export function battleStep(s){const b=s.battle;if(!b||b.status!=='fighting')return null;const heroTurn=b.turn%2===0,actor=heroTurn?b.hero:b.enemy,target=heroTurn?b.enemy:b.hero;actor.energy++;let event;const skill=actor.energy>=3;if(skill)actor.energy=0;
 if(heroTurn&&skill&&b.hero.technique==='wood'&&actor.hp<actor.maxHp*.8){const amount=Math.min(actor.maxHp-actor.hp,Math.round(actor.atk*1.9));actor.hp+=amount;event={hero:true,heal:true,amount,text:s.name+' thi triển Trường Sinh Hồi Xuân, hồi '+amount+' sinh lực.'};}
 else {const dodge=!heroTurn&&random(s)<(b.hero.dodge||0);const critical=random(s)<.12;const amount=dodge?0:Math.max(5,Math.round((actor.atk*(skill?1.75:1)-target.def*.45)*(critical?1.5:1)*(.9+random(s)*.2)));target.hp=Math.max(0,target.hp-amount);event={hero:heroTurn,heal:false,skill,critical,amount,text:actor.name+(dodge?' bị né tránh.':(skill?' thi triển '+(heroTurn?b.hero.skill:'Linh Lực Trảm'):' tấn công')+', gây '+amount+' sát thương.')};}
 b.turn++;b.round=Math.ceil(b.turn/2);b.events.unshift(event);b.events=b.events.slice(0,7);if(b.enemy.hp<=0)b.status='won';else if(b.hero.hp<=0||b.turn>=160)b.status='lost';if(b.status!=='fighting')settleBattle(s);return event;
}
export function settleBattle(s){const b=s.battle;if(!b||b.status==='fighting'||b.settled)return null;b.settled=true;const won=b.status==='won';let r={},loot=null;if(won)s.stats.wins++;
 if(b.type==='dungeon'&&won){const i=AREAS.findIndex(x=>x.id===b.target);r={stone:90+i*75,herb:15+i*7,ore:8+i*9,xp:35+i*20};loot=drop(s,i+1);}
 if(b.type==='promotion'){s.cooldowns.promotion=s.gameMinutes+(won?0:60);if(won&&s.path==='member'&&s.sectId===b.sectId&&b.target===s.rank+1){s.rank=b.target;s.stats.promotions++;r={stone:100+s.rank*50,contribution:35+s.rank*15};if(s.rank===1&&sect(s))addItem(s,sect(s).book);addLog(s,'Thăng chức: '+rankName(s)+'.');}}
 if(b.type==='annual'&&s.tournament){if(won){s.tournament.round++;r={stone:120,contribution:60};if(s.tournament.round>=3){s.stats.annualWins++;r={stone:500,contribution:300};loot=s.realm>=3?'heaven':'wind';addItem(s,loot);s.completedAnnual.push(s.tournament.year);s.annualYears=s.annualYears.filter(x=>x!==s.tournament.year);s.tournament=null;}}else{s.completedAnnual.push(s.tournament.year);s.annualYears=s.annualYears.filter(x=>x!==s.tournament.year);s.tournament=null;r={contribution:20};}s.completedAnnual=s.completedAnnual.slice(-20);}
 if(b.type==='event'&&s.pendingEvent){if(won){r={contribution:45,stone:50};s.reputation+=5;const p=s.contacts.find(x=>x.id===s.pendingEvent.personId);if(p)p.affinity=clamp(p.affinity-5,-100,100);}else s.reputation-=2;s.pendingEvent=null;s.stats.events++;}
 reward(s,r);b.result={won,reward:r,loot};addLog(s,(won?'Chiến thắng':'Tạm lui dưỡng sức')+' trước '+b.enemy.name+'.'+(loot?' Thu được '+itemName(loot)+'.':''));return b.result;
}
export function resolveEvent(s,index){const e=s.pendingEvent;if(!e||!STORIES[e.id]||!Number.isInteger(index)||index<0||index>2)return {error:'Sự kiện hoặc lựa chọn không hợp lệ.'};if((e.id==='rival'&&index===0)||(e.id==='quarrel'&&index===2))return startBattle(s,'event',e.id);
 if(e.id==='rival'){if(index===1){if(s.contribution<80)return {error:'Cần 80 cống hiến.'};s.contribution-=80;s.reputation++;}else{if(s.stone<100)return {error:'Cần 100 linh thạch.'};s.stone-=100;const p=s.contacts.find(x=>x.id===e.personId);if(p)p.affinity=clamp(p.affinity+30,-100,100);}}
 if(e.id==='quarrel'){if(index===0){if(s.herb<5)return {error:'Cần 5 linh thảo để chia sẻ.'};s.herb-=5;s.karma+=3;meet(s,false);}else{s.reputation+=2;reward(s,{contribution:12});}}
 if(e.id==='traveler'){if(index===0){if(s.herb<5)return {error:'Cần 5 linh thảo.'};s.herb-=5;s.karma+=5;meet(s,false);reward(s,{contribution:25});}else if(index===1){meet(s,false);s.karma++;}else{s.karma-=8;s.reputation-=4;reward(s,{stone:90});meet(s,true);}}
 if(e.id==='relic'){if(index===0){addItem(s,random(s)<.7?'wind':'heaven');gainXP(s,50);}else if(index===1)reward(s,{contribution:65,stone:60});else{s.karma-=3;addItem(s,'seal');meet(s,true);}}
 if(e.id==='friend'){const p=s.contacts.find(x=>x.id===e.personId);if(index===1){if(s.stone<25)return {error:'Cần 25 linh thạch.'};s.stone-=25;if(p)p.affinity=clamp(p.affinity+20,-100,100);}else if(index===0){gainXP(s,75);if(p)p.affinity=clamp(p.affinity+10,-100,100);}}
 s.pendingEvent=null;s.stats.events++;addLog(s,STORIES[e.id].name+' đã khép lại. Lựa chọn của bạn để lại dấu ấn.');return {resolved:true};}
export function visit(s,id){const p=s.contacts.find(x=>x.id===id);if(!p)return 'Chưa có nhân vật này trong quan hệ.';if((s.cooldowns[id]||0)>s.gameMinutes)return 'Hãy đợi một ngày trong game để thăm lại.';if(s.stone<25)return 'Cần 25 linh thạch làm quà.';s.stone-=25;p.affinity=clamp(p.affinity+15,-100,100);p.visits++;s.cooldowns[id]=s.gameMinutes+DAY;addLog(s,'Thăm '+p.name+', tăng 15 thiện cảm.');return null;}
export function relationship(p){return p.affinity>=40?'Bạn hữu':p.affinity<=-20?'Kẻ thù':'Người quen';}
export function foundSect(s,name,now=Date.now()){if(s.path!=='member')return 'Bạn chưa thể khai tông theo nhánh này.';if(s.realm<4)return 'Cần đạt Nguyên Anh để rời tông môn và khai sơn.';if(s.activity||s.battle?.status==='fighting')return 'Hãy hoàn thành hoạt động hoặc trận đấu trước.';name=String(name).trim();if(name.length<2||name.length>28)return 'Tên tông môn cần từ 2 đến 28 ký tự.';if(s.stone<3000||s.wood<120||s.ore<80)return 'Cần 3.000 linh thạch, 120 linh mộc và 80 linh khoáng.';s.stone-=3000;s.wood-=120;s.ore-=80;s.path='founder';s.sectName=name;s.foundation=Legacy.newGame(now);s.foundation.sound=false;addLog(s,'Rời '+sect(s).name+', khai sơn lập phái: '+name+'. Ba đồng đạo đầu tiên đến giúp sức.');return null;}
export function foundationAction(s,action,id,job){if(!s.foundation||s.path!=='founder')return 'Bạn chưa có tông môn riêng.';if(action==='upgrade')return Legacy.upgrade(s.foundation,id);if(action==='recruit'){const r=Legacy.recruit(s.foundation,()=>random(s));return r.error||null;}if(action==='assign')return Legacy.assign(s.foundation,Number(id),job);return 'Hành động không hợp lệ.';}
export function craft(s,id){if(!['pillQi','pillHeal','pillBreak'].includes(id)||!s.realm)return 'Chưa thể luyện đan này.';const c=id==='pillBreak'?{stone:180,herb:60,ore:20}:id==='pillHeal'?{stone:30,herb:15,ore:0}:{stone:45,herb:20,ore:0};if(s.stone<c.stone||s.herb<c.herb||s.ore<c.ore)return 'Chưa đủ nguyên liệu.';for(const k of Object.keys(c))s[k]-=c[k];addItem(s,id);addLog(s,'Luyện thành '+itemName(id)+'.');return null;}
export function validSave(s){try{return validateSave(s);}catch{return false;}}
function validateSave(s){
 if(s?.claimedMilestones!==undefined&&(!Array.isArray(s.claimedMilestones)||s.claimedMilestones.length>MILESTONE_IDS.length||new Set(s.claimedMilestones).size!==s.claimedMilestones.length||!s.claimedMilestones.every(id=>MILESTONE_IDS.includes(id))))return false;
 if(!s||s.version!==2||typeof s.name!=='string'||s.name.length<1||s.name.length>28||!['male','female'].includes(s.gender)||!Number.isInteger(s.portrait)||s.portrait<0||s.portrait>6)return false;
 if(!Number.isInteger(s.realm)||s.realm<0||s.realm>9||!Number.isInteger(s.stage)||s.stage<1||s.stage>9||!Number.isInteger(s.rank)||s.rank<0||s.rank>7)return false;
 if(!['mortal','member','founder'].includes(s.path)||typeof s.training!=='boolean'||typeof s.sound!=='boolean'||typeof s.buff!=='boolean')return false;
 if(!['xp','stone','herb','ore','wood','contribution','merit','gameMinutes','nextStory'].every(k=>finite(s[k]))||!finite(s.lastAt,0,Number.MAX_SAFE_INTEGER)||!Number.isInteger(s.annualNext)||!finite(s.annualNext,1))return false;
 if(!finite(s.reputation,-100000,100000)||!finite(s.karma,-100000,100000)||!Number.isInteger(s.seed)||!finite(s.seed,0,4294967295))return false;
 if(s.root!==null&&(!s.root||!Array.isArray(s.root.elements)||s.root.elements.length<1||s.root.elements.length>2||!s.root.elements.every(x=>['Kim','Mộc','Thủy','Hỏa','Thổ'].includes(x))||!Number.isInteger(s.root.grade)||s.root.grade<1||s.root.grade>5||!finite(s.root.purity,1,100)||typeof s.root.quality!=='string'||s.root.quality.length>30))return false;
 if(s.potential!==null&&!finite(s.potential,0,100))return false;
 if(s.path!=='mortal'&&(!s.root||s.potential===null||s.realm===0||!SECTS.some(x=>x.id===s.sectId)))return false;
 if(s.path==='mortal'&&(s.realm!==0||s.sectId!==null))return false;
 if(!s.items||Array.isArray(s.items)||!Object.entries(s.items).every(([id,n])=>[...BOOKS,...ARTIFACTS,...SHOP].some(x=>x.id===id)&&Number.isInteger(n)&&finite(n)))return false;
 if(!Array.isArray(s.learned)||s.learned.length>BOOKS.length||new Set(s.learned).size!==s.learned.length||!s.learned.every(id=>BOOKS.some(x=>x.id===id))||s.technique!==null&&!s.learned.includes(s.technique)||s.artifact!==null&&!ARTIFACTS.some(x=>x.id===s.artifact&&s.items[x.id]>=1))return false;
 if(!Array.isArray(s.contacts)||new Set(s.contacts.map(p=>p.id)).size!==s.contacts.length||s.contacts.length>PEOPLE.length||!s.contacts.every(p=>typeof p.id==='string'&&/^npc[0-7]$/.test(p.id)&&typeof p.name==='string'&&p.name.length<=30&&finite(p.affinity,-100,100)&&Number.isInteger(p.portrait)&&p.portrait>=0&&p.portrait<6&&finite(p.visits)))return false;
 if(!Array.isArray(s.annualYears)||new Set(s.annualYears).size!==s.annualYears.length||s.annualYears.some(y=>s.completedAnnual.includes(y))||s.annualYears.length>3||!s.annualYears.every(y=>Number.isInteger(y)&&y>0&&y<=Math.floor(s.gameMinutes/YEAR))||!Array.isArray(s.completedAnnual)||s.completedAnnual.length>20||!s.completedAnnual.every(y=>Number.isInteger(y)&&y>0))return false;
 if(!s.cooldowns||!Object.values(s.cooldowns).every(n=>finite(n))||!s.stats||!['missions','journeys','wins','promotions','annualWins','events'].every(k=>finite(s.stats[k])))return false;
 if(!Array.isArray(s.log)||s.log.length>60||!s.log.every(x=>typeof x.text==='string'&&x.text.length<=600&&finite(x.time)))return false;
 if(s.exam!==null&&(!SECTS.some(x=>x.id===s.exam.sectId)||!Number.isInteger(s.exam.phase)||s.exam.phase<0||s.exam.phase>2||!finite(s.exam.virtue,0,6)))return false;
 if(s.activity!==null&&(!['mission','travel','exchange'].includes(s.activity.type)||typeof s.activity.name!=='string'||s.activity.name.length>50||!finite(s.activity.started)||!finite(s.activity.finish)||s.activity.finish<s.activity.started||s.activity.type==='mission'&&!MISSIONS.some(x=>x.id===s.activity.id)))return false;
 if(s.pendingEvent!==null&&(!Object.hasOwn(STORIES,s.pendingEvent.id)||!finite(s.pendingEvent.at)||s.pendingEvent.personId!==null&&!s.contacts.some(x=>x.id===s.pendingEvent.personId)))return false;
 if(s.tournament!==null&&(!s.annualYears.includes(s.tournament.year)||!Number.isInteger(s.tournament.round)||s.tournament.round<0||s.tournament.round>2))return false;
 if(s.path==='founder'&&(!s.foundation||!Legacy.validSave(s.foundation)||typeof s.sectName!=='string'||s.sectName.length<2||s.sectName.length>28))return false;
 if(s.foundation!==null&&!Legacy.validSave(s.foundation))return false;
 if(s.battle!==null){const b=s.battle;if(!BOOKS.some(t=>t.id===b.hero?.technique)||typeof b.hero?.skill!=='string'||b.hero.skill.length>60||!finite(b.hero?.dodge,0,1)||b.type==='annual'&&b.tournamentRound!==undefined&&(!Number.isInteger(b.tournamentRound)||b.tournamentRound<0||b.tournamentRound>2)||b.type==='annual'&&b.status==='fighting'&&(!s.tournament||s.tournament.year!==b.target)||b.status==='fighting'&&b.settled)return false;if(!['dungeon','promotion','annual','event'].includes(b.type)||!['fighting','won','lost'].includes(b.status)||typeof b.settled!=='boolean'||!Number.isInteger(b.turn)||b.turn<0||b.turn>160||!finite(b.round,0,80)||!Array.isArray(b.events)||b.events.length>7)return false;for(const f of [b.hero,b.enemy])if(!f||typeof f.name!=='string'||f.name.length>60||!finite(f.hp)||!finite(f.maxHp,1)||f.hp>f.maxHp||!finite(f.atk,1)||!finite(f.def)||!finite(f.energy,0,3)||!Number.isInteger(f.portrait)||f.portrait<0||f.portrait>7)return false;if(b.type==='dungeon'&&!AREAS.some(x=>x.id===b.target)||b.type==='promotion'&&(!Number.isInteger(b.target)||b.target<1||b.target>7)||b.type==='event'&&!Object.hasOwn(STORIES,b.target)||b.type==='annual'&&(!Number.isInteger(b.target)||b.target<1))return false;}
 return true;
}
export function restore(raw,now=Date.now()){let s;try{s=JSON.parse(raw);}catch{}if(!validSave(s))return {state:newGame(now),offline:null,recovered:!!raw};s=JSON.parse(JSON.stringify(s));s.claimedMilestones||=[];if(s.battle?.type==='annual'&&s.battle.tournamentRound===undefined)s.battle.tournamentRound=clamp(s.tournament?s.tournament.round-(s.battle.status==='won'?1:0):s.battle.status==='won'?2:0,0,2);const before={stage:s.stage,xp:s.xp,minutes:s.gameMinutes},result=advance(s,now);return {state:s,offline:result.seconds>=30?{seconds:result.seconds,minutes:s.gameMinutes-before.minutes,activity:result.activity,stage:s.stage-before.stage}:null,recovered:false};}
export function preview(scenario='mortal',now=Date.now(),realmOverride=null){const s=newGame(now,12445);if(scenario==='mortal'&&realmOverride===null||realmOverride===0)return s;measureRoot(s);measurePotential(s);beginExam(s,'cloud');for(let i=0;i<3;i++)examChoice(s,0);s.stone=600;s.herb=100;s.ore=90;s.wood=130;s.contribution=200;s.merit=260;s.stage=3;
 if(scenario==='elite'||scenario==='founder'){s.realm=4;s.stage=3;s.rank=5;s.stone=5000;s.contribution=2400;s.merit=3800;s.items.pillBreak=3;s.items.seal=1;s.artifact='seal';s.learned.push('heaven');s.technique='heaven';s.contacts=[{id:'npc1',name:'Bạch Vân',portrait:1,affinity:50,visits:0},{id:'npc3',name:'Hàn Phong',portrait:3,affinity:-40,visits:0}];s.gameMinutes=YEAR+30;s.annualYears=[1];s.annualNext=2;}
 if(Number.isInteger(realmOverride)&&realmOverride>0&&realmOverride<=9){s.realm=realmOverride;s.stage=3;s.xp=0;}
 if(scenario==='breakthrough'){s.realm=1;s.stage=9;s.xp=goal(s);s.stone=1500;s.herb=100;s.items.pillBreak=2;}
 if(scenario==='founder')foundSect(s,'Vân Hải Tông',now);return s;}
