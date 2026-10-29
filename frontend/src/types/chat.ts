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
  sender_id: string;
  receiver_id: string;
  timestamp: string;
};
