let toM = a => '@' + a.split('@')[0]
function handler(m, { groupMetadata }) {
let ps = groupMetadata.participants.map(v => v.id)
let a = ps.getRandom()
let b
do b = ps.getRandom()
while (b === a)
m.reply(`*تم اعلان زواج 💗💍*
▣─❧ ${toM(a)} العروسه ${toM(b)} العريس:
* 💞😂 احمم احمم, لايقين على بعض*
`, null, {
mentions: [a, b]

})}
handler.help = ['formarpareja']
handler.tags = ['main', 'fun']
handler.command = ['زواج','حبايب']
handler.group = true
handler.limit = 1
export default handler
