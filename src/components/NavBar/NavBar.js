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
      <Link to="/" className={styles.title}>
        Viv O'Brien
      </Link>

      <ul>
        <CustomLink to="/react">React</CustomLink>
        <CustomLink to="/testing">Testing</CustomLink>
      </ul>
    </nav>
  );
};

export default NavBar;
