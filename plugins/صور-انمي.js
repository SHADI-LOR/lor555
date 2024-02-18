import axios from "axios"
let handler = async (m, {command, conn, usedPrefix}) => {
let res = (await axios.get(`https://raw.githubusercontent.com/Xov445447533/Xov11111/master/src/JSON/avenom-${command}.json`)).data  
let haha = await res[Math.floor(res.length * Math.random())]    
conn.sendFile(m.chat, haha, 'error.jpg', `_${command}_`, m)
}
handler.command = handler.help = ['ميكاسا','نيزوكو','ايتاتشي','ناروتو','كانيكي','ميناتو','ساسكي','مادارا']
handler.tags = ['anime']
export default handler