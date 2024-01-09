// Định nghĩa interface cho đối tượng tin nhắn PostBack
export interface FacebookMessagePostBack {
  mid: string;
  title: string;
  payload: string;
}