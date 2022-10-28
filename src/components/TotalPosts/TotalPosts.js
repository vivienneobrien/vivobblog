import styles from "./TotalPosts.module.css";
import BlogDataObject from "../../data/BlogDataObject.js";

const TotalPosts = () => {
  return <p className={styles.TotalPosts}>{BlogDataObject.length} Posts</p>;
};

export default TotalPosts;
