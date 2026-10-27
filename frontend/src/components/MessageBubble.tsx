import React from "react";

export interface Message {
  id: string;
  text: string;
  sender: "me" | "other";
  timestamp?: string;
}

const MessageBubble: React.FC<{ message: Message }> = ({ message }) => {
  const isMe = message.sender === "me";

  return (
    <div className={`m ${isMe ? "in" : "out"}`}>
      {message.text}
      <span className="t">{message.timestamp}</span>
    </div>
  );
};

export default MessageBubble;
