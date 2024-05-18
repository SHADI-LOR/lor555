
let handler = async (m, {conn, usedPrefix}) => {

    let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let user = global.db.data.users[who]
    if (!(who in global.db.data.users)) throw `✳️ The user is not found in my database`
    conn.reply(m.chat, `
┌───⊷ *BALANCE* ⊶
▢ *📌الرقم* : @${who.split('@')[0]}
▢ *💎الماس* : ${user.diamond}
▢ *💎الذهب* : ${user.gold}
▢ *💎الصخور* : ${user.rock}
▢ *💎إميرالد* : ${user.emerald}
▢ *💎الرانك* : ${user.role}
▢ *💎الهيلث* : ${user.health}
▢ *💎الخشب* : ${user.wood}
▢ *💎الدواء* : ${user.potion}
▢ *💎الحديد* : ${user.iron}
▢ *💎المال* : ${user.money}
▢ *💎الخبرة* : ${user.exp} 
└──────────────

*ملحوظه :* 
تستطيع شراء المزيد من الماس 💎 باستخدام الامر*
❏ *${usedPrefix}todiamond* + كيمة
❏ *${usedPrefix}todiamondall*`, m, { mentions: [who] })
}
handler.help = ['S H A D O W']
handler.tags = ['S H A D O W']
handler.command = ['بنك', 'البنك'] 

export default handler
