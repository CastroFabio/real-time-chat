import type { Message } from "../types/chat";
import { formatMessageTime } from "../utils/formatMessageTime";

type MessageBubbleProps = {
  message: Message;
};

export default function MessageBubble({ message }: MessageBubbleProps) {
  const isMe = message.receiver_id === "user_me";

  return (
    <div className={`m ${isMe ? "in" : "out"}`}>
      {message.text}
      <span className="t">{formatMessageTime(message.timestamp)}</span>
    </div>
  );
}
