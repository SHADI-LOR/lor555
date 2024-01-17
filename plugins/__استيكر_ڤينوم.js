import { sticker } from '../lib/sticker.js'
let handler = async(m, { conn }) => {
    // if (!db.data.chats[m.chat].stickers && m.isGroup) throw 0 (معطل حاليا لغرض التجريب)
    
    const s = [
"https://telegra.ph/file/62a39ad33cf0983ee5884.jpg",
"https://telegra.ph/file/f3dc093e10778e3d41218.jpg",
"https://telegra.ph/file/1a891e795bc414351e217.jpg",
"https://telegra.ph/file/db8f02f9f99bb774a6eca.jpg",
"https://telegra.ph/file/b6241af8f3e04e86f34a3.jpg"
    ];  
    
    let stiker = await sticker(null, s[Math.floor(Math.random() * s.length)])
    if (stiker) {
        conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
    }
}

handler.customPrefix = /@201554582851/i 
handler.command = new RegExp
handler.exp = 50
export default handler
