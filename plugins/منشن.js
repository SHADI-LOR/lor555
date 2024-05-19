let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}//غير ڤينوم و حط اسم بوتك
let pesan = args.join`*⎔⋅• ━ ╼╃ ⌬〔🕸️〕⌬ ╄╾ ━ •⋅⎔*`
let oi = `*💭|* ${pesan}`
let teks = ` \n\n ${oi}\n\n*🗡┇الاعضاء:⇣*\n`
for (let mem of participants) {
teks += `*🕸️↫* @${mem.id.split('@')[0]}\n`}
teks += `*𝚂𝚁 𝙻𝙾𝚁 𝙱𝙾𝚃*\n\n*⎔⋅• ━ ╼╃ ⌬〔🕸️〕⌬ ╄╾ ━ •⋅⎔*`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(منشن|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
export default handler{
