import type { Contact } from "../types/chat";

type ConversationDetailsProps = {
  contact: Contact;
};

export default function ConversationDetails({
  contact,
}: ConversationDetailsProps) {
  return (
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
  );
}
