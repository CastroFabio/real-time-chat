import { useState } from "react";
import { recentConversations } from "../mock/mockData";
import type { Contact } from "../types/chat";
import { ChatContext } from "./ChatContextObject";

export const ChatProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);

  const selectContact = (contact: Contact) => {
    setSelectedContact(contact);
  };

  return (
    <ChatContext.Provider
      value={{
        selectedContact,
        selectContact,
        conversations: recentConversations,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
