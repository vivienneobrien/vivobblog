import styles from "./BlogPostItem.module.css";
import BlogDataObject from "../../data/BlogDataObject.js";

const BlogPostItem = () => {
  return (
    <div className={styles.BlogPostItem}>
      <ul className={styles.Tags}>
        <li>{BlogDataObject.map((e) => e.categories[0])}</li>
        <li>{BlogDataObject.map((e) => e.categories[1])}</li>
      </ul>
      <h1>{BlogDataObject.map((e) => e.title)}</h1>
      <h4>{BlogDataObject.map((e) => e.date)}</h4>
      <p>{BlogDataObject.map((e) => e.content)}</p>
      <button className={styles.ContinueButton}>Continue Reading</button>
      <div className={styles.divider} />
    </div>
  );
};

export default BlogPostItem;
