import fetch from 'node-fetch';
const handler = async (m, {
  conn,
  isOwner,
  usedPrefix,
  command,
  text,
}) => {
  conn.dropmail = conn.dropmail ? conn.dropmail : {};
  const id = 'dropmail';

  const lister = [
    'انشاء',
    'كود',
    'حذف',
  ];

  const [feature, inputs, inputs_, inputs__, inputs___] = text.split(' ');
  if (!lister.includes(feature)) return m.reply('*مثل:*\n' + usedPrefix + command + ' انشاء\n\n*تختار لإنشاء حساب وهني*\n' + lister.map((v, index) => '  ○ ' + v).join('\n'));

  if (lister.includes(feature)) {
    if (feature == 'انشاء') {
      try {
        const eml = await random_mail();
        const timeDiff = new Date(eml[2]) - new Date();
        conn.dropmail[id] = [
          await m.reply('*الحساب:*\n' + eml[0] + '\n\n' + '*الرمز:*\n' + eml[1] + '\n\n*الصالحيه:*\n' + msToTime(timeDiff) + '\n\n_اكتب *' + usedPrefix + command + ' كود* ليتم ارسال كود التحقق_'),
          eml[0],
          eml[1],
          eml[2],
        ];
      } catch (e) {
        await m.reply(eror);
      }
    }

    if (feature == 'كود') {
      if (!conn.dropmail[id]) return m.reply('عليك انشاء حساب اولاً\nلانشاء حساب اكتب*' + usedPrefix + command + ' انشاء*');

      try {
        const eml = await get_mails(conn.dropmail[id][2]);
        const teks = eml[0].map((v, index) => {
          return `*بريد إلكتروني [ ${index + 1} ]*
*ل* : ${v.fromAddr}
*Para* : ${v.toAddr}

*رسالة* : ${v.text}
*اخري* : ${formatSize(v.rawSize)}
*اخري* : ${v.headerSubject}
*التحميل* : ${v.downloadUrl}
   `.trim();
        }).filter((v) => v).join('\n\n________________________\n\n');
        await m.reply(teks || '*VACÍO*' + '\n\n_انشاء حساب جديد لان لم يتم ارسال كود اولاً امسح هذا الحساب باستخدام*' + usedPrefix + command + ' حذف*_');
      } catch (e) {
        await m.reply(eror);
      }
    }
    if (feature == 'حذف') {
      if (!conn.dropmail[id]) return m.reply('لا يوجد تبن correo صالح');

      try {
        delete conn.dropmail[id];
        await m.reply('تم الحذف');
      } catch (e) {
        await m.reply(eror);
      }
    }
  }
};
handler.help = ['dropmail'];
handler.tags = ['misc'];
handler.command = /^(ايميل)$/i;
handler.limit = 2;
export default handler;

function msToTime(duration) {
  const milliseconds = parseInt((duration % 1000) / 100);
  const seconds = Math.floor((duration / 1000) % 60);
  const minutes = Math.floor((duration / (1000 * 60)) % 60);
  const hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  return `${hours}h ${minutes}m ${seconds}s ${milliseconds}ms`;
}

function formatSize(sizeInBytes) {
  const units = ['B', 'KB', 'MB', 'GB', 'TB'];
  let index = 0;

  while (sizeInBytes >= 1024 && index < units.length - 1) {
    sizeInBytes /= 1024;
    index++;
  }

  return sizeInBytes.toFixed(2) + ' ' + units[index];
}

async function random_mail() {
  const link = 'https://dropmail.me/api/graphql/web-test-wgq6m5i?query=mutation%20%7BintroduceSession%20%7Bid%2C%20expiresAt%2C%20addresses%20%7Baddress%7D%7D%7D';

  try {
    const response = await fetch(link);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    const email = data['data']['introduceSession']['addresses'][0]['address'];
    const id_ = data['data']['introduceSession']['id'];
    const time = data['data']['introduceSession']['expiresAt'];

    return [email, id_, time];
  } catch (error) {
    console.log(error);
  }
}

async function get_mails(id_) {
  const link = `https://dropmail.me/api/graphql/web-test-wgq6m5i?query=query%20(%24id%3A%20ID!)%20%7Bsession(id%3A%24id)%20%7B%20addresses%20%7Baddress%7D%2C%20mails%7BrawSize%2C%20fromAddr%2C%20toAddr%2C%20downloadUrl%2C%20text%2C%20headerSubject%7D%7D%20%7D&variables=%7B%22id%22%3A%22${id_}%22%7D`;

  try {
    const response = await fetch(link);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    const inbox = data['data']['session']['mails'];

    // return the size of the inbox to verify the amount of mail and whether the mail has arrived
    return [inbox, inbox.length];
  } catch (error) {
    console.log(error);
  }
}
