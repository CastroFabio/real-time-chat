import UserProfileAvatar from "./UserProfileAvatar";

export type Contact = {
  id: string;
  name: string;
  avatarUrl: string;
  lastMessage: string;
  timestamp: string;
  unreadCount?: number;
  online: boolean;
};

type ConversationItemProps = {
  contact: Contact;
  isSelected: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function ConversationItem({
  contact,
  isSelected,
  ...rest
}: ConversationItemProps) {
  return (
    <button className={`item ${isSelected ? "active" : ""}`} {...rest}>
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
}
