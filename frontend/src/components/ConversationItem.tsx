import type { Contact } from "../types/chat";
import ConversationDetails from "./ConversationDetails";
import UserProfileAvatar from "./UserProfileAvatar";

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
      <ConversationDetails contact={contact} />
    </button>
  );
}
