import {toAudio} from '../lib/converter.js';
const handler = async (m, {conn, usedPrefix, command}) => {
let done = '🎵'
  const q = m.quoted ? m.quoted : m;
  const mime = (q || q.msg).mimetype || q.mediaType || '';
  if (!/video|audio/.test(mime)) throw `فين الفيديو الي هتحوله لصوت*`;
  const media = await q.download();
  if (!media) throw '*حجم الفيديو كبير*';
  const audio = await toAudio(media, 'mp4');
  if (!audio.data) throw '* خطا*';
  conn.sendMessage(m.chat, {audio: audio.data, mimetype: 'audio/mpeg'}, {quoted: m});
m.react(done)
};
handler.alias = ['tomp3', 'toaudio'];
handler.command = /^tomp3|لصوت$/i;
export default handler;
