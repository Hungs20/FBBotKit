export declare enum AttachmentType {
    Image = "image",
    Video = "video",
    Audio = "audio",
    File = "file"
}
export interface FacebookAttachment {
    type: AttachmentType;
    payload: {
        url: string;
        title?: string;
        sticker_id?: number;
    };
}
export interface FacebookMessage {
    mid?: string;
    text?: string;
    attachments?: FacebookAttachment[];
    quick_reply?: FacebookQuickReply;
    reply_to?: FacebookReplyTo;
}
export interface FacebookQuickReply {
    payload: string;
}
export interface FacebookReplyTo {
    mid: string;
}
