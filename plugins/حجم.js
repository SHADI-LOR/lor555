import uploadImage from '../lib/uploadImage.js';
import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, command, args, text}) => {
  const q = m.quoted ? m.quoted : m;
  const mime = (q.msg || q).mimetype || '';
  if (!mime) throw '⚠️️ قم بالرد علي الصوره او الفيديو الي عايز تغير حجمها\nمثل : .حجم 500';
  if (!text) throw '⚠️️ ادخل الحجم للصوره او الفيديو \nمثل: .حجم 500';
  if (isNaN(text)) throw ' 🔢 اختار رقم';
  if (!/image\/(jpe?g|png)|video|document/.test(mime)) throw `⚠️️ التنسيق غير مدعوم`;
  const img = await q.download();
  const url = await uploadImage(img);

  if (/image\/(jpe?g|png)/.test(mime)) {
    conn.sendMessage(m.chat, {image: {url: url}, caption: `Aqui tienes`, fileLength: `${text}`, mentions: [m.sender]}, {ephemeralExpiration: 24*3600, quoted: m});
  } else if (/video/.test(mime)) {
    return conn.sendMessage(m.chat, {video: {url: url}, caption: `Aqui tienes`, fileLength: `${text}`, mentions: [m.sender]}, {ephemeralExpiration: 24*3600, quoted: m});
  }
};
handler.tags = ['tools'];
handler.help = ['tamaño <cantidad>'];
handler.command = /^(length|filelength|edittamaño|totamaño|حجم)$/i;
export default handler;
