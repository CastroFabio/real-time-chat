import { messages } from "../mock/mockData";
import MessageBubble from "./MessageBubble";

export default function ChatMainPanel() {
  return (
    <div className="msgs " id="msgs" aria-live="polite">
      <div className="day">Hoje</div>
      {messages.map((element) => (
        <MessageBubble key={element.id} message={element} />
      ))}
    </div>
  );
}
