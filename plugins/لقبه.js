import fs from 'fs';
const NICKNAMES_FILE = './nicknames.json';

let getNicknames = () => {
    try {
        let data = fs.readFileSync(NICKNAMES_FILE, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        console.error(err);
        return {}; // الايرور
    }
};

let handlerGetNickname = async (m, { conn }) => {
    let mentioned = m.mentionedJid && m.mentionedJid[0];
    if (!mentioned) {
        await conn.sendMessage(m.chat, { text: "اعمل منشن." });
        return;
    }

    let nicknames = getNicknames();
    let nickname = nicknames[mentioned];

    if (!nickname) {
        await conn.sendMessage(m.chat, { text: "لم يتم تعيين لقب لهذا العضو." });
        return;
    }

    await conn.sendMessage(m.chat, { text: `اللقب للعضو المحدد هو: "${nickname}".` });
};
handlerGetNickname.owner = true;
handlerGetNickname.command = /^لقبه$/i;
export default handlerGetNickname;
