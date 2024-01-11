import { googleImage } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `${lenguajeGB['smsAvisoMG']()}خطأ استمل الامر مع اسم\n*${usedPrefix + command} اوتشياه اوبيتو*\n\nاو زي كذا \n*${usedPrefix + command} كانيكي*`
const res = await googleImage(text)
let image = res.getRandom()
let link = image
conn.sendFile(m.chat, link, 'error.jpg', `*💞 نتيجة: ${text}*`, m)
}
handler.help = ['gimage <query>', 'imagen <query>']
handler.tags = ['internet', 'tools']
handler.command = /^(صورة|صوره|imagen)$/i
handler.exp = 20
handler.limit = 5
export default handler
