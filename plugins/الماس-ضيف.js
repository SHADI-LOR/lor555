let MessageType = (await import(global.baileys)).default
let pajak = 0
let handler = async (m, { conn, text }) => {
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw `${ag}يجب عليك @منشن احد`
let txt = text.replace('@' + who.split`@`[0], '').trim()
if (!txt) throw `${ag}حط عدد الاماس الي تبي تعطيه`
if (isNaN(txt)) throw `${mg}بد،ن خرابيط بس رقم`
let dmt = parseInt(txt)
let limit = dmt
let pjk = Math.ceil(dmt * pajak)
limit += pjk
if (limit < 1) throw `${mg}اقل رقم فقط *1*`
let users = global.db.data.users
users[who].limit += dmt

conn.sendHydrated(m.chat, `╭[ الماسات 💎 ]⬣\n┃\n┃ღ *لشخص:*\n┃ღ *${text}*\n┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n┃ღ *الان تمتلك الماس*\n┃ღ *${dmt} الماس* 💎\n┃\n╰━━━━━━━━━━━━━━⬣`, wm, null, ig, '𝑻𝑶𝑼𝑲𝑨 𝑩𝑶𝑻 🌸', null, null, [
['say my name', '/']], m)
}
handler.help = ['adddi <@user>']
handler.tags = ['xp']
handler.command = ['الماس'] 
handler.group = true
handler.rowner = true
export default handler
