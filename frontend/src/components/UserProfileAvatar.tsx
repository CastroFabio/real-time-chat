import { getInitials } from "../utils/getInitials";
import type { Contact } from "./ConversationItem";

type UserProfileAvatarProps = {
  contact: Contact;
};

export default function UserProfileAvatar({ contact }: UserProfileAvatarProps) {
  return (
    <div className="av" id="hAv" style={{ backgroundColor: "#0b7285" }}>
      {getInitials(contact?.name)}
      {contact?.online ? <span className={`st`}></span> : ""}
    </div>
  );
}
