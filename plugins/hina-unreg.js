import { createHash } from 'crypto'
let handler = async function (m, { args }) {
if (!args[0]) throw '[⚡]⌯ اكــتــب الـايــدي الــخــاص بــك\n⌯ اذا كــنــت لـا تـــعــرف مــا هــو الــايــدي الــخــاص بــك اكتب\n⌯ .ايدي'
let user = global.db.data.users[m.sender]
let sn = createHash('md5').update(m.sender).digest('hex')
if (args[0] !== sn) throw '⌯اذا كــنــت لـا تـــعــرف مــا هــو الــايــدي الــخــاص بــك اكتب\n⌯ .ايدي'
user.registered = false
m.reply(`[⚡]⌯ لم تعد مسجلا`)
}
handler.help = ['', 'ister'].map(v => 'unreg' + v + ' <numero de serie>')
handler.tags = ['xp']
handler.command = /^ترك$/i
handler.register = true
export default handler
