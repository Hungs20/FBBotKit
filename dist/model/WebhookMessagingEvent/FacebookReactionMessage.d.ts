export interface FacebookReactionMessage {
    reaction: 'smile' | 'angry' | 'sad' | 'wow' | 'love' | 'like' | 'dislike';
    emoji: string;
    action: 'react' | 'unreact';
    mid: string;
}
