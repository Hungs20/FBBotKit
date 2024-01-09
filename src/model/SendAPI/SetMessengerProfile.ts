export interface PersistentMenuAction {
    title: string;
    type: 'postback' | 'web_url';
    payload: string;
}

export interface MessengerProfile {
    get_started_payload: string;
    persistent_menu_action?: PersistentMenuAction[]
}