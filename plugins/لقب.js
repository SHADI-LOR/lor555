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

let saveNickname = (jid, nickname) => {
    let nicknames = getNicknames();
    nicknames[jid] = nickname;
    try {
        fs.writeFileSync(NICKNAMES_FILE, JSON.stringify(nicknames, null, 2));
    } catch (err) {
        console.error(err);
    }
};

let handlerSetNickname = async (m, { conn }) => {
    let mentioned = m.mentionedJid && m.mentionedJid[0];
    if (!mentioned) {
        await conn.sendMessage(m.chat, { text: "اعمل منشن لـ العضو" });
        return;
    }

    let nickname = m.text.split(" ").slice(2).join(" ");
    if (!nickname) {
        await conn.sendMessage(m.chat, { text: "اكتب اللقب جنب الامر" });
        return;
    }

    saveNickname(mentioned, nickname);

    await conn.sendMessage(m.chat, { text: `تم تسجيل اللقب "${nickname}" للعضو المحدد.` });
};
handlerSetNickname.owner = true;
handlerSetNickname.command = /^لقب$/i;
export default handlerSetNickname;
