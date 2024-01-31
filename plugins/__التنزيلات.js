import fetch from 'node-fetch';

let handler = async (m, { conn, usedPrefix, command }) => {
    try {
        let info4 = `
${global.sham1}
${global.sham2}
⩥💜│قـسـم الـجـروبـات│💜⩤
${global.sham3}
${global.sham2}
${global.amrr5}فيديو
${global.amrr5}اغنيه
${global.amrr5}فيديوهات
${global.amrr5}اغاني
${global.amrr5}يوتيوب
${global.amrr5}يوتيوب2
${global.amrr5}تطبيق
${global.amrr5}فيسبوك
${global.amrr5}تيك
${global.amrr5}انستا
${global.sham3}
${global.sham4}
`
        const imageURL4 = 'https://telegra.ph/file/d654286890710d451732f.jpg';

        await conn.sendMessage(m.chat, { image: { url: imageURL4 }, caption: info4 });
    } catch (error) {
        console.log(error);
    }
};

handler.command = /^التحميلات|ت6$/i;

export default handler;