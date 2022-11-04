import { BrowserRouter, Route, Routes } from "react-router-dom";
import styles from "./App.module.css";
import MainPage from "./modules/MainPage";
import About from "./components/About/About";
import Footer from "./modules/Footer";
import NavBar from "./components/NavBar/NavBar";
import TotalPosts from "./components/TotalPosts/TotalPosts";
import Sketch from "./sketches/Sketch";
import { StrictMode } from "react";
import AllCategories from "./components/AllCategories/AllCategories";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <TotalPosts />

      {/* <div className={styles.Sketch}>
        <Sketch />
      </div> */}
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/react" element={<MainPage />}></Route>
        <Route path="/testing" element={<About />}></Route>
      </Routes>
      <div className={styles.Footer}>
        <Footer />
        <p className={styles.MadeWithLove}>Made with 🧡 by Viv O'Brien</p>
      </div>
    </BrowserRouter>
  );
}

export default App;
