import { useChat } from "../hooks/useChat";
import ChatHeaderUserInfo from "./ChatHeaderUserInfo";
import UserProfileAvatar from "./UserProfileAvatar";

export default function ChatHeader() {
  const { selectedContact } = useChat();

  if (!selectedContact) {
    return null;
  }

  return (
    <div className="head " id="head">
      <button className="ib back" id="back" aria-label="Voltar">
        <svg viewBox="0 0 24 24">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      <UserProfileAvatar contact={selectedContact} />
      <ChatHeaderUserInfo contact={selectedContact} />
    </div>
  );
}
