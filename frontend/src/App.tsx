import ChatWindow from "./components/ChatWindow";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="app open" id="app">
      <Sidebar />
      <ChatWindow />
    </div>
  );
}

export default App;
