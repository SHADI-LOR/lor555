import fetch from 'node-fetch';

let handler = async (m, { conn, usedPrefix, command }) => {
    try {
        let info = `
${global.sham}
⩥💜│قـسـم المـطور│💜⩤
${global.sham}
${global.amrr}بان
${global.amrr}فك-البان
${global.amrr}حظر
${global.amrr}فك-الحظر
${global.amrr}بلوك
${global.amrr}رفع-البلوك
${global.amrr}ارفعني
${global.amrr}بريميم
${global.amrr}البتبندين
${global.amrr}المحظورين
${global.amrr}رستار
${global.amrr}تحديث
${global.sham}
_*الاوامر مخصصه لڤينوم و سوكونا فقط ⁦(⁠◠⁠‿⁠・⁠)⁠—⁠☆⁩*_
${global.sham}
`;

        const imageURL = 'https://telegra.ph/file/eb3986717a15c6e089c1b.jpg';

        await conn.sendMessage(m.chat, { image: { url: imageURL }, caption: info });
    } catch (error) {
        console.log(error);
    }
};

handler.command = /^المالك$/i;
handler.owner = true;

export default handler;
