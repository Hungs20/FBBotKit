export declare class ApiURL {
    private _version;
    constructor(version: string);
    get SEND_MESSAGE_URL(): string;
    get SET_MESSAGER_PROFILE_URL(): string;
    get SET_PERSIONAL_PROFILE_URL(): string;
    DELETE_PERSIONAL_PROFILE_URL(id: string): string;
}
