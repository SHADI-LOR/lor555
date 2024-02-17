import similarity from 'similarity';
const threshold = 0.72;
let handler = m => m;
handler.before = async function (m) {
    let id = m.chat;
    // إزالة التحقق من الرد على الرسالة
    this.tekateki1 = this.tekateki1 ? this.tekateki1 : {};
    if (!(id in this.tekateki1)) return; // توقف إذا لم يكن هناك سؤال نشط في الدردشة

    let json = this.tekateki1[id][1]; // الحصول على الجواب من السؤال المحفوظ
    // لا حاجة لتحويل الجسون إلى نص ومن ثم إعادته إلى جسون مرة أخرى
    if (m.text.toLowerCase().trim() === json.response.toLowerCase().trim()) {
        // إذا كانت الإجابة صحيحة، يحصل اللاعب على النقاط
        global.db.data.users[m.sender].exp += this.tekateki1[id][2];
        m.reply(`*⚜️ احـسـنـت الـعـب مـره اخـري*`);
        clearTimeout(this.tekateki1[id][3]); // إزالة مؤقت الوقت
        delete this.tekateki1[id]; // حذف السؤال لأنه تم الإجابة عليه
    } 
    return true;
};

handler.exp = 0;

export default handler;
