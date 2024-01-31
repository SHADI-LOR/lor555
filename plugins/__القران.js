import fetch from 'node-fetch';

let handler = async (m, { conn, usedPrefix, command }) => {
    try {
        let info14 = `
${global.sham1}
${global.sham2}
│┊⩥💜│قـسـم الـقـران│💜⩤
${global.sham3}
${global.sham2}
${global.amrr11}دين
${global.amrr11}قران
${global.amrr11}الله
${global.amrr11}حديث
${global.sham3}
${global.sham4}
`
        const imageURL14 = 'https://telegra.ph/file/9d6d7e272bc8c6c8125bc.jpg';

        await conn.sendMessage(m.chat, { image: { url: imageURL14 }, caption: info14 });
    } catch (error) {
        console.log(error);
    }
};

handler.command = /^القران|ت3$/i;

export default handler;