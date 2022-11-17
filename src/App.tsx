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

function App() {
  const [companyData, setCompanyData] = useState(null);
  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8000/company")
      // how do i add console.log here
      .then((res) => res.json()) //https://stackoverflow.com/questions/48774535/js-fetch-api-get-method-return-%C6%92-json-native-code
      .then((result) => {
        setTimeout(() => {
          setCompanyData(result);
          setIsLoaded(false);
        }, 3000);
      })
      .catch((res) => console.log(res.message));
  }, []);

  return (
    <BrowserRouter>
      <NavBar />
      <TotalPosts />
      {isLoaded && <div> Please wait ...</div>}
      {companyData && <Company companyData={companyData} />}

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
