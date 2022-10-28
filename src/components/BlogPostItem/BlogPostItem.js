import styles from "./BlogPostItem.module.css";
import BlogDataObject from "../../data/BlogDataObject.tsx";

const BlogPostItem = () => {
  return (
    <div className={styles.BlogPostItem}>
      <ul className={styles.Tags}>
        <li>{BlogDataObject.react.tags[0]}</li>
        <li>{BlogDataObject.react.tags[1]}</li>
      </ul>
      <h1>{BlogDataObject.react.title}</h1>
      <h4>{BlogDataObject.react.date}</h4>
      <p>{BlogDataObject.react.content}</p>
      <button className={styles.ContinueButton}>Continue Reading</button>
      <div className={styles.divider} />
    </div>
  );
};

export default BlogPostItem;
