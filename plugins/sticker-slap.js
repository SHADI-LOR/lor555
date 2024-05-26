let handler = async (m, {conn, usedPrefix}) => {
	
    let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let user = global.db.data.users[who]
    if (!(who in global.db.data.users)) throw `✳️ The user is not found in my database`
    conn.reply(m.chat, `
┌───⊷ *البنك* ⊶
▢ *📌الاسم* : _@${who.split('@')[0]}_
▢ *💎الماس* : _${user.limit}_
▢ *💵نقاط* : _${user.gold}_
▢ *🪨الحجر* : _${user.rock}_
▢ *🧑الرتبه* : _${user.role}_
▢*🎖️ المستوى:* ${user.level}
▢*🧰 الخبرة:* ${user.exp}
▢*👾 عملات اركيد:* ${user.money}
▢*🟢 توكين:* ${user.joincount}
▢*🎟️ مميز:* ${user.premiumTime > 0 ? '✅' : (user.isPrems ? '✅' : '❌') || ''}
▢ *♥️الصحه* : _${user.health}_
▢ *🪵الخشب* : _${user.wood}_
▢ *🍶الجرعات* : _${user.potion}_
▢ *⛓️حديد* : _${user.iron}_

*ملحوظه :* 
*يمكنك شراء 💎 الماس باستخدام الأوامر*
*يمكنك شراء ذهب مقابل الخبرة باستخدام لامر
❏ *.شراء3 وتضف الكمية*
❏ *.شراء 1*
❏ *ويمكنك مضاعفة الكميه*`, m, { mentions: [who] })
}
handler.help = ['balance']
handler.tags = ['econ']
handler.command = ['bal', 'البنك', 'diamond', 'balance'] 

export default handler
