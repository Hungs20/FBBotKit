export interface SendRequest {
  messaging_type: 'RESPONSE' | 'UPDATE' | 'MESSAGE_TAG';
  recipient: SendRecipientObject;
  message?: SendMessageObject;
  persona_id?: string;
  sender_action?: 'typing_on' | 'typing_off' | 'mark_seen';
  notification_type?: 'REGULAR' | 'SILENT_PUSH' | 'NO_PUSH';
  tag?: 'CONFIRMED_EVENT_UPDATE' | 'POST_PURCHASE_UPDATE' | 'ACCOUNT_UPDATE' | 'HUMAN_AGENT';
  filedata?: string;
}

export interface SendRecipientObject {
  id: string;
  user_ref?: string;
  post_id?: string;
  comment_id?: string;
}

export interface SendMessageObject {
    text?: string;
    attachment?: SendAttachment;
    quick_replies?: Array<SendQuickReply>;
    metadata?: string;
  }

  export interface SendAttachment {
    type: string;
    payload: SendAttachmentPayload;
  }

  export interface SendQuickReply {
    content_type: 'text' | 'user_phone_number' | 'user_email';
    title?: string;
    payload?: string | number;
    image_url?: string;
  }

  export interface SendAttachmentPayload {
    url?: string;
    is_reusable?: boolean;
    template_type?: string;
    text?: string;
    buttons?: Array<SendButton>;
    image_aspect_ratio?: string;
    elements?: Array<ElementPayload>;
  }

  export interface SendButton {
    type?: string;
    url?: string;
    title?: string;
    payload?: string;
    
  }

  export interface ElementPayload {
    title?: string;
    image_url?: string;
    subtitle?: string;
    buttons?: Array<SendButton>;
    media_type?: string;
    url?: string;
  }