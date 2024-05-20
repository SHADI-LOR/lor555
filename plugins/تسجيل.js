import { createHash } from 'crypto';

let Reg = /\|?([^\|.]+)[.|] *?([0-9]{1,3})$/i;

let handler = async function (m, { conn, text, usedPrefix, command }) {
    let user = global.db.data.users[m.sender];
    let name2 = conn.getName(m.sender);
    let pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => 'https://telegra.ph/file/d42bc67f3bcd902cc4144.jpg');

    if (user.registered === true) {
        throw `[👤]⌯ انــت مــســجــل\n\n⌯ لــو تبغى تــســجـل تـاني اســتــخــدم الــامــر\n⌯ ${usedPrefix}ترك\nعــشــان تــســجــل خــروجــك مــن الــبــوت`;
    }
    if (!Reg.test(text)) {
        throw `[❌]⌯ اســتــخــدامــك خــاطـئ\n\n⌯ اكــتــب :\n${usedPrefix + command} اســمــك.عــمــرك\n⌯ مــثــال :\n⌯ ${usedPrefix + command} لوفي.20`;
    }

    let [_, name, age] = text.match(Reg);
    if (!name) throw '[🖋️]⌯ اكتب اســمــك';
    if (!age) throw '[🖋️]⌯ اكتب عـــمـــرك';
    if (name.length >= 30) throw '[❌]⌯ الـاســم طــويــل';

    age = parseInt(age);
    if (age > 100) throw '[😠]⌯ عمرك كبير تمزح معي؟';
    if (age < 5) throw '[🥱]⌯ بــيــبــي تــشــان روح نــام';

    user.name = name.trim();
    user.age = age;
    user.regTime = +new Date;
    user.registered = true;

    let sn = createHash('md5').update(m.sender).digest('hex');
    let caption = `┏✦•━━━━━ ∘⊰🕸️⊱∘ ━━━━━•✦
 「𝚂𝚁 𝙻𝙾𝚁 𝙱𝙾𝚃」
✦•━━━━━ ∘⊰🕸️⊱∘ ━━━━━•✦
⌯ الـاسـم : ${name}
⌯ الــعــمـر : ${age} سـنـه
⌯ الــايــدي  
${sn}  
┗✦•━━━━━ ∘⊰🕸️⊱∘ ━━━━━•✦`;

    await conn.sendFile(m.chat, pp, 'shadow.jpg', caption);
    global.db.data.users[m.sender].money += 10000;
    global.db.data.users[m.sender].exp += 10000;
};

handler.help = ['verificar'];
handler.tags = ['xp'];
handler.command = /^(تفعيل|التفعيل|تسجيل|التسجيل)$/i;

export default handler;
