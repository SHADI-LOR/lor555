import { addExif } from '../lib/sticker.js'
let handler = async (m, { conn, text }) => {
if (!m.quoted) throw '╰⊱❗️⊱ *خطأ* ⊱❗️⊱╮\nرد على المصلق تبي تخليه على حقوقك'
let stiker = false
try {
let [packname, ...author] = text.split('|')
author = (author || []).join('|')
let mime = m.quoted.mimetype || ''
if (!/webp/.test(mime)) throw '╰⊱❗️⊱ *خطأ* ⊱❗️⊱╮\nرد على ملصق الي تبي تغير حقوقه وضيف اسم الي تبي'
let img = await m.quoted.download()
if (!img) throw '╰⊱❗️⊱ *خطأ* ⊱❗️⊱╮\nرد على ملصق الي تبي تغير حقوقه وضيف اسم الي تبي'
stiker = await addExif(img, packname || '', author || '')
} catch (e) {
console.error(e)
if (Buffer.isBuffer(e)) stiker = e
} finally {
if (stiker) conn.sendFile(m.chat, stiker, 'sticker.webp', '',m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: wm, body: `⚡ 𝑽𝑬𝑵𝑶𝑴 𝑿𝑶𝑽 ⚡`, mediaType: 2, sourceUrl: nn, thumbnail: imagen1}}}, { quoted: m })
else throw '╰⊱❗️⊱ *خطأ* ⊱❗️⊱╮\nيحدث شي ما خطأ يرجى محاولة مرة اخرى لاحقًا '
}}
handler.help = ['wm <packname>|<author>']
handler.tags = ['sticker']
handler.command = /^سرقة|سرقه|wm$/i
handler.limit = 1
export default handler
