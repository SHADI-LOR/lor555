import translate from '@vitalets/google-translate-api'
import { Anime } from "@shineiichijo/marika"
const client = new Anime();
let handler = async(m, { conn, text, usedPrefix }) => {
if (!text) throw `${lenguajeGB['smsAvisoMG']()}يرجى كتابة اسم الانمي`
try {  
let anime = await client.searchAnime(text)
let result = anime.data[0];
let resultes = await translate(`${result.background}`, { to: 'ar', autoCorrect: true })   
let resultes2 = await translate(`${result.synopsis}`, { to: 'ar', autoCorrect: true })   
let AnimeInfo = `
العنوان 
❣ ${title}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
الحلقات
❣ ${episodes}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
الكاتب
❣ ${type}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
التقييم
❣ ${rated}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
النتيجة
❣ ${score}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
𝙈𝙄𝙀𝙈𝘽𝙍𝙊𝙎 | 𝙈𝙀𝙈𝘽𝙀𝙍𝙎
❣ ${members}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
𝙎𝙄𝙉𝙊𝙋𝙎𝙄𝙎 𝙀𝙉𝙂𝙇𝙄𝙎𝙃
❣ ${synopsis}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
رابط
❣ ${url}`
conn.sendFile(m.chat, result.images.jpg.image_url, 'error.jpg', AnimeInfo, m)
let info = `\n💝 *تعرف على الأخبار وتذكر أن لديك أحدث إصدار*
  `
conn.sendButton(m.chat, info, [
['🔄 𝙎𝙞𝙜𝙪𝙞𝙚𝙣𝙩𝙚 | 𝙉𝙚𝙭𝙩', `${usedPrefix + command} ${text}`],
['🔍 𝙋𝙞𝙣𝙩𝙚𝙧𝙚𝙨𝙩 ', `#pinterest ${text}`],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']], m)

} catch {
throw `*[❗] خطأ, حدث مشكلة*`  
}}
handler.help = ['animeinfo <anime>']
handler.tags = ['internet']
handler.command = /^(بحث-انمي)$/i
handler.exp = 50
handler.level = 1
export default handler
