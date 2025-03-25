import styles from "./chatBubble.module.css";
const ChatBubble = ({ msg }) => {
  const { message, role } = msg;
  const isBot = role === "bot";
  return (
    <div
      className={`${styles.chatBubble} ${isBot ? styles.left : styles.right}`}
    >
      <p className={styles.heading}>{isBot ? "Bot" : "You"}</p>
      <p className={styles.msg}>{message}</p>
    </div>
  );
};
export default ChatBubble;
