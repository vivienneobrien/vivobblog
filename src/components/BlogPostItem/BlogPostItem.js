import styles from "./BlogPostItem.module.css";
import BlogDataObject from "../../data/BlogDataObject.js";
// getData
// be able to get each individual data object
// then loop each one through here
// right now you are just printing the first one of each object
const BlogPostItem = () => {
  const data = BlogDataObject[0];
  console.log(data);
  return (
    <div className={styles.BlogPostItem}>
      <ul className={styles.Categories}>
        <li>{BlogDataObject.map((e) => e.categories[0])[0]}</li>
        <li>{BlogDataObject.map((e) => e.categories[1])[0]}</li>
        <li>{BlogDataObject.map((e) => e.categories[2])[0]}</li>
      </ul>

      <h1>{BlogDataObject.map((e) => e.title)[0]}</h1>
      <h4>{BlogDataObject.map((e) => e.date)[0]}</h4>
      <p className={styles.Content}>
        {BlogDataObject.map((e) => e.content)[0]}
      </p>
      <code className={styles.CodeSnippet}> This is a code snippet</code>
      <button className={styles.ContinueButton}>Continue Reading</button>

      <div className={styles.divider} />
    </div>
  );
};

export default BlogPostItem;
