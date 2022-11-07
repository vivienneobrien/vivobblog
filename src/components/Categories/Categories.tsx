import BlogDataObject from "../../data/BlogDataObject";
import styles from "./Categories.module.css";
import AllCategories from "../AllCategories/AllCategories";

const Categories = () => {
  // const getCategories = BlogDataObject.map((e, key) => (
  //   <li key={key}>{e.categories}</li>
  // ));

  return (
    <>
      <h1>Categories</h1>
      {/* <ul className={styles.Categories}>{getCategories}</ul> */}
      <AllCategories />
    </>
  );
};

export default Categories;
