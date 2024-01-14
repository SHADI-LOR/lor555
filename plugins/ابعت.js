let currentLink = "https://chat.whatsapp.com/ErxcLfibZTOGlOmdaGpOa9"; // رابط افتراضي

let handler = async (m, { conn, text, command }) => {
  if (command === 'تغير') {
    if (!text.startsWith('https://chat.whatsapp.com/')) {
      m.reply('يرجى إدخال رابط صالح.');
      return;
    }
    currentLink = text;
    m.reply(`تم تغيير الرابط إلى: ${currentLink}`);
    return;
  }

  let mentioned = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.sender;

  if (!mentioned) {
    m.reply('من فضلك قم بمنشن العضو.');
    return;
  }

  conn.sendMessage(mentioned, { text: currentLink }, { quoted: m });
  m.reply('تم إرسال الرابط.');
};
handler.owner = true;
handler.command = ['ابعت', 'تغير'];
export default handler;
