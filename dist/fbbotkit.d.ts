import { ApiURL } from "./API/apiUrl";
import { PageConfig } from "./config";
export declare class FBBotKit {
    private _config;
    apiUrl: ApiURL;
    constructor(config: PageConfig);
    get config(): PageConfig;
}
