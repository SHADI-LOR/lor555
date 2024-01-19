import fetch from 'node-fetch';
import uploader from '../lib/uploadImage.js';

var handler = async (m, { conn, text, command, usedPrefix }) => {
  let q = m.quoted ? m.quoted : m;
  let mime = (q.msg || q).mimetype || q.mediaType || '';
  if (/image/g.test(mime) && !/webp/g.test(mime)) {
    let buffer = await q.download();
    conn.sendPresenceUpdate('composing', m.chat);

    let media = await uploader(buffer);
    let json = await (await fetch(`https://aemt.me/bardimg?url=${media}&text=${text}`)).json();

    conn.sendMessage(m.chat, { text: json.result }, { quoted: m });
  } else {
    return conn.reply(m.chat, `*🎌 قم بالرد علي الصوره و ادخل الاستفسارات و السوأل الخاص بك`, m);
  }
};

handler.help = ['bardimg'];
handler.tags = ['ai'];
handler.command = /^(شوف)$/i;
handler.limit = true;

export default handler;
