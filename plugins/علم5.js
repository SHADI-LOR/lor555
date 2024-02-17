import fs from 'fs';

let poin = 300;

let handler = async (m, { conn, command, usedPrefix }) => {
    conn.tekateki1 = conn.tekateki1 ? conn.tekateki1 : {};
    let id = m.chat;
    if (id in conn.tekateki1) {
        conn.reply(m.chat, 'جاوب أولاً يا فاشل', conn.tekateki1[id][0]);
        throw false;
    }

    let tekateki1 = await (await fetch(`https://raw.githubusercontent.com/Xov445447533/Xov11111/master/src/JSON/venom-${command}.json`)).json();
    let json = tekateki1[Math.floor(Math.random() * tekateki1.length)];
    let _clue = json.response;
    let clue = _clue.replace(/[A-Za-z]/g, '_');
    let caption = `ⷮ _*${json.question}*_
`.trim();

    conn.tekateki1[id] = [
        await conn.reply(m.chat, caption, m), json, poin
    ];
};

handler.help = ['MBot'];
handler.tags = ['MBot'];
handler.command = ['ترتيب', 'تفكيك','كتابه'];

export default handler;
