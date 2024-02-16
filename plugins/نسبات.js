const handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) throw `*[❗] Debes mencionar a alguien para el cálculo*`;
  const percentages = (500).getRandom();
  let emoji = '';
  let description = '';
  switch (command) {
    case 'نسبه-شاذ':
      emoji = '🏳️‍🌈';
      if (percentages < 50) {
        description = `*بعد فحص طويل تم اكتشاف ان ${text.toUpperCase()} نسبه الشاذ عنده هي ${percentages}%. ${emoji}*\n*-❥ اسف يا صديقي انا مليش دعوه! 😄*`;
      } else if (percentages > 100) {
        description = `*بعد الفحص تم تأكيد ان${text.toUpperCase()} نسبه الشاذ عندو هي ${percentages}%. ${emoji}*\n*-❥ ¡انا برئ كلم صاحبك مش انا! 💃*`;
      } else {
        description = `*بعد فحص طويل تم اكتشاف ان${text.toUpperCase()} نسبه الشاذ عندو هي${percentages}% ${emoji}*\n*-❥ برو اوع تشتم انا مالي صاحبك اللي عمل الامر عليك. ☠*`;
      }
      break;
    case 'نسبه-ذكاء':
      emoji = '💡';
      if (percentages < 50) {
        description = `*بعد فحص طويل تم كشف ان ${text.toUpperCase()} ذكي بنسبة ${percentages}% ${command}. ${emoji}*\n*-❥ رائع يمكنك ان تصبح اذكي مع مرور الوقت. 🎬*`;
      } else if (percentages > 100) {
        description = `*بعد النحرير تم اكتشاف ان${text.toUpperCase()} ذكي بنسبة ${percentages}% ${command}. ${emoji}*\n*-❥ ¡احسنت يمكنك التحكم في نفسك في العلاقات وغيره! ✨💟*`;
      } else {
        description = `*بعد فحص طويل تم كشف ان ${text.toUpperCase()} ذكي بنسبة  ${percentages}% ${command}. ${emoji}*\n*-❥ انفجار العقل انا في مستوي اخري! 🌸*`;
      }
      break;
    case 'هدوء':
    case 'نسبه-هدوء':
      emoji = '😒🖤';
      if (percentages < 50) {
        description = `*بعد الفحص تم كشف ان${text.toUpperCase()} نسبة هدوء عندو هي${percentages}% ${command}. ${emoji}*\n*-❥ يبدو انك لست هدأء بيما فيه الكفايه! 💦*`;
      } else if (percentages > 100) {
        description = `*بعد فحص طويل تم اكتشاف ان ${text.toUpperCase()} نسبه الهدوء عندو هي ${percentages}% ${command}. ${emoji}*\n*-❥ انت قاعل بالفعل 🌿*`;
      } else {
        description = `*بعد فحص كويل و تحقيق اطول تم كش ان ${text.toUpperCase()} نسبه الهدوء لديه هي${percentages}% ${command}. ${emoji}*\n*-❥ انت كاريزما هذا متوقع منك😎*`;
      }
      break;
    case 'puto':
    case 'puta':
      emoji = '🔥🥵';
      if (percentages < 50) {
        description = `*Los cálculos han arrojado que ${text.toUpperCase()} es ${percentages}% ${command}. ${emoji}*\n*-❥ ¡Más suerte en tu próxima conquista! 💔*`;
      } else if (percentages > 100) {
        description = `*Los cálculos han arrojado que ${text.toUpperCase()} es ${percentages}% ${command}. ${emoji}*\n*-❥ ¡Estás en llamas! 🚒*`;
      } else {
        description = `*Los cálculos han arrojado que ${text.toUpperCase()} es ${percentages}% ${command}. ${emoji}*\n*-❥ Mantén ese encanto ardiente! 🔥*`;
      }
      break;
    case 'نسبه-قبح':
    case 'نسبح-قبيح':
      emoji = '💩';
      if (percentages < 50) {
        description = `*وقد أظهرت الحسابات ذلك ${text.toUpperCase()} هو ${percentages}% ${command}. ${emoji}*\n*-❥ ¡أنت لست الوحيد في هذا النادي! 😅*`;
      } else if (percentages > 100) {
        description = `*وقد أظهرت الحسابات ذلك ${text.toUpperCase()} هو ${percentages}% ${command}. ${emoji}*\n*-❥ ¡لديك موهبة خاصة جدا! 🙈*`;
      } else {
        description = `*وقد أظهرت الحسابات ذلك ${text.toUpperCase()} هو ${percentages}% ${command}. ${emoji}*\n*-❥ حافظ على هذا الموقف الشجاع! 🤙*`;
      }
      break;
    case 'نسبه-غباء':
      emoji = '🤡';
      if (percentages < 50) {
        description = `*وقد أظهرت الحسابات ذلك ${text.toUpperCase()} هى ${percentages}% ${command}. ${emoji}*\n*-❥ بطل غباء يقا! 😑*`;
      } else if (percentages > 100) {
        description = `*وقد أظهرت الحسابات ذلك ${text.toUpperCase()} هو ${percentages}% ${command}. ${emoji}*\n*-❥ غبي فاخر ! 😁*`;
      } else {
        description = `*وقد أظهرت الحسابات ذلك ${text.toUpperCase()} هو ${percentages}% ${command}. ${emoji}*\n*-❥ هتجننا بغبائك! 🙂*`;
      }
      break;
    case 'prostituto':
    case 'prostituta':
      emoji = '🫦👅';
      if (percentages < 50) {
        description = `*Los cálculos han arrojado que ${text.toUpperCase()} es ${percentages}% ${command}. ${emoji}*\n*-❥ El mercado está en auge! 💼*`;
      } else if (percentages > 100) {
        description = `*Los cálculos han arrojado que ${text.toUpperCase()} es ${percentages}% ${command}. ${emoji}*\n*-❥ Un/a verdadero/a profesional! 💰*`;
      } else {
        description = `*Los cálculos han arrojado que ${text.toUpperCase()} es ${percentages}% ${command}. ${emoji}*\n*-❥ Siempre es hora de negocios! 💼*`;
      }
      break;
      default:
      throw `*[❗] أمر خاطئ.*`;
  }
  const responses = [
    "لقد تكلم الكون.",
    "ويؤكد العلماء ذلك.",
    "¡مفاجأة! 🎉"
  ];
  const response = responses[Math.floor(Math.random() * responses.length)];
  const cal = `━━━━⬣ *VENOM* ⬣━━━━

—◉ ${description}

*"${response}"*

━━━━⬣ *SOUKNA* ⬣━━━━`.trim()  
  async function loading() {
var hawemod = [
"《 █▒▒▒▒▒▒▒▒▒▒▒》10%",
"《 ████▒▒▒▒▒▒▒▒》30%",
"《 ███████▒▒▒▒▒》50%",
"《 ██████████▒▒》80%",
"《 ████████████》100%"
]
   let { key } = await conn.sendMessage(m.chat, {text: `*🔄 ¡انتظر قليلا! 🔄*`, mentions: conn.parseMention(cal)}, {quoted: m})
 for (let i = 0; i < hawemod.length; i++) {
   await new Promise(resolve => setTimeout(resolve, 1000)); 
   await conn.sendMessage(m.chat, {text: hawemod[i], edit: key, mentions: conn.parseMention(cal)}, {quoted: m}); 
  }
  await conn.sendMessage(m.chat, {text: cal, edit: key, mentions: conn.parseMention(cal)}, {quoted: m});         
 }
loading()    
};
handler.help = ['نسبه-شاذ', 'نسبه-ذكاء','نسبه-هدوء', 'هدوء', 'puto', 'puta', 'manco', 'manca', 'rata', 'نسبه-قبح', 'prostituto'].map((v) => v + ' @tag | nombre');
handler.tags = ['calculator'];
handler.command = /^(نسبه-شاذ|نسبه-ذكاء|نسبه-هدوء|pajera|نسبه-قبح|نسبه-غباء|prostituta|prostituto)$/i;
export default handler;
