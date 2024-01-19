import fetch from 'node-fetch';

let handler = async (m, { conn, usedPrefix, command }) => {
    try {
        let info8 = `
${global.sham}
⩥💜│قـسـم الـذكـاء الاصطناعي│💜⩤
${global.sham}
${global.amrr7}اكس
${global.amrr7}حظ
${global.amrr7}رياضه
${global.amrr7}دين
${global.amrr7}خمن
${global.amrr7}انمي
${global.amrr7}كت
${global.amrr7}فكك
${global.amrr7}ايمواجي
${global.amrr7}رتب
${global.amrr7}علم
${global.amrr7}عين
${global.amrr7}احزر
${global.amrr7}كوره
${global.amrr7}شخصية
${global.amrr7}الحب
${global.amrr7}الكره
${global.amrr7}زواج
${global.amrr7}طلاق
${global.amrr7}قدوتي
${global.amrr7}لعبة
${global.amrr7}موتتي
${global.sham}
`;

        const imageURL8 = 'https://telegra.ph/file/6190bd02915140738ed38.jpg';

        await conn.sendMessage(m.chat, { image: { url: imageURL8 }, caption: info8 });
    } catch (error) {
        console.log(error);
    }
};

handler.command = /^البنك$/i;

export default handler;