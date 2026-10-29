export default function ChatEmptyState() {
  return (
    <div className="empty" id="empty">
      <div>
        <svg viewBox="0 0 24 24">
          <path d="M21 12a8 8 0 01-11.6 7.1L4 20.5l1.4-4.6A8 8 0 1121 12z" />
        </svg>
        <h2>Suas conversas</h2>
        <p>Selecione uma conversa para começar a conversar.</p>
      </div>
    </div>
  );
}
