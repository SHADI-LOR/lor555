import fetch from 'node-fetch';

let handler = async (m, { conn, usedPrefix, command }) => {
    try {
        let info9 = `
${global.sham1}
${global.sham2}
│┊⩥💜│قـسـم الـبـنـك│💜⩤
${global.sham3}
${global.sham2}
${global.amrr8}راتب
${global.amrr8}يومي 
${global.amrr8}اسبوعي
${global.amrr8}شهري
${global.amrr8}هديتي
${global.amrr8}تحويل
${global.amrr8}لفل
${global.amrr8}خبرات
${global.amrr8}رصيدي
${global.amrr8}الماسي
${global.sham3}
${global.sham4}
`;

        const imageURL9 = 'https://telegra.ph/file/6190bd02915140738ed38.jpg';

        await conn.sendMessage(m.chat, { image: { url: imageURL9 }, caption: info9 });
    } catch (error) {
        console.log(error);
    }
};

handler.command = /^البنك|ت10$/i;

export default handler;