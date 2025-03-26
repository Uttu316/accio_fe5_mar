import { useState } from "react";
import ChatBox from "../../components/chatBox";
import ChatFooter from "../../components/chatFooter";
import ChatHeader from "../../components/chatHeader";

const ChatPage = () => {
  const [messages, setMessages] = useState([]);

  return (
    <div>
      <ChatHeader />
      <ChatBox messages={messages} />
      <ChatFooter setMessages={setMessages} />
    </div>
  );
};
export default ChatPage;
