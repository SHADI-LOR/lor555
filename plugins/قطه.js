import fetch from 'node-fetch' 
 let handler  = async (m, { conn, text }) => { 
 try { 
 let res = await fetch('https://cataas.com/cat') 
 let img = await res.buffer() 
 let caption = ` 
 القطط > البشر 😭❤️ 
 `.trim() 
 conn.sendFile(m.chat, img, 'cat.jpg', caption, m) 
 } catch (e) { 
 console.log(e) 
 throw '*اسف حدث خطا!*' 
 }} 
 handler.help = ['cat'] 
 handler.tags = ['random'] 
 handler.command = /^قط|قطة|قطه$/i 
 handler.fail = null 
handler.limit = 1
 export default handler
