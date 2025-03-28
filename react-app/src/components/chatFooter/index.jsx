import { useRef } from "react";
import styles from "./chatFooter.module.css";
import ChatSendBtn from "../chatSendBtn";

const ChatFooter = () => {
  const inputRef = useRef();

  return (
    <div className={styles.chatFooter}>
      <input
        ref={inputRef}
        className={styles.input}
        placeholder="Write message here.."
      />

      <ChatSendBtn inputRef={inputRef} />
    </div>
  );
};
export default ChatFooter;
