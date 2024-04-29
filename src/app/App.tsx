import { Route, Routes } from "react-router-dom";
import "../css/App.css";
import Navbar from "../layouts/Navbar";
import Home from "../pages/Home";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
