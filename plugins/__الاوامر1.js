
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
    await conn.sendMessage(m.chat, { react: { text: '🍇', key: m.key } })
    let vennom = '+201554582851'
let menu = `
${global.sham1}
${global.sham2}
${global.ippaa} *اهلا بك @${m.sender.split("@")[0]}*
${global.ippaa} *اسمي : ${packname}${conn.user.jid == global.conn.user.jid ? '' : `\n*⇢ *@${global.conn.user.jid.split`@`[0]}*`}*
${global.ippaa} *الوقت : ${uptime}*
${global.ippaa} *اليوم : ${week}*
${global.ippaa} *التاريخ : ${date}*
${global.ippaa} *مطوري : ${vennom}
${global.sham3}
${global.sham2}
│┊قـائـمـه بـوت تـوكـا ⁦(⁠◕⁠ᴗ⁠◕⁠✿⁠)⁩
${global.sham3}
${global.sham2}
│┊⩥💜│الاسـاسـيـات│💜⩤
${global.sham3}
${global.sham2}
${global.amrr}صلح
${global.amrr}ابلاغ
${global.amrr}المطور
${global.amrr}المملكه
${global.amrr}الاسقبال
${global.amrr}تعليم
${global.amrr}الدعم
${global.amrr}قائمتي
${global.amrr}لوجوهات
${global.amrr}الجروبات
${global.amrr}البوتات
${global.sham3}
${global.sham2}
│┊⩥💜│الـذكـاء الاصطناعي/ia│💜⩤
${global.sham3}
${global.sham2}
${global.amrr}فينوم
${global.amrr}سوكونا
${global.amrr}ارسم
${global.amrr}تحدث
${global.sham3}
${global.sham2}
│┊⩥💜│الـجـروبـ│💜⩤
${global.sham3}
${global.sham2}
${global.amrr}اضف
${global.amrr}طرد
${global.amrr}ترقيه
${global.amrr}خفض
${global.amrr}تغير-الاسم
${global.amrr}تغير-الوصف
${global.amrr}تغير-الصوره
${global.amrr}منشن
${global.amrr}مخفي
${global.amrr}جروب قفل
${global.amrr}جروب فتح
${global.amrr}الجروب
${global.amrr}الادمن
${global.amrr}حذف
${global.sham3}
${global.sham2}
│┊⩥💜│الالـعـاب│💜⩤
${global.sham3}
${global.sham2}
${global.amrr}اكس
${global.amrr}حظ
${global.amrr}رياضه
${global.amrr}دين
${global.amrr}خمن
${global.amrr}انمي
${global.amrr}كت
${global.amrr}فكك
${global.amrr}ايمواجي
${global.amrr}رتب
${global.amrr}علم
${global.amrr}عين
${global.amrr}احزر
${global.amrr}كوره
${global.amrr}شخصية
${global.amrr}الحب
${global.amrr}الكره
${global.amrr}زواج
${global.amrr}طلاق
${global.amrr}قدوتي
${global.amrr}لعبة
${global.amrr}موتتي
${global.sham3}
${global.sham2}
│┊⩥💜│الاعـضـاء│💜⩤
${global.sham3}
${global.sham2}
${global.amrr}تطقيم
${global.amrr}طقم
${global.amrr}طقمي
${global.amrr}بروفايل
${global.amrr}خلفيه
${global.amrr}ميمز
${global.amrr}سرعه
${global.amrr}ترجم
${global.amrr}زخرفه
${global.amrr}دمج
${global.amrr}ملصق
${global.amrr}سرقه
${global.amrr}توب
${global.amrr}جوده
${global.amrr}تليجراف
${global.amrr}لصوره
${global.amrr}لفيديو
${global.amrr}لانمي
${global.amrr}ميسي
${global.amrr}رونالدو
${global.amrr}كيوت
${global.sham3}
${global.sham2}
│┊⩥💜│التـحـمـيـل│💜⩤
${global.sham3}
${global.sham2}
${global.amrr}يوتيوب
${global.amrr}فيديو
${global.amrr}اغنيه
${global.amrr}تيك
${global.amrr}فيسبوك
${global.amrr}تطبيق
${global.amrr}بحث
${global.amrr}صوره
${global.amrr}جوجل
${global.sham3}
${global.sham2}
│┊⩥💜│الـبـنـك│💜⩤
${global.sham3}
${global.sham2}
${global.amrr}راتب
${global.amrr}يومي 
${global.amrr}اسبوعي
${global.amrr}شهري
${global.amrr}هديتي
${global.amrr}تحويل
${global.amrr}لفل
${global.amrr}خبرات
${global.amrr}رصيدي
${global.amrr}الماسي
${global.sham3}
${global.sham2}
│┊⩥💜│الاصـوات│💜⩤
${global.sham3}
${global.sham2}
${global.amrr}رفيع
${global.amrr}تخين
${global.amrr}تخينن
${global.amrr}صاخب
${global.amrr}ناعم
${global.amrr}سنجاب
${global.amrr}روبوت
${global.amrr}منفوخ
${global.amrr}عميق 
${global.amrr}بطيء
${global.amrr}سريع
${global.sham4}

`

const vi = ["https://telegra.ph/file/f0126c274f6d29aa2b2b1.jpg","https://telegra.ph/file/7fb53b7f8b20dfdeaad98.jpg","https://telegra.ph/file/60a402cf7b0b3564c8f73.jpg"]

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

handler.command = /^اوامر2$/i
handler.limit = true 
export default handler

function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
