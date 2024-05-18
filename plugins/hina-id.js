import { createHash } from 'crypto'
let handler = async function (m, { conn, text, usedPrefix }) {
let sn = createHash('md5').update(m.sender).digest('hex')
await m.reply(`[⚡]⌯ هـــذا هــو الــايــدي الــخــاص بــك ↯`.trim())
await m.reply(`${sn}`.trim())
}
handler.help = ['myns']
handler.tags = ['xp']
handler.command = /^(ايدي)$/i
handler.register = true
export default handler
