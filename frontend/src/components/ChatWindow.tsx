import { useChat } from "../hooks/useChat";
import ChatEmptyState from "./ChatEmptyState";
import ChatFooter from "./ChatFooter";
import ChatHeader from "./ChatHeader";
import ChatMainPanel from "./ChatMainPanel";

const ChatWindow = () => {
  const { selectedContact } = useChat();

  return (
    <section className="main" id="main">
      {selectedContact === null ? (
        <ChatEmptyState />
      ) : (
        <>
          <ChatHeader />
          <ChatMainPanel />
          <ChatFooter />
        </>
      )}
    </section>
  );
};

export default ChatWindow;
