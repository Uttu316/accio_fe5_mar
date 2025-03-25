import { useState } from "react";
import styles from "./chatBox.module.css";
import ChatBubble from "../chatBubble";

const ChatBox = () => {
  const [messages, setMessages] = useState([
    { role: "user", message: "Hey", id: 1212, created_at: Date.now() },
    { role: "bot", message: "Hello", id: 53434, created_at: Date.now() },
  ]);

  return (
    <div className={styles.chatBox}>
      {messages.map((msg) => (
        <ChatBubble key={msg.id} msg={msg} />
      ))}
    </div>
  );
};
export default ChatBox;
