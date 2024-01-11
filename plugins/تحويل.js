const items = [
    'limit', 'exp', 'joincount', 'money', 'potion', 'trash', 'wood',
    'rock', 'string', 'petFood', 'emerald',
    'diamond', 'gold', 'iron', 'common',
    'uncoommon', 'mythic', 'legendary', 'pet',
]
let confirmation = {} 
async function handler(m, { conn, args, usedPrefix, command }) {
    if (confirmation[m.sender]) return m.reply('estas haciendo una transferencia')
    let user = global.db.data.users[m.sender]
    const item = items.filter(v => v in user && typeof user[v] == 'number')

    let lol = `*لتحويل احد الموارد حقك يجب انت تكتب اسم بالانقليزي *

مثال : 
*تحويل limit 1 @⁨user *

*حط .تحويل وبعدها اسم الشي الي تبي تحولها وثم حط عدد التحويل وبعدها منشن احد تبي تحول له 👍🏻. *

╭━━━━━━━━━━━━━━━━━━ ღ
┃ ✅ *الموارد المتاحة*
┃──────────────
┃ limit *= الماسات* 💎
┃ money *= عملات* 🛡️
┃ exp *= الخبرة* ⚡
╰━━━━━━━━━━━━━━━━━━ ღ 
`.trim()

    const type = (args[0] || '').toLowerCase()
    if (!item.includes(type)) return m.reply(lol)
    const count = Math.min(Number.MAX_SAFE_INTEGER, Math.max(1, (isNumber(args[1]) ? parseInt(args[1]) : 1))) * 1
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : args[2] ? (args[2].replace(/[@ .+-]/g, '') + '@s.whatsapp.net') : ''
    if (!who) return m.reply(`${ag} *ETIQUETE AL USUARIO*`)
    if (!(who in global.db.data.users)) return m.reply(`${fg}*EL USUARIO ${who} NO SE ENCUENTRA EN MI BASE DE DATOS*`)
    if (user[type] * 1 < count) return m.reply(`${fg}*NO TIENE SUFUCIENTE PARA REALIZAR LA TRANSFERENCIA DE ${type}*`)
    let mentionedJid = [who]
    let username = conn.getName(who)

    let confirm = `
*ايصال التحويل* 

💹 *${count} ${type} تبي تحول ل* *@${(who || '').replace(/@s\.whatsapp\.net/g, '')}* ? 

*هل انت متاكد?*
معك ٦٠ ثانية!!

للتأكيد قول: (نعم) ليتم عملية تحويل بنجاح
لا تريد: (لا) ليتم الغاء عملية تحويل\n\n${wm}`.trim()

    let c = `${wm}\nTienes 60 segundos!!`
    await conn.reply(m.chat, confirm, m, { mentions: [who] })
  //  conn.sendButton(m.chat, confirm, c, null, [['𝙎𝙄'], ['𝙉𝙊']], m, { mentions: [who] })
    confirmation[m.sender] = {
        sender: m.sender,
        to: who,
        message: m,
        type,
        count,
        timeout: setTimeout(() => (m.reply('*SU TIEMPO SE HA TERMINADO*'), delete confirmation[m.sender]), 60 * 1000)
    }
}

handler.before = async m => {
    if (m.isBaileys) return
    if (!(m.sender in confirmation)) return
    if (!m.text) return
    let { timeout, sender, message, to, type, count } = confirmation[m.sender]
    if (m.id === message.id) return
    let user = global.db.data.users[sender]
    let _user = global.db.data.users[to]
    if (/^لا|no$/i.test(m.text) ) { 
  //  if (/No?/m.text(m.text.toLowerCase())) {
        clearTimeout(timeout)
        delete confirmation[sender]
        return m.reply('*تم الغاء العملية*')
    }
    if (/^نعم|si$/i.test(m.text) ) { 
  //  if (/Si?/m.text(m.text.toLowerCase())) {
        let previous = user[type] * 1
        let _previous = _user[type] * 1
        user[type] -= count * 1
        _user[type] += count * 1
        if (previous > user[type] * 1 && _previous < _user[type] * 1) m.reply(`✅ *تم التحويل بنجاح:*\n\n*${count} ${type} حصلت عليه* @${(to || '').replace(/@s\.whatsapp\.net/g, '')}`, null, { mentions: [to] })
        else {
            user[type] = previous
            _user[type] = _previous
            m.reply(`*Error al transferir ${count} ${type} para* *@${(to || '').replace(/@s\.whatsapp\.net/g, '')}*`, null, { mentions: [to] })
        }
        clearTimeout(timeout)
        delete confirmation[sender]
    }
}

handler.help = ['transfer'].map(v => v + ' [tipo] [cantidad] [@tag]')
handler.tags = ['xp']
handler.command = ['payxp', 'تحويل', 'darxp', 'dar', 'enviar', 'transferir'] 

handler.disabled = false

export default handler

function special(type) {
    let b = type.toLowerCase()
    let special = (['common', 'uncoommon', 'mythic', 'legendary', 'pet'].includes(b) ? ' Crate' : '')
    return special
}

function isNumber(x) {
    return !isNaN(x)
}
