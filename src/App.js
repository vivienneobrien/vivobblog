import NavBar from "./components/NavBar/NavBar";
import BlogPostItem from "./components/BlogPostItem/BlogPostItem";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<BlogPostItem />}></Route>
        <Route path="/react" element={<BlogPostItem />}></Route>
        <Route path="/testing" element={<BlogPostItem />}></Route>
      </Routes>
    </>
  );
}

export default App;
