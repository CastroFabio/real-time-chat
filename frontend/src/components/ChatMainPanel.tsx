import { chatHistories } from "../mock/mockData";
import MessageBubble from "./MessageBubble";
import { useChat } from "../hooks/useChat";

export default function ChatMainPanel() {
  const { selectedContact } = useChat();

  const filteredChatHistory = chatHistories.filter(
    (element) =>
      (element.sender_id === selectedContact?.id &&
        element.receiver_id === "user_me") ||
      (element.sender_id === "user_me" &&
        element.receiver_id === selectedContact?.id),
  );

  const sortedFilteredChatHistory = filteredChatHistory.sort((a, b) =>
    a.timestamp.localeCompare(b.timestamp),
  );

  return (
    <div className="msgs " id="msgs" aria-live="polite">
      <div className="day">Hoje</div>
      {sortedFilteredChatHistory.map((element) => (
        <MessageBubble key={element.id} message={element} />
      ))}
    </div>
  );
}
