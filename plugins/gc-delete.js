let handler = function (m) {
if (!m.quoted) throw false
let { chat, fromMe, isBaileys } = m.quoted
if (!fromMe) throw false
if (!isBaileys) throw '[⚡]⌯ رد عــلــي الــرســالــه الـي انــت عــاوز تــحـذفــهــا'
conn.sendMessage(chat, { delete: m.quoted.vM.key })
}
handler.help = ['S H A D O W']
handler.tags = ['S H A D O W']
handler.command = /^(حذف)$/i
handler.group = true
handler.admin = true
export default handler
