import fetch from 'node-fetch'
import fs from 'fs' 

let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner, text }) => { 
//try{
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let chat = global.db.data.chats[m.chat]
let user = global.db.data.users[m.sender]
let bot = global.db.data.settings[conn.user.jid] || {}
let toUser = `${m.sender.split("@")[0]}`
let aa = toUser + '@s.whatsapp.net'

let titulo = [ 
lenguajeGB.smsParaAdmins() + ' ' + `${m.isGroup ? chat.welcome ? '✅' : '❌' : lenguajeGB.smsNoGg()}`, 
lenguajeGB.smsParaAdmins() + ' ' + `${m.isGroup ? chat.detect ? '✅' : '❌' : lenguajeGB.smsNoGg()}`,  
lenguajeGB.smsParaAdYOw() + ' ' + `${m.isGroup ? chat.autolevelup ? '✅' : '❌' : lenguajeGB.smsNoGg()}`,   
lenguajeGB.smsParaOw() + ' ' + `${bot.restrict ? '✅' : '❌'}`,    
lenguajeGB.smsParaOw() + ' ' + `${bot.antiCall ? '✅' : '❌'}`,
lenguajeGB.smsParaOw() + ' ' + `${bot.antiSpam ? '✅' : '❌'}`,	
lenguajeGB.smsParaOw() + ' ' + `${global.opts['self'] ? '❌' : '✅'}`,    
lenguajeGB.smsParaAdmins() + ' ' + `${m.isGroup ? chat.modoadmin ? '✅' : '❌' : lenguajeGB.smsNoGg()}`,  
lenguajeGB.smsParaOw() + ' ' + `${global.opts['autoread'] ? '✅' : '❌'}`, 
lenguajeGB.smsParaOw() + ' ' + `${bot.temporal ? '✅' : '❌'}`,      
lenguajeGB.smsParaAdmins() + ' ' + `${m.isGroup ? chat.stickers ? '✅' : '❌' : lenguajeGB.smsNoGg()}`,   
lenguajeGB.smsParaAdmins() + ' ' + `${m.isGroup ? chat.autosticker ? '✅' : '❌' : lenguajeGB.smsNoGg()}`,   
lenguajeGB.smsParaAdYOw() + ' ' + `${m.isGroup ? chat.reaction ? '✅' : '❌' : lenguajeGB.smsNoGg()}`,    
lenguajeGB.smsParaAdYOw() + ' ' + `${m.isGroup ? chat.audios ? '✅' : '❌' : lenguajeGB.smsNoGg()}`,  
lenguajeGB.smsParaAdYOw() + ' ' + `${m.isGroup ? chat.modohorny ? '✅' : '❌' : lenguajeGB.smsNoGg()}`,   
lenguajeGB.smsParaAdmins() + ' ' + `${m.isGroup ? chat.antitoxic ? '✅' : '❌' : lenguajeGB.smsNoGg()}`,   
lenguajeGB.smsParaAdYOw() + ' ' + `${m.isGroup ? chat.antiver ? '✅' : '❌' : lenguajeGB.smsNoGg()}`,  
lenguajeGB.smsParaAdYOw() + ' ' + `${m.isGroup ? chat.delete ? '✅' : '❌' : lenguajeGB.smsNoGg()}`,  
lenguajeGB.smsParaAdmins() + ' ' + `${m.isGroup ? chat.antifake ? '✅' : '❌' : lenguajeGB.smsNoGg()}`,  
lenguajeGB.smsParaAdmins() + ' ' + `${m.isGroup ? chat.antiLink ? '✅' : '❌' : lenguajeGB.smsNoGg()}`,   
lenguajeGB.smsParaAdmins() + ' ' + `${m.isGroup ? chat.antiLink2 ? '✅' : '❌' : lenguajeGB.smsNoGg()}`,    
lenguajeGB.smsParaAdmins() + ' ' + `${m.isGroup ? chat.antiTiktok ? '✅' : '❌' : lenguajeGB.smsNoGg()}`,    
lenguajeGB.smsParaAdmins() + ' ' + `${m.isGroup ? chat.antiYoutube ? '✅' : '❌' : lenguajeGB.smsNoGg()}`,    
lenguajeGB.smsParaAdmins() + ' ' + `${m.isGroup ? chat.antiTelegram ? '✅' : '❌' : lenguajeGB.smsNoGg()}`,    
lenguajeGB.smsParaAdmins() + ' ' + `${m.isGroup ? chat.antiFacebook ? '✅' : '❌' : lenguajeGB.smsNoGg()}`,   
lenguajeGB.smsParaAdmins() + ' ' + `${m.isGroup ? chat.antiInstagram ? '✅' : '❌' : lenguajeGB.smsNoGg()}`,    
lenguajeGB.smsParaAdmins() + ' ' + `${m.isGroup ? chat.antiTwitter ? '✅' : '❌' : lenguajeGB.smsNoGg()}`,    
lenguajeGB.smsParaOw() + ' ' + `${global.opts['pconly'] ? '✅' : '❌'}`,  
lenguajeGB.smsParaOw() + ' ' + `${global.opts['خاص'] ? '✅' : '❌'}`]

let nombre = [ lenguajeGB.smsWel1(), lenguajeGB.smsDete1(), lenguajeGB.smsANivel1(), lenguajeGB.smsRestri1(), lenguajeGB.smsLlamar1(), lenguajeGB.smsAntiSp1(), lenguajeGB.smsModP1(), lenguajeGB.smsModAd1(), lenguajeGB.smsLect1(), lenguajeGB.smsTempo1(), lenguajeGB.smsStik1(), lenguajeGB.smsStickA1(), lenguajeGB.smsReacc1(), lenguajeGB.smsAudi1(), lenguajeGB.smsModHor1(), lenguajeGB.smsAntitoc1(), lenguajeGB.smsModOb1(), lenguajeGB.smsAntiEli1(), lenguajeGB.smsAntiInt1(), lenguajeGB.smsAntiE1(), lenguajeGB.smsAntiEE1(), lenguajeGB.smsAntiTT1(), lenguajeGB.smsAntiYT1(), lenguajeGB.smsAntiTEL1(), lenguajeGB.smsAntiFB1(),
lenguajeGB.smsAntiIG1(), lenguajeGB.smsAntiTW1(), lenguajeGB.smsSOLOP1(), lenguajeGB.smsSOLOG1()]

let descripción = [ lenguajeGB.smsWel2(), lenguajeGB.smsDete2(), lenguajeGB.smsANivel2(), lenguajeGB.smsRestri2(), lenguajeGB.smsLlamar2(), lenguajeGB.smsAntiSp2(), lenguajeGB.smsModP2(), lenguajeGB.smsModAd2(), lenguajeGB.smsLect2(), lenguajeGB.smsTempo2(), lenguajeGB.smsStik2(), lenguajeGB.smsStickA2(), lenguajeGB.smsReacc2(), lenguajeGB.smsAudi2(), lenguajeGB.smsModHor2(), lenguajeGB.smsAntitoc2(), lenguajeGB.smsModOb2(), lenguajeGB.smsAntiEli2(), lenguajeGB.smsAntiInt2(), lenguajeGB.smsAntiE2(), lenguajeGB.smsAntiEE2(), lenguajeGB.smsAntiTT2(), lenguajeGB.smsAntiYT2(), lenguajeGB.smsAntiTEL2(), lenguajeGB.smsAntiFB2(),
lenguajeGB.smsAntiIG2(), lenguajeGB.smsAntiTW2(), lenguajeGB.smsSOLOP2(), lenguajeGB.smsSOLOG2()]

let comando = [ "ترحيب", "فعل-ردات" ,"اضافه-وطرد", "ممنوع-اتصالات", "سبام", "عام", "فقط-المشرفين", "القراءة-التلقائية", "temporal", "stickers", "autosticker", "رياكشن", "audios", "modohorny", "سبات", "antiviewonce", "حذف-تلقائي", "antifake", "روابط", "جميع-روابط", "روابط-تيكتوك", "روابط-يوتيوب", "روابط-تيلي", "روابط-فيس",
"روابط-انستا", "روابط-تويتر", "pconly", "المستوي", "الخاص","grouponly"]

let sections = Object.keys(titulo, nombre, descripción, comando).map((v, index) => ({ title: `${titulo[v]}`,
rows: [{ title: `${nombre[v]} : ${command} ${comando[v]}`, description: `${1 + index}. ${descripción[v]}`, rowId: usedPrefix + command + ' ' + comando[v], }], }))

let name = await conn.getName(m.sender)


let isEnable = /true|تعطيل|تفعيل|(turn)?on|1/i.test(command)
let type = (args[0] || '').toLowerCase()
let isAll = false, isUser = false

switch (type) {
case 'ترحيب': case 'bienvenida':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn)
throw false
}
} else if (!isAdmin) {
global.dfail('admin', m, conn)
throw false
}
chat.welcome = isEnable
break

