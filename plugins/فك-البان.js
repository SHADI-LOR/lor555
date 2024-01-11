let handler = async (m, { conn, text, command, usedPrefix }) => {
if (!text) throw `${mg}\nمنشن احد تبي ترفع بان حقه\nمثال\n*${usedPrefix + command} @منشن*`
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw `${mg}\nمنشن احد تبي ترفع بان حقه\nمثال\n*${usedPrefix + command} @منشن*`
let users = global.db.data.users
users[who].banned = false
conn.reply(m.chat, `${eg}تم رفع الباند منه بنجاح 🤩\nيقدر يستخدم الان ${gt}\n`, m)
}
handler.help = ['unbanuser']
handler.tags = ['owner']
handler.command = /^رفع-بان$/i
handler.group = true
handler.admin = true 
export default handler
