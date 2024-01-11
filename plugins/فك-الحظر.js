
let handler = async (m, { conn }) => {
  if (!(m.chat in global.db.data.chats)) return m.reply('*هذه الدردشة غير مسجلة في قاعدة البيانات!*')
  let chat = global.db.data.chats[m.chat]
  if (!chat.isBanned) return m.reply('*الشات ذا غير محظور اصلا!!*')
  chat.isBanned = false
  m.reply(`${eg} الان يمكنك استخدام البوت.`)
}
handler.command = /^رفع-حظرشات|فك-الحظر$/i
handler.botAdmin = true
handler.admin = true

export default handler
