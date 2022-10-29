import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";
import classnames from "classnames";
import { ReactNode } from "react";

interface Props {
  to: string;
  children?: ReactNode;
  // any props that come into the component
}
const CustomLink = ({ to, children }: Props) => {
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
        <Link to={"/about"} className={styles.title}>
          Viv O'Brien
        </Link>
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
