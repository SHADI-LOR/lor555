let players = {}; // فارغ في البداية

let gameStarted = false; 
let admin; 

// دالة لإنشاء نص القائمة
function createPlayerList() {
    let list = "*◉━━─ ─ ⊱ ❪🌊❫ ⊰ ─ ─━━◉*\n\n*◉✦نـقـاط مسابقة القلوب✦◉*\n\n";
    for (let player in players) {
        list += `*${player} ⇐ ❪${'❤️'.repeat(players[player])}❫*\n`;
    }
    list += "\n*◉━━─ ─ ⊱ ❪🌊❫ ⊰ ─ ─━━◉*\n*✧┃𝐕𝐄𝐍𝐎𝐌﹝🌊﹞𝐒𝐎𝐔𝐊𝐍𝐀┃✧*";
    return list;
}

let handler = async (m, { conn, isGroup, isAdmin, isBotAdmin, sender, text }) => {
    if (!isGroup) return;

    // بدء اللعبة
    if (text === ".ابدأ" && isAdmin && !gameStarted) {
        gameStarted = true;
        admin = sender;
        await conn.sendMessage(m.chat, "بدأت اللعبة الآن!", m);
        return;
    }

    // إضافة عضو
    if (text.startsWith(".اضافه-عضو") && sender === admin) {
        let mentioned = m.mentionedJid && m.mentionedJid[0];
        if (!mentioned) {
            await conn.sendMessage(m.chat, "يرجى الإشارة إلى لاعب.", m)
            return;
        }
        players[mentioned] = 0; // إضافة اللاعب
        await conn.sendMessage(m.chat, createPlayerList(), m); // عرض القائمة
        return;
    }

    // إعطاء قلب
    if (text === ".قلب" && sender === admin) {
        let mentioned = m.mentionedJid && m.mentionedJid[0];
        if (!mentioned || !(mentioned in players)) {
            await conn.sendMessage(m.chat, "يرجى الإشارة إلى لاعب موجود في اللعبة.", m);
            return;
        }
        players[mentioned]++; // إضافة قلب لللاعب

        // التحقق من الفوز
        if (players[mentioned] >= 7) {
            await conn.sendMessage(m.chat, `لقد فاز ${mentioned} باللعبة!`, m);
            gameStarted = false; // إيقاف اللعبة
            players = {}; // تصفير القائمة
            return;
        }

        await conn.sendMessage(m.chat, createPlayerList(), m); // عرض القائمة
    }
};

handler.command = [/^\.(ابدأ|اضافه-عضو|قلب)$/i];
export default handler;
