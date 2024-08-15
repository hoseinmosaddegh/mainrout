import { Route, Routes, Link } from "react-router-dom"; // necessary
import About from "./components/About";
import Contact from "./components/Contact";
import Posts from "./components/Posts";
import Shop from "./components/Shop";
import MainPost from "./components/MainPost";
import Notfound from "./components/Notfound";
import { useParams } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/Posts/:userId" element={<MainPost />} />
        <Route path="/Posts" element={<Posts />} />
        <Route path="/about" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;
