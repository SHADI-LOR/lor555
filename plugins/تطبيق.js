import {search, download} from 'aptoide-scraper';
const handler = async (m, {conn, usedPrefix: prefix, command, text}) => {
 if (!text) throw `${lenguajeGB['smsAvisoMG']()} _*اكتب اسم التطبيق*_`;
  try {    
const searchA = await search(text);
const data5 = await download(searchA[0].id);
let response = `${eg}┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n┃💫 الاسم: ${data5.name}\n┃📦 المستند: ${data5.package}\n┃🕒 الانتاج: ${data5.lastup}\n┃💪 الحجم: ${data5.size}\n┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n┃ طايره و اجبلك التطبيق يعسل 🚀🚀🚀`
await conn.sendMessage(m.chat, {image: {url: data5.icon}, caption: response}, {quoted: m});
if (data5.size.includes('GB') || data5.size.replace(' MB', '') > 999) {
return await conn.sendMessage(m.chat, {text: '*الحجم كبير جداً.*'}, {quoted: m})}
await conn.sendMessage(m.chat, {document: {url: data5.dllink}, mimetype: 'application/vnd.android.package-archive', fileName: data5.name + '.apk', caption: null}, {quoted: m});
} catch {
throw `${lenguajeGB['smsAvisoFG']()} *حصل خطأ ما*`;
}};
handler.command = /^(apkmod|apk|modapk|تطبيق|aptoide|aptoidedl)$/i;
handler.register = true
handler.limit = 2
export default handler;
