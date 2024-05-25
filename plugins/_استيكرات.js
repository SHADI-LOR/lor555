import { sticker } from '../lib/sticker.js'

let handler = async(m, { conn }) => {
    const venomStickers = [
   "https://i.ibb.co/vcP4Qgn/51514aedfce65005fa3c02e8c1c1f565.jpg",
    ];

    const sukunaStickers = [
        "https://telegra.ph/file/c7f14a3ff4ab956aeb1ca.jpg", 
    ];
const ssaStickers = [
         "https://telegra.ph/file/ca7e75aae8376e27579d7.jpg",
"https://telegra.ph/file/0780e0af83559e1952a5c.jpg",
"https://telegra.ph/file/a13ca1b11463fab1cf963.jpg" 
    ];
const ssa2Stickers = [
        "https://telegra.ph/file/a4d32f50598229b426174.jpg",
    ];

    let text = m.text.toLowerCase(); 
    if (text.includes("😂😂")||text.includes("ههههههه")) {
        let stiker = await sticker(null, venomStickers[Math.floor(Math.random() * venomStickers.length)]);
        if (stiker) conn.sendFile(m.chat, stiker, 'sticker.webp', '', m);
    }
    if (text.includes("انا جعان")||text.includes("انا جعانه")) {
        let stiker = await sticker(null, sukunaStickers[Math.floor(Math.random() * sukunaStickers.length)]);
        if (stiker) conn.sendFile(m.chat, stiker, 'sticker.webp', '', m);
    }
    if (text.includes("ميستوري")||text.includes("مستوري")) {
        let stiker = await sticker(null, ssaStickers[Math.floor(Math.random() * ssaStickers.length)]);
        if (stiker) conn.sendFile(m.chat, stiker, 'sticker.webp', '', m);
    }
    if (text.includes("افضل بوت")||text.includes("عمري")||text.includes("ميستوري روحي")) {
        let stiker = await sticker(null, ssa2Stickers[Math.floor(Math.random() * ssa2Stickers.length)]);
        if (stiker) conn.sendFile(m.chat, stiker, 'sticker.webp', '', m);
    }
}

handler.customPrefix = /ميستوري|😂😂|هههههههه|مستوري|عمري|انا جعان|انا جعانه|افضل بوت|ميستوري روحي/i
handler.command = new RegExp
handler.exp = 50
export default handler

