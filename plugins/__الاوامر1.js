import fs, { promises } from 'fs';
import fetch from 'node-fetch';

let gameHandler = async (m, { conn, usedPrefix, command }) => {
    try {
        let currentDate = new Date(new Date() + 3600000);
        let locale = 'ar';
        let formattedWeekday = currentDate.toLocaleDateString(locale, { weekday: 'long' });
        let formattedDate = currentDate.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' });
        let uptime = formatUptime(process.uptime() * 1000);
        let senderName = conn.getName(m.sender);
//m.react('🎮');
    await conn.sendMessage(m.chat, { react: { text: '🍧', key: m.key } })
        let messageContent = `
        *🛡️TOUKA-BOT-MÐ🛡️*
┐┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┌ـ
┊💜 مـرحـبـاً ♡ - @${m.sender.split("@")[0]}
┊⏲️ وقت التشغيل♡ - ${uptime}
┊🌄 الـيـوم ♡ - ${formattedWeekday}
┊📍الـتـاريـخ ♡ - ${formattedDate}
┘┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⟢ـ
┐┈⟤「قـائـمـات اوامــر بـوت تـوكــا ⟥┈┌
┊🕋♡ - 「.القران
┊📚♡ - 「.الذكاء
┊🛡️♡ - 「.المطور
┊💌♡ - 「.الاعضاء 
┊🧬♡ - 「.المجموعات
┊📥♡ - 「.التحميلات
┊🧰♡ - 「.التحويلات
┊🎨♡ - 「.البنك
┊🎉♡ - 「.الحصري 
┊🎮♡ - 「.الالعاب
┊🎩♡ - 「.الوجوهات
┊🪨♡ - 「.الاصوات
┊ *.الاوامر2    > لعرض الاوامر بشكل كامل*
┊ *.الاوامر3    > لعرض الاوامر بشكل جديد*
│ تحت إدارة :  ♡🏎️𓆩𝑻𝒆𝒔𝒍𝒂𓆪🏎️♡
┘┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⟢ـ
📚 *_تـحـذيـر مـمـنـوع اسـتـخـدام الـبـوت الا فـي الجـروبـات إذا قـمـت بـدخـول الـي الـبـوت خـاص سـوف يـتـم حـظـرك_* 📚
 `;

        await conn.sendMessage(m.chat, { text: messageContent, mentions: [m.sender] });
    } catch (e) {
        await m.reply('حدث خطأ.');
        console.log(`❗❗ Error in command ${usedPrefix + command} ❗❗`);
        console.log(e);
    }
};

gameHandler.command = /^اوامر|الاوامر$/i;

export default gameHandler;

function formatUptime(ms) {
    let hours = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
    let minutes = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
    let seconds = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
    return [hours, minutes, seconds].map(v => v.toString().padStart(2, 0)).join(':');
}
