let handler = async (m, { conn, text, participants }) => { // S H A D O W
let member = participants.map(u => u.id) // S H A D O W
if(!text) { // S H A D O W
var sum = member.length // S H A D O W
} else { // S H A D O W
var sum = text}  // S H A D O W
var total = 0 // S H A D O W
var sider = [] // S H A D O W
for(let i = 0; i < sum; i++) {
let users = m.isGroup ? participants.find(u => u.id == member[i]) : {}
if((typeof global.db.data.users[member[i]] == 'undefined' || global.db.data.users[member[i]].chat == 0) && !users.isAdmin && !users.isSuperAdmin) { // S H A D O W // S H A D O W
if (typeof global.db.data.users[member[i]] !== 'undefined'){
if(global.db.data.users[member[i]].whitelist == false){
total++ // S H A D O W
sider.push(member[i])} // S H A D O W
}else { // S H A D O W
total++ // S H A D O W
sider.push(member[i])}}}
if(total == 0) return conn.reply(m.chat, `*[⚡]⌯ لا يوجد هنا اعضاء غير متفاعلين*`, m)  // S H A D O W
m.reply(`*[❣️]~ الغير متفاعلين*\n\n*الجروب :*\n⌯ ${await conn.getName(m.chat)}\n*الاعضاء :*\n⌯ ${sum}\n\n*[❣️]~  تفاعلوا ايها الورعان*\n${sider.map(v => '  ⌯ @' + v.replace(/@.+/, '')).join('\n')}\n\n[⚡]⌯ هذا الامر غير دقيق لانه يتم حسب الرسائل بعد دخول البوت الي الجروب`, null, { mentions: sider })} // S H A D O W
handler.command = /^(الاصنام|الاشباح)$/i // S H A D O W
handler.admin = true // S H A D O W
handler.botAdmin = true // S H A D O W
export default handler // S H A D O W
// S H A D O W // S H A D O W // S H A D O W // S H A D O W