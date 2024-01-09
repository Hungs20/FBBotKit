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
fbbotkit_1.FBBotKit.prototype.setPersonal = function (request) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield axios_1.default.post(this.apiUrl.SET_PERSIONAL_PROFILE_URL, request, {
                params: { access_token: this.config.pageAccessToken },
            });
            const id = response.data.id;
            return id;
        }
        catch (error) {
            console.error('Error setPersonal:', error.response.data.error);
        }
    });
};
fbbotkit_1.FBBotKit.prototype.deletePersonal = function (id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield axios_1.default.delete(this.apiUrl.DELETE_PERSIONAL_PROFILE_URL(id), {
                params: { access_token: this.config.pageAccessToken },
            });
            console.log('Delete personal success:', response.data);
        }
        catch (error) {
            console.error('Error setPersonal:', error.response.data.error);
        }
    });
};
//# sourceMappingURL=setPersonal.js.map