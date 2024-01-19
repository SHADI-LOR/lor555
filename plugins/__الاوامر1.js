import fs, { promises } from 'fs'
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, command }) => {
try {
let d = new Date(new Date + 3600000)
let locale = 'ar'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)   
let taguser = conn.getName(m.sender)
let user = global.db.data.users[m.sender]
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
  //m.react('🎮');
    await conn.sendMessage(m.chat, { react: { text: '🍧', key: m.key } })
    let vennom = '+201554582851'
let menu = `
*🛡️TOUKA-BOT-MÐ🛡️*
┐┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┌ـ
┊💜 مـرحـبـاً ♡ - @${m.sender.split("@")[0]}
┊⏲️ وقت التشغيل♡ - ${uptime}
┊🌄 الـيـوم ♡ - ${week}
┊📍الـتـاريـخ ♡ - ${date}
┊⚡مـطـوري ♡ - ${venom}
┘┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⟢ـ
┐┈⟤「قـائـمـات اوامــر بـوت تـوكــا ⟥┈┌
┊🕋♡ - 「.القران
┊📚♡ - 「.الذكاء
┊🛡️♡ - 「.المطور
┊💌♡ - 「.الاعضاء 
┊🧬♡ - 「.المجموعات
┊📥♡ - 「.التحميلات
┊🧰♡ - 「.التحويلات
┊🎨♡ - 「.البنك
┊🎉♡ - 「.الحصري 
┊🎮♡ - 「.الالعاب
┊🎩♡ - 「.الوجوهات
┊ *.الاوامر2    > لعرض الاوامر بشكل كامل*
┊ *.الاوامر3    > لعرض الاوامر بشكل جديد*
│ تحت إدارة :  ♡🏎️𓆩𝑻𝒆𝒔𝒍𝒂𓆪🏎️♡
┘┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⟢ـ
📚 *_تـحـذيـر مـمـنـوع اسـتـخـدام الـبـوت الا فـي الجـروبـات إذا قـمـت بـدخـول الـي الـبـوت خـاص سـوف يـتـم حـظـرك_* 📚
`

const vi = ["https://telegra.ph/file/ce540d877b5a6e3e5a5d1.jpg"]

try {
await conn.sendMessage(m.chat, { video: { url: vi.getRandom() }, gifPlayback: true, caption: menu, mentions: [m.sender, global.conn.user.jid] }, { quoted: fkontak }) 
} catch (error) {
try {
await conn.sendMessage(m.chat, { image: { url: gataMenu.getRandom() }, gifPlayback: false, caption: menu, mentions: [m.sender, global.conn.user.jid] }, { quoted: fkontak }) 
} catch (error) {
try {
await conn.sendMessage(m.chat, { image: gataImg.getRandom(), gifPlayback: false, caption: menu, mentions: [m.sender, global.conn.user.jid] }, { quoted: fkontak }) 
} catch (error) {
try{
await conn.sendFile(m.chat, imagen5, 'menu.jpg', menu, fkontak, false, { mentions: [m.sender, global.conn.user.jid] })
} catch (error) {
return 
}}}} 

} catch (e) {
await m.reply(lenguajeGB['smsMalError3']() + '\n*' + lenguajeGB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeGB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeGB.smsMensError2()} ` + usedPrefix + command)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)}}

handler.command = /^اوامر|الاوامر$/i
handler.limit = true 
export default handler

function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}

