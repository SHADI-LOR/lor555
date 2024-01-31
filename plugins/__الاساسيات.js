import fetch from 'node-fetch';

let handler = async (m, { conn, usedPrefix, command }) => {
    try {
        let info2 = `
${global.sham1}
${global.sham2}
│┊⩥💜│قـسـم الاعـضـاء│💜⩤
${global.sham3}
${global.sham2}
${global.amrr3}نسخه
${global.amrr3}نسخه --كود
${global.amrr3}صلح
${global.amrr3}ابلاغ
${global.amrr3}المطور
${global.amrr3}المملكه
${global.amrr3}الاستقبال
${global.amrr3}تعليم
${global.amrr3}الدعم
${global.amrr3}الجروبات
${global.amrr3}البوتات
${global.amrr3}تطقيم
${global.amrr3}طقم
${global.amrr3}طقمي
${global.amrr3}بروفايل
${global.amrr3}ميمز
${global.amrr3}خلفيه
${global.amrr3}السرعه
${global.amrr3}توب
${global.amrr3}ميسي
${global.amrr3}رونالدو
${global.amrr3}ترجم
${global.sham3}
${global.sham4}
`;

        const imageURL2 = 'https://telegra.ph/file/cfa84ad3b6192601e258.jpg';

        await conn.sendMessage(m.chat, { image: { url: imageURL2 }, caption: info2 });
    } catch (error) {
        console.log(error);
    }
};

handler.command = /^الاعضاء|ت1$/i;

export default handler;