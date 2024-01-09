import axios from 'axios';
import { FBBotKit } from '../fbbotkit';
import { MessengerProfile } from '..';

declare module "../fbbotkit" {
  export interface FBBotKit {
    // Hàm để set trang cá nhân Messenger: tin nhắn chào mừng, menu...
    setMessengerProfile(request: MessengerProfile): void;
  }
}
  FBBotKit.prototype.setMessengerProfile = async function (request: MessengerProfile): Promise<void> {

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
    const response = await axios.post(
      this.apiUrl.SET_MESSAGER_PROFILE_URL,
      payload,
      {
        params: { access_token: this.config.pageAccessToken },
      }
    );

    console.log('setMessengerProfile successfully:', response.data);
  } catch (error: any) {
    console.error('Error setMessengerProfile:', error.response.data.error);
  }
}
