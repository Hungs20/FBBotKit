"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FBBotKit = void 0;
const apiUrl_1 = require("./API/apiUrl");
class FBBotKit {
    constructor(config) {
        this._config = config;
        this.apiUrl = new apiUrl_1.ApiURL(config.apiVersion);
    }
    get config() {
        return this._config;
    }
}
exports.FBBotKit = FBBotKit;
//# sourceMappingURL=fbbotkit.js.map