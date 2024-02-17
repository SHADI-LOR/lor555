import { sticker } from '../lib/sticker.js'

let handler = async(m, { conn }) => {
    const venomStickers = [
   "https://telegra.ph/file/99a9b230cd69fadd104ac.jpg",
    ];

    const sukunaStickers = [
        "https://telegra.ph/file/33e985b44ac9da14ba466.jpg", 
    ];
const ssaStickers = [
        "https://telegra.ph/file/dc7035b3c4573c4fc476f.jpg",
    ];
const ssa2Stickers = [
        "https://telegra.ph/file/331bf5cd0f4de3a4928f4.jpg",
"https://telegra.ph/file/6ea87d1040a5e34e40c7a.jpg"
    ];

    let text = m.text.toLowerCase(); 
    if (text.includes("حزين")||text.includes("زعلان")) {
        let stiker = await sticker(null, venomStickers[Math.floor(Math.random() * venomStickers.length)]);
        if (stiker) conn.sendFile(m.chat, stiker, 'sticker.webp', '', m);
    }
    if (text.includes("مساء الخير")||text.includes("مساء الاناناس")) {
        let stiker = await sticker(null, sukunaStickers[Math.floor(Math.random() * sukunaStickers.length)]);
        if (stiker) conn.sendFile(m.chat, stiker, 'sticker.webp', '', m);
    }
    if (text.includes("انا جيت")||text.includes("جيت")) {
        let stiker = await sticker(null, ssaStickers[Math.floor(Math.random() * ssaStickers.length)]);
        if (stiker) conn.sendFile(m.chat, stiker, 'sticker.webp', '', m);
    }
    if (text.includes("كل تبن")||text.includes("كل خرا")||text.includes("كل زق")) {
        let stiker = await sticker(null, ssa2Stickers[Math.floor(Math.random() * ssa2Stickers.length)]);
        if (stiker) conn.sendFile(m.chat, stiker, 'sticker.webp', '', m);
    }
}

handler.customPrefix = /مساء الخير|زعلان|كل خرا|كل زق|انا جيت|كل تبن|جيت|حزين/i
handler.command = new RegExp
handler.exp = 50
export default handler

