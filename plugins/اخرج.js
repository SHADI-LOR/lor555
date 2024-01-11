let handler = async (m, { conn, text, command }) => {
let id = text ? text : m.chat  
await conn.reply(id, '*انا اسفه عليا المغادره لان سيدي ڤينوم طلب ذلك سوف اشتاق لكم جميعاً 😔🌸⚡*') 
await conn.groupLeave(id)}
handler.command = /^(salir|برا|salirdelgrupo|اخرج)$/i
handler.group = true
handler.rowner = true
export default handler
