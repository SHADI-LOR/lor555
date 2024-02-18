import uploadImage from '../lib/uploadImage.js';
import fetch from 'node-fetch';

let handler = async (m, { conn, usedPrefix, command }) => {
  let warning = `[❗] غلط یا حب\n*${usedPrefix + command}* @تاغ\n او سوي ريبلاي علی رسالة شخص`;

  if (!m.mentionedJid[0] && !m.quoted) {
    return m.reply(warning, m.chat, { mentions: conn.parseMention(warning) });
  }

  let who = m.mentionedJid[0] || m.quoted.sender;
  let media = await conn.profilePictureUrl(who, 'image').catch(_ => './src/avatar_contact.png');

  try {
    m.react(rwait);

    let downloadedImageBuffer = await fetch(media).then(res => res.buffer());
    let link = await uploadImage(downloadedImageBuffer);
    let lr = `https://api.popcat.xyz/wanted?image=${link}`;
    conn.sendFile(m.chat, lr, 'wanted.png', `⌯ ${global.sokuna}`, m);
    m.react(done);

  } catch (error) {
    m.react('❌');
    m.reply('[❗] مافي بروفايل');
    console.error('Error:', error.message);
  }
};

handler.help = ['wanted'];
handler.tags = ['meme'];
handler.command = ['مطلوب'];

export default handler;