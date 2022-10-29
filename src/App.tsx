import { BrowserRouter, Route, Routes } from "react-router-dom";
import styles from "./App.module.css";
import MainPage from "./modules/MainPage";
import About from "./components/About/About";
import Footer from "./modules/Footer";
import NavBar from "./components/NavBar/NavBar";
import AllCategories from "./components/AllCategories/AllCategories";
import TotalPosts from "./components/TotalPosts/TotalPosts";
import Sketch from "./sketches/Sketch";
function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <AllCategories />
      {/* <div className={styles.Sketch}>
        <Sketch />
      </div> */}
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/react" element={<MainPage />}></Route>
      </Routes>
      <div className={styles.Footer}>
        <Footer />
        <p className={styles.MadeWithLove}>Made with 🧡 by Viv O'Brien</p>
      </div>
    </BrowserRouter>
  );
}

export default App;
