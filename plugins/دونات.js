import { createRequire } from 'module'
const require = createRequire(import.meta.url)
const fs = require('fs')
let donutGame = {
  isActive: false,
  players: {},
  maxDonuts: 7
};
let handler = async (m, { conn, command, text }) => {
  let args = text.trim().split(/  /).slice(1)
  switch (command) {
    case 'ابدا-دونات':
      if (!donutGame.isActive) {
        donutGame.isActive = true;
        donutGame.players = {};
        m.reply(`بـدات الـمـبـاره يـمـكـنـك اعـطـاء دونـات *بـاسـتـخـدام *"اعطاء-دونات" `);
      } else {
        m.reply('اللعبة بالفعل نشطة.');
      }
      break;
      case 'اعطاء-دونات':
      if (!donutGame.isActive) {
          m.reply('لـم تـبـدأ الـمـبـاره بـعـد');
          return;
      }

      let targetPlayer = args[0] ? args[0].match(/@\d+/g)?.[0].substring(1) : m.quoted?.sender.split('@')[0];

      if (!targetPlayer) {
          m.reply('رد عـلـي رسـالـة الـفـائـز بالـنـقـطـه ⚔️');
          return;
      }

      if (!donutGame.players[targetPlayer]) donutGame.players[targetPlayer] = 0;
      donutGame.players[targetPlayer]++;

      if (donutGame.players[targetPlayer] === donutGame.maxDonuts) {
          m.reply(`مـبـروك ${targetPlayer},  يـعـم الـجـامـد كـسـبـت الـمـبـاره 😎!`);
          donutGame.isActive = false;
          donutGame.players = {};
      } else {
          m.reply(`خـد دونـات يـا ${targetPlayer} دلـوقـتـي مـعـاك ${donutGame.players[targetPlayer]} دونـات.`);
      }
      break;
    case 'حذف-دونات':
      if (!donutGame.isActive) {
        m.reply('لـم تـبـدأ الـمـبـاره بـعـد');
      } else {
        donutGame.isActive = false;
        donutGame.players = {};
        m.reply(`تـم حـذف الـلـعـبـه بـنـجـاح`);
      }
      break;
        case 'عرض-دونات':
        if (!donutGame.isActive) {
          m.reply('لـم تـبـدأ الـمـبـاره بـعـد');
          return;
        }
        let message = '*مـشـاࢪكـيـن فـي فـ؏ـالـيـه الـدونـ🍩ـات*\n\n';
        for (let player in donutGame.players) {
          let donutIcons = '🍩'.repeat(donutGame.players[player]);
          message += `〘${donutIcons}〙➥〘${player}〙\n`;
        }
        m.reply(message);
      break;
    default:
      m.reply(`شـرح فـعـالـيـات الـدونـات
1 : لـبـدأ الـعـبـه اسـتـخـدام *"بدا-دونات"*
2 : لاضـافـة دونـات للاعـبين *"اعطاء-دونات"*
2 : لـعـرض نـتـجـة الـمـبـاره اسـتـخـدام *"عرض-دونات"* 
3 : لـحـذف الـمـبـاره اسـتـخـدام "حذف-دونات"`);
  }
};
handler.command = /^(ابدا-دونات|اعطاء-دونات|حذف-دونات|عرض-دونات|دونات)$/i;
handler.admin = true;
export default handler;

