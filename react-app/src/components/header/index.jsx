import { Link } from "react-router";
import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.chatHeader}>
      <div className={styles.logoContainer}>
        <Link to="/" className={styles.logLink}>
          <p className={styles.heading}>Products Invetory</p>
        </Link>
      </div>
      <nav className={styles.navBar}>
        <Link className={styles.navItem} to="/login">
          Login
        </Link>
        <Link className={styles.navItem} to="/about">
          About
        </Link>
      </nav>
    </header>
  );
};

export default Header;
