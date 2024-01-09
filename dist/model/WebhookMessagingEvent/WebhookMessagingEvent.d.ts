import { FacebookMessage } from "./FacebookMessage";
import { FacebookOptinMessage } from "./FacebookOptinMessage";
import { FacebookMessagePostBack } from "./FacebookPostBackMessage";
import { FacebookReactionMessage } from "./FacebookReactionMessage";
export interface WebhookMessagingEvent {
    senderId: string;
    recipientId: string;
    timestamp: number;
    message?: FacebookMessage;
    postback?: FacebookMessagePostBack;
    reaction?: FacebookReactionMessage;
    read?: {
        watermark: number;
    };
    optin?: FacebookOptinMessage;
}
