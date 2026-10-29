import type { Contact, Message } from "../types/chat";

const randomNumber = () => {
  return Math.floor(Math.random() * (100 - 1)) + 1;
};

export const recentConversations: Contact[] = [
  {
    id: "1",
    name: "Ana Silva",
    avatarUrl: `https://via.placeholder.com/avatar/identicon/user-${randomNumber()}`,
    lastMessage: "Olá! Tudo bem?",
    timestamp: "14:30",
    unreadCount: 2,
    online: true,
  },
  {
    id: "2",
    name: "Carlos Souza",
    avatarUrl: `https://via.placeholder.com/avatar/identicon/user-${randomNumber()}`,
    lastMessage: "Tudo ótimo! E com você? Teste do chat em tempo real.",
    timestamp: "14:31",
    unreadCount: 0,
    online: false,
  },
  {
    id: "3",
    name: "Mariana Costa",
    avatarUrl: `https://via.placeholder.com/avatar/identicon/user-${randomNumber()}`,
    lastMessage: "Combinado então, até mais!",
    timestamp: "Ontem",
    unreadCount: 0,
    online: true,
  },
  {
    id: "4",
    name: "Fabio Castro",
    avatarUrl: `https://via.placeholder.com/avatar/identicon/user-${randomNumber()}`,
    lastMessage: "Combinado então, até mais!",
    timestamp: "Ontem",
    unreadCount: 0,
    online: true,
  },
];

const CURRENT_USER_ID = "user_me";

export const chatHistories: Message[] = [
  {
    id: "m1",
    text: "Olá! Tudo bem?",
    sender_id: "1",
    receiver_id: CURRENT_USER_ID,
    timestamp: "2026-10-29T14:30:00.000Z",
  },
  {
    id: "m2",
    text: "Tudo ótimo! E com você? Teste do chat em tempo real.",
    sender_id: CURRENT_USER_ID,
    receiver_id: "1",
    timestamp: "2026-10-29T14:31:00.000Z",
  },
  {
    id: "m3",
    text: "Tudo indo muito bem por aqui também.",
    sender_id: "1",
    receiver_id: CURRENT_USER_ID,
    timestamp: "2026-10-29T14:32:00.000Z",
  },
  {
    id: "m4",
    text: "E aí, conseguiu avançar na estrutura do banco de dados?",
    sender_id: "2",
    receiver_id: CURRENT_USER_ID,
    timestamp: "2026-10-28T18:00:00.000Z", // Simulando o dia anterior ("Ontem")
  },
  {
    id: "m5",
    text: "Sim! Fechei o modelo relacional com users e messages.",
    sender_id: CURRENT_USER_ID,
    receiver_id: "2",
    timestamp: "2025-10-28T18:05:00.000Z",
  },
];
