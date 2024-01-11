import fetch from "node-fetch"
let handler = async (m, { conn, command, usedPrefix }) => {
  let data = await (await fetch(`https://raw.githubusercontent.com/socona12/-/main/Src/${command}.json`)).json()
  let cita = data[Math.floor(Math.random() * data.length)]

  let cowi = await(await fetch(cita.cowo)).buffer()
  await conn.sendFile(m.chat, cowi, '', 'دي الصوره الاولي ❣️', m)
  let ciwi = await(await fetch(cita.cewe)).buffer()
  await conn.sendFile(m.chat, ciwi, '', 'ادي الصوره الثانيه 💕', m)
}
handler.help = ['Miku bot']
handler.tags = ['Miku bot']
handler.command = ['تطقيم', 'طقم', 'طقمي']
handler.limit = true

export default handler
