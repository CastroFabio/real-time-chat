import type { Message } from "../types/chat";

type MessageBubbleProps = {
  message: Message;
};

export default function MessageBubble({ message }: MessageBubbleProps) {
  const isMe = message.sender === "me";

  return (
    <div className={`m ${isMe ? "in" : "out"}`}>
      {message.text}
      <span className="t">{message.timestamp}</span>
    </div>
  );
}
