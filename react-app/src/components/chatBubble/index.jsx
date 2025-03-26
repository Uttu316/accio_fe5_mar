import styles from "./chatBubble.module.css";
import Markdown from "react-markdown";

const ChatBubble = ({ msg }) => {
  const { message, role } = msg;
  const isBot = role === "bot";
  return (
    <div
      className={`${styles.chatBubble} ${isBot ? styles.left : styles.right}`}
    >
      <p className={styles.heading}>{isBot ? "Bot" : "You"}</p>
      <div className={styles.msg}>
        <Markdown>{message}</Markdown>
      </div>
    </div>
  );
};
export default ChatBubble;
