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
    'title': 'قوس-قزح',
    'url': 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html',
  },
  {
    'title': 'ماء',
    'url': 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html',
  },
  {
    'title': 'عظمي',
    'url': 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html',
  },
  {
    'title': 'هالوين',
    'url': 'https://textpro.me/create-a-spooky-halloween-text-effect-online-1046.html',
  },
  {
    'title': 'رعب',
    'url': 'https://textpro.me/create-a-cinematic-horror-text-effect-1045.html',
  },
  {
    'title': 'تخطيط',
    'url': 'https://textpro.me/create-a-sketch-text-effect-online-1044.html',
  },
  {
    'title': فضاءي',
    'url': 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html',
  },
  {
    'title': 'فضاء',
    'url': 'https://textpro.me/create-space-text-effects-online-free-1042.html',
  },
  {
    'title': 'معدني',
    'url': 'https://textpro.me/create-a-metallic-text-effect-free-online-1041.html',
  },
  {
    'title': 'معدني2',
    'url': 'https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html',
  },
  {
    'title': 'كامريكا',
    'url': 'https://textpro.me/create-a-captain-america-text-effect-free-online-1039.html',
  },
  {
    'title': 'خيال2',
    'url': 'https://textpro.me/create-science-fiction-text-effect-online-free-1038.html',
  },
  {
    'title': 'كلاسيكي',
    'url': 'https://textpro.me/video-game-classic-8-bit-text-effect-1037.html',
  },
  {
    'title': 'رعب-اخضر',
    'url': 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html',
  },
  {
    'title': 'محول',
    'url': 'https://textpro.me/create-a-transformer-text-effect-online-1035.html',
  },
  {
    'title': 'توت',
    'url': 'https://textpro.me/create-berry-text-effect-online-free-1033.html',
  },
  {
    'title': 'الطبقات',
    'url': 'https://textpro.me/create-layered-text-effects-online-free-1032.html',
  },
  {
    'title': 'رعد',
    'url': 'https://textpro.me/online-thunder-text-effect-generator-1031.html',
  },
  {
    'title': 'صهريج',
    'url': 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html',
  },
  {
    'title': 'حجر',
    'url': 'https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html',
  },
  {
    'title': 'ضوء',
    'url': 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html',
  },
  {
    'title': 'عطل',
    'url': 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html',
  },
  {
    'title': 'خلل',
    'url': 'https://textpro.me/create-a-glitch-text-effect-online-free-1026.html',
  },
  {
    'title': 'سطح',
    'url': 'https://textpro.me/create-embossed-text-effect-on-cracked-surface-1024.html',
  },
  {
    'title': 'زجاج',
    'url': 'https://textpro.me/broken-glass-text-effect-free-online-1023.html',
  },
  {
      'title': 'ورق',   
      'url': 'https://textpro.me/create-art-paper-cut-text-effect-online-1022.html',
  },
  {
    'title': 'ابيض-اسود',
    'url': 'https://textpro.me/create-artistic-black-and-white-status-and-quote-with-your-photos-1021.html',
  },
  {
    'title': 'انترنت',
    'url': 'https://textpro.me/online-3d-gradient-text-effect-generator-1020.html',
  },
  {
    'title': 'معدني2',
    'url': 'https://textpro.me/create-a-3d-glossy-metal-text-effect-1019.html',
  },
  {
    'title': 'لوحة',
    'url': 'https://textpro.me/create-3d-realistic-text-effect-on-the-beach-online-1018.html',
  },
  {
    'title': 'قصص',
    'url': 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html',
  },
  {
    'title': 'ضباب',
    'url': 'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html',
  },
  {
    'title': 'شيطاني',
    'url': 'https://textpro.me/write-text-on-foggy-window-online-free-1015.html',
  },
  {
    'title': 'محيط',
    'url': 'https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html',
  },
  {
    'title': 'شعار',
    'url': 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html',
  },
  {
    'title': 'جرافيت1',
    'url': 'https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html',
  },
  {
    'title': 'جرافيت2',
    'url': 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html',
  },
  {
    'title': 'جرافيت3',
    'url': 'https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html',
  },
  {
    'title': 'جرافيت4',
    'url': 'https://textpro.me/create-cool-wall-graffiti-text-effect-online-1009.html',
  },
  {
    'title': 'ثلج',
    'url': 'https://textpro.me/create-a-christmas-holiday-snow-text-effect-1007.html',
  },
  {
    'title': 'تكنولوجيا',
    'url': 'https://textpro.me/create-a-futuristic-technology-neon-light-text-effect-1006.html',
  },
  {
    'title': 'شتاء',
    'url': 'https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html',
  },
  {
    'title': 'سحابه',
    'url': 'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html',
  },
  {
    'title': 'ذهب',
    'url': 'https://textpro.me/3d-luxury-gold-text-effect-online-1003.html',
  },
  {
    'title': 'تدرج',
    'url': 'https://textpro.me/3d-gradient-text-effect-online-free-1002.html',
  },
  {
    'title': 'بلاكبينك',
    'url': 'https://textpro.me/create-blackpink-logo-style-online-1001.html',
  },
  {
    'title': 'مصباح',
    'url': 'https://textpro.me/create-realistic-vintage-style-light-bulb-1000.html',
  },
  {
    'title': 'سحابة1',
    'url': 'https://textpro.me/create-realistic-cloud-text-effect-online-free-999.html',
  },
  {
    'title': 'سحابة2',
    'url': 'https://textpro.me/create-a-cloud-text-effect-in-the-sky-online-997.html',
  },
  {
    'title': 'رمل1',
    'url': 'https://textpro.me/write-in-sand-summer-beach-free-online-991.html',
  },
  {
    'title': 'رمل2',
    'url': 'https://textpro.me/sand-writing-text-effect-online-990.html',
  },
  {
    'title': 'نقش',
    'url': 'https://textpro.me/sand-engraved-3d-text-effect-989.html',
  },
  {
    'title': 'رمل3',
    'url': 'https://textpro.me/create-a-summery-sand-writing-text-effect-988.html',
  },
  {
    'title': 'بالون',
    'url': 'https://textpro.me/foil-balloon-text-effect-for-birthday-987.html',
  },
  {
    'title': 'لاصق',
    'url': 'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html',
  },
  {
    'title': 'فضائي',
    'url': 'https://textpro.me/create-space-3d-text-effect-online-985.html',
  },
  {
    'title': 'ذهب-داكن',
    'url': 'https://textpro.me/metal-dark-gold-text-effect-984.html',
  },
  {
    'title': 'تيكتوك',
    'url': 'https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html',
  },
  {
    'title': 'نيون',
    'url': 'https://textpro.me/create-a-stone-text-effect-online-982.html',
  },
  {
    'title': 'جلاكسيي',
    'url': 'https://textpro.me/neon-light-text-effect-with-galaxy-style-981.html',
  },
  {
    'title': '1917-ستيل',
    'url': 'https://textpro.me/1917-style-text-effect-online-980.html',
  },
  {
    'title': 'قديم',
    'url': 'https://textpro.me/80-s-retro-neon-text-effect-online-979.html',
  },
  {
    'title': 'ديناميكي',
    'url': 'https://textpro.me/minion-text-effect-3d-online-978.html',
  },
  {
    'title': 'بنهاب',
    'url': 'https://textpro.me/pornhub-style-logo-online-generator-free-977.html',
  },
  {
    'title': 'مزدوج',
    'url': 'https://textpro.me/double-exposure-text-effect-black-white-976.html',
  },
  {
    'title': 'هولوجرافي',
    'url': 'https://textpro.me/holographic-3d-text-effect-975.html',
  },
  {
    'title': 'الافنجرز',
    'url': 'https://textpro.me/create-3d-avengers-logo-online-974.html',
  },
  {
    'title': 'الاجواني',
    'url': 'https://textpro.me/metal-purple-dual-effect-973.html',
  },
  {
    'title': 'مارفل',
    'url': 'https://textpro.me/create-logo-style-marvel-studios-ver-metal-972.html',
  },
  {
    'title': 'فضة',
    'url': 'https://textpro.me/create-logo-style-marvel-studios-online-971.html',
  },
  {
    'title': 'فضة2',
    'url': 'https://textpro.me/deluxe-silver-text-effect-970.html',
  }, 
  {
    'title': 'معادن',
    'url': 'https://textpro.me/color-full-luxury-metal-text-effect-969.html',
  },
  {
    'title': 'جولد',
    'url': 'https://textpro.me/glossy-blue-metal-text-effect-967.html',
  },
  {
    'title': 'جولد2',
    'url': 'https://textpro.me/deluxe-gold-text-effect-966.html',
  },
  {
    'title': 'كربون',
    'url': 'https://textpro.me/glossy-carbon-text-effect-965.html',
  },
  {
    'title': 'نسيج',
    'url': 'https://textpro.me/fabric-text-effect-online-964.html',
  },
  {
    'title': 'نينون',
    'url': 'https://textpro.me/neon-text-effect-online-963.html',
  },
  {
    'title': 'عيد1',
    'url': 'https://textpro.me/new-year-cards-3d-by-name-960.html',
  },
  {
    'title': 'عيد2',
    'url': 'https://textpro.me/happ-new-year-card-firework-gif-959.html',
  },
  {
    'title': 'بالون3',
    'url': 'https://textpro.me/fullcolor-balloon-text-effect-958.html',
  },
  {
    'title': 'معادنن2',
    'url': 'https://textpro.me/create-text-logo-3d-metal-online-957.html',
  },
  {
    'title': 'جولد3',
    'url': 'https://textpro.me/create-avatar-gold-online-956.html',
  },
  {
    'title': 'Text-Logo-3D-Metal-Silver',
    'url': 'https://textpro.me/text-logo-3d-metal-silver-946.html',
  },
  {
    'title': 'Text-Logo-3D-Metal-Rose-Gold',
    'url': 'https://textpro.me/text-logo-3d-metal-rose-gold-945.html',
  },
  {
    'title': 'Text-Logo-3D-Metal-Gold',
    'url': 'https://textpro.me/text-logo-3d-metal-gold-944.html',
  },
  {
    'title': 'Text-Logo-3D-Metal-Galaxy',
    'url': 'https://textpro.me/text-logo-3d-metal-galaxy-943.html',
  },
  {
    'title': 'Xmas-Cards-3D',
    'url': 'https://textpro.me/xmas-cards-3d-online-942.html',
  },
  {
    'title': 'Blood-Text-On-The-Frosted-Glass',
    'url': 'https://textpro.me/blood-text-on-the-frosted-glass-941.html',
  },
  {
    'title': 'Halloween-Fire',
    'url': 'https://textpro.me/halloween-fire-text-effect-940.html',
  },
  {
    'title': 'Metal-Dark-Gold',
    'url': 'https://textpro.me/metal-dark-gold-text-effect-online-939.html',
  },
  {
    'title': 'Lion-Logo-Mascot',
    'url': 'https://textpro.me/create-lion-logo-mascot-online-938.html',
  },
  {
    'title': 'Wolf-Logo-Black-&-White',
    'url': 'https://textpro.me/create-wolf-logo-black-white-937.html',
  },
  {
    'title': 'Wolf-Logo-Galaxy',
    'url': 'https://textpro.me/create-wolf-logo-galaxy-online-936.html',
  },
  {
    'title': 'Ninja-Logo',
    'url': 'https://textpro.me/create-ninja-logo-online-935.html',
  },
  {
    'title': 'Logo-Joker',
    'url': 'https://textpro.me/create-logo-joker-online-934.html',
  },
  {
    'title': 'Wicker',
    'url': 'https://textpro.me/wicker-text-effect-online-932.html',
  },
  {
    'title': 'Natural-Leaves',
    'url': 'https://textpro.me/natural-leaves-text-effect-931.html',
  },
  {
    'title': 'Firework-Sparkle',
    'url': 'https://textpro.me/firework-sparkle-text-effect-930.html',
  },
  {
    'title': 'Skeleton',
    'url': 'https://textpro.me/skeleton-text-effect-online-929.html',
  },
  {
    'title': 'Red-Foil-Balloon',
    'url': 'https://textpro.me/red-foil-balloon-text-effect-928.html',
  },
  {
    'title': 'Purple-Foil-Balloon',
    'url': 'https://textpro.me/purple-foil-balloon-text-effect-927.html',
  },
  {
    'title': 'Pink-Foil-Balloon',
    'url': 'https://textpro.me/pink-foil-balloon-text-effect-926.html',
  },
  {
    'title': 'Green-Foil-Balloon',
    'url': 'https://textpro.me/green-foil-balloon-text-effect-925.html',
  },
  {
    'title': 'Cyan-Foil-Balloon',
    'url': 'https://textpro.me/cyan-foil-balloon-text-effect-924.html',
  },
  {
    'title': 'Blue-Foil-Balloon',
    'url': 'https://textpro.me/blue-foil-balloon-text-effect-923.html',
  },
  {
    'title': 'Gold-Foil-Balloon',
    'url': 'https://textpro.me/gold-foil-balloon-text-effect-922.html',
  },
  {
    'title': 'Steel',
    'url': 'https://textpro.me/steel-text-effect-online-921.html',
  },
  {
    'title': 'Ultra-Gloss',
    'url': 'https://textpro.me/ultra-gloss-text-effect-online-920.html',
  },
  {
    'title': 'Denim',
    'url': 'https://textpro.me/denim-text-effect-online-919.html',
  },
  {
    'title': 'Decorate-Green',
    'url': 'https://textpro.me/decorate-green-text-effect-918.html',
  },
  {
    'title': 'Decorate-Purple',
    'url': 'https://textpro.me/decorate-purple-text-effect-917.html',
  },
  {
    'title': 'Peridot-Stone',
    'url': 'https://textpro.me/peridot-stone-text-effect-916.html',
  },
  {
    'title': 'Rock',
    'url': 'https://textpro.me/rock-text-effect-online-915.html',
  },
  {
    'title': 'Lava',
    'url': 'https://textpro.me/lava-text-effect-online-914.html',
  },
  {
    'title': 'Yellow-Glass',
    'url': 'https://textpro.me/yellow-glass-text-effect-913.html',
  },
  {
    'title': 'Purple-Glass',
    'url': 'https://textpro.me/purple-glass-text-effect-912.html',
  },
  {
    'title': 'Orange-Glass',
    'url': 'https://textpro.me/orange-glass-text-effect-911.html',
  },
  {
    'title': 'Green-Glass',
    'url': 'https://textpro.me/green-glass-text-effect-910.html',
  },
  {
    'title': 'Cyan-Glass',
    'url': 'https://textpro.me/cyan-glass-text-effect-909.html',
  },
  {
    'title': 'Blue-Glass',
    'url': 'https://textpro.me/blue-glass-text-effect-908.html',
  },
  {
    'title': 'Red-Glass',
    'url': 'https://textpro.me/red-glass-text-effect-907.html',
  },
  {
    'title': 'Purple-Shiny-Glass',
    'url': 'https://textpro.me/purple-shiny-glass-text-effect-906.html',
  },
  {
    'title': 'Captain-America',
    'url': 'https://textpro.me/captain-america-text-effect-905.html',
  },
  {
    'title': 'Robot-R2-D2',
    'url': 'https://textpro.me/robot-r2-d2-text-effect-903.html',
  },
  {
    'title': 'Rainbow-Equalizer',
    'url': 'https://textpro.me/rainbow-equalizer-text-effect-902.html',
  },
  {
    'title': 'Toxic',
    'url': 'https://textpro.me/toxic-text-effect-online-901.html',
  },
  {
    'title': 'Pink-Sparkling-Jewelry',
    'url': 'https://textpro.me/pink-sparkling-jewelry-text-effect-899.html',
  },
  {
    'title': 'Blue-Sparkling-Jewelry',
    'url': 'https://textpro.me/blue-sparkling-jewelry-text-effect-898.html',
  },
  {
    'title': 'Green-Sparkling-Jewelry',
    'url': 'https://textpro.me/green-sparkling-jewelry-text-effect-897.html',
  },
  {
    'title': 'Purple-Sparkling-Jewelry',
    'url': 'https://textpro.me/purple-sparkling-jewelry-text-effect-896.html',
  },
  {
    'title': 'Gold-Sparkling-Jewelry',
    'url': 'https://textpro.me/gold-sparkling-jewelry-text-effect-895.html',
  },
  {
    'title': 'Red-Sparkling-Jewelry',
    'url': 'https://textpro.me/red-sparkling-jewelry-text-effect-894.html',
  },
  {
    'title': 'Cyan-Sparkling-Jewelry',
    'url': 'https://textpro.me/cyan-sparkling-jewelry-text-effect-893.html',
  },
  {
    'title': 'Purple-Glass',
    'url': 'https://textpro.me/purple-glass-text-effect-online-892.html',
  },
  {
    'title': 'Decorative-Glass',
    'url': 'https://textpro.me/decorative-glass-text-effect-891.html',
  },
  {
    'title': 'Chocolate-Cake',
    'url': 'https://textpro.me/chocolate-cake-text-effect-890.html',
  },
  {
    'title': 'Strawberry',
    'url': 'https://textpro.me/strawberry-text-effect-online-889.html',
  },
  {
    'title': 'Koi-Fish',
    'url': 'https://textpro.me/koi-fish-text-effect-online-888.html',
  },
  {
    'title': 'Bread',
    'url': 'https://textpro.me/bread-text-effect-online-887.html',
  },
  {
    'title': 'Matrix-Style',
    'url': 'https://textpro.me/matrix-style-text-effect-online-884.html',
  },
  {
    'title': 'Horror-Blood',
    'url': 'https://textpro.me/horror-blood-text-effect-online-883.html',
  },
  {
    'title': 'Neon-Light',
    'url': 'https://textpro.me/neon-light-text-effect-online-882.html',
  },
  {
    'title': 'Thunder',
    'url': 'https://textpro.me/create-thunder-text-effect-online-881.html',
  },
  {
    'title': '3D-Box',
    'url': 'https://textpro.me/3d-box-text-effect-online-880.html',
  },
  {
    'title': 'Neon',
    'url': 'https://textpro.me/neon-text-effect-online-879.html',
  },
  {
    'title': 'Road-Warning',
    'url': 'https://textpro.me/road-warning-text-effect-878.html',
  },
  {
    'title': '3D-Steel',
    'url': 'https://textpro.me/3d-steel-text-effect-877.html',
  },
  {
    'title': 'Bokeh',
    'url': 'https://textpro.me/bokeh-text-effect-876.html',
  },
  {
    'title': 'Green-Neon',
    'url': 'https://textpro.me/green-neon-text-effect-874.html',
  },
  {
    'title': 'Free-Advanced-Glow',
    'url': 'https://textpro.me/free-advanced-glow-text-effect-873.html',
  },
  {
    'title': 'Dropwater',
    'url': 'https://textpro.me/dropwater-text-effect-872.html',
  },
  {
    'title': 'Break-Wall',
    'url': 'https://textpro.me/break-wall-text-effect-871.html',
  },
  {
    'title': 'Chrismast-Gift',
    'url': 'https://textpro.me/chrismast-gift-text-effect-869.html',
  },
  {
    'title': 'Honey',
    'url': 'https://textpro.me/honey-text-effect-868.html',
  },
  {
    'title': 'Plastic-Bag-Drug',
    'url': 'https://textpro.me/plastic-bag-drug-text-effect-867.html',
  },
  {
    'title': 'Horror-Gift',
    'url': 'https://textpro.me/horror-gift-text-effect-866.html',
  },
  {
    'title': 'Marble-Slabs',
    'url': 'https://textpro.me/marble-slabs-text-effect-864.html',
  },
  {
    'title': 'Marble',
    'url': 'https://textpro.me/marble-text-effect-863.html',
  },
  {
    'title': 'Ice-Cold',
    'url': 'https://textpro.me/ice-cold-text-effect-862.html',
  },
  {
    'title': 'Fruit-Juice',
    'url': 'https://textpro.me/fruit-juice-text-effect-861.html',
  },
  {
    'title': 'Rusty-Metal',
    'url': 'https://textpro.me/rusty-metal-text-effect-860.html',
  },
  {
    'title': 'Abstra-Gold',
    'url': 'https://textpro.me/abstra-gold-text-effect-859.html',
  },
  {
    'title': 'Biscuit',
    'url': 'https://textpro.me/biscuit-text-effect-858.html',
  },
  {
    'title': 'Bagel',
    'url': 'https://textpro.me/bagel-text-effect-857.html',
  },
  {
    'title': 'Wood',
    'url': 'https://textpro.me/wood-text-effect-856.html',
  },
  {
    'title': 'SCI---Fi',
    'url': 'https://textpro.me/sci-fi-text-effect-855.html',
  },
  {
    'title': 'Metal-Rainbow',
    'url': 'https://textpro.me/metal-rainbow-text-effect-854.html',
  },
  {
    'title': 'Purple-Gem',
    'url': 'https://textpro.me/purple-gem-text-effect-853.html',
  },
  {
    'title': 'Shiny-Metal',
    'url': 'https://textpro.me/shiny-metal-text-effect-852.html',
  },
  {
    'title': 'Yellow-Jewelry',
    'url': 'https://textpro.me/yellow-jewelry-text-effect-851.html',
  },
  {
    'title': 'Silver-Jewelry',
    'url': 'https://textpro.me/silver-jewelry-text-effect-850.html',
  },
  {
    'title': 'Red-Jewelry',
    'url': 'https://textpro.me/red-jewelry-text-effect-849.html',
  },
  {
    'title': 'Purple-Jewelry',
    'url': 'https://textpro.me/purple-jewelry-text-effect-848.html',
  },
  {
    'title': 'Orange-Jewelry',
    'url': 'https://textpro.me/orange-jewelry-text-effect-847.html',
  },
  {
    'title': 'Green-Jewelry',
    'url': 'https://textpro.me/green-jewelry-text-effect-846.html',
  },
  {
    'title': 'Cyan-Jewelry',
    'url': 'https://textpro.me/cyan-jewelry-text-effect-845.html',
  },
  {
    'title': 'Blue-Jewelry',
    'url': 'https://textpro.me/blue-jewelry-text-effect-844.html',
  },
  {
    'title': 'Hot-Metal',
    'url': 'https://textpro.me/hot-metal-text-effect-843.html',
  },
  {
    'title': 'Hexa-Golden',
    'url': 'https://textpro.me/hexa-golden-text-effect-842.html',
  },
  {
    'title': 'Blue-Glitter',
    'url': 'https://textpro.me/blue-glitter-text-effect-841.html',
  },
  {
    'title': 'Purple-Glitter',
    'url': 'https://textpro.me/purple-glitter-text-effect-840.html',
  },
  {
    'title': 'Pink-Glitter',
    'url': 'https://textpro.me/pink-glitter-text-effect-839.html',
  },
  {
    'title': 'Green-Glitter',
    'url': 'https://textpro.me/green-glitter-text-effect-838.html',
  },
  {
    'title': 'Silver-Glitter',
    'url': 'https://textpro.me/silver-glitter-text-effect-837.html',
  },
  {
    'title': 'Gold-Glitter',
    'url': 'https://textpro.me/gold-glitter-text-effect-836.html',
  },
  {
    'title': 'Bronze-Glitter',
    'url': 'https://textpro.me/bronze-glitter-text-effect-835.html',
  },
  {
    'title': 'Eroded-Metal',
    'url': 'https://textpro.me/eroded-metal-text-effect-834.html',
  },
  {
    'title': 'Carbon',
    'url': 'https://textpro.me/carbon-text-effect-833.html',
  },
  {
    'title': 'Pink-Candy',
    'url': 'https://textpro.me/pink-candy-text-effect-832.html',
  },
  {
    'title': 'Blue-Metal',
    'url': 'https://textpro.me/blue-metal-text-effect-831.html',
  },
  {
    'title': 'Blue-Gem',
    'url': 'https://textpro.me/blue-gem-text-effect-830.html',
  },
  {
    'title': 'Black-Metal',
    'url': 'https://textpro.me/black-metal-text-effect-829.html',
  },
  {
    'title': '3D-Glowing-Metal',
    'url': 'https://textpro.me/3d-glowing-metal-text-effect-828.html',
  },
  {
    'title': '3D-Chrome',
    'url': 'https://textpro.me/3d-chrome-text-effect-827.html',
  },
];

