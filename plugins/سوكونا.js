import fetch from 'node-fetch';

let handler = async (m, { text, conn, usedPrefix, command }) => {
  if (!text && !(m.quoted && m.quoted.text)) {
    throw `يرجى تقديم نص أو اقتباس رسالة للحصول على رد.`;
  }

  if (!text && m.quoted && m.quoted.text) {
    text = m.quoted.text;
  }

  try {
    const { key } = await conn.sendMessage(m.chat, {
      image: { url: 'https://telegra.ph/file/9666615940a3821af35e1.jpg' },
      caption: 'لحظه . . .'
    }, {quoted: m})
    conn.sendPresenceUpdate('composing', m.chat);
    const prompt = encodeURIComponent(text);

    const sokuna1 = `https://ultimetron.guruapi.tech/gita?prompt=${prompt}`;

    try {
      let response = await fetch(sokuna1);
      let data = await response.json();
      let result = data.result;

      if (!result) {

        throw new Error('لا توجد استجابة JSON صالحة من API');
      }

      await conn.relayMessage(m.chat, {
        protocolMessage: {
          key,
          type: 14,
          editedMessage: {
            imageMessage: { caption: result }
          }
        }
      }, {});
    } catch (error) {
      console.error('الخطأ من الأول API:', error);


      const model = 'llama';
      const senderNumber = m.sender.replace(/[^0-9]/g, ''); 
      const session = `SOKUNA_BOT_${senderNumber}`;
      const sokuna2 = `https://ultimetron.guruapi.tech/gpt3?prompt=${prompt}`;

      let response = await fetch(sokuna2);
      let data = await response.json();
      let result = data.completion;

      await conn.relayMessage(m.chat, {
        protocolMessage: {
          key,
          type: 14,
          editedMessage: {
            imageMessage: { caption: result }
          }
        }
      }, {});
    }

  } catch (error) {
    console.error('Error:', error);
    throw `*خطا*`;
  }
};
handler.help = ['chatgpt']
handler.tags = ['AI']
handler.command = ['سوكونا'];

export default handler;
