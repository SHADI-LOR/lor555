import { areJidsSameUser } from '@whiskeysockets/baileys';
import { createHash } from 'crypto';
import PhoneNumber from 'awesome-phonenumber';
import { canLevelUp, xpRange } from '../lib/levelling.js';

let handler = async (m, { conn, args, usedPrefix, participants }) => {
  let users = Object.entries(global.db.data.users).map(([key, value]) => {
    return { ...value, jid: key };
  });
  let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
  let user = global.db.data.users[who];
  if (!(who in global.db.data.users)) throw '✳️ غير مسجل في قاعدة البيانات';
  let pp = await conn.profilePictureUrl(who, 'image').catch(_ => './Guru.jpg');
  let about = (await conn.fetchStatus(who).catch(console.error))?.status || '';
  let { name, exp, credit, lastclaim, registered, regTime, age, level, role, warn } = global.db.data.users[who];
  let { min, xp, max } = xpRange(user.level, global.multiplier);
  let username = conn.getName(who);
  let math = max - xp;
  let prem = global.prems.includes(who.split('@')[0]);
  let sn = createHash('md5').update(who).digest('hex');

  let totalgold;
  totalgold = Object.entries(global.db.data.users).map(([key, value]) => {
    const user = { ...value, jid: key };
    user.tg = user.credit + user.bank;
    return user.tg;
  });


  let sortedExp = users.map(toNumber('exp')).sort(sort('exp'));
  let sortedLim = users.map(toNumber('money')).sort(sort('money'));
  let sortedLevel = users.map(toNumber('level')).sort(sort('level'));
  let sortedBank = users.map(toNumber('bank')).sort(sort('bank'));
  let sortedRank = users.map(toNumber('role')).sort(sort('role'));

  let usersExp = sortedExp.map(enumGetKey);
  let usersLim = sortedLim.map(enumGetKey);
  let usersLevel = sortedLevel.map(enumGetKey);
  let usersBank = sortedBank.map(enumGetKey);
  let usersRank = sortedRank.map(enumGetKey);

  let len = args[0] && args[0].length > 0 ? Math.min(50, Math.max(parseInt(args[0]), 5)) : Math.min(10, sortedExp.length);
  let text = `
👑 *الأعلى تصنيفا* 👑

${sortedExp.slice(0, len).map(({ jid, exp, money, level, bank, role }, i) => {
  let totalgold = users.find(u => u.jid === jid).money + users.find(u => u.jid === jid).bank;
  let user = global.db.data.users[jid];
  let username = user.name;
  return `*#${i + 1}.*
*👑 الاسم:* ${username}
*🌟 الخبرة:* ${exp}
*🏆 الرتبة:* ${role}
*✨ المستوى:* ${level}
*👾 عملة اركيد:* ${money}`;
}).join('\n\n\n')}
*مركزك هو ${usersExp.indexOf(m.sender) + 1} خارج المجموع ${usersExp.length} عضو*`
.trim();
  
  conn.reply(m.chat, text, m, {
    mentions: [...usersExp.slice(0, len), ...usersLevel.slice(0, len), ...usersLim.slice(0, len), ...usersBank.slice(0, len), ...usersRank.slice(0, len)].filter(v => !participants.some(p => areJidsSameUser(v, p.id)))
  });
};

handler.help = ['leaderboard'];
handler.tags = ['core'];
handler.command = ['ليدر', 'lb'];
handler.limit = 1
export default handler;

function sort(property, ascending = true) {
  if (property) return (...args) => args[ascending & 1][property] - args[!ascending & 1][property];
  else return (...args) => args[ascending & 1] - args[!ascending & 1];
}

function toNumber(property, _default = 0) {
  if (property) return (a, i, b) => {
    return { ...b[i], [property]: a[property] === undefined ? _default : a[property] };
  };
  else return a => a === undefined ? _default : a;
}

function enumGetKey(a) {
  return a.jid;
}
