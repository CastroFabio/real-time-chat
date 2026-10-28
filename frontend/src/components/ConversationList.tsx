import { recentConversations } from "../mock/mockData";
import ConversationItem from "./ConversationItem";

const ConversationList = () => {
  return (
    <ul className="list" id="list">
      {recentConversations.map((element) => (
        <li key={element.id}>
          <ConversationItem contact={element} />
        </li>
      ))}
    </ul>
  );
};

export default ConversationList;
