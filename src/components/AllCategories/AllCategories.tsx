import BlogDataObject from "../../data/BlogDataObject";
import styles from "./AllCategories.module.css";

const AllCategories = () => {
  const getCategories = BlogDataObject.map((e, key) => (
    <li key={key} className={styles.CategoriesContainer}>
      {e.categories}
    </li>
  ));

  return <ul className={styles.Categories}>{getCategories}</ul>;
};

export default AllCategories;
