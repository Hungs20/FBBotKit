// Định nghĩa enum cho loại đính kèm
export enum AttachmentType {
  Image = 'image',
  Video = 'video',
  Audio = 'audio',
  File = 'file',
  // Thêm các loại đính kèm khác nếu cần
}

// Định nghĩa interface cho đối tượng đính kèm
export interface FacebookAttachment {
  type: AttachmentType;
  payload: {
    url: string;
    title?: string;
    sticker_id?: number;
  };
}

// Định nghĩa interface cho đối tượng tin nhắn
export interface FacebookMessage {
  mid?: string;
  text?: string;
  attachments?: FacebookAttachment[];
  quick_reply?: FacebookQuickReply;
  reply_to?: FacebookReplyTo;
}

// Định nghĩa interface cho nút "Quick Reply"
export interface FacebookQuickReply {
  payload: string;
}

// Định nghĩa interface cho nút "Reply To"
export interface FacebookReplyTo {
  mid: string;
}