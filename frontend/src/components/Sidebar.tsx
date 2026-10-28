import ConversationList from "./ConversationList";
import SidebarHeader from "./SidebarHeader";

const Sidebar = () => {
  return (
    <aside className="side">
      <SidebarHeader />
      <ConversationList />
    </aside>
  );
};

export default Sidebar;
