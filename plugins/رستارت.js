import { spawn } from 'child_process'
let handler = async (m, { conn, isROwner, text }) => {
    if (!process.send) throw 'Dont: node main.js\nDo: node index.js'
    if (conn.user.jid == conn.user.jid) {
    await m.reply('🚀🚀')
         await m.reply('🚀🚀🚀🚀')
         await m.reply('🚀🚀🚀🚀🚀🚀')
         await m.reply('رستات') 
    process.send('reset')
  } else throw 'eh'
}

handler.help = ['رستات']
handler.tags = ['owner']
handler.command = ['رستات','reiniciar'] 

handler.rowner = true

export default handler
