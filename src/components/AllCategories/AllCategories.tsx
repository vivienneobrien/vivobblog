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
  const categories = Array.from(
    new Set(BlogDataObject.flatMap(({ categories }) => categories))
  );
  console.log(categories);

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
