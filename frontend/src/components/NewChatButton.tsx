import React from "react";

const NewChatButton = () => {
  return (
    <button
      className="ib"
      id="newBtn"
      title="Nova conversa"
      aria-label="Nova conversa"
    >
      <svg viewBox="0 0 24 24">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.1 2.1 0 013 3L7 19l-4 1 1-4z" />
      </svg>
    </button>
  );
};

export default NewChatButton;
