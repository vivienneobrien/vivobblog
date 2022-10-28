import BlogDataObject from "../../data/BlogDataObject.js";
import styles from "./FooterCategories.module.css";
const FooterCategories = () => {
  const getCategories = BlogDataObject.map((e) => <li>{e.categories}</li>);

  return (
    <>
      <h1>Categories</h1>
      <ul className={styles.Categories}>{getCategories}</ul>
    </>
  );
};

export default FooterCategories;
