let WAMessageStubType = (await import(global.baileys)).default
export async function before(m, { conn }) {
  if (!m.messageStubType || !m.isGroup) return
  let usuario = `@${m.sender.split`@`[0]}`
  let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
  if (m.messageStubType == 21) {
    await this.sendMessage(m.chat, { text: `${usuario} لقد قمت بتغيير اسم للقروب 𝘼:\n\n*${m.messageStubParameters[0]}*`, mentions: [m.sender] }, { quoted: fkontak }) 
  } else if (m.messageStubType == 22) {
    await this.sendMessage(m.chat, { text: `${usuario} لقد قمت بتغيير صورة للقروب`, mentions: [m.sender] }, { quoted: fkontak }) 
  } else if (m.messageStubType == 24) {
    await this.sendMessage(m.chat, { text: `${usuario} وصف الجديد للقروب هو:\n\n${m.messageStubParameters[0]}`, mentions: [m.sender] }, { quoted: fkontak })
  } else if (m.messageStubType == 25) {
    await this.sendMessage(m.chat, { text: `🔒 آلان *${m.messageStubParameters[0] == 'on' ? 'المشرفين ' : 'الجميع'}* يمكن تحرير معلومات المجموعة`, mentions: [m.sender] }, { quoted: fkontak })
  } else if (m.messageStubType == 26) {
    await this.sendMessage(m.chat, { text: `المجموعة *${m.messageStubParameters[0] == 'on' ? 'مغلق 🔒' : 'مفتوح 🔓'}*\n ${m.messageStubParameters[0] == 'on' ? 'يمكن للمشرفين فقط الكتابة' : 'يمكن للجميع الكتابة الآن'} في هذه المجموعة`, mentions: [m.sender] }, { quoted: fkontak })
  } else if (m.messageStubType == 29) {
    await this.sendMessage(m.chat, { text: `@${m.messageStubParameters[0].split`@`[0]} أنت الآن مشرف/ه في هذه المجموعة\n\n🫵الاتخاذ الي اخذه: ${usuario}`, mentions: [`${m.sender}`,`${m.messageStubParameters[0]}`] }, { quoted: fkontak })
  } else if (m.messageStubType == 30) {
    await this.sendMessage(m.chat, { text: `@${m.messageStubParameters[0].split`@`[0]} لم تعد مشرف/ه القروب بعد الان\n\n🫵الاتخاذ الي اخذه: ${usuario}`, mentions: [`${m.sender}`,`${m.messageStubParameters[0]}`] }, { quoted: fkontak })
  } else if (m.messageStubType == 72) {
    await this.sendMessage(m.chat, { text: `${usuario} قم بتغيير مدة الرسائل المؤقتة إلى*@${m.messageStubParameters[0]}*`, mentions: [m.sender] }, { quoted: fkontak })
  } else if (m.messageStubType == 123) {
    await this.sendMessage(m.chat, { text: `${usuario} أقوم بإلغاء تنشيط الرسائل المؤقتة.`, mentions: [m.sender] }, { quoted: fkontak })
  } else {
    console.log({
      messageStubType: m.messageStubType,
      messageStubParameters: m.messageStubParameters,
      type: WAMessageStubType[m.messageStubType], 
    });
  }
}
