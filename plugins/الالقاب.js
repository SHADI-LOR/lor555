import fs from 'fs';
const NICKNAMES_FILE = './nicknames.json';

let getNicknames = () => {
    try {
        let data = fs.readFileSync(NICKNAMES_FILE, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        console.error(err);
        return {}; // الخطأ
    }
};

let handlerListNicknames = async (m, { conn }) => {
    let nicknames = getNicknames();
    if (Object.keys(nicknames).length === 0) {
        await conn.sendMessage(m.chat, { text: "لا يوجد ألقاب مسجلة." }, { quoted: m });
        return;
    }

    let message = "قائمة الألقاب:\n";
    Object.entries(nicknames).forEach(([jid, nickname]) => {
        let cleanedJid = jid.replace('@s.whatsapp.net', ''); // إزالة s.whatsapp.net
        message += `• ${nickname} (${cleanedJid})\n`;
    });

    await conn.sendMessage(m.chat, { text: message }, { quoted: m });
};

handlerListNicknames.command = /^الألقاب$/i;
export default handlerListNicknames;