case 'فعل-ردات': case 'avisos':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn)
throw false
}
} else if (!isAdmin) {
global.dfail('admin', m, conn)
throw false
}
chat.detect = isEnable
break

case 'antidelete': case 'antieliminar': case 'حذف-تلقائي':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.delete = isEnable
break

case 'عام': case 'publico':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['عام'] = !isEnable
break

case 'روابط': case 'antienlace':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiLink = isEnable
break

case 'جميع-روابط': case 'antienlace2':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiLink2 = isEnable 
break

case 'روابط-تيكتوك': case 'antitk': case 'antitik':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiTiktok = isEnable 
break

case 'روابط-يوتيوب': case 'antiyt':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiYoutube = isEnable 
break

case 'روابط-تيلي': case 'antitl': case 'antitele': case 'antitg': case 'antitel':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiTelegram = isEnable 
break

case 'روابط-فيس': case 'antifb': case 'antifbook':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiFacebook = isEnable 
break

case 'روابط-انستا': case 'antinstagram': case 'antiig': case 'antig': case 'antiinsta': case 'antinsta':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiInstagram = isEnable 
break

case 'روابط-تويتر': case 'antitw': case 'antitwit': case 'antitwter': case 'antitwiter': case 'antiTwr':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiTwitter = isEnable 
break

