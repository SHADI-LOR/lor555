import fetch from 'node-fetch'
let handler = async (m, { conn, command }) => {
let ne = await (await fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/anime/neko.txt')).text()
let nek = ne.split('\n')
let neko = pickRandom(nek)
conn.sendFile(m.chat, neko, 'error.jpg', `اونيي تشان~ 🐾💗`, m)
//conn.sendButton(m.chat, 'Nyaww~ 🐾💗', wm, neko, [['𝙎𝙄𝙂𝙐𝙄𝙀𝙉𝙏𝙀 | 𝙉𝙀𝙓𝙏 🆕', `/${command}`]],m)
}
handler.command = /^(كيوت)$/i
handler.tags = ['anime']
handler.help = ['neko']
handler.limit = 5
export default handler
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}
