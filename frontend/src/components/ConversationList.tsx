import { useState } from "react";
import { recentConversations } from "../mock/mockData";
import ConversationItem from "./ConversationItem";

const ConversationList = () => {
  const [selectedID, setSelectedID] = useState<string | null>(null);

  const selectContact = (contactID: string) => {
    setSelectedID(contactID);
  };

  return (
    <ul className="list">
      {recentConversations.map((element) => (
        <li key={element.id}>
          <ConversationItem
            contact={element}
            onClick={() => selectContact(element.id)}
            isSelected={element.id === selectedID}
          />
        </li>
      ))}
    </ul>
  );
};

export default ConversationList;
