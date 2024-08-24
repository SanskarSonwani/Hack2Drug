const TelegramBot = require('node-telegram-bot-api');
const token = 'YOUR_TELEGRAM_BOT_API_TOKEN';
const bot = new TelegramBot(token, { polling: true });

bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const suspiciousKeywords = ['MDMA', 'LSD', 'Mephedrone'];

    if (suspiciousKeywords.some(keyword => msg.text.includes(keyword))) {
        // Log the message details into the database
        console.log(`Suspicious message: ${msg.text}`);
    }
});
