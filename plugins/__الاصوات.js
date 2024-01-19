import fetch from 'node-fetch';

let handler = async (m, { conn, usedPrefix, command }) => {
    try {
        let info10 = `
${global.sham}
⩥💜│قـسـم الاصـوات│💜⩤
${global.sham}
${global.amrr9}رفيع
${global.amrr9}تخين
${global.amrr9}تخينن
${global.amrr9}صاخب
${global.amrr9}ناعم
${global.amrr9}سنجاب
${global.amrr9}روبوت
${global.amrr9}منفوخ
${global.amrr9}عميق 
${global.amrr9}بطيء
${global.amrr9}سريع
${global.sham}
`;

        const imageURL10 = 'https://telegra.ph/file/6190bd02915140738ed38.jpg';

        await conn.sendMessage(m.chat, { image: { url: imageURL10 }, caption: info10 });
    } catch (error) {
        console.log(error);
    }
};

handler.command = /^الاصوات$/i;

export default handler;