case 'modohorny': case 'modocaliente':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.modohorny = isEnable          
break

case 'stickers':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.stickers = isEnable          
break

case 'temporal':
isAll = true
if (!isOwner) {
global.dfail('owner', m, conn)
throw false
}
bot.temporal = isEnable
break

case 'المستوي': case 'autonivel': case 'nivelautomatico':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.autolevelup = isEnable          
break

case 'autosticker':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.autosticker = isEnable          
break

case 'رياكشن': case 'reaccion': case 'emojis': case 'antiemojis': case 'reacciones': case 'reaciones':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.reaction = isEnable          
break

case 'سبات': case 'antitoxicos': case 'antimalos':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antitoxic = isEnable
break

case 'audios':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.audios = isEnable          
break

case 'antiver': case 'modover': case 'modoobservar': case 'modobservar': case 'antiviewonce':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiver = isEnable 
break

case 'antiinternacional': case 'antinternacional': case 'antinternational': case 'antifake': case 'antifalsos': case 'antivirtuales': case 'antiextranjeros':		
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antifake = isEnable          
break

case 'jadibotmd': case 'modojadibot': case 'serbotmd': case 'modoserbot': 
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.jadibotmd = isEnable
break 

case 'اضافه-وطرد': case 'restringir':
isAll = true
if (!isOwner) {
global.dfail('owner', m, conn)
throw false
}
bot.restrict = isEnable
break

case 'nyimak':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['nyimak'] = isEnable
break

case 'القراءة-التلقائية': case 'autovisto':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.autoread2 = isEnable    
global.opts['القراءة-التلقائية'] = isEnable  
break

