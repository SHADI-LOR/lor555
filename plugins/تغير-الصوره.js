let handler = async (m, { conn, usedPrefix, command }) => {
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || q.mediaType || ''
if (/image/.test(mime)) {
let img = await q.download()
if (!img) throw `${lenguajeGB['smsAvisoMG']()}️ *_قــم بالـرد عـلـي الـصـوره_* `
await conn.updateProfilePicture(m.chat, img).then(_ => m.reply(`${lenguajeGB['smsAvisoEG']()}_*تـم تـغـيـر الصـوره بـنجـاح*_`))
} else throw `${lenguajeGB['smsAvisoMG']()} *_قــم بالـرد عـلـي الـصـوره_* `}
handler.command = /^تغير-الصوره|setpp(group|grup|gc)?$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
export default handler
