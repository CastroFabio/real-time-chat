import ChatEmptyState from "./ChatEmptyState";
import ChatFooter from "./ChatFooter";
import ChatHeader from "./ChatHeader";
import ChatMainPanel from "./ChatMainPanel";

const ChatWindow = () => {
  return (
    <section className="main" id="main">
      <ChatEmptyState />
      <ChatHeader />
      <ChatMainPanel />
      <ChatFooter />
    </section>
  );
};

export default ChatWindow;
