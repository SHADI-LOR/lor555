import moment from 'moment-timezone'
import PhoneNum from 'awesome-phonenumber'

let regionNames = new Intl.DisplayNames(['ar'], { type: 'region' })

let handler = async (m, { conn, text, usedPrefix, command: cmd }) => {
  let num = m.quoted?.sender || m.mentionedJid?.[0] || text
  if (!(await conn.onWhatsApp(num))[0]?.exists) throw 'المستخدم غير موجود'
  let img = await conn.profilePictureUrl(num, 'image').catch(_ => './media/ShadowElwazer/Shadow.png')
  let bio = await conn.fetchStatus(num).catch(_ => { })
  let name = await conn.getName(num)
  let business = await conn.getBusinessProfile(num)
  let format = PhoneNum(`+${num.split('@')[0]}`)
  let country = regionNames.of(format.getRegionCode('international'))
  let wea = `\t\t▾ كشف حساب ▾\n\n⇜ الدولة ↢${country.toUpperCase()}\n⇜ الاسم ↢${name ? name : '-'}\n⇜ الرقم ↢ ${format.getNumber('international')}\n⇜ المعرف ↢ wa.me/${num.split('@')[0]}\n⇜ المنشن ↢ @${num.split('@')[0]}\n⇜ البايو ↢ ${bio?.status || '-'}\n⇜ تاريخ البايو ↢ ${bio?.setAt ? moment(bio.setAt.toDateString()).locale('id').format('LL') : '-'}\n\n${business ? `\t\t▾ مــعـلـومــات الاعــمــال ▾\n\n⇜ الايدي ↢${business.wid}\n⇜ الويب ↢ ${business.website ? business.website : '-'}\n⇜ الايميل ↢${business.email ? business.email : '-'}\n⇜ الفئة ↢${business.category}\n⇜ العنوان ↢${business.address ? business.address : '-'}\n⇜ تايم ون ↢ ${business.business_hours.timezone ? business.business_hours.timezone : '-'}\n⇜ الوصف ↢ ${business.description ? business.description : '-'}` : '⌯ لـور'}`
  img ? await conn.sendMessage(m.chat, { image: { url: img }, caption: wea, mentions: [num] }, { quoted: m }) : m.reply(wea)
  return conn.sendMessage(m.chat, {
  react: {
    text: '📑',
    key: m.key
  }})
}

handler.help = ['wastalk']
handler.tags = ['stalk']
handler.command = /^كشف$/i
handler.limit = 1

export default handler
