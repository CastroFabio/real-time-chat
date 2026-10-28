import { createContext } from "react";
import type { Contact } from "../types/chat";

export type ChatContextData = {
  selectedContact: Contact | null;
  selectContact: (contact: Contact) => void;
  conversations: Contact[];
};

export const ChatContext = createContext<ChatContextData | undefined>(
  undefined,
);
