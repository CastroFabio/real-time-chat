import type { Contact } from "../types/chat";
import { getInitials } from "../utils/getInitials";

type UserProfileAvatarProps = {
  contact: Contact;
};

export default function UserProfileAvatar({ contact }: UserProfileAvatarProps) {
  return (
    <div className="av" id="hAv" style={{ backgroundColor: "#0b7285" }}>
      {getInitials(contact?.name ?? `Usuário #${contact?.id}`)}
      {contact?.online ? <span className={`st`}></span> : ""}
    </div>
  );
}
