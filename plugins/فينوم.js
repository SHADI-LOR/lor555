import fetch from 'node-fetch';

let handler = async (m, { text, conn, usedPrefix, command }) => {
  if (!text && !(m.quoted && m.quoted.text)) {
    throw `⟣⟤ 🖤⚡\nادخل السوأل أو المعلومة الذي تريد أن ڤينوم أن يرد عليها\n*⟣⟤ مثل*\n⟣⟤ .فينوم هات معلومات عن اسم ڤينوم\n⟣⟤ .فينوم اشرح function في لغة جافا سكريبت\n⟣⟤ .فينوم هات نصائح`;
  }

  if (!text && m.quoted && m.quoted.text) {
    text = m.quoted.text;
  }
let fgytSrdf = 'https://telegra.ph/file/a4ead8bc4d43191fabfe2.jpg'
  try {
    m.react(rwait)
    const { key } = await conn.sendMessage(m.chat, {
      image: { url: fgytSrdf },
      caption: 'لحظه . . .'
    }, {quoted: m})
    conn.sendPresenceUpdate('composing', m.chat);
    const prompt = encodeURIComponent(text);

    const venom12 = `https://ultimetron.guruapi.tech/gita?prompt=${prompt}`;

    try {
      let response = await fetch(venom12);
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
      m.react(done);
    } catch (error) {
      console.error('الخطأ من الأول API:', error);


      const model = 'llama';
      const senderNumber = m.sender.replace(/[^0-9]/g, ''); 
      const session = `VENOM_BOT_${senderNumber}`;
      const venom13 = `https://ultimetron.guruapi.tech/gpt3?prompt=${prompt}`;

      let response = await fetch(venom13);
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
      m.react(done);
    }

  } catch (error) {
    console.error('Error:', error);
    throw `*خطا*`;
  }
};
handler.help = ['chatgpt']
handler.tags = ['AI']
handler.command = ['فينوم','ڤينوم'];

export default handler;
