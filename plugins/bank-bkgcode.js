let handler = async(m, { conn, args, usedPrefix }) => {

    if (args.length == 0) return conn.reply(m.chat, `⌯ ضــيــف كــود الــبــكــج`, m)
    if (args[0] == '2sh9d23ow' || args[0] == 'PagpqvUac' || args[0] == '91hakHcwo' || args[0] == 'تست') {

    if (new Date - global.db.data.users[m.sender].lastgift > 86400000) {
       conn.reply(m.chat, '*🎉 مــبــارك :\n⌯ هــدايــاك هـــي\n100000 خــبــره ✨\n 100 مـــاس 🎫\n1000000 مــال 💹\n1000000 رصــيدك الـبـنكـي 💳\n100 عــمــلات 🪙\n2 طــعام حـيـوانـات 🍖\n50 أسطوري 🧰\n1 طــعام روبوت 🤖', m)
    global.db.data.users[m.sender].exp += 100000
    global.db.data.users[m.sender].limit += 100
    global.db.data.users[m.sender].money +=1000000
    global.db.data.users[m.sender].gold += 100
    global.db.data.users[m.sender].legendary += 50
    global.db.data.users[m.sender].atm += 1000000
    global.db.data.users[m.sender].robo += 1
    global.db.data.users[m.sender].petFood += 2
    global.db.data.users[m.sender].lastgift = new Date * 1
} else conn.reply(m.chat, '[⚡]⌯ انــتــهــت صــلــاحيـــه الـــكــود', m)
   } else {
        conn.reply(m.chat, `[⚡]⌯ كــود خــاطــئ يــمــكــنك الحـصول عــلي الــاكواد مـن الـمـطور`, m)
    } 
}
//BY : 3MK SHADOW

handler.help = ['S H A D O W']
handler.tags = ['S H A D O W']
handler.command = /^(بكج)$/i

export default handler 

