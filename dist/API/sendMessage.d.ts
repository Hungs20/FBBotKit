import { ElementPayload, SendQuickReply, SendRequest } from '../model/SendAPI/SendMessageObject';
declare module "../fbbotkit" {
    interface FBBotKit {
        sendMessage(request: SendRequest): void;
        sendTextMessage(recipientId: string, text: string): void;
        sendAttachmentMessage(recipientId: string, type: 'image' | 'video' | 'audio' | 'file', url: string): void;
        sendTemplateGeneric(recipientId: string, elements: ElementPayload[]): void;
        sendQuickReplies(recipientId: string, text: string, elements: SendQuickReply[]): void;
    }
}
