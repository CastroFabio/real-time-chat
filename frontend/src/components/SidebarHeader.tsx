import NewChatButton from "./NewChatButton";
import SearchBar from "./SearchBar";
import SettingsButton from "./SettingsButton";
import SidebarMenu from "./SidebarMenu";
import UserProfile from "./UserProfile";

const SidebarHeader = () => {
  return (
    <>
      <div className="me">
        <UserProfile />
        <NewChatButton />
        <SettingsButton />
      </div>
      <SidebarMenu />
      <SearchBar />
    </>
  );
};

export default SidebarHeader;
