import * as G from './journey.js?v=2.3.0';
export const VISUALS=[
 ['Tĩnh tâm nơi sơn môn','#c8b887','Sơ tâm chưa nhiễm bụi trần',0],
 ['Dẫn khí nhập thể','#b6c7a5','Trúc xanh đón gió · Nhất tâm nhập đạo',2],
 ['Đạo cơ vững bền','#b3c4ce','Sơn tuyền thanh tĩnh · Căn cơ bền vững',3],
 ['Kim đan viên mãn','#debf82','Thu quang dưỡng khí · Kim đan kết tụ',4],
 ['Nguyên anh thức tỉnh','#c4aec6','Hồ lặng chiều buông · Nguyên anh thức tỉnh',5],
 ['Thần thức thông thiên','#c4d1d7','Tuyết phủ sơn đài · Thần thức thông thiên',6],
 ['Hư không vấn đạo','#afb9d0','Đêm tĩnh bên vực · Vấn đạo hư không',7],
 ['Thiên nhân hợp nhất','#c7d1ae','Tùng già hoa nở · Thiên nhân hợp nhất',8],
 ['Đại đạo viên thành','#e0c694','Bình minh trên mây · Đại đạo viên thành',9],
 ['Vượt kiếp phi thăng','#bac4d5','Sơn lôi trước mắt · Nhất niệm vượt kiếp',10]
].map(([title,color,description,particles],realm)=>({realm,name:G.REALMS[realm],title,color,description,particles,image:`assets/retreat/realm-${realm}.webp?v=2.2.0`,mobile:`assets/retreat/realm-${realm}-mobile.webp?v=2.2.0`}));
export function visual(realm){return VISUALS[Number.isInteger(realm)&&realm>=0&&realm<VISUALS.length?realm:0];}
export function effectiveRate(s){if(!s.training||!s.realm||s.stage===9&&s.xp>=G.goal(s))return 0;return G.trainingRate(s)*(s.activity?.35:1)*(s.battle?.status==='fighting'?.25:1);}
export function cultivation(s){const rate=effectiveRate(s),full=s.realm&&s.stage===9&&s.xp>=G.goal(s);return {rate,full,mode:s.path==='mortal'?'Tĩnh tâm':full?(s.realm===9?'Độ Kiếp viên mãn':'Chờ đột phá'):s.battle?.status==='fighting'?'Đang tỷ thí':s.activity?'Tu luyện 35% tốc độ':s.training?'Đang bế quan':'Tạm nghỉ',seconds:rate?Math.max(0,(G.goal(s)-s.xp)/rate):null,next:s.stage<9?`${G.REALMS[s.realm]} tầng ${s.stage+1}`:s.realm<9?G.REALMS[s.realm+1]:'Cảnh giới viên mãn'};}
export function breakthroughStatus(s){const cost=G.breakthroughCost(s),checks=[
 {label:'Đã nhập đạo',ok:s.realm>0}, {label:'Cảnh giới có thể đột phá',ok:s.realm<9},
 {label:'Tầng 9 đầy tu vi',ok:s.stage===9&&s.xp>=G.goal(s)},
 {label:`${cost.stone.toLocaleString('vi-VN')} linh thạch`,ok:s.stone>=cost.stone},
 {label:`${cost.herb} linh thảo`,ok:s.herb>=cost.herb},
 ...(cost.pills?[{label:'Một Phá Cảnh Đan',ok:(s.items.pillBreak||0)>=cost.pills}]:[]),
 {label:'Không bận hoạt động hoặc tỷ thí',ok:!s.activity&&s.battle?.status!=='fighting'}];return {cost,checks,ready:checks.every(x=>x.ok),reason:s.realm>=9?'Đã đạt đại cảnh giới cuối':checks.find(x=>!x.ok)?.label||'Đã đủ điều kiện'};}
