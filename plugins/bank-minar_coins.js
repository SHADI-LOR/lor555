let handler = async (m, { conn, isPrems}) => { //lastmiming
let user = global.db.data.users[m.sender]
let premium = user.premium  
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let minar = `${pickRandom([
' مهرج 🤹‍♂️',
'دكتور 👨🏻‍⚕️',
' بياع حبوب 🍻',
'طباخ 👨🏻‍🍳',
'مزارع 👨🏻‍🌾',
'رسام 🧑🏻‍🎨',
'مدرس 👨🏻‍🏫',
'مبرمج 🧑🏻‍💻',
'محقق 🕵🏻‍♂️',
'خدامه 🧕🏻',
'رائد فضاء 🧑🏻‍🚀',
'مهندس 👷🏻‍♂️',
'قاضي 👨🏻‍⚖️',
'مغنيه 👩🏻‍🎤',
'معلم شاورما 🌯',
'رقاصه 💃🏻',
'سباك 🧑🏻‍🔧',
'لاعب كمال اجسام 🏋🏻‍♂️',
'مدربه يوجا 🧘🏻',
'مدرب 👨🏻‍💼',
'مدير بنك 💳',
                          ])}`
let pp = 'https://telegra.ph/file/23f3d7d138e4be6fe0ab9.jpg'
let money = `${pickRandom([100, 200, 250, 300, 370, 400, 450, 480, 500, 510, 640, 680, 704, 760, 800, 840, 880, 900, 1000, 1059, 1080, 1100, 1190, 1230, 1380, 1399, 1290, 1300, 1340, 1350, 1590, 1400, 1450, 1700, 1800, 1900, 2000, 0, 0, 10, 1, 99, 999, 1789, 1430])}` * 1
let moneypremium = `${pickRandom([500, 600, 700, 800, 900, 1000, 1050, 1150, 1200, 1250, 1300, 1350, 1400, 1450, 1500, 1550, 1600, 1650, 1700, 1750, 1800, 1850, 1950, 2000, 2100, 2200, 2300, 2400, 2500, 2600, 2700, 2800, 2900, 3000, 3100, 3200, 3400, 3500, 3600, 3700, 3800, 3850, 3900, 3950, 4000])}` * 1
let time = user.lastcoins + 600000 // 10 min
if (new Date - user.lastcoins < 600000) return await conn.reply(m.chat, `⌯ انــتــظــر ${msToTime(time - new Date())} قــبــل الــحـصـول عــلــي راتــب اخــر ${global.rpgshopp.emoticon('money')} `,  m)
user.money += premium ? moneypremium : money  
let texto = ''
for (let reward of Object.keys(0)) {
if (!(reward in user)) continue
user[reward] += recompensas[reward]
texto += `+${recompensas[reward]} ${global.rpgshop.emoticon(reward)}`}
let text = `اشــعــار ايــداع ${taguser}\nالمبلغ : ${money} ${global.rpgshop.emoticon('money')}\nوظـيـفـتـك : ${minar}\nنوع العملية : اضافة راتب`
await conn.sendFile(m.chat, pp, 'hina.jpg', text)
user.lastcoins = new Date * 1 
return conn.sendMessage(m.chat, {
react: {
  text: '💵',
  key: m.key,
}})
}
handler.help = ['Shadow']
handler.tags = ['Shadow']
handler.command = ['راتبي', 'راتب'] 
handler.fail = null
handler.exp = 0
export default handler
function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds
return minutes + " دقــائــق " + seconds + " ثــوانـي " }  
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]}
