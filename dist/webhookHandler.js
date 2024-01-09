"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleWebhook = void 0;
const sendMessage_1 = require("./API/sendMessage");
const handleWebhook = function (req, res) {
    const body = req.body;
    if (body.object === 'page') {
        body.entry.forEach((entry) => {
            const webhookEvent = entry.messaging[0];
            const senderId = webhookEvent.sender.id;
            const recipientId = webhookEvent.recipient.id;
            const timestamp = webhookEvent.timestamp;
            const messagingEvent = {
                senderId,
                recipientId,
                timestamp,
                message: webhookEvent.message,
                postback: webhookEvent.postback,
                optin: webhookEvent.optin,
                reaction: webhookEvent.reaction,
                read: webhookEvent.read
            };
            handleEvent(messagingEvent);
        });
        res.status(200).send('EVENT_RECEIVED');
    }
    else {
        res.sendStatus(404);
    }
};
exports.handleWebhook = handleWebhook;
function handleEvent(event) {
    // Xử lý sự kiện tùy thuộc vào đối tượng messagingEvent
    console.log('Received a WebhookMessagingEvent:', event);
    if (event.message) {
        console.log('Received a message:', event.message);
        // Xử lý tin nhắn từ người dùng
        const request = {
            messaging_type: 'RESPONSE',
            recipient: {
                id: event.senderId,
            },
            sender_action: 'typing_on'
        };
        (0, sendMessage_1.sendMessage)(request);
    }
    else if (event.postback) {
        console.log('Received a postback:', event.postback);
        // Xử lý sự kiện postback (nếu có)
    }
}
