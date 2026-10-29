import { useChat } from "../hooks/useChat";
import { recentConversations } from "../mock/mockData";
import ConversationItem from "./ConversationItem";

const ConversationList = () => {
  const { selectedContact, selectContact } = useChat();

  return (
    <ul className="list">
      {recentConversations.map((element) => (
        <li key={element.id}>
          <ConversationItem
            contact={element}
            onClick={() => selectContact(element)}
            isSelected={element.id === selectedContact?.id}
          />
        </li>
      ))}
    </ul>
  );
};

export default ConversationList;
