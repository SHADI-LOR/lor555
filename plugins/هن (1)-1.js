const rewards = {
    exp: 10000,
    money: 5000,
    mythic: 3,
    legendary: 1
}

const cooldown = 2592000000
let handler = async (m) => {
    let user = global.db.data.users[m.sender]
    if (new Date - user.lastmonthly < cooldown) throw `لقد استلمت جائزتك الشهرية بالفعل عد بعد *${((user.lastmonthly + cooldown) - new Date()).toTimeString()}*`
    let text = ''
    for (let reward of Object.keys(rewards)) if (reward in user) {
        user[reward] += rewards[reward]
        text += `*+${rewards[reward]}* ${rpg.emoticon(reward)}${reward}\n`
    }
    //conn.sendButton(m.chat,'*––––––『 MONTHLY 』––––––*', text.trim(), null, [['Inventory', '.inv'], ['Menu', '.menu']],m)
    m.reply(`
    🎁 *جائزة شهرية*
    
    ▢ *لقد حصلت على:*
     ${text}`)
    user.lastmonthly = new Date * 1
}
handler.help = ['monthly']
handler.tags = ['rpg']
handler.command = /^(شهري)$/i

handler.cooldown = cooldown

export default handler
