import BlogDataObject from "../../data/BlogDataObject";
import styles from "./RecentPosts.module.css";

const RecentPosts = () => {
  const getRecentTitles = BlogDataObject.map((e, key) => (
    <li key={key}>{e.title}</li>
  ));

  return (
    <>
      <h1>Recent Posts</h1>
      <ul className={styles.Categories}>{getRecentTitles}</ul>
    </>
  );
};

export default RecentPosts;
