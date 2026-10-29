import { useContext } from "react";
import { ChatContext } from "../context/ChatContextObject";

export const useChat = () => {
  const context = useContext(ChatContext);

  if (!context) {
    throw new Error("useChat deve ser usado dentro de um ChatProvider");
  }
  return context;
};
