export default function ChatFooter() {
  return (
    <div className="foot " id="foot">
      <input id="txt" placeholder="Digite uma mensagem" aria-label="Mensagem" />
      <button className="send" id="send" disabled aria-label="Enviar">
        <svg viewBox="0 0 24 24">
          <path d="M22 2L11 13" />
          <path d="M22 2l-7 20-4-9-9-4z" />
        </svg>
      </button>
    </div>
  );
}
