import UserProfileAvatar from "./UserProfileAvatar";

export interface Contact {
  id: string;
  name: string;
  avatarUrl: string;
  lastMessage: string;
  timestamp: string;
  unreadCount?: number;
  online: boolean;
}

const ConversationItem: React.FC<{ contact: Contact }> = ({ contact }) => {
  return (
    <button className="item">
      <UserProfileAvatar contact={contact} />
      <div className="mid">
        <div className="row">
          <b>{contact.name}</b>
          <time>{contact.timestamp}</time>
        </div>
        <div className="row">
          <span className="prev">{contact.lastMessage}</span>
          {(contact.unreadCount ?? 0) > 0 ? (
            <span className="badge">{contact.unreadCount}</span>
          ) : (
            ""
          )}
        </div>
      </div>
    </button>
  );
};

export default ConversationItem;
