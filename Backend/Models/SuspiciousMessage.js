const mongoose = require('mongoose');

const SuspiciousMessageSchema = new mongoose.Schema({
    platform: String,
    message: String,
    timestamp: Date,
    userDetails: Object,
});

const SuspiciousMessage = mongoose.model('SuspiciousMessage', SuspiciousMessageSchema);

// Save a message
const message = new SuspiciousMessage({
    platform: 'Telegram',
    message: 'Selling MDMA for a cheap price!',
    timestamp: new Date(),
    userDetails: { username: 'user123', chatId: '123456' }
});

message.save().then(() => console.log('Message saved!'));
