import type { Contact } from "./ConversationItem";

type ChatHeaderUserInfoProps = {
  contact: Contact;
};

export default function ChatHeaderUserInfo({
  contact,
}: ChatHeaderUserInfoProps) {
  return (
    <div className="who">
      <b id="hName">{contact.name}</b>
      <small id="hSt">{contact.online ? "online" : "offline"}</small>
    </div>
  );
}
