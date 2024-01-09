"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiURL = void 0;
class ApiURL {
    constructor(version) {
        this._version = version;
    }
    get SEND_MESSAGE_URL() {
        return `https://graph.facebook.com/v${this._version}/me/messages`;
    }
    get SET_MESSAGER_PROFILE_URL() {
        return `https://graph.facebook.com/v${this._version}/me/messenger_profile`;
    }
    get SET_PERSIONAL_PROFILE_URL() {
        return `https://graph.facebook.com/v${this._version}/me/personas`;
    }
    DELETE_PERSIONAL_PROFILE_URL(id) {
        return `https://graph.facebook.com/v${this._version}/${id}`;
    }
}
exports.ApiURL = ApiURL;
//# sourceMappingURL=apiUrl.js.map