const handler = async (m, {conn, isPrems}) => { // lastmiming
  const user = global.db.data.users[m.sender];
  const premium = user.premium;
  const minar = `${pickRandom(['عظيم انت فنان',
     'رائع!!  أنت عامل منجم عظيم ⛏️ تحصل ',
    'لقد قمت بالتعدين!!',
    ' لقد تمكنت من استخراج كمية من',
    'سوف يزيد دخلك بفضل حقيقة أنك قمت بالتعدين',
    '⛏️⛏️⛏️⛏️⛏️ التعدين',
    '🤩 اجلل!!! الآن لديك',
    'الحظ في جانبك، ولهذا السبب تحصل عليها',
    '😻 حظ المنجم',
    '♻️ لقد تم إنجاز مهمتك، وتمكنت من مهمتي',
    '⛏️ لقد أفادك التعدين',
    '🛣️ لقد عثرت على مكان ومن خلال التعدين حصلت من المكان الذي على',
    '👾 بفضل حقيقة أنك قمت بتعدين دخلك يزيد',
        'تهانينا!!  الآن لديك', '⛏️⛏️⛏️ لقد حصلت'])}`;
const pp = 'https://png.pngtree.com/thumb_back/fw800/background/20220428/pngtree-cartoon-mining-game-design-composition-with-different-mining-equipment-inside-the-image_1108471.jpg';
  const aqua = `${pickRandom([0, 2, 3, 1, 5])}` * 1;
  const aquapremium = `${pickRandom([2, 4, 6, 7, 5, 9])}` * 1;
  const rock = `${pickRandom([6, 9, 0, 12, 2])}` * 1;
  const rockpremium = `${pickRandom([13, 9, 17, 20, 25])}` * 1;
  const pancingan = `${pickRandom([1, 0, 2, 1, 0, 0, 0])}` * 1;
  const pancinganpremium = `${pickRandom([1, 3, 4, 9, 2, 5, 8])}` * 1;
  const recompensas = {aqua: premium ? aquapremium : aqua, rock: premium ? rockpremium : rock, pancingan: premium ? pancinganpremium : pancingan};
  const money = `${pickRandom([100, 200, 250, 300, 370, 400, 450, 480, 500, 510, 640, 680, 704, 760, 800, 840, 880, 900, 1000, 1059, 1080, 1100, 1190, 1230, 1380, 1399, 1290, 1300, 1340, 1350, 1590, 1400, 1450, 1700, 1800, 1900, 2000, 0, 0, 10, 1, 99, 999, 1789, 1430])}` * 1;
  const moneypremium = `${pickRandom([500, 600, 700, 800, 900, 1000, 1050, 1150, 1200, 1250, 1300, 1350, 1400, 1450, 1500, 1550, 1600, 1650, 1700, 1750, 1800, 1850, 1950, 2000, 2100, 2200, 2300, 2400, 2500, 2600, 2700, 2800, 2900, 3000, 3100, 3200, 3400, 3500, 3600, 3700, 3800, 3850, 3900, 3950, 4000])}` * 1;
  const time = user.lastcoins + 600000; // 10 min
  if (new Date - user.lastcoins < 600000) return await conn.reply(m.chat, `*⏱️ عليك اخذ رتحة${msToTime(time - new Date())} لمواصلة التعدين${global.rpgshopp.emoticon('money')}⛏️*`, m);
  user.money += premium ? moneypremium : money;
  let texto = '';
  for (const reward of Object.keys(recompensas)) {
    if (!(reward in user)) continue;
    user[reward] += recompensas[reward];
    texto += `+${recompensas[reward]} ${global.rpgshop.emoticon(reward)}\n`;
  }
  const text = `*${premium ? '🎟️ شخص مميز' : '🆓 شخص عادي'}*\n*${minar}*\n*${money} ${global.rpgshop.emoticon('money')}*\n\n🍁 رابطة\n${texto}\n\n🎟️ 𝗣 𝗥 𝗘 𝗠 𝗜 𝗨 𝗠 ⇢ ${premium ? '✅' : '❌'}\n${wm}`;
  await conn.sendFile(m.chat, pp, 'mystic.jpg', text, m);
  user.lastcoins = new Date * 1;
};
handler.help = ['minar2'];
handler.tags = ['gata'];
handler.command = ['mi', 'miming2', 'تعدين', 'minarmysticcoins', 'minarcoins', 'minarmystic'];
handler.fail = null;
handler.exp = 0;
export default handler;
function msToTime(duration) {
  const milliseconds = parseInt((duration % 1000) / 100);
  let seconds = Math.floor((duration / 1000) % 60);
  let minutes = Math.floor((duration / (1000 * 60)) % 60);
  let hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
  hours = (hours < 10) ? '0' + hours : hours;
  minutes = (minutes < 10) ? '0' + minutes : minutes;
  seconds = (seconds < 10) ? '0' + seconds : seconds;
  return minutes + ' m y ' + seconds + ' s ';
}
function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}
