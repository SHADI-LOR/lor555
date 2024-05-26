import { canLevelUp, xpRange } from '../lib/levelling.js';
import { levelup } from '../lib/canvas.js';

const handler = async (m, { conn }) => {
  const name = conn.getName(m.sender);
  const usertag = '@' + m.sender.split('@s.whatsapp.net')[0];
  const user = global.db.data.users[m.sender];
  if (!canLevelUp(user.level, user.exp, global.multiplier)) {
    const { min, xp, max } = xpRange(user.level, global.multiplier);
    const message = `
🏰 *نقابة المغامرين*
*¡اهلا, ${usertag}!*

*◉ المستوى الحالي:* ${user.level}
*◉ الرتبة الحالي:* ${user.role}
*◉ نقاط الخبرة:* ${user.exp - min}/${xp}
*—◉ للتقدم في المستوى تحتاج إلى الحصول على ${max - user.exp} المزيد من نقاط الخبرة.  استمر في التفاعل مع البوت!.*`.trim();
    return conn.sendMessage(m.chat, {text: message, mentions: [m.sender]}, {quoted: m});
  }
  const before = user.level * 1;
  while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++;
  if (before !== user.level) {
    const levelUpMessage = `🎉 ¡تهانينا, ${name}! لقد وصلت إلى مستوى أعلى a ${user.level}`;
    const levelUpDetails = `
🚀 *تم الوصول إلى مستوى جديد*

*◉ المستوى السابق:* ${before}
*◉ مستوى جديد:* ${user.level}
*◉ الرتبة الحالية:* ${user.role}

*—◉ استمر في الاستكشاف والسعي للوصول إلى آفاق جديدة في المغامرة استمر في التفاعل مع البوت!.*`.trim();
    try {
sendFile(m.chat, img = './لفل.jpg');
lUpImage = await levelup(levelUpMessage, user.level);
    } catch (e) {
      conn.sendMessage(m.chat, {text: levelUpDetails, mentions: [m.sender]}, {quoted: m});
    }
  }
};
handler.help = ['levelup'];
handler.tags = ['xp'];
handler.command =  ['ليفل', 'lvl', 'levelup', 'level'];
export default handler;
