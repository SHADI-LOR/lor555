import fetch from 'node-fetch'
let handler = async (m, { isPrems, conn }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" 
}
let grupos = [nna, nn, nnn, nnnt]
let gata = [img10]
let enlace = { contextInfo: { externalAdReply: {title: wm + ' 🐈', body: 'support group' , sourceUrl: grupos.getRandom(), thumbnail: await(await fetch(gata.getRandom())).buffer() }}}
let enlace2 = { contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: yt, mediaType: 'VIDEO', description: '', title: wm, body: '😻 𝗦𝘂𝗽𝗲𝗿 𝑻𝑶𝑼𝑲𝑨-𝗠𝗗 - 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 ', thumbnailUrl: await(await fetch(global.img)).buffer(), sourceUrl: yt }}}
let dos = [enlace, enlace2]    

let user = global.db.data.users[m.sender]
let premium = user.premium

let limit = `${pickRandom([20, 23, 29, 36, 42, 50, 59, 65, 70, 83])}` * 1
  let exp = `${pickRandom([700, 800, 900, 1000, 1200, 1500, 1700, 1900, 2000, 2100])}` * 1
let money = `${pickRandom([300, 500, 700, 900, 500, 800, 900, 1100, 1350, 1500])}` * 1

const recompensas = {
  limit: premium ? limitpremium : limit,
  exp: premium ? exppremium : exp,
  money: premium ? moneypremium : money,

}

let time = user.lastmonthly + 432000000 //432000000 5 dias
if (new Date - user.lastmonthly < 432000000) return await conn.reply(m.chat, `\nلقد اخذت بالفعل جوائز الاسبوعي🌅\n\nارجع بعد\n${clockString(time - new Date() * 1)}`, fkontak,  m)
//await conn.sendButton(m.chat, `𝙔𝘼 𝙍𝙀𝘾𝙄𝘽𝙄𝙎𝙏𝙀 𝙏𝙐 𝙍𝙀𝘾𝙊𝙈𝙋𝙀𝙉𝙎𝘼 𝙈𝙀𝙉𝙎𝙐𝘼𝙇 🌅\n\n𝙔𝙊𝙐 𝘼𝙇𝙍𝙀𝘼𝘿𝙔 𝙍𝙀𝘾𝙀𝙄𝙑𝙀𝘿 𝙔𝙊𝙐𝙍 𝙈𝙊𝙉𝙏𝙃𝙇𝙔 𝙍𝙀𝙒𝘼𝙍𝘿 🌅`, wm + `\n\n𝙑𝙐𝙀𝙇𝙑𝙀 𝙀𝙉 : 𝘾𝙊𝙈𝙀 𝘽𝘼𝘾𝙆 𝙄𝙉\n${clockString(time - new Date() * 1)}`, null, [['𝗠 𝗘 𝗡 𝗨 ☘️', '/menu']], fkontak, m)
let texto = ''
for (let reward of Object.keys(recompensas)) {
    if (!(reward in user)) continue
    user[reward] += recompensas[reward]
texto += `*+${recompensas[reward]}* ${global.rpgshop.emoticon(reward)}\n`}
let text = `╭━━🏄‍♂️━⛷️━🤾‍♀️━━⬣
┃ 🎖️ جوائز اسبوعي!!!
┃ ${texto}
╰━━🧘‍♂️━🤺━🚴‍♀️━━⬣
${wm}`
await conn.sendFile(m.chat, img, 'Naruto.jpg', text, fkontak)
//await conn.sendButton(m.chat, text, texto + `\n\n🎟️ 𝗣 𝗥 𝗘 𝗠 𝗜 𝗨 𝗠 ⇢ ${premium ? '✅' : '❌'}\n${wm}`, gata.getRandom(), [['⚗️ 𝙍𝙀𝘾𝙇𝘼𝙈𝘼𝙍 𝘾𝙊𝙁𝙍𝙀 ⚗️', '/cofre'], ['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']], m, enlace)  
user.lastmonthly = new Date * 1
}
handler.command = ['اسبوعياً', 'اسبوعي', 'mes', 'mensual', 'entregadelmes'] 
handler.level = 10
export default handler

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]}

function clockString(ms) {
  let ye = isNaN(ms) ? '--' : Math.floor(ms / 31104000000) % 10
  let mo = isNaN(ms) ? '--' : Math.floor(ms / 2592000000) % 12
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000) % 30
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return ['┃⇢ ', ye, ' *🗓️ سنوات*\n', '┃⇢ ', mo, ' *⛅ شهور*\n', '┃⇢ ', d, ' *☀️ ايام*\n', '┃⇢ ', h, ' *⏰ ساعات*\n', '┃⇢ ', m, ' *🕐 دقايق*\n', '┃⇢ ', s, ' *⏱️ ثانية*'].map(v => v.toString().padStart(2, 0)).join('')
}
