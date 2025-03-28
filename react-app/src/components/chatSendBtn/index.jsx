import styles from "./btn.module.css";
import { aiChat } from "../../ai/services/chatService";
import { useContext } from "react";
import { ChatContext } from "../../contexts/chatContext";
const ChatSendBtn = ({ inputRef }) => {
  const { setMessages } = useContext(ChatContext);

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
    <button onClick={onSend} className={styles.sendBtn}>
      Send ➤
    </button>
  );
};

export default ChatSendBtn;
