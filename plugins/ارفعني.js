let handler = async (m, { conn, isAdmin }) => {
  if (m.fromMe) throw 'Nggk'
  if (isAdmin) throw `*انت ادمن بالفعل سيد ڤينوم*`
  await conn.groupParticipantsUpdate(m.chat, [m.sender], "promote")
}
handler.command = /^ارفعني$/i
handler.rowner = true
handler.botAdmin = true
export default handler
