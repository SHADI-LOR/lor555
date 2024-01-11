import yts from "yt-search"
let handler = async (m, { text, conn, args, command, usedPrefix }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
if (!text) return conn.reply(m.chat, `${lenguajeGB['smsAvisoMG']()}\nيرجى كتابه اسم مقاطع يوتيوب الي تبي`, fkontak,  m)
//await conn.reply(m.chat, global.wait, m)
  let results = await yts(text)
  let tes = results.all
  let teks = results.all.map(v => {
    switch (v.type) { 
      case 'video': return `❤️꙰༻ *العنوان:* ${v.title}
⁖🩵꙰༻ *رابط:* ${v.url}
⁖💜꙰༻ *المدة:* ${v.timestamp}
⁖💚꙰༻ *وقت التنزيل:* ${v.ago}
⁖🧡꙰༻ *المشاهدات:* ${v.views}`}}).filter(v => v).join('\n\n••••••••••••••••••••••••••••••••••••\n\n')
  conn.sendFile(m.chat, tes[0].thumbnail, 'yts.jpeg', teks, fkontak, m)
}
handler.help = ['', 'earch'].map(v => 'yts' + v + ' <pencarian>')
handler.tags = ['tools']
handler.command = /^بحث|ytbuscar|yts(earch)?$/i
handler.exp = 70
handler.limit = 1
handler.level = 3
export default handler
