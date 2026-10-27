import ChatEmptyState from "./ChatEmptyState";
import ChatHeader from "./ChatHeader";
import MessageBubble from "./MessageBubble";
import type { Message } from "./MessageBubble";

const messages: Message[] = [
  {
    id: "1",
    text: "Olá! Tudo bem?",
    sender: "other",
    timestamp: "14:30",
  },
  {
    id: "2",
    text: "Tudo ótimo! E com você? Teste do chat em tempo real.",
    sender: "me",
    timestamp: "14:31",
  },
];

const ChatWindow = () => {
  return (
    <section className="main" id="main">
      <ChatEmptyState />
      <ChatHeader />
      <div className="msgs " id="msgs" aria-live="polite">
        <div className="day">Hoje</div>
        {messages.map((element) => (
          <MessageBubble key={element.id} message={element} />
        ))}
      </div>
      <div className="foot " id="foot">
        <input
          id="txt"
          placeholder="Digite uma mensagem"
          aria-label="Mensagem"
        />
        <button className="send" id="send" disabled aria-label="Enviar">
          <svg viewBox="0 0 24 24">
            <path d="M22 2L11 13" />
            <path d="M22 2l-7 20-4-9-9-4z" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default ChatWindow;
