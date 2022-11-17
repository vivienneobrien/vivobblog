import { BrowserRouter, Route, Routes } from "react-router-dom";
import styles from "./App.module.css";
import MainPage from "./modules/MainPage";
import About from "./components/About/About";
import Footer from "./modules/Footer";
import NavBar from "./components/NavBar/NavBar";
import TotalPosts from "./components/TotalPosts/TotalPosts";
import Sketch from "./sketches/Sketch";
import { useEffect, useState } from "react";
import Company from "./components/Company/Company";
import useFetch from "./hooks/useFetch";
import PostDetails from "./components/PostDetails/PostDetails";
import AddPostItem from "./components/AddPostItem/AddPostItem";

function App() {
  const {
    data: companyData,
    isLoaded,
    errorInformation,
  } = useFetch("http://localhost:8000/company");

  return (
    <BrowserRouter>
      <NavBar />
      <TotalPosts />
      {errorInformation && <div>{errorInformation}</div>}
      {isLoaded && <div> Please wait ...</div>}
      {companyData && <Company companyData={companyData} />}

      {/* <div className={styles.Sketch}>
        <Sketch />
      </div> */}
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/react" element={<MainPage />}></Route>
        <Route path="/testing/:id" element={<PostDetails />}></Route>
        <Route path="/testing/:id/:name" element={<PostDetails />}></Route>
        <Route path="/editingform/:id/:name" element={<AddPostItem />}></Route>
        <Route path="/createform" element={<AddPostItem />}></Route>
      </Routes>
      <div className={styles.Footer}>
        <Footer />
        <p className={styles.MadeWithLove}>Made with 🧡 by Viv O'Brien</p>
      </div>
    </BrowserRouter>
  );
}

export default App;
