export class ApiURL {
    private _version: string;

    constructor(version: string) {
        this._version = version;
    }

    get SEND_MESSAGE_URL(): string {
      return `https://graph.facebook.com/v${this._version}/me/messages`;
    }

    get SET_MESSAGER_PROFILE_URL(): string {
        return `https://graph.facebook.com/v${this._version}/me/messenger_profile`;
    }

    get SET_PERSIONAL_PROFILE_URL(): string {
        return `https://graph.facebook.com/v${this._version}/me/personas`
    }

    DELETE_PERSIONAL_PROFILE_URL(id: string): string {
        return `https://graph.facebook.com/v${this._version}/${id}`
    }
}
