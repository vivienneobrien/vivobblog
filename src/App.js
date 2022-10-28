import NavBar from "./components/NavBar/NavBar";
import BlogPostItem from "./components/BlogPostItem/BlogPostItem";
import FooterCategories from "./components/FooterCategories/FooterCategories";
import FooterRecentPosts from "./components/FooterRecentPosts/FooterRecentPosts";
import TotalPosts from "./components/TotalPosts/TotalPosts";

import React from "react";
import { Route, Routes } from "react-router-dom";
import styles from "./App.module.css";

function App() {
  return (
    <>
      <NavBar />
      <TotalPosts />
      <Routes>
        <Route path="/" element={<BlogPostItem />}></Route>
        <Route path="/react" element={<BlogPostItem />}></Route>
        <Route path="/testing" element={<BlogPostItem />}></Route>
      </Routes>
      <div className={styles.Footer}>
        <FooterRecentPosts />
        <FooterCategories />
      </div>
    </>
  );
}

export default App;
