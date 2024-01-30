import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const fs = require('fs');

let heartGame = {
  isActive: false,
  players: {},
  maxHearts: 5
};

let handler = async (m, { conn, command, text }) => {
  let args = text.trim().split(/  /).slice(1);
  switch (command) {
    case 'قلوب_ابدا':
      if (!heartGame.isActive) {
        heartGame.isActive = true;
        heartGame.players = {};
        m.reply('⟣⟤ ♥️\n*تـم تـفـعـيـل فـعـالـيـة الـقـلـوب اسـتـخـدم "ضيف_قلب" لـيـتـم اضـافـة لاعـب و اسـتـخـدم "عرض_قلوب" لـتـعرف نـتـجـة الـمـبـاراة*');
      } else {
        m.reply('💜 العبه نشطه بالفعل');
      }
      break;
    case 'ضيف_قلب':
      if (!heartGame.isActive) {
        m.reply('لـم تـبـدأ اللعبـة بـعد.');
        return;
      }
      let newPlayer = m.quoted ? m.quoted.sender.split('@')[0] : null;
      if (newPlayer && !heartGame.players[newPlayer]) {
        heartGame.players[newPlayer] = heartGame.maxHearts;
        m.reply(`تـم إضـافـة @${newPlayer} إلـى الـلعـبـة مـع ${heartGame.maxHearts} قـلـوب.`);
      } else {
        m.reply('⟣⟤ ♥️ *قـم بالـرد عـلـي رسـالـه الاعـب*');
      }
      break;
    case 'عرض_قلوب':
      if (!heartGame.isActive) {
        m.reply('لـم تبـدأ اللعبة بـعد.');
        return;
      }
      let message = '~*⊹‏⊱≼━━━⌬〔♥️〕⌬━━━≽⊰⊹*~\n*قـائـمـة الـقـلـوب فـي اللـعـبة*\n*¥ المقدم : تـوكـا➺*\n\n';
      for (let player in heartGame.players) {
        let heartIcons = '❤️'.repeat(heartGame.players[player]);
        message += `*⟦ @${player} ⟧ ⟐ ⟦ ${heartIcons} ⟧*\n`;
      }
      m.reply(message);
      break;
    case 'احذف_قلب':
      if (!heartGame.isActive) {
        m.reply('لم تبدأ اللعبة بعد.');
      } else {
        let targetPlayer = m.quoted ? m.quoted.sender.split('@')[0] : null;
        if (targetPlayer && heartGame.players[targetPlayer]) {
          heartGame.players[targetPlayer]--;
          if (heartGame.players[targetPlayer] === 0) {
            // ... كود حذف اللاعب وتحديد الفائز
          } else {
            m.reply(`تـم إزالـة قـلـب مـن @${targetPlayer}`);
          }
        } else {
          m.reply('يـرجـى الـرد عـلـى رسـالـة الـلاعب لـحـذف قـلـب');
        }
      }
      break;
    default:
      m.reply(`⟣⟤ ♥️ 
*شـرح الـعـبـه يقـم الادمـن طـرح عـلـيـك سـوأل وتـجاوب لـتـخـتـار احـد الاعـبـيـن لـتـشـيـل من قـلـب و اخـر لاعـب يفـز بالـمـبـاراة الاسـتـخـدامـات هـيـه*
*1 : لـبـدأ الـفعـالـيـه اسـتـخـدم "قلوب_ابدا"*
*2 : لـخـذف قـلـب استـخـدم "احذف_قلب"*
*3 : لاضـافـة لاعـب اسـتـخـدم "ضيف_قلب"*
*4 : لـعـرض الـنـتـيـجـة اسـتـخـدم "عرض_قلوب"*`);
  }
};

handler.command = /^(قلوب_ابدا|قلوب|ضيف_قلب|عرض_قلوب|احذف_قلب)$/i;
handler.admin  = true;
export default handler;