case 'ممنوع-اتصالات': case 'antillamar':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.antiCall = isEnable
break

case 'سبام':
isAll = true
if (!isOwner) {
global.dfail('owner', m, conn)
throw false
}
bot.antiSpam = isEnable
break

case 'فقط-المشرفين': case 'soloadmin':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.modoadmin = isEnable          
break    

case 'pconly': case 'privateonly': case 'soloprivados':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['pconly'] = isEnable
break

case 'خاص': case 'grouponly': case 'sologrupos':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['خاص'] = isEnable
break

case 'antiprivado':
case 'privado':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.antiPrivate = isEnable
break

case 'antitrabas':
case 'antitraba':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiTraba = isEnable
break

case 'simi':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.simi = isEnable
break

case 'swonly': case 'statusonly':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['swonly'] = isEnable
break
default:
if (!/[01]/.test(command)) return await conn.reply(m.chat, `${lenguajeGB.smsConfi10()}\n\n🌟 ${lenguajeGB.smsConfi2()} *@${toUser}*

${lenguajeGB.smsConfi3()}
${lenguajeGB.smsConfi4()}

${lenguajeGB.smsConfi5()}
${lenguajeGB.smsConfi6()}
${lenguajeGB.smsConfi7()}
${lenguajeGB.smsConfi8()}
${m.isGroup ? `` : `${lenguajeGB.smsConfi9()}`}

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

✦ ${lenguajeGB.smsParaAdmins()} ${m.isGroup ? chat.welcome ? '✅' : '❌' : lenguajeGB.smsNoGg()}
✦ ${usedPrefix + command} ترحيب
✦ ${lenguajeGB.smsWel2()}

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

✦ ${lenguajeGB.smsParaAdmins()} ${m.isGroup ? chat.detect ? '✅' : '❌' : lenguajeGB.smsNoGg()}
✦ ${usedPrefix + command} فعل-ردات
✦ ${lenguajeGB.smsDete2()}

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

✦ ${lenguajeGB.smsParaAdYOw()} ${m.isGroup ? chat.autolevelup ? '✅' : '❌' : lenguajeGB.smsNoGg()} 
✦ ${usedPrefix + command} المستوى-التلقائي
✦ ${lenguajeGB.smsANivel2()}

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

✦ ${lenguajeGB.smsParaOw()} ${bot.restrict ? '✅' : '❌'}
✦ ${usedPrefix + command} اضافه-وطرد
✦ ${lenguajeGB.smsRestri2()}

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

✦ ${lenguajeGB.smsParaOw()} ${bot.antiCall ? '✅' : '❌'}
✦ ${usedPrefix + command} ممنوع-اتصالات
✦ ${lenguajeGB.smsLlamar2()}

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

✦ ${lenguajeGB.smsParaOw()} ${bot.antiSpam ? '✅' : '❌'}
✦ ${usedPrefix + command} سبام
✦ ${lenguajeGB.smsAntiSp2()}

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

✦ ${lenguajeGB.smsParaOw()} ${global.opts['عام'] ? '❌' : '✅'}
✦ ${usedPrefix + command} عام
✦ ${lenguajeGB.smsModP2()}

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

✦ ${lenguajeGB.smsParaAdmins()} ${m.isGroup ? chat.modoadmin ? '✅' : '❌' : lenguajeGB.smsNoGg()} 
✦ ${usedPrefix + command} فقط-المشرفين
✦ ${lenguajeGB.smsModAd2()}

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

✦ ${lenguajeGB.smsParaOw()} ${global.opts['autoread'] ? '✅' : '❌'}
✦ ${usedPrefix + command} القراءة-التلقائية
✦ ${lenguajeGB.smsLect1()}

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

✦ ${lenguajeGB.smsParaAdYOw()} ${m.isGroup ? chat.reaction ? '✅' : '❌' : lenguajeGB.smsNoGg()}    
✦ ${usedPrefix + command} رياكشن
✦ ${lenguajeGB.smsReacc2()}

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

✦ ${lenguajeGB.smsParaAdmins()} ${m.isGroup ? chat.antitoxic ? '✅' : '❌' : lenguajeGB.smsNoGg()}
✦ ${usedPrefix + command} سبات
✦ ${lenguajeGB.smsAntitoc2()}

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

✦ ${lenguajeGB.smsParaAdYOw()} ${m.isGroup ? chat.delete ? '✅' : '❌' : lenguajeGB.smsNoGg()}
✦ ${usedPrefix + command} حذف-تلقائي
✦ ${lenguajeGB.smsAntiEli2()}

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

✦ ${lenguajeGB.smsParaAdmins()} ${m.isGroup ? chat.antiLink ? '✅' : '❌' : lenguajeGB.smsNoGg()}
✦ ${usedPrefix + command} روابط
✦ ${lenguajeGB.smsAntiE2()}

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

✦ ${lenguajeGB.smsParaAdmins()} ${m.isGroup ? chat.antiLink2 ? '✅' : '❌' : lenguajeGB.smsNoGg()}
✦ ${usedPrefix + command} جميع-روابط
✦ ${lenguajeGB.smsAntiEE2()}

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

✦ ${lenguajeGB.smsParaAdmins()} ${m.isGroup ? chat.antiTiktok ? '✅' : '❌' : lenguajeGB.smsNoGg()} 
✦ ${usedPrefix + command} روابط-تيكتوك
✦ ${lenguajeGB.smsAntiTT2()}

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

✦ ${lenguajeGB.smsParaAdmins()} ${m.isGroup ? chat.antiYoutube ? '✅' : '❌' : lenguajeGB.smsNoGg()}
✦ ${usedPrefix + command} روابط-يوتيوب
✦ ${lenguajeGB.smsAntiYT2()}

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

✦ ${lenguajeGB.smsParaAdmins()} ${m.isGroup ? chat.antiTelegram ? '✅' : '❌' : lenguajeGB.smsNoGg()}
✦ ${usedPrefix + command} روابط-تيلي
✦ ${lenguajeGB.smsAntiTEL2()}

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

✦ ${lenguajeGB.smsParaAdmins()} ${m.isGroup ? chat.antiFacebook ? '✅' : '❌' : lenguajeGB.smsNoGg()} 
✦ ${usedPrefix + command} روابط-فيس
✦ ${lenguajeGB.smsAntiFB2()}

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

✦ ${lenguajeGB.smsParaAdmins()} ${m.isGroup ? chat.antiInstagram ? '✅' : '❌' : lenguajeGB.smsNoGg()}
✦ ${usedPrefix + command} روابط-انستا
✦ ${lenguajeGB.smsAntiIG2()}

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

✦ ${lenguajeGB.smsParaAdmins()} ${m.isGroup ? chat.antiTwitter ? '✅' : '❌' : lenguajeGB.smsNoGg()}   
✦ ${usedPrefix + command} روابط-تويتر
✦ ${lenguajeGB.smsAntiTW2()}

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈


✦ ${lenguajeGB.smsParaOw()} ${global.opts['ممنوع-خاص'] ? '✅' : '❌'}
✦ ${usedPrefix + command} grouponly
✦ ${lenguajeGB.smsSOLOG2()}

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

${wm}`, fkontak, { mentions: [aa,] })

throw false
}
await conn.reply(m.chat, `${lenguajeGB['smsAvisoRG']()}ღ *_${lenguajeGB['smsMens1']()}_* *|* ${type} 
ღ *_${lenguajeGB['smsMens2']()}_* *|* ${isEnable ? lenguajeGB.smsEncender() : lenguajeGB.smsApagar()} 
ღ *_${lenguajeGB['smsMens3']()}_* *|* ${isAll ? lenguajeGB.smsMens4() : isUser ? '' : lenguajeGB.smsMens5()}`, fkontak, m)}	


handler.help = ['تفع', 'تعط'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^((تفع|تعط)يل|(tru|fals)e|(turn)?o(n|ff)|[01])$/i
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
