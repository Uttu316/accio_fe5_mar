import { Link } from "react-router";
import styles from "./header.module.css";
import { isLoggedin, logout } from "../../utils/auth";

const Header = () => {
  const isLogin = isLoggedin();
  const onLogout = () => {
    logout();
  };
  return (
    <header className={styles.chatHeader}>
      <div className={styles.logoContainer}>
        <Link to="/" className={styles.logLink}>
          <p className={styles.heading}>Products Invetory</p>
        </Link>
      </div>
      <nav className={styles.navBar}>
        {!isLogin && (
          <Link className={styles.navItem} to="/login">
            Login
          </Link>
        )}
        {isLogin && (
          <Link className={styles.navItem} onClick={onLogout} to="/login">
            Logout
          </Link>
        )}
        <Link className={styles.navItem} to="/about">
          About
        </Link>
      </nav>
    </header>
  );
};

export default Header;
