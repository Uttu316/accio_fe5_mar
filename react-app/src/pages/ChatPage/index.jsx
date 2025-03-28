import { useState } from "react";
import ChatBox from "../../components/chatBox";
import ChatFooter from "../../components/chatFooter";
import ChatHeader from "../../components/chatHeader";
import ChatProvider from "../../contexts/chatContext";

const ChatPage = () => {
  return (
    <div>
      <ChatHeader />
      <ChatProvider>
        <ChatBox />
        <ChatFooter />
      </ChatProvider>
    </div>
  );
};
export default ChatPage;
