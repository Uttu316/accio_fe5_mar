import logo from "../../assets/logo.svg";
import styles from "./chatHeader.module.css";

const ChatHeader = () => {
  return (
    <header className={styles.chatHeader}>
      <div className={styles.logoContainer}>
        <img src={logo} className={styles.logo} />
        <p className={styles.heading}>Ai Bot</p>
      </div>
    </header>
  );
};

export default ChatHeader;
