let handler = async (m, {usedPrefix}) => {	
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender
let name = conn.getName(who) 
await m.reply(`
╭━〔 🔖 *الماسي* 〕━⬣
┃ *المستخدم*
${name}┃
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ *${global.db.data.users[who].limit} الماسات* 💎
╰━━━━〔 *🛡️ ${vs}* 〕━━━⬣`)

}
handler.help = ['bal']
handler.tags = ['xp']
handler.command = ['الماسي', 'diamantes', 'diamond', 'balance'] 
export default handler
