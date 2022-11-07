import { ReactNode } from "react";
import BlogDataObject from "../../data/BlogDataObject";
import styles from "./AllCategories.module.css";

// const AllCategories = () => {
//   const getAll = BlogDataObject.map(({ categories }) => [categories]);
//   console.log(getAll);
//   const getCategories = getAll.map((e, key) => (
//     <>
//       <li key={key} className={styles.CategoriesContainer}>
//         {e}
//       </li>
//     </>
//   ));

//   return <ul className={styles.Categories}>{getCategories}</ul>;
// };

const AllCategories = () => {
  const categoriesSet = new Set(
    BlogDataObject.flatMap(({ categories }) => categories)
  );
  console.log("XXXX CATEGORIES SET XXXX", categoriesSet);
  const categories = Array.from(categoriesSet);
  console.log("XXXX CATEGORIES ARRAY.FROM XXXX", categories);

  return (
    <>
      {categories.map((e, key) => (
        <li key={key} className={styles.Categories}>
          {e}
        </li>
      ))}
    </>
  );
};

export default AllCategories;