async function maker(url, text) {
   if (/https?:\/\/(ephoto360|photooxy|textpro)\/\.(com|me)/i.test(url)) throw new Error("URL Invalid")
   try {
      let a = await axios.get(url, {
         headers: {
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
            "Origin": (new URL(url)).origin,
            "Referer": url,
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36 Edg/115.0.1901.188"
         }
      })
      let $ = cheerio.load(a.data)
      let server = $('#build_server').val()
      let serverId = $('#build_server_id').val()
      let token = $('#token').val()
      let submit = $('#submit').val()
      let types = [];
      $('input[name="radio0[radio]"]').each((i, elem) => {
         types.push($(elem).attr("value"));
      })
      let post;
      if (types.length != 0) {
         post = {
            'radio0[radio]': types[Math.floor(Math.random() * types.length)],
            'submit': submit,
            'token': token,
            'build_server': server,
            'build_server_id': Number(serverId)
         };
      }
      else {
         post = {
            'submit': submit,
            'token': token,
            'build_server': server,
            'build_server_id': Number(serverId)
         }
      }
      let form = new FormData()
      for (let i in post) {
         form.append(i, post[i])
      }
      if (typeof text == "string") text = [text]
      for (let i of text) form.append("text[]", i)
      let b = await axios.post(url, form, {
         headers: {
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
            "Origin": (new URL(url)).origin,
            "Referer": url,
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36 Edg/115.0.1901.188", 
            "Cookie": a.headers.get("set-cookie").join("; "),
            ...form.getHeaders()
         }
      })
      $ = cheerio.load(b.data)
      let out = ($('#form_value').first().text() || $('#form_value_input').first().text() || $('#form_value').first().val() || $('#form_value_input').first().val())
      let c = await axios.post((new URL(url)).origin + "/effect/create-image", JSON.parse(out), {
         headers: {
            "Accept": "*/*",
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
            "Origin": (new URL(url)).origin,
            "Referer": url,
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36 Edg/115.0.1901.188",
            "Cookie": a.headers.get("set-cookie").join("; ")
         }
      })
      return {status: c.data?.success, image: server + (c.data?.fullsize_image || c.data?.image || ""), session: c.data?.session_id}
   } catch (e) {
      throw e
   }
}
