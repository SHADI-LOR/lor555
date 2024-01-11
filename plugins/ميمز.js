import axios from 'axios';
const handler = async (m, {command, conn, usedPrefix}) => {
  const res = (await axios.get(`https://raw.githubusercontent.com/socona12/-/main/Src/${command}.json`)).data;
  const haha = await res[Math.floor(res.length * Math.random())];
  conn.sendFile(m.chat, haha, 'error.jpg', `_${command}_`, m);
};
handler.help = [ 'ميمز', 'افلام', 'خلفيه'];
handler.command = ['ميمز', 'خلفيه'];
handler.tags = ['anime'];
export default handler;
