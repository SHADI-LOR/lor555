import fetch from 'node-fetch'
let handler = async(m, {
  conn,
  command
}) => {
  let res = await fetch(`https://api.lolhuman.xyz/api/random/ppcouple?apikey=GataDios`)
  if (res.status != 200) throw await res.text()
  let json = await res.json()
  if (!json.status) throw json
  conn.sendFile(m.chat, json.result.female, 'error.jpg', `🚺 بـنـت`, m)
  conn.sendFile(m.chat, json.result.male, 'error.jpg', `🚹 ولـد`, m)

}
handler.help = ['ppcouple']
handler.tags = ['internet']
handler.command = /^(تطقيم2)$/i
handler.limit = 6
export default handler
