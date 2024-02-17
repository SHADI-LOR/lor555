let handler = async (m, { conn, args, text, usedPrefix, command }) => {
	let tee = `✳️ ادخل النص\n\n📌 مثل  : *${usedPrefix + command}* VENOM\n*لصنع لك لوجو احترافي`
	let too = `✳️ ادخل نص مثل *+* \n\n📌 Example : \n*${usedPrefix + command}* MITSURI *+* BOT`
	
	m.react(rwait);
	
	let type = command.toLowerCase();
	
	switch (type) {
	  case 'تصميم1':
		if (!text) throw tee;
		let chut = `https://api.caliph.biz.id/api/kaneki?nama=${encodeURIComponent(text)}&apikey=caliphkey`;
		conn.sendFile(m.chat, chut, 'logo.png', `✅ تم`, m);
		m.react(done);
		break;
		
	  case 'تصميم2': 
		if (!text) throw too;
		if (!text.includes('+')) throw too;
		let [a, b] = text.split('+');
		let loda = `https://api.caliph.biz.id/api/girlneko?nama=${encodeURIComponent(a.trim())}&nama2=${encodeURIComponent(b.trim())}&apikey=caliphkey`;
		conn.sendFile(m.chat, loda, 'logo.png', `✅ تم`, m);
		
		m.react(done);
		break;
		
	  case 'تصميم3':
		if (!text) throw tee;
		let cp = `https://api.caliph.biz.id/api/rem?nama=${encodeURIComponent(text.trim())}&apikey=caliphkey`;
		conn.sendFile(m.chat, cp, 'logo.png', `✅ تم`, m);
		m.react(done);
		break;
		
	  case 'تصميم4': 
		if (!text) throw tee;
		let gandu = `https://api.caliph.biz.id/api/textpro/matrix?text=${encodeURIComponent(text)}&apikey=caliphkey`;
		conn.sendFile(m.chat, gandu, 'logo.png', `✅ تم`, m);
		m.react(done);
		break;
		case 'تصميم5':
    if (!text) throw tee
    const apiUrll = `https://api.lolhuman.xyz/api/textprome/jokerlogo?apikey=${lolkeysapi}&text=${encodeURIComponent(text)}`;
    conn.sendFile(m.chat, apiUrll, 'logo.png', '✅ تم', m);
    m.react('✅');
    break;

	case 'تصميم6': 
	if (!text) throw too
	if (!text.includes('+')) throw too  
	let [c, d] = text.split`+`   
	const apiUrl = `https://api.lolhuman.xyz/api/textprome2/lionlogo?apikey=${lolkeysapi}&text1=${encodeURIComponent(c)}&text2=${encodeURIComponent(d)}`
	conn.sendFile(m.chat, apiUrl, 'logo.png', `✅ تم`, m)
	m.react(done)
	break 
	case 'تصميم7': 
	if (!text) throw too;
	if (!text.includes('+')) throw too;
	let [e, f] = text.split('+');
	let oda = `https://api.lolhuman.xyz/api/photooxy2/battlefield4?apikey=${lolkeysapi}&text1=${encodeURIComponent(e.trim())}&text2=${encodeURIComponent(f.trim())}`;
	conn.sendFile(m.chat, oda, 'logo.png', `✅ تم`, m);
	
	m.react(done);
	break 
	case 'تصميم8': 
	if (!text) throw tee;
	let rand = `https://api.lolhuman.xyz/api/ephoto1/anonymhacker?apikey=${lolkeysapi}&text=${encodeURIComponent(text)}`;
	conn.sendFile(m.chat, rand, 'logo.png', `✅ تم`, m);
	m.react(done);
	break;
	case 'تصميم9': 
	if (!text) throw tee;
	let randi = `https://api.lolhuman.xyz/api/ephoto1/avatarlolnew?apikey=${lolkeysapi}&text=${encodeURIComponent(text)}`;
	conn.sendFile(m.chat, randi, 'logo.png', `✅ تم`, m);
	m.react(done);
	break;
	case 'تصميم10': 
	if (!text) throw tee;
	let randu = `https://api.lolhuman.xyz/api/ephoto1/avatardota?apikey=${lolkeysapi}&text=${encodeURIComponent(text)}`;
	conn.sendFile(m.chat, randu, 'logo.png', `✅ Result`, m);
	m.react(done);
	break;
	case 'تصميم11': 
	if (!text) throw too;
	if (!text.includes('+')) throw too;
	let [g, h] = text.split('+');
	let od = `https://api.lolhuman.xyz/api/ephoto2/codwarzone?apikey=${lolkeysapi}&text1=${encodeURIComponent(g.trim())}&text2=${encodeURIComponent(h.trim())}`;
	conn.sendFile(m.chat, od, 'logo.png', `✅ تم`, m);
	
	m.react(done);
	break 
	case 'تصميم12': 
	if (!text) throw tee;
	let rr = `https://api.lolhuman.xyz/api/ephoto1/freefire?apikey=${lolkeysapi}&text=${encodeURIComponent(text)}`;
	conn.sendFile(m.chat, rr, 'logo.png', `✅ تم`, m);
	m.react(done);
	break;

	  default:
	} 
  };
  
  handler.help = ['تصميم']
  handler.tags = ['maker'];
  handler.command = /^(تصميم1|تصميم2|تصميم3|تصميم4|تصميم5|تصميم6|تصميم7|تصميم8|تصميم9|تصميم10|تصميم11|تصميم12)$/i;

  handler.diamond = false;
  
  export default handler;
  

  