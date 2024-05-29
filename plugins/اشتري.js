const xpperlimit = 5;
const handler = async (m, {conn, command, args}) => {
  let count = command.replace(/^شراء/i, '');
  count = count ? /الكل/i.test(count) ? Math.floor(global.db.data.users[m.sender].exp / xpperlimit) : parseInt(count) : args[0] ? parseInt(args[0]) : 1;
  count = Math.max(1, count);
  if (global.db.data.users[m.sender].joincount >= xpperlimit * count) {
    global.db.data.users[m.sender].joincount -= xpperlimit * count;
    global.db.data.users[m.sender].money += count;
    conn.reply(m.chat, `
┌─「 الدفع 」
⌯ الكيمة : + ${joincount} 💎 
⌯ الفلوس : -${xppermoney * count} XP
└──────────────`, m);
  } else conn.reply(m.chat, `[❣️]~ اسفة ماعندك خبرة عشان تشتري ${count} ماس 💎`, m);
return conn.sendMessage(m.chat, {
react: {
  text: '💎',
  key: m.key,
}})
};
handler.help = ['S H A D O W'];
handler.tags = ['S H A D O W'];
handler.command = ['اشتري', 'اشترى'];

handler.disabled = false;

export default handler;