export function promotionStatus(s){const req=G.promotionRequirement(s),fee=20*(s.rank+1),next=s.rank===4&&s.gender==='female'?'Thánh nữ':G.RANKS[Math.min(7,s.rank+1)];const checks=[
 {label:s.path==='founder'?'Đã đi theo nhánh Tông chủ':'Đệ tử của tông môn',ok:s.path==='member'},
 {label:'Còn chức danh tiếp theo',ok:s.rank<7},
 {label:`${G.REALMS[req.realm]} tầng ${req.stage}`,ok:G.eligible(s,req)},
 {label:`Tổng cống hiến ${req.merit}`,ok:s.merit>=req.merit},
 {label:`Lệ phí ${fee} cống hiến`,ok:s.contribution>=fee},
 {label:'Đã nghỉ đủ sau lần tỷ thí trước',ok:(s.cooldowns.promotion||0)<=s.gameMinutes},
 {label:'Không bận hoạt động hoặc tỷ thí',ok:!s.activity&&s.battle?.status!=='fighting'}];return {req,fee,next,checks,ready:checks.every(x=>x.ok),reason:checks.find(x=>!x.ok)?.label||'Sẵn sàng tỷ thí'};}
export const MILESTONES=[
 {id:'admit',title:'Bước đầu nhập đạo',desc:'Vượt khảo hạch, gia nhập một tông môn.',target:1,value:s=>s.path!=='mortal'?1:0,reward:{stone:50,items:{pillQi:1}}},
 {id:'mission',title:'Một việc nhỏ, một tiên duyên',desc:'Hoàn thành nhiệm vụ tông môn đầu tiên.',target:1,value:s=>s.stats.missions,reward:{stone:30,herb:8,contribution:15}},
 {id:'diligent',title:'Chuyên cần nơi sơn môn',desc:'Hoàn thành năm nhiệm vụ tông môn.',target:5,value:s=>s.stats.missions,reward:{stone:100,contribution:50}},
 {id:'travel',title:'Bước chân vạn dặm',desc:'Hoàn thành chuyến lịch luyện đầu tiên.',target:1,value:s=>s.stats.journeys,reward:{stone:50,herb:15,items:{wood:1}}},
 {id:'friend',title:'Hữu duyên kết bạn',desc:'Kết giao ít nhất một bạn hữu (thiện cảm 40).',target:1,value:s=>s.contacts.filter(p=>p.affinity>=40).length,reward:{stone:80,herb:10}},
 {id:'victory',title:'Linh lực giao phong',desc:'Thắng ba trận chiến hoặc tỷ thí.',target:3,value:s=>s.stats.wins,reward:{stone:150,contribution:60,items:{pillBreak:1}}},
 {id:'outer',title:'Ngoại môn tiến bước',desc:'Trở thành đệ tử Ngoại môn hoặc cao hơn.',target:1,value:s=>s.rank,reward:{stone:120,contribution:80}},
 {id:'foundation',title:'Đạo cơ thành tựu',desc:'Đạt đại cảnh giới Trúc Cơ.',target:2,value:s=>s.realm,reward:{stone:180,contribution:120,items:{pillBreak:1}}},
 {id:'core',title:'Một viên kim đan',desc:'Đạt đại cảnh giới Kim Đan.',target:3,value:s=>s.realm,reward:{stone:250,contribution:180,items:{jade:1}}},
 {id:'champion',title:'Danh chấn đại tỷ',desc:'Giành quán quân đại tỷ tông môn.',target:1,value:s=>s.stats.annualWins,reward:{stone:350,contribution:150}},
 {id:'founder',title:'Khai sơn lập phái',desc:'Sáng lập tông môn của riêng mình.',target:1,value:s=>s.path==='founder'?1:0,reward:{stone:600,herb:60,items:{seal:1}}},
 {id:'void',title:'Đạo vận hư không',desc:'Đạt Luyện Hư hoặc cao hơn.',target:6,value:s=>s.realm,reward:{stone:500,contribution:250,items:{phoenix:1}}},
 {id:'master',title:'Kế thừa đạo thống',desc:'Trở thành Chưởng môn theo nhánh ở lại.',target:7,value:s=>s.rank,reward:{stone:1000,contribution:300,items:{heaven:1}}}
];
export function milestoneStatus(s,m){return {progress:Math.min(m.target,m.value(s)),claimed:(s.claimedMilestones||[]).includes(m.id),ready:m.value(s)>=m.target&&!(s.claimedMilestones||[]).includes(m.id)};}
export function availableMilestones(s){return MILESTONES.filter(m=>milestoneStatus(s,m).ready);}
export function claimMilestone(s,id){const m=MILESTONES.find(x=>x.id===id);if(!m)return 'Thành tựu không tồn tại.';if(!milestoneStatus(s,m).ready)return 'Thành tựu chưa đạt hoặc đã nhận thưởng.';s.claimedMilestones||=[];s.claimedMilestones.push(id);for(const k of ['stone','herb','wood','ore'])if(m.reward[k])s[k]=Math.min(1e12,s[k]+m.reward[k]);if(m.reward.contribution){s.contribution+=m.reward.contribution;s.merit+=m.reward.contribution;}for(const [item,count]of Object.entries(m.reward.items||{}))G.addItem(s,item,count);G.addLog(s,'Thành tựu: '+m.title+' · Đã nhận phần thưởng.');return null;}
export function objective(s){if(s.path==='mortal')return s.exam?{label:'KHẢO HẠCH ĐANG DỞ',title:'Tiếp tục thử thách đạo tâm',text:'Kết quả linh căn và tư chất đã được giữ lại.',action:'resume-exam',button:'Tiếp tục khảo hạch'}:{label:'BƯỚC ĐẦU TIÊN',title:'Cầu đạo nơi sơn môn',text:'Đo linh căn, tư chất và chọn một trong sáu tông môn.',action:'nav',id:'admission',button:'Xin khảo hạch'};
 if(s.battle?.status==='fighting')return {label:'LINH LỰC GIAO PHONG',title:'Trận đấu đang diễn ra',text:'Kỹ năng thi triển sau mỗi ba lượt.',action:'resume-battle',button:'Về trận đấu'};
 if(s.activity)return {label:'HOẠT ĐỘNG ĐANG LÀM',title:s.activity.name,text:'Phần thưởng tự nhận khi hoàn thành, kể cả offline.',action:'activity-detail',button:'Xem tiến độ'};
 const b=breakthroughStatus(s);if(s.stage===9&&s.xp>=G.goal(s)&&s.realm<9)return {label:'ĐẠI CẢNH GIỚI',title:b.ready?'Sẵn sàng đột phá '+G.REALMS[s.realm+1]:'Chuẩn bị cho lần đột phá',text:b.ready?'Linh lực đã đầy. Một cảnh giới mới đang chờ.':'Còn cần: '+b.reason,action:b.ready?'breakthrough':'nav',id:'practice',button:b.ready?'Đột phá':'Xem điều kiện'};
 if(s.pendingEvent)return {label:'CƠ DUYÊN MỚI',title:G.STORIES[s.pendingEvent.id].name,text:'Lựa chọn sẽ ảnh hưởng quan hệ và tiên đồ.',action:'story',button:'Đưa ra lựa chọn'};
 if(s.annualYears.length)return {label:'ĐẠI TỶ KHAI HỘI',title:'Đại tỷ năm '+(s.tournament?.year||s.annualYears[0]),text:'Vượt ba vòng tỷ thí, tranh ngôi quán quân.',action:'nav',id:'annual',button:'Đến đại tỷ'};
 const rewards=availableMilestones(s);if(rewards.length)return {label:'THÀNH TỰU TIÊN ĐỒ',title:rewards.length+' phần thưởng đang chờ',text:'Nhận phần thưởng cho những cột mốc đã đạt.',action:'nav',id:'milestones',button:'Nhận thưởng'};
 const p=promotionStatus(s);if(p.ready)return {label:'TIẾN THÂN TÔNG MÔN',title:'Tỷ thí lên '+p.next,text:'Tu vi và cống hiến đã đạt yêu cầu.',action:'nav',id:'rank',button:'Đến khảo hạch'};
 return s.path==='founder'?{label:'ĐẠO THỐNG CỦA BẠN',title:'Phát triển '+s.sectName,text:'Nâng công trình, chiêu mộ và phân công đệ tử.',action:'nav',id:'found',button:'Quản lý tông môn'}:{label:'VIỆC HÔM NAY',title:'Tích lũy cống hiến và tiên duyên',text:'Làm nhiệm vụ, lịch luyện để chuẩn bị thăng tiến.',action:'nav',id:'missions',button:'Nhận nhiệm vụ'};
}
