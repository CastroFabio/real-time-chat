export type Contact = {
  id: string;
  name: string;
  avatarUrl: string;
  lastMessage: string;
  timestamp: string;
  unreadCount?: number;
  online: boolean;
};

export type Message = {
  id: string;
  text: string;
  sender: "me" | "other";
  timestamp: string;
};
