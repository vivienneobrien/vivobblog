import BlogDataObject from "../../data/BlogDataObject";
import styles from "./AllCategories.module.css";

const AllCategories = () => {
  const getCategories = BlogDataObject.map((e, key) =>
    e.categories.map((d, key) => (
      <li key={key} className={styles.CategoriesContainer}>
        {d}
      </li>
    ))
  );

  return <ul className={styles.Categories}>{getCategories}</ul>;
};

export default AllCategories;
