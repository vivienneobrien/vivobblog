import styles from "./BlogPostItem.module.css";

interface DataObjectTypes {
  data: {
    title: string;
    date: string;
    categories: (string | undefined)[];
    content: string;
  };
}
const BlogPostItem = ({ data }: DataObjectTypes) => {
  return (
    <div className={styles.BlogPostItem}>
      <ul className={styles.Categories}>
        <li>{data?.categories && data?.categories[0]}</li>
        <li>{data?.categories && data?.categories[1]}</li>
        <li>{data?.categories && data?.categories[2]}</li>
      </ul>

      <h1>{data.title}</h1>
      <h4>{data.date}</h4>
      <p className={styles.Content}>{data.content}</p>
      <code className={styles.CodeSnippet}> This is a code snippet</code>
      <button className={styles.ContinueButton}>Continue Reading</button>
      <div className={styles.divider} />
    </div>
  );
};

export default BlogPostItem;
