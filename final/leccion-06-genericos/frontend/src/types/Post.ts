import Sender from "./Sender";

export default interface Post {
  id: number;
  sender: Sender;
  body: string;
  timestamp: Date;
}
