import type { Contact } from "../components/ConversationItem";
import type { Message } from "../components/MessageBubble";

export const recentConversations: Contact[] = [
  {
    id: "1",
    name: "Ana Silva",
    avatarUrl: "https://via.placeholder.com/40",
    lastMessage: "Olá! Tudo bem?",
    timestamp: "14:30",
    unreadCount: 2,
    online: true,
  },
  {
    id: "2",
    name: "Carlos Souza",
    avatarUrl: "https://via.placeholder.com/40",
    lastMessage: "Tudo ótimo! E com você? Teste do chat em tempo real.",
    timestamp: "14:31",
    unreadCount: 0,
    online: false,
  },
  {
    id: "3",
    name: "Mariana Costa",
    avatarUrl: "https://via.placeholder.com/40",
    lastMessage: "Combinado então, até mais!",
    timestamp: "Ontem",
    unreadCount: 0,
    online: true,
  },
];

export const messages: Message[] = [
  {
    id: "1",
    text: "Olá! Tudo bem?",
    sender: "other",
    timestamp: "14:30",
  },
  {
    id: "2",
    text: "Tudo ótimo! E com você? Teste do chat em tempo real.",
    sender: "me",
    timestamp: "14:31",
  },
];
