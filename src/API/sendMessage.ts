import axios from 'axios';
import { ElementPayload, SendQuickReply, SendRequest } from '../model/SendAPI/SendMessageObject';
import { FBBotKit } from '../fbbotkit';

declare module "../fbbotkit" {
  export interface FBBotKit {
    // Hàm để set trang cá nhân Messenger: tin nhắn chào mừng, menu...
    sendMessage(request: SendRequest): void;
    sendTextMessage(recipientId: string, text: string): void;
    sendAttachmentMessage(recipientId: string, type: 'image' | 'video' | 'audio' | 'file', url: string): void;
    sendTemplateGeneric(recipientId: string, elements: ElementPayload[]): void;
    sendQuickReplies(recipientId: string, text: string, elements: SendQuickReply[]): void;
  }
}

// Hàm để gửi tin nhắn
FBBotKit.prototype.sendMessage = async function (request: SendRequest): Promise<void> {
  try {
    const response = await axios.post(
      this.apiUrl.SEND_MESSAGE_URL,
      request,
      {
        params: { access_token: this.config.pageAccessToken },
      }
    );

    console.log('Message sent successfully:', response.data);
  } catch (error: any) {
    console.error('Error sending message:', error.response.data.error);
  }
}

FBBotKit.prototype.sendTextMessage = async function (recipientId: string, text: string) {
  this.sendMessage({
    messaging_type: 'RESPONSE',
    recipient: {
      id: recipientId
    },
    message: {
      text: text
    }
  })
}

FBBotKit.prototype.sendAttachmentMessage = async function (recipientId: string, type: 'image' | 'video' | 'audio' | 'file', url: string) {
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
  })
}

FBBotKit.prototype.sendTemplateGeneric = async function (recipientId: string, elements: ElementPayload[]) {
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
  })
}

FBBotKit.prototype.sendQuickReplies = async function (recipientId: string, text: string, elements: SendQuickReply[]) {
  this.sendMessage({
    messaging_type: 'RESPONSE',
    recipient: {
      id: recipientId
    },
    message: {
      text,
      quick_replies: elements
    }
  })
}