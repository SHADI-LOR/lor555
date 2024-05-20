import fetch from 'node-fetch'
import axios from 'axios'
let handler = async (m, { conn, usedPrefix, command }) => {

  let hasil = Math.floor(Math.random() * 5000)
  let time = global.db.data.users[m.sender].lastwork + 600000
  if (new Date - global.db.data.users[m.sender].lastwork < 600000) throw `🧘🏻‍♂️ انت متعب ولازم تستني *${msToTime(time - new Date())}* قبل ما ترجع للعمل`

    let anu = (await axios.get('https://raw.githubusercontent.com/Darkshadow201293/ShadowMedia-MD/main/work.json')).data
    let res = pickRandom(anu)
 global.db.data.users[m.sender].exp += hasil

  m.reply(`
⌯ ${res.fgwork} *${hasil} خبرة*
`)
  global.db.data.users[m.sender].lastwork = new Date * 1
}
handler.help = ['S H A D O W']
handler.tags = ['S H A D O W']
handler.command = ['عمل']

export default handler

function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

  hours = (hours < 10) ? "0" + hours : hours
  minutes = (minutes < 10) ? "0" + minutes : minutes
  seconds = (seconds < 10) ? "0" + seconds : seconds

  return minutes + " دقائق " + seconds + " ثواني" 
}
function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}






