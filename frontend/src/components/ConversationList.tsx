import ConversationItem, { type Contact } from "./ConversationItem";

const recentConversations: Contact[] = [
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
];

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
