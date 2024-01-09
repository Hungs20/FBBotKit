import { ApiURL } from "./API/apiUrl";
import {PageConfig} from "./config";

export class FBBotKit {
    private _config: PageConfig;
    apiUrl: ApiURL;


    constructor(config: PageConfig) {
        this._config = config;
        this.apiUrl = new ApiURL(config.apiVersion);
    }

    get config() : PageConfig {
        return this._config;
    }

    
}