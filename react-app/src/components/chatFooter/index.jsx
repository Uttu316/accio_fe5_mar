import styles from "./chatFooter.module.css";

const ChatFooter = () => {
  return (
    <div className={styles.chatFooter}>
      <input className={styles.input} placeholder="Write message here.." />
      <button className={styles.sendBtn}>Send ➤</button>
    </div>
  );
};
export default ChatFooter;
