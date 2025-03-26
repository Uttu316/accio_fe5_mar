import styles from "./chatBox.module.css";
import ChatBubble from "../chatBubble";
import { useEffect, useRef } from "react";

const ChatBox = ({ messages }) => {
  const boxRef = useRef();
  useEffect(() => {
    boxRef.current.scrollTop = boxRef.current.scrollHeight;
  }, [(messages || []).length]);
  return (
    <div ref={boxRef} className={styles.chatBox}>
      {messages.map((msg) => (
        <ChatBubble key={msg.id} msg={msg} />
      ))}
    </div>
  );
};
export default ChatBox;
