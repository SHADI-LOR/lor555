let handler  = async (m, { conn }) => { 
 let name = conn.getName(m.sender) 
 let teks = ` 
 ${pickRandom([`**مـࢪحـبـاً بـکـم فـي مـمـلـكـه .『𝑻𝒆𝒔𝒍𝒂』
*‏*
*✥━═━═• 《•🏮•》•═━═━✥*
*•✗╎يـࢪجـى مـنـكـم امـــلاء هـاذهـي الاسـتـــ📜ـمـاࢪة لـكـي تـنـظـمـو الـيـنـا*

*•✗╎لـقـبـك🎭⤾『』*

*•✗╎اسـم انـمـي الـشـخـصـيـة🔮⤾『  』*

*•✗╎ اࢪسـل صـوࢪة الـشـخـصـيـة📸⤾『』*

*•✗╎ مـن طـرف مـيـن⛓️⤾『』*

*•✗╎ بنت او ولد👩🏻🧑🏻⤾『』*

*•✗╎مـلاحـظـه مـهـمـه*
*⤾*
*‏*مـمـنـوع اخـذ لـقـب مـعـاكـس الـى جـنـسـك*
  *✥━═━═• 《•🏮•》•═━═━✥*
*تـࢪحـب بـكـم أداࢪة:*
┊𝑻𝒆𝒔𝒍𝒂𓆩🏮𓆪𝑲𝒐𝒏𝒐𝒉𝒂┊♡])} 
 `.trim() 
 conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }}) 
 } 
 handler.customPrefix = /استماره|استمارة/i 
 handler.command = new RegExp 
  
 export default handler 
  
 function pickRandom(list) { 
     return list[Math.floor(Math.random() * list.length)] 
 }
