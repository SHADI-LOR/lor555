/* CREDITOS: https://github.com/FG98F */

let handler = async (m, { args, usedPrefix, command, conn }) => {
let fa = `
${mg}لا تنسا ادخل الثمن الذي تريد ان تجرب حظك به:

مثل:
*${usedPrefix + command} 50*`.trim()

if (!args[0]) throw fa
if (isNaN(args[0])) throw fa
let apuesta = parseInt(args[0])

let users = global.db.data.users[m.sender]
//let time = global.db.data.users[m.sender].lastwork + 30000
//if (new Date - users.lastwork < 30000) throw `*𝙑𝙐𝙀𝙇𝙑𝘼 𝙀𝙉 ${msToTime(time - new Date())} 𝙋𝘼𝙍𝘼 𝘾𝙊𝙉𝙏𝙄𝙉𝙐𝘼𝙍 𝘼𝙋𝙊𝙎𝙏𝘼𝙉𝘿𝙊* 🎰\n\n*𝘾𝙊𝙈𝙀 𝘽𝘼𝘾𝙆 𝙄𝙉 ${msToTime(time - new Date())} 𝙏𝙊 𝘾𝙊𝙉𝙏𝙄𝙉𝙐𝙀 𝘽𝙀𝙏𝙏𝙄𝙉𝙂* 💰`

if (apuesta < 10) throw `${lenguajeGB['smsAvisoAG']()}الحد الأدنى للعب هوا *10*`

if (users.exp < apuesta) {
throw `${lenguajeGB['smsAvisoFG']()}اسف ليس معاك طاقه كافيه لتستطيع الاستمرار`    
}
if (command == 'حظ1') {
let time = global.db.data.users[m.sender].lastslot + 60000
if (new Date - users.lastslot < 60000) throw `*انتظر حتي ${msToTime(time - new Date())} و حاول مره اخري🎰*`
users.lastslot = new Date * 1
    
let emojis = ["🍁", "⚡", "🍇"];
let a = Math.floor(Math.random() * emojis.length);
let b = Math.floor(Math.random() * emojis.length);
let c = Math.floor(Math.random() * emojis.length);
let x = [],
y = [],
z = [];
for (let i = 0; i < 3; i++) {
x[i] = emojis[a];
a++;
if (a == emojis.length) a = 0;
}
for (let i = 0; i < 3; i++) {
y[i] = emojis[b];
b++;
if (b == emojis.length) b = 0;
}
for (let i = 0; i < 3; i++) {
z[i] = emojis[c];
c++;
if (c == emojis.length) c = 0;
}
let end;
if (a == b && b == c) {
end = `✨ *رائع لقد ربحت +${apuesta + apuesta} طاقه*\n\n🥳🥳🥳🥳🥳*`
users.exp += apuesta
} else if (a == b || a == c || b == c) {
end = `🙀 لم تخسر ولم تفوز اليك المكافأة +50 طاقه*`
users.exp += 50
} else {
end = `😿 *لقد خسرت!! ❌ -${apuesta} طاقه*`
users.exp -= apuesta
}
//users.lastslot = new Date * 1
//return await m.reply(
    //    `
let s = `🎰 | *طـاقـه* | 🎰 
 ────────
  ${x[0]} : ${y[0]} : ${z[0]}
  ${x[1]} : ${y[1]} : ${z[1]}
  ${x[2]} : ${y[2]} : ${z[2]}
 ────────
🎰 |   *الحظ*   | 🎰

${end}`
await conn.reply(m.chat, s, m)}
/*await conn.sendHydrated(m.chat, `${s}\n\n${end}`, wm, null, md, '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿', null, null, [
['⚡ 𝘼𝙋𝙊𝙎𝙏𝘼𝙍 𝙊𝙏𝙍𝘼 𝙑𝙀𝙕 | 𝘼𝙂𝘼𝙄𝙉', `${usedPrefix}slot1 ${apuesta}`],
['🐈 𝘼𝙋𝙊𝙎𝙏𝘼𝙍 𝘾𝙊𝙉 𝙂𝘼𝙏𝘼𝘾𝙊𝙄𝙉𝙎', `${usedPrefix}slot2 ${apuesta}`],
['💎 𝘼𝙋𝙊𝙎𝙏𝘼𝙍 𝘾𝙊𝙉 𝘿𝙄𝘼𝙈𝘼𝙉𝙏𝙀𝙎', `${usedPrefix}slot3 ${apuesta}`]
], m,)}*/


if (users.money < apuesta)  { 
throw `${lenguajeGB['smsAvisoFG']()}اسف ليس لديك قلوب كافي لاستمرار`    
}
if (command == 'حظ2') {
let time = global.db.data.users[m.sender].lastslot + 60000
if (new Date - users.lastslot < 60000) throw `*انتظر حتي ${msToTime(time - new Date())} و حاول مره اخري🎰*`
users.lastslot = new Date * 1
    
let emojis = ["❤️", "🍀", "🧿"];
let a = Math.floor(Math.random() * emojis.length);
let b = Math.floor(Math.random() * emojis.length);
let c = Math.floor(Math.random() * emojis.length);
let x = [],
y = [],
z = [];
for (let i = 0; i < 3; i++) {
x[i] = emojis[a];
a++;
if (a == emojis.length) a = 0;
}
for (let i = 0; i < 3; i++) {
y[i] = emojis[b];
b++;
if (b == emojis.length) b = 0;
}
for (let i = 0; i < 3; i++) {
z[i] = emojis[c];
c++;
if (c == emojis.length) c = 0;
}
let end;
if (a == b && b == c) {
end = `✨ *مبروك لقد ربحت${apuesta + apuesta} قلوب*\n\n🥳🥳🥳🥳🥳`
users.money += apuesta
} else if (a == b || a == c || b == c) {
end = `🙀 * لم تخسر ولم تفوز اليك المكافأة +50 قلوب*`
users.money += 30
} else {
end = `😿 *لقد خسرت!! ❌ -${apuesta} قلوب*`
users.money -= apuesta
}
//users.lastslot = new Date * 1
//return await m.reply(
    //    `
let ss = `
🎰 | *قـلـوب* | 🎰 
 ────────
  ${x[0]} : ${y[0]} : ${z[0]}
  ${x[1]} : ${y[1]} : ${z[1]}
  ${x[2]} : ${y[2]} : ${z[2]}
 ────────
🎰 |   *الحظ*   | 🎰\n\n${end}`
await conn.reply(m.chat, ss, m)}
/*await conn.sendHydrated(m.chat, `${ss}\n\n${end}`, wm, null, md, '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿', null, null, [
['🐈 𝘼𝙋𝙊𝙎𝙏𝘼𝙍 𝙊𝙏𝙍𝘼 𝙑𝙀𝙕 | 𝘼𝙂𝘼𝙄𝙉', `${usedPrefix}slot2 ${apuesta}`],
['⚡ 𝘼𝙋𝙊𝙎𝙏𝘼𝙍 𝘾𝙊𝙉 𝙀𝙓𝙋', `${usedPrefix}slot1 ${apuesta}`],
['💎 𝘼𝙋𝙊𝙎𝙏𝘼𝙍 𝘾𝙊𝙉 𝘿𝙄𝘼𝙈𝘼𝙉𝙏𝙀𝙎', `${usedPrefix}slot3 ${apuesta}`]
], m,)}*/

    
if (users.limit < apuesta) {  
throw `${lenguajeGB['smsAvisoFG']()}اسف ليس لديك الماس كافي لتسطتيع الاستمرار`    
}
if (command == 'حظ3') {
let time = global.db.data.users[m.sender].lastslot + 30000
if (new Date - users.lastslot < 30000) throw `*انتظر حتي ${msToTime(time - new Date())} و حاول مره اخري🎰*`
users.lastslot = new Date * 1
    
let emojis = ["🪵", "💣", "💎"];
let a = Math.floor(Math.random() * emojis.length);
let b = Math.floor(Math.random() * emojis.length);
let c = Math.floor(Math.random() * emojis.length);
let x = [],
y = [],
z = [];
for (let i = 0; i < 3; i++) {
x[i] = emojis[a];
a++;
if (a == emojis.length) a = 0;
}
for (let i = 0; i < 3; i++) {
y[i] = emojis[b];
b++;
if (b == emojis.length) b = 0;
}
for (let i = 0; i < 3; i++) {
z[i] = emojis[c];
c++;
if (c == emojis.length) c = 0;
}
let end;
if (a == b && b == c) {
end = `✨ *مبروك لقد ربحت${apuesta + apuesta} الماس*\n\n🥳🥳🥳🥳`
users.money += apuesta * 2
users.limit += apuesta
} else if (a == b || a == c || b == c) {
end = `🙀 *لقد تعدلت اليك 2 الماس`
users.limit += 2
} else {
end = `😿 *لقد خسرت!! ❌ -${apuesta} الماس*`
users.limit -= apuesta
}
//users.lastslot = new Date * 1
//return await m.reply(
    //    `
let sss = `
🎰 | *الـمـاس* | 🎰 
 ────────
  ${x[0]} : ${y[0]} : ${z[0]}
  ${x[1]} : ${y[1]} : ${z[1]}
  ${x[2]} : ${y[2]} : ${z[2]}
 ────────
🎰 |   *الحظ*   | 🎰\n\n${end}`
await conn.reply(m.chat, sss, m)}
/*await conn.sendHydrated(m.chat, `${sss}\n\n${end}`, wm, null, md, '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿', null, null, [
['💎 𝘼𝙋𝙊𝙎𝙏𝘼𝙍 𝙊𝙏𝙍𝘼 𝙑𝙀𝙕 | 𝘼𝙂𝘼𝙄𝙉', `${usedPrefix}slot3 ${apuesta}`],
['⚡ 𝘼𝙋𝙊𝙎𝙏𝘼𝙍 𝘾𝙊𝙉 𝙀𝙓𝙋', `${usedPrefix}slot1 ${apuesta}`],
['🐈 𝘼𝙋𝙊𝙎𝙏𝘼𝙍 𝘾𝙊𝙉 𝙂𝘼𝙏𝘼𝘾𝙊𝙄𝙉𝙎', `${usedPrefix}slot2 ${apuesta}`]
], m,)}*/
        
        
if (command == 'حظ') {       
await conn.reply(m.chat, `*احتار تىبد الحظ علي اي عنصر ${apuesta}*\n\n⚡ طاقه:\n${usedPrefix}حظ1 ${apuesta}\n\n❤️ قلوب:\n${usedPrefix}حظ2 ${apuesta}\n\n💎 الماس:\n${usedPrefix}حظ3 ${apuesta}`, m)}
/*await conn.sendHydrated(m.chat, `*Elija en que apostará ${apuesta}*`, wm, null, md, '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿', null, null, [
['⚡ 𝙀𝙓𝙋', `${usedPrefix}slot1 ${apuesta}`],
['🐈 𝙂𝘼𝙏𝘼𝘾𝙊𝙄𝙉𝙎', `${usedPrefix}slot2 ${apuesta}`],
['💎 𝘿𝙄𝘼𝙈𝘼𝙉𝙏𝙀𝙎', `${usedPrefix}slot3 ${apuesta}`]
], m,)}*/
        
if (command == 'الحظ') {       
await conn.reply(m.chat, ` اختار العنصر الذي تريد ان تلعب عليه  ${apuesta}*\n\n⚡ طاقه:\n${usedPrefix}حظ1 ${apuesta}\n\n❤️ قلوب:\n${usedPrefix}حظ2 ${apuesta}\n\n💎 الماس:\n${usedPrefix}حظ3 ${apuesta}`, m)}
/*await conn.sendHydrated(m.chat, `*Elija en que apostará ${apuesta}*\n\n*Choose what you will*`, wm, null, md, '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿', null, null, [
['⚡ 𝙀𝙓𝙋', `${usedPrefix}slot1 ${apuesta}`],
['🐈 𝙂𝘼𝙏𝘼𝘾𝙊𝙄𝙉𝙎', `${usedPrefix}slot2 ${apuesta}`],
['💎 𝘿𝙄𝘼𝙈𝘼𝙉𝙏𝙀𝙎', `${usedPrefix}slot3 ${apuesta}`]
], m,)}*/

//global.db.data.users[m.sender].lastwork = new Date * 1
       
}
handler.help = ['slot <apuesta>']
handler.tags = ['game']
handler.command = ['حظ', 'الحظ', 'حظ1', 'حظ2', 'حظ3']
export default handler

function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds

return minutes + " دقيقه " + seconds + " ثانيه " 
}
