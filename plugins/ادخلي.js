let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

let handler = async (m, { conn, text, isMods, isOwner, isPrems }) => {
let link = (m.quoted ? m.quoted.text ? m.quoted.text : text : text) || text
let [_, code] = link.match(linkRegex) || []

if (!code) throw 'نسيت تحط الرابط ابعت اسكرين للمطور عشان يدخلني'

if ( isPrems || isMods || isOwner || m.fromMe) {
let res = await conn.groupAcceptInvite(code)
await m.reply(`*تم انضمام البوت الي الجروب بنجاح ارجوا احترامه وعدم سبه ,استمتعوا به! ✔️*`)
} else {
const data = global.owner.filter(([id]) => id)

for (let jid of data.map(([id]) => [id] + '@s.whatsapp.net').filter(v => v != conn.user.jid)) await m.reply('*[🕯️] طلب بوت جديد لمجموعة [🕯️]*\n\n*—◉ رقم مقدم الطلب:* ' + 'wa.me/' + m.sender.split('@')[0] + '\n*—◉ رابط المجموعة المطلوب فيها البوت:* ' + link, jid)

await m.reply('*[♥️]  سوف يتم إدخال البوت عندما يقوم يفتح ڤينوم')}}

handler.help = ['join [chat.whatsapp.com]']
handler.tags = ['premium']
handler.limit = 10000;
handler.command = /^ادخلي$/i
export default handler
