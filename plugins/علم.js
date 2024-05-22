import fs from 'fs'
let timeout = 15000
let poin = 300

let handler = async (m, { conn, command, usedPrefix }) => {
conn.tekateki = conn.tekateki ? conn.tekateki : {}
let id = m.chat
if (id in conn.tekateki) {
conn.reply(m.chat, '〄│ لم يتم الاجابة علي السؤال بعد│❌ ❯', conn.tekateki[id][0])
throw false
}

  let tekateki = await (await fetch(`https://raw.githubusercontent.com/socona12/-/main/Src/${command}.json`)).json()
  let json = tekateki[Math.floor(Math.random() * tekateki.length)]
let _clue = json.response
let clue = _clue.replace(/[A-Za-z]/g, '_')
let caption = `ⷮ ⟣┈┈┈┈┈┈┈┈┈┈┈┈┈┈⟢\n ${json.question}
⟣⟤ الـوقـت ⏲️ ⩥ ${(timeout / 1000).toFixed(2)} ثــانــيــه
⟣⟤ الـجـائـزة 💵 ⩥ ${poin} نقاط
⟣┈┈┈┈┈┈┈┈┈┈┈┈┈┈⟢
`.trim()
conn.tekateki[id] = [
await conn.reply(m.chat, caption, m), json, 
poin,
setTimeout(async () => {
if (conn.tekateki[id]) await conn.reply(m.chat, `❮ ⏲️┇انتهي الوقت┇⏲️ ❯\n ⟣⟤ الاجـابـة✅↞ ${json.response}┇`, conn.tekateki[id][0])
delete conn.tekateki[id]
}, timeout)]}
handler.help = ['Miku Bot']
handler.tags = ['Miku Bot']
handler.command = ['رتب', 'ايموجي', 'فكك', 'انمي', 'خمن', 'كت', 'رياضه', 'دين']
export default handler
