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

const items = [
  { categories: ["React", "Javascript"] },
  { categories: ["CSS", "CSHCKSB"] },
];

const AllCategories = () => {
  const categories = Array.from(
    new Set(items.flatMap(({ categories }) => categories))
  );
  console.log(categories);

  return (
    <>
      {categories.map(
        (
          e,
          key // if you use {} you will return undefined, if you do use {} then you need to put return before the curlies // U can use curly braces, but in this case u need to add return before JSX.
        ) => (
          <li key={key} className={styles.Categories}>
            {e}
          </li>
        )
      )}
    </>
  );
};

export default AllCategories;
