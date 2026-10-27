import { getInitials } from "../utils/getInitials";
import type { Contact } from "./ConversationItem";

const UserProfileAvatar: React.FC<{ contact: Contact }> = ({ contact }) => {
  return (
    <div className="av" id="hAv" style={{ backgroundColor: "#0b7285" }}>
      {getInitials(contact?.name)}
      {contact?.online ? <span className={`st`}></span> : ""}
    </div>
  );
};

export default UserProfileAvatar;
