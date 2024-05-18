const rewards = {
  exp: 9999,
  money: 4999,
  potion: 5,
}
const cooldown = 600000 //86400000
let handler = async (m, {conn, isPrems }) => {
  let user = global.db.data.users[m.sender]
  let time = global.db.data.users[m.sender].lastclaim + 600000 //86400000
  if (new Date - global.db.data.users[m.sender].lastclaim < 600000 ) throw `⌯  لقد حصلت علي مكافاتك تعالي بعد *${msToTime(time - new Date())}* `
  let text = ''
  for (let reward of Object.keys(rewards)) {
    if (!(reward in user)) continue
    user[reward] += rewards[reward]
    text += `*+${rewards[reward]}* ${global.rpg.emoticon(reward)}${reward}\n`
  }
  m.reply(`
[❣️]~ *المـكـافـاة اليـومـيـة*

⌯ *هداياك:*
9999 خــبــره
+4999 مــال
+5 دواء`)
  global.db.data.users[m.sender].lastclaim = new Date * 1
return conn.sendMessage(m.chat, {
react: {
  text: '💸',
  key: m.key,
}})
}
handler.help = ['daily', 'claim']
handler.tags = ['xp']
handler.command = /^(يومي|يومى)$/i

handler.cooldown = cooldown

export default handler



function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

  hours = (hours < 10) ? "0" + hours : hours
  minutes = (minutes < 10) ? "0" + minutes : minutes
  seconds = (seconds < 10) ? "0" + seconds : seconds

  return hours + " ساعة " + minutes + " دقيقة"
}
