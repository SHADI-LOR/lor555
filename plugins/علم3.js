let timeout = 60000
let poin = 4999
let handler = async (m, { conn, command, usedPrefix }) => {
    conn.tebakbendera = conn.tebakbendera ? conn.tebakbendera : {}
    let id = m.chat
    if (id in conn.tebakbendera) {
        conn.reply(m.chat, 'في سؤال عشان تبقا عارف', conn.tebakbendera[id][0])
        throw false
    }
    let src = await (await fetch(`https://raw.githubusercontent.com/socona12/-/main/Src/${command}.json`)).json()
  let json = src[Math.floor(Math.random() * src.length)]
    let caption = ` ⟣┈┈┈┈┈┈┈┈┈┈┈┈┈┈⟢\n*${command.toUpperCase()}*
⟣⟤ المده *${(timeout / 1000).toFixed(2)}* ثانيه
⟣⟤ استخدم ${usedPrefix}استسلم للاستسلام
⟣⟤ الجائزه: ${poin} خبره
⟣┈┈┈┈┈┈┈┈┈┈┈┈┈┈⟢
⚡ 𝑺𝑶𝑲𝑼𝑵𝑨 𝑨𝑵𝑫 𝑽𝑬𝑵𝑶𝑴 ⚡
🌸 𝑻𝑶𝑼𝑲𝑨 𝑩𝑶𝑻 𝑴𝑫 🌸
⟣┈┈┈┈┈┈┈┈┈┈┈┈┈┈⟢
     `.trim()
    conn.tebakbendera[id] = [
        await conn.sendFile(m.chat, json.img, '', caption, m),
        json, poin,
        setTimeout(() => {
            if (conn.tebakbendera[id]) conn.reply(m.chat, `الوقت خلص!\nالاجابه هي *${json.name}*`, conn.tebakbendera[id][0])
            delete conn.tebakbendera[id]
        }, timeout)
    ]
}
handler.help = ['guessflag']
handler.tags = ['game']
handler.command = ['علم', 'عين', 'احزر', 'كوره']

export default handler
