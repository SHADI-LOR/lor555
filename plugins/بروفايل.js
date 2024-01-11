import { createHash } from 'crypto'
import PhoneNumber from 'awesome-phonenumber'
import { canLevelUp, xpRange } from '../lib/levelling.js'
//import db from '../lib/database.js'

let handler = async (m, { conn, usedPrefix, command}) => {

let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
if (!(who in global.db.data.users)) throw `✳️ The user is not found in my database`
let pp = await conn.profilePictureUrl(who, 'image').catch(_ => './src/avatar_contact.png')
let user = global.db.data.users[who]
let { name, exp, diamond, lastclaim, registered, regTime, age, level, role, warn,coin,crystal } = global.db.data.users[who]
let { min, xp, max } = xpRange(user.level, global.multiplier)
let username = conn.getName(who)
let math = max - xp
let prem = global.prems.includes(who.split`@`[0])
let sn = createHash('md5').update(who).digest('hex')

let str = `
[ إِنَّ اللَّهَ وَمَلَائِكَتَهُ يُصَلُّونَ عَلَى النَّبِيِّ ۚ يَا أَيُّهَا الَّذِينَ آمَنُوا صَلُّوا عَلَيْهِ وَسَلِّمُوا تَسْلِيمًا. ]

━━━[ *🌿 بروفايلك 🌿* ]━━━━⬣
🔖┋ *الاسم ${name}* 
📎┋ *الرابط https://wa.me/${who.split`@`[0]}*
🧧┋ *مستواك:* *${level}* 
💎┋ الماسك ${global.db.data.users[who].limit}*
🏆┋ *الدور:* *${role}* 
⭐┋ *مميز : ${prem ? 'Yes' : 'No'}*
╰━━━〔 *🌿 1.4.9* 〕━━━━━⬣`
    conn.sendFile(m.chat, pp, 'perfil.jpg', str, m, false, { mentions: [who] })


}
handler.help = ['perfil']
handler.tags = ['group']
handler.command = ['profile', 'بروفايل'] 

export default handler
