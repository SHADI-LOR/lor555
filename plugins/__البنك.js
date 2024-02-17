هههههimport fetch from 'node-fetch';

let handler = async (m, { conn, usedPrefix, command }) => {
    try {
        let info9 = `
إليك عددت استخدامات للفعاليات لديك *"كتابه"* يبعت اسم شخصية عشوائي ومن يكتبها الاول يافوز و لديك *"تفكيك"* تفكك الاسم تفوز و لديك *"ترتيب"* ترتب الاسم تفوز
`;

        const imageURL9 = 'https://telegra.ph/file/e80f34f9011ec738ddc48.jpg';

        await conn.sendMessage(m.chat, { image: { url: imageURL9 }, caption: info9 });
    } catch (error) {
        console.log(error);
    }
};

handler.command = /^فعاليات$/i;

export default handler;