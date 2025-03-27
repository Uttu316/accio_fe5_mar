import { Link } from "react-router";
import logo from "../../assets/logo.svg";
import styles from "./chatHeader.module.css";

const ChatHeader = () => {
  return (
    <header className={styles.chatHeader}>
      <div className={styles.logoContainer}>
        <img src={logo} className={styles.logo} />
        <p className={styles.heading}>Ai Bot</p>
      </div>
      <nav className={styles.navBar}>
        <Link className={styles.navItem} to="/">
          Home
        </Link>
      </nav>
    </header>
  );
};

export default ChatHeader;
