let handler  = async (m, { conn }) => { 
    let name = conn.getName(m.sender);
    let teks = `
*مـرحبًا بـكـم فـي مـمـلـكـة .『𝑻𝒆𝒔𝒍𝒂』*
*✥━═━═• 《•🏮•》•═━═━✥*
يرجى منكم املاء هذه الاستمارة لكي تنظموا إلينا:

*لقبك🎭⤾『』*

*اسم انمي الشخصية🔮⤾『』*

*ارسل صورة الشخصية📸⤾『』*

*من طرف مين⛓️⤾『』*

*بنت أو ولد👩🏻🧑🏻⤾『』*

*ملاحظة مهمة:*
*ممنوع اخذ لقب معاكس لجنسك*

*✥━═━═• 《•🏮•》•═━═━✥*
ترحب بكم إدارة:
┊𝑻𝒆𝒔𝒍𝒂𓆩🏮𓆪𝑲𝒐𝒏𝒐𝒉𝒂┊♡
`.trim();

    conn.reply(m.chat, teks, m);
};

handler.customPrefix = /استماره|الاستماره/i;
handler.command = new RegExp;

export default handler;
