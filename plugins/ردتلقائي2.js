//*رد بوت ساسكي تبع ايتاتشي
// معلش ي ايتاتشي كسلت اعمل واحده 😀
// اعمل واحده بس احط رد تل

let handler = m => m; 
 handler.all = async function (m) { 

   let chat = global.db.data.chats[m.chat]; 
   let responses; 
   if (/^هلا$/i.test(m.text)) { 
     responses = [ 
 '*منورنا*'  
     ]; 
} else if (/^السلام عليكم|سلام عليكم ورحمه الله وبركاته|سلام عليكم|السلام عليكم ورحمه الله وبركاته$/i.test(m.text)) { 
     responses = [ 
       '*وعليكم السلام ورحمة الله وبركاته*',  
     ]; 
 
 }else if (/^كيف حالك|اخبارك|كيفك$/i.test(m.text)) { 
     responses = [ 
'*بخير الحمدلله وانت 🫀*'
     ]; 
   }else if (/^غبي | أحمق | حماره | حمار$/i.test(m.text)) { 
     responses = [ 
'*من زينك 😴*'
   ]; 
   }else if (/^تحبني|مين يحبني$/i.test(m.text)) { 
     responses = [ 
'*لا ما احبك*',
'*ورع*',
'*برااااا 🔚*',
]; 
   }else if (/^تكرهني؟$/i.test(m.text)) { 
     responses = [ 
'*ماعاش من يكرهكك حبي 🙁*',
'*لا بس لا تتعب نفسك لحبك🫥*',
'*ااي اكرهك🙄*',   ]; 
     
     }else if (/^هاي|هالو$/i.test(m.text)) { 
     responses = [ 
       '*السلام عليكم ورحمة الله وبركاته وليس هاي ياطفل*',  

     ]; 
}else if (/^بحبك/i.test(m.text)) { 
     responses = [ 
       '*هممممممم*',  

     ]; 
   }else if (/^فلسطين$/i.test(m.text)) { 
     responses = [ 
'عاشششش تفهم'
     ]; 
   } else if (/^احبك$/i.test(m.text)) { 
     responses = [ 
'*هااااا لو كنت بوت لحبيتك*'
     ]; 
     }else if (/^عامل ايه|عامل اي|عامل اية$/i.test(m.text)) { 
     responses = [ 
       'الحمدالله',  

     ];
     }else if (/^دز$/i.test(m.text)) { 
     responses = [ 
       '*انقلع✋*',  

     ];
     }else if (/^وينه البوت$/i.test(m.text)) { 
     responses = [ 
       'هنا لو تحتاج شيء اكتـ/ـب المهام لاتنسي النقطة 💗',  

     ];
     }else if (/^بوت|البوت$/i.test(m.text)) { 
     responses = [ 
       '*اسمي لور لو سمحت انسان غبي*',  

     ];
     }else if (/^اهلا$/i.test(m.text)) { 
     responses = [ 
       '*اهلين بس الافضل تحية الإسلام*',  

     ]; 
     }else if (/^مساء|مساء$/i.test(m.text)) { 
     responses = [ 
       'مساء الخير',  

     ];
     }else if (/^صباح|صباح$/ .test(m.text)) { 
     responses = [ 
       '*صباح الورد🧸*',  
     ];
       }else if (/^اوامر$/i.test(m.text)) { 
     responses = [ 
       '*اكتب المهام لاتنسى النقطة لو سمحت*',  
     ];
   }else if (/^لور|LOR$/i.test(m.text)) { 
     responses = [ 
'*عيونها💖*',
'*نعمم لو تحتاج الأوامر اكتب المهام*',
'*نعممم💖*',   ];
            }else if (/^مرحبا$/i.test(m.text)) { 
     responses = [ 
       '*مرحبا🧸*',  
     ];
}else if (/^كلزق|كلزوء|كل زق|كل تبن$/i.test(m.text)) { 
     responses = [ 
       '*عيببببب ✋*',  
     ];
}else if (/^تصبح على خير$/i.test(m.text)) { 
     responses = [ 
       'وأنت من أهل الخير 🫶🏻', 
       'وأنت من أهل الجنة 🦋', 
       'وأنت من أهل الفردوس 🦋',
}else if (/^هلو$/i.test(m.text)) { 
     responses = ['هلوو🦋']; 
}else if (/^اهلا$/i.test(m.text)) { 
     responses = ['اهلاا🦋']; 
}else if (/^جيت$/i.test(m.text)) { 
     responses = ['نورت🦋']; 
}else if (/^انا جيت$/i.test(m.text)) { 
     responses = ['نورت🦋'];

}else if (/^هلوو$/i.test(m.text)) { 
     responses = ['هلووو'];

}else if (/^بحبك$/i.test(m.text)) { 
     responses = ['اكتر يقلبي🤭❤️']; 
}else if (/^بموت فيك$/i.test(m.text)) { 
     responses = ['بعشقك🤭❤️']; 
}else if (/^بعشقك$/i.test(m.text)) { 
     responses = ['بموت فيك🤭❤️']; 
}else if (/^بوت$/i.test(m.text)) { 
     responses = ['قلب البوت 🦋✨']; 
}else if (/^نورت$/i.test(m.text)) { 
     responses = ['نورك 🦋✨']; 
}else if (/^منور$/i.test(m.text)) { 
     responses = ['نورك 🦋✨']; 
}else if (/^نيزوكو$/i.test(m.text)) { 
     responses = ['عمتك']; 
}else if (/^لوفي$/i.test(m.text)) { 
     responses = ['عمك']; 
}else if (/^ون بيس$/i.test(m.text)) { 
     responses = ['عمك']; 
}else if (/^أتاك$/i.test(m.text) || /^اتاك$/i.test(m.text)) { 
     responses = ['عمك'];
}else if (/^هلوز$/i.test(m.text)) { 
     responses = ['بلموز🤭❤️']; 
}else if (/^هنام$/i.test(m.text) || /^بنام$/i.test(m.text)) { 
     responses = ['تصبح على خير ❤️✨']; 
}else if (/^هلا$/i.test(m.text)) { 
     responses = ['اهلاا🦋']; 
}else if (/^❤️❤️$/i.test(m.text)) { 
     responses = ['❤️🩷🧡']; 
}else if (/^❤️❤️❤️$/i.test(m.text)) { 
     responses = ['🩵🩵🩵🩵']; 
}else if (/^🫶🏻$/i.test(m.text)) { 
     responses = ['🫶🏻🦋✨']; 
}else if (/^اسف$/i.test(m.text) || /^اسفة$/i.test(m.text)) { 
     responses = ['ما عليك سامحتك🫶🏻']; 
}else if (/^بوت$/i.test(m.text)) { 
     responses = ['قلبه🦋']; 
}else if (/^روحي$/i.test(m.text) || /^عيوني$/i.test(m.text)) { 
     responses = ['قلبي 🤭❤️']; 
}else if (/^حاضر$/i.test(m.text)) { 
     responses = ['يحضرلك الخير 🦋✨']; 
}else if (/^زعلان$/i.test(m.text) || /^زعلانة$/i.test(m.text) || /^زعلانة منك$/i.test(m.text) || /^زعلان منك$/i.test(m.text)) { 
     responses = ['متزعلش🥺❤']; 
}else if (/^بوت ميت$/i.test(m.text)) { 
     responses = ['خخخخخ 🤨'];
}else if (/^البوت ميت$/i.test(m.text)) { 
     responses = ['خخخخخ🤨']; 
}else if (/^بوت تعبان$/i.test(m.text)) { 
     responses = ['روح شخ']; 
}else if (/^حمرة$/i.test(m.text)) { 
     responses = ['البندورة🤭😂']; 
}else if (/^احا$/i.test(m.text)) { 
     responses = ['احتين']; 
}else if (/^تسلم$/i.test(m.text) || /^تسلمي$/i.test(m.text)) { 
     responses = ['حبيبي❤']; 
}else if (/^حبيبي$/i.test(m.text)) { 
     responses = ['قلبي❤']; 
}else if (/^عمك$/i.test(m.text)) { 
     responses = ['مليش اعمام🤨']; 
}else if (/^شوية وجاي$/i.test(m.text) || /^شوية وجاية$/i.test(m.text) || /^شوية وبجيك$/i.test(m.text) || /^شوية كدة$/i.test(m.text) || /^شوية$/i.test(m.text)) { 
     responses = ['خد وقتك🦋✨']; 
}else if (/^بعد شوية$/i.test(m.text)) { 
     responses = ['خد وقتك🦋✨']; 
}else if (/^شوية كدا$/i.test(m.text)) { 
     responses = ['خد وقتك🦋✨']; 
}else if (/^اتفق$/i.test(m.text)) { 
     responses = ['اتفق على اتفاقك✨🌚']; 
}else if (/^صح$/i.test(m.text)) { 
     responses = ['صحين😂✨']; 
}else if (/^غلط$/i.test(m.text)) { 
     responses = ['🤨']; 
}else if (/^لا اله الا الله$/i.test(m.text)) { 
     responses = ['محمد رسول الله']; 
}else if (/^بسم الله$/i.test(m.text)) { 
     responses = ['الرحمن الرحيم']; 
}else if (/^بموت.😂$/i.test(m.text) || /^هموت.😂$/i.test(m.text)) { 
     responses = ['اسعاف؟😂❤']; 
}else if (/موت/i.test(m.text)) { 
     responses = ['🤨']; 
}else if (/وه/i.test(m.text)) { 
     responses = ['وهه']; 
}else if (/احم/i.test(m.text)) { 
     responses = ['احم🤭']; 
}else if (/لول/i.test(m.text)) { 
     responses = ['ضحكني معاك👀']; 
}else if (/بيض/i.test(m.text)) { 
     responses = ['اخرس']; 
}else if (/🌚/i.test(m.text)) { 
     responses = ['🌝']; 
}else if (/🌝/i.test(m.text)) { 
     responses = ['🌚']; 
}else if (/اوه/i.test(m.text)) { 
     responses = ['🫢']; 
}else if (/بحبك/i.test(m.text)) { 
     responses = ['اموت فيك🤭❤️']; 
}else if (/الوقت اتأخر/i.test(m.text)) { 
     responses = ['نام👀']; 
}else if (/الوقت تأخر/i.test(m.text)) { 
     responses = ['نام👀']; 
}else if (/نعست/i.test(m.text)) { 
     responses = ['نام👀']; 
}else if (/نعسانة/i.test(m.text)) { 
     responses = ['نامي👀']; 
}else if (/نعسان/i.test(m.text)) { 
     responses = ['نام👀']; 
}else if (/بروح/i.test(m.text)) { 
     responses = ['ربي معك❤']; 
}else if (/هروح/i.test(m.text)) { 
     responses = ['ربي معك❤']; 
}else if (/اوك/i.test(m.text)) { 
     responses = ['مبحبش الاختصارات😾']; 
}else if (/ك/i.test(m.text)) { 
     responses = ['بارد! مبحبش الاختصارات😾']; 
}else if (/سبحان الله/i.test(m.text)) { 
     responses = ['ونِعم بالله']; 
}else if (/اشتقتولي؟/i.test(m.text)) { 
     responses = ['اكيد يقلبي❤']; 
}else if (/وحشتوني/i.test(m.text)) { 
     responses = ['قلبي🥹❤️']; 
}else if (/ربنا يوفقك/i.test(m.text)) { 
     responses = ['ويوفقك🦋✨']; 
}else if (/ربنا معاك/i.test(m.text)) { 
     responses = ['وياك🦋✨']; 
}else if (/خد وقتك/i.test(m.text)) { 
     responses = ['🤭❤️']; 
}else if (/ربي معك/i.test(m.text)) { 
     responses = ['وياك🦋']; 
}

    ];
   }
   if (responses) { 
     let randomIndex = Math.floor(Math.random() * responses.length); 
     conn.reply(m.chat, responses[randomIndex], m); 
   } 
   return !0 
 }; 

 export default handler;
