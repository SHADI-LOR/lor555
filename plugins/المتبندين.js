let handler = async (m, { conn, isOwner }) => {
let users = Object.entries(global.db.data.users).filter(user => user[1].banned)
let caption = `
*╭•·–| 👥 قائمة المبندين |–·•*
│ *المجموع : ${users.length} المستخدمين* ${users ? '\n' + users.map(([jid], i) => `
│
│ *${i + 1}.* ${conn.getName(jid) == undefined ? 'لا يوجد احد مبند' : conn.getName(jid)}
│ ${isOwner ? '@' + jid.split`@`[0] : jid}\n│ - - - - - - - - -`.trim()).join('\n') : ''}
│ *لا يمكن لهؤلاء المستخدمين استخدام ايتاتشي*
*╰•·–––––––––––––––––––·•*`.trim()

await conn.reply(m.chat, caption, m, { mentions: await conn.parseMention(caption) })}
/*conn.sendButton(m.chat, caption, `*Estos usuarios no puedes Usar a GataBot*\n\n` + wm, null, [ 
['𝗠 𝗘 𝗡 𝗨 ☘️', '/menu']], m, { mentions: await conn.parseMention(caption) })}*/
handler.command = /^المتبندين|listausuarios|listbanuser|listabaneados|listban$/i

export default handler
