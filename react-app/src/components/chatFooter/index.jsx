import { useRef, useState } from "react";
import styles from "./chatFooter.module.css";
import { aiChat } from "../../ai/services/chatService";

const ChatFooter = ({ setMessages }) => {
  const inputRef = useRef();

  const onSend = async (e) => {
    const value = inputRef.current.value;

    setMessages((curr) => [
      ...curr,
      { role: "user", message: value, id: Date.now(), created_at: Date.now() },
      {
        role: "bot",
        message: "Typing...",
        isTyping: true,
        id: Date.now(),
        created_at: Date.now(),
      },
    ]);

    inputRef.current.value = "";

    try {
      const botMsg = await aiChat(value);
      setMessages((curr) => {
        curr.pop();
        return [
          ...curr,
          {
            role: "bot",
            message: botMsg,
            id: Date.now(),
            created_at: Date.now(),
          },
        ];
      });
    } catch (e) {
      setMessages((curr) => {
        curr.pop();
        return [
          ...curr,
          {
            role: "bot",
            message: "Bot is busy, kindly try after sometime!",
            id: Date.now(),
            created_at: Date.now(),
          },
        ];
      });
    }
  };
  return (
    <div className={styles.chatFooter}>
      <input
        ref={inputRef}
        className={styles.input}
        placeholder="Write message here.."
      />

      <button onClick={onSend} className={styles.sendBtn}>
        Send ➤
      </button>
    </div>
  );
};
export default ChatFooter;
