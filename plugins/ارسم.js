import fetch from 'node-fetch';
const handler = async (m, {conn, text, usedPrefix, command}) => {
  if (!text) throw `*[🎨] اكتب نص لاتستطيع رسمه بالذكاء الاصطناعي لاكن الأمر لا يعمل الا باللغة الإنجليزية فقط*\n\n*—◉ مثل*\n*◉ ${usedPrefix + command} gatitos llorando*\n*◉ ${usedPrefix + command} hatsune miku beso*`;
    await conn.sendMessage(m.chat, {text: '*_💝جـاري الـتـحـقـق مـن الـرسـمـه._*'}, {quoted: m});
  m.react(rwait);
    try {
      const tiores1 = await fetch(`https://vihangayt.me/tools/imagine?q=${text}`);
      const json1 = await tiores1.json();
      await conn.sendMessage(m.chat, {image: {url: json1.data}}, {quoted: m});
    } catch {  
        console.log('[❗] لم استطع اجاد طلبك');  
    try {
      const tiores2 = await conn.getFile(`https://vihangayt.me/tools/midjourney?q=${text}`);
      await conn.sendMessage(m.chat, {image: {url: tiores2.data}}, {quoted: m});
    } catch {
        console.log('[❗] لم استطع اجاد طلبك.');
    try {
      const tiores3 = await fetch(`https://vihangayt.me/tools/lexicaart?q=${text}`);
      const json3 = await tiores3.json();
      await conn.sendMessage(m.chat, {image: {url: json3.data[0].images[0].url}}, {quoted: m});
    } catch {
        console.log('[❗] لم استطع اجاد طلبك.');
    try {
      const tiores4 = await conn.getFile(`https://api.lolhuman.xyz/api/dall-e?apikey=${lolkeysapi}&text=${text}`);
      await conn.sendMessage(m.chat, {image: {url: tiores4.data}}, {quoted: m});
    } catch {
      console.log('[❗] حصل خطأ.');
      throw `*[❗] حصل خطأ*`;
m.react(dmoji);
   }}
 }}
};
handler.command = ['dall-e', 'dalle', 'ia2', 'cimg', 'openai3', 'a-img', 'aimg', 'ارسم'];
handler.limit = 3;
export default handler;
