global.math = global.math ? global.math : {}
let handler = async (m, { conn }) => {

let id = m.chat
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }  
if (!m.quoted) return
if (m.quoted.sender != conn.user.jid) return
if (!/^سؤال هو/i.test(m.quoted.text)) return
if (!(m.chat in global.math)) return conn.reply(m.chat, `*لقد تم الرد على اجابة بالفعل*`, m)

if (m.quoted.id == global.math[id][0].id) {
let math = global.math[id][1]
let gatacoins = global.db.data.users[m.sender].money += 500
if (m.text == math.result) {

await conn.reply(m.chat, `💖 الاجابة صحيحة 😎\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\nلقد فزتت\n🏆 *_${math.bonus}_* خبرة\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈`, fkontak, m)

global.db.data.users[m.sender].exp += math.bonus

clearTimeout(global.math[id][3])
delete global.math[id]
} else {
if (--global.math[id][2] == 0) {
await conn.reply(m.chat, `*محاولاتك انتهى بالفعل*\n*الاجابة هي ${math.result}*`, m),

clearTimeout(global.math[id][3])
delete global.math[id]
} else conn.reply(m.chat, `الاجابة خاطئ!!\nباقي لك *${global.math[id][2]}* محاولة 🤯`, m)
}}}

handler.customPrefix = /^-?[0-9]+(\.[0-9]+)?$/
handler.command = new RegExp
handler.exp = 0
export default handler
