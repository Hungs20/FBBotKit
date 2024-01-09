import axios from 'axios';
import { FBBotKit } from '../fbbotkit';
import { PersonalProfile } from '..';

declare module "../fbbotkit" {
  export interface FBBotKit {
    // Hàm để set đối tượng của page gửi tin nhắn
    setPersonal(request: PersonalProfile): Promise<string|undefined>;
    deletePersonal(id: string): void;
  }
}
  FBBotKit.prototype.setPersonal = async function (request: PersonalProfile): Promise<string|undefined> {
    try {
      const response = await axios.post(
        this.apiUrl.SET_PERSIONAL_PROFILE_URL,
        request,
        {
          params: { access_token: this.config.pageAccessToken },
        }
      );
      const id: string = response.data.id;
      return id;
    } catch (error: any) {
      console.error('Error setPersonal:', error.response.data.error);
    }
  }
    FBBotKit.prototype.deletePersonal = async function (id: string) {
      try {
        const response = await axios.delete(
          this.apiUrl.DELETE_PERSIONAL_PROFILE_URL(id),
          {
            params: { access_token: this.config.pageAccessToken },
          }
        );
        console.log('Delete personal success:', response.data);
      } catch (error: any) {
        console.error('Error setPersonal:', error.response.data.error);
      }
    }
