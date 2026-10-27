import UserProfileAvatar from "./UserProfileAvatar";

const ChatHeader = () => {
  return (
    <div className="head " id="head">
      <button className="ib back" id="back" aria-label="Voltar">
        <svg viewBox="0 0 24 24">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      <UserProfileAvatar />
      <div className="who">
        <b id="hName">Marina Costa</b>
        <small id="hSt">online</small>
      </div>
    </div>
  );
};

export default ChatHeader;
