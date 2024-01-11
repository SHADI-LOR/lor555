/*Créditos a https://github.com/Azami19*/

import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
import fetch from 'node-fetch'

let handler = async (m) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => gataImg.getRandom())
let name = await conn.getName(who)
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw '╰⊱❗️⊱ *خطأ* ⊱❗️⊱╮\n\nرد على صورة او مقطع لتحويله الى رابط'
  let media = await q.download()
  let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
  let link = await (isTele ? uploadImage : uploadFile)(media)
  let caption = ` *📊 الرابط:*\n${link}
  *🎁 مقاس:*\n${media.length} bytes\n
  *🚀 انتهاء الصلاحية:*\n ${isTele ? '✅ لا تنتهي صلاحيتها' : '⚠️ غريب'}\n
  *🔰 تقصير:*\n${await shortUrl(link)}`

conn.reply(m.chat, caption, m, { contextInfo: {
          externalAdReply :{
    mediaUrl: md,
    mediaType: 2,
    title: wm,
    body: botdate,
    thumbnail: await(await fetch(link)).buffer(),
    sourceUrl: link
     }}
  })
}
handler.help = ['tourl']
handler.tags = ['herramientas']
handler.command = /^(لرابط|تليجراف)$/i
handler.limit = 1
export default handler

async function shortUrl(url) {
  let res = await fetch(`https://tinyurl.com/api-create.php?url=${url}`)
  return await res.text()
}
