const gameStates = {};

const startGame = (chatId) => {
  return {
    randomNumber: Math.floor(Math.random() * 100) + 1,
    tries: 0,
    maxTries: 5,
  };
};

let handler = async (m, { conn, text }) => {
  const chatId = m.chat;

  // بدء لعبة جديدة إذا لم تكن هناك لعبة نشطة
  if (!gameStates[chatId]) {
    gameStates[chatId] = startGame(chatId);
    conn.reply(chatId, "  اختار رقم بين 1 و 100. حاول تخمينه! لديك 5 محاولات.", m);
  }

  const gameState = gameStates[chatId];
  if (gameState.tries >= gameState.maxTries) {
    conn.reply(chatId, `لقد نفدت محاولاتك! كان الرقم ${gameState.randomNumber} 😭💔`, m);
    delete gameStates[chatId]; // إنهاء اللعبة
    return;
  }

  const guess = parseInt(text);
  if (!isNaN(guess)) {
    gameState.tries++;
    if (guess === gameState.randomNumber) {
      conn.reply(chatId, `تهانينا! لقد خمنت الرقم بشكل صحيح. الرقم هو ${gameState.randomNumber} بدأت أعجب بك 🤭✨`, m);
      delete gameStates[chatId]; // إنهاء اللعبة
    } else if (guess < gameState.randomNumber) {
      conn.reply(chatId, "❌ أكبر من ذلك. حاول مرة أخرى!", m);
    } else if (guess > gameState.randomNumber) {
      conn.reply(chatId, "❌ أصغر من ذلك. حاول مرة أخرى!", m);
    }
  }
};

handler.command = ['جيب'];
export default handler;
