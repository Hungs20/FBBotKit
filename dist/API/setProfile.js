"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const fbbotkit_1 = require("../fbbotkit");
fbbotkit_1.FBBotKit.prototype.setMessengerProfile = function (request) {
    return __awaiter(this, void 0, void 0, function* () {
        const persistent_menu = [{
                locale: 'default',
                composer_input_disabled: false,
                call_to_actions: request.persistent_menu_action
            }];
        const payload = {
            get_started: {
                payload: request.get_started_payload
            },
            persistent_menu
        };
        try {
            const response = yield axios_1.default.post(this.apiUrl.SET_MESSAGER_PROFILE_URL, payload, {
                params: { access_token: this.config.pageAccessToken },
            });
            console.log('setMessengerProfile successfully:', response.data);
        }
        catch (error) {
            console.error('Error setMessengerProfile:', error.response.data.error);
        }
    });
};
//# sourceMappingURL=setProfile.js.map