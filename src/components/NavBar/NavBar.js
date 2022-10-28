import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";
import classnames from "classnames";

const CustomLink = ({ to, children }) => {
  const path = window.location.pathname;
  return (
    <li className={classnames(path === to ? "active" : "", styles.menuItem)}>
      <Link to={to}>{children}</Link>
    </li>
  );
};

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.HeaderContainer}>
        <p className={styles.title}>Viv O'Brien</p>
        <p className={styles.subtitle}>Software Engineer</p>
      </div>
      <ul>
        <CustomLink to="/react">React</CustomLink>
        <CustomLink to="/testing">Testing</CustomLink>
        <CustomLink to="/testing">Amazon Web Services (AWS)</CustomLink>
      </ul>
    </nav>
  );
};

export default NavBar;
