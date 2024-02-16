import axios from "axios";
import cheerio from "cheerio";
import FormData from "form-data";
const split = '|';
const handler = async (m, {conn, args: [effect], text: txt, usedPrefix, command, name}) => {
  if (!effect) throw '⟣┈┈┈┈┈┈┈┈┤🌸├┈┈┈┈┈┈┈┈⟢\n*⟣⟤⚡ اخـتـار اسـم مـن اللي مـوجـوديـن لاكن الامـر* بالانـجـلـيزي فقط\n*علي سبـيل المثال:*\n—⟣⟤ _.لوجو Wolf-Logo-Galaxy VENOM_\n\n*<عندك كتير  وكل مختلف/>*\n⟣┈┈┈┈┈┈┈┈┤🌸├┈┈┈┈┈┈┈┈⟢\n\n⟣⟤🍇 .لوجو ' + effects.map((v) => v.title).join('\n*⟣⟤⚡ .لوجو* ');
  if (!effects.find((v) => (new RegExp(v.title, 'gi')).test(effect))) throw `*[❗] انا لا اجد ${effect} حاول ان تكتبه بطريقه صحيحه*`;  
  let text = txt.replace(new RegExp(effect, 'gi'), '').trimStart();
  if (text.includes(split)) {
    text = text.split(split).map((t) => t.trim());
  } else {
    text = [text.trim()];
  }
  const effectoSelect = effects.find((effectz) => new RegExp(effectz?.title, 'i').test(effect));
  const res = await maker(effectoSelect?.url, [...text]).catch(_ => { throw '*[❗] الاستعمال الصحيح .لوجو فضاء فينوم*' })
   if (typeof res == 'number') throw res == -1 ? `*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙴𝙵𝙴𝙲𝚃𝙾 ${effect} 𝙽𝙾 𝙴𝚂𝚃𝙰 𝙴𝙽 𝙻𝙰 𝙻𝙸𝚂𝚃𝙰 𝙳𝙴 𝙴𝙵𝙴𝙲𝚃𝙾𝚂*` : `*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝚄𝚂𝙾 𝙲𝙾𝚁𝚁𝙴𝙲𝚃𝙾 𝙳𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙴𝚂 ${usedPrefix + command} ${effect} ${new Array(res).fill('texto').map((v, i) => v + (i ? i + 1 : '')).join('|')}*`;
  await conn.sendMessage(m.chat, {image: {url: res.image}, caption: `*تم تنفيذ العملية ✅!!*\n*الطلب: ${effect}*`}, {quoted: m});  
};
handler.help = ['logos'];
handler.tags = ['nulis'];
handler.command = /^(logo|لوجوهات|لوجو)$/i;
handler.limit = 5
export default handler;

var effects = [
  {
    'title': 'بحر',
    'url': 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html',
  },
  {
    'title': 'امريكا',
    'url': 'https://textpro.me/create-american-flag-3d-text-effect-online-1051.html',
  },
  {
    'title': 'خيال1',
    'url': 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html',
  },
  {
    'title': '3D-rainbow-color-calligraphy',
    'url': 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html',
  },
  {
    'title': '3D-water-pipe',
    'url': 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html',
  },
  {
    'title': 'Halloween-skeleton',
    'url': 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html',
  },
  {
    'title': 'a-spooky-Halloween',
    'url': 'https://textpro.me/create-a-spooky-halloween-text-effect-online-1046.html',
  },
  {
    'title': 'a-cinematic-horror',
    'url': 'https://textpro.me/create-a-cinematic-horror-text-effect-1045.html',
  },
  {
    'title': 'a-sketch',
    'url': 'https://textpro.me/create-a-sketch-text-effect-online-1044.html',
  },
  {
    'title': 'blue-circuit-style',
    'url': 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html',
  },
