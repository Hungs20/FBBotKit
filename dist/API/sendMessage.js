"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const fbbotkit_1 = require("../fbbotkit");
// Hàm để gửi tin nhắn
fbbotkit_1.FBBotKit.prototype.sendMessage = function (request) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield axios_1.default.post(this.apiUrl.SEND_MESSAGE_URL, request, {
                params: { access_token: this.config.pageAccessToken },
            });
            console.log('Message sent successfully:', response.data);
        }
        catch (error) {
            console.error('Error sending message:', error.response.data.error);
        }
    });
};
fbbotkit_1.FBBotKit.prototype.sendTextMessage = function (recipientId, text) {
    return __awaiter(this, void 0, void 0, function* () {
        this.sendMessage({
            messaging_type: 'RESPONSE',
            recipient: {
                id: recipientId
            },
            message: {
                text: text
            }
        });
    });
};
fbbotkit_1.FBBotKit.prototype.sendAttachmentMessage = function (recipientId, type, url) {
    return __awaiter(this, void 0, void 0, function* () {
        this.sendMessage({
            messaging_type: 'RESPONSE',
            recipient: {
                id: recipientId
            },
            message: {
                attachment: {
                    type,
                    payload: {
                        url
                    }
                }
            }
        });
    });
};
fbbotkit_1.FBBotKit.prototype.sendTemplateGeneric = function (recipientId, elements) {
    return __awaiter(this, void 0, void 0, function* () {
        this.sendMessage({
            messaging_type: 'RESPONSE',
            recipient: {
                id: recipientId
            },
            message: {
                attachment: {
                    type: 'template',
                    payload: {
                        template_type: 'generic',
                        elements: elements
                    }
                }
            }
        });
    });
};
fbbotkit_1.FBBotKit.prototype.sendQuickReplies = function (recipientId, text, elements) {
    return __awaiter(this, void 0, void 0, function* () {
        this.sendMessage({
            messaging_type: 'RESPONSE',
            recipient: {
                id: recipientId
            },
            message: {
                text,
                quick_replies: elements
            }
        });
    });
};
//# sourceMappingURL=sendMessage.js.map