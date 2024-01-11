let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `${mg}*ابلاغ عن امر معين مثال #ابلاغ امر معين لم يشتغل واكتب اي ملاحظات بعد وتم وراح يتم خدمته باسرع وقت*`
if (text.length < 8) throw `${fg} ✨ اقل شي ١٠ حروف يكون ابلاغ*`
if (text.length > 1000) throw `${fg} اعلى شي ١٠٠٠ حرف*`
let teks = `*╭━━[ ابلاغ ]━━━⬣*\n*┃*\n*┃* *الرقم*\n┃ ✦ Wa.me/${m.sender.split`@`[0]}\n*┃*\n*┃* *الرسالة*\n*┃* ✦ ${text}\n*┃*\n*╰━━━━━━━━━━━━━━━━━━⬣*`

conn.reply('201554582851@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {
contextInfo: {
mentionedJid: [m.sender]
}})
  m.reply(`╰⊱💚⊱ *تم* ⊱💚⊱╮\n\n*راح الرساله ل مطور بنجاح راح يتم اصلاحه باقرب وقت*`)

}

handler.help = ['reporte', 'request'].map(v => v + ' <teks>')
handler.tags = ['info']
handler.exp = 25 
handler.command = /^(ابلاغ|request|reporte|bugs|bug|report-owner|reportes|reportar)$/i 
export default handler
