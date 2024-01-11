let handler = async (m, { conn, args, text, usedPrefix, command }) => {
let who 
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
else who = m.chat
let name = await conn.getName(m.sender)	
let user = global.db.data.users[who]
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
if (!global.db.data.settings[conn.user.jid].restrict) return conn.reply(m.chat, `${lenguajeGB['smsAvisoAG']()}${lenguajeGB['smsSoloOwner']()}`, fkontak, m) 
if (!text) throw `${lenguajeGB['smsAvisoMG']()} ${lenguajeGB['smsMalused']()}\n*${usedPrefix + command}* 59355555555`
if (text.includes('+')) throw  `${lenguajeGB['smsAvisoMG']()}حط الرقم كله مع بعض بدون *+*`
let group = m.chat
let link = 'https://chat.whatsapp.com/' + await conn.groupInviteCode(group)

      await conn.reply(text+'@s.whatsapp.net', `مرحبا فيك معك ايتاتشي بوت تم استخدم احد من المشرفين لاضافتك ولككن لا يمكنني اضافتك ف لهاذا قمت ارسال رابط اليك!!\n\n${link}`, m, {mentions: [m.sender]})
        m.reply(`*@${who.split`@`[0]}*\n*إرسال دعوة إلى الخاص بك...*`) 

}
handler.help = ['add', '+'].map(v => v + ' número')
handler.tags = ['group']
handler.command = /^(اضف|add)$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
handler.fail = null
export default handler
