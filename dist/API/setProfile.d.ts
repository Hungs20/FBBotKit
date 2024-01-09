import { MessengerProfile } from '..';
declare module "../fbbotkit" {
    interface FBBotKit {
        setMessengerProfile(request: MessengerProfile): void;
    }
}
