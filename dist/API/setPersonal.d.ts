import { PersonalProfile } from '..';
declare module "../fbbotkit" {
    interface FBBotKit {
        setPersonal(request: PersonalProfile): Promise<string | undefined>;
        deletePersonal(id: string): void;
    }
}
