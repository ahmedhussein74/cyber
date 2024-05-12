import "../css/App.css";
import Home from "../pages/Home";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
