import BlogDataObject from "../../data/BlogDataObject.js";
import styles from "./FooterRecentPosts.module.css";
const FooterRecentPosts = () => {
  const getRecentTitles = BlogDataObject.map((e) => <li>{e.title}</li>);

  return (
    <>
      <h1>Recent Posts</h1>
      <ul className={styles.Categories}>{getRecentTitles}</ul>
    </>
  );
};

export default FooterRecentPosts;
