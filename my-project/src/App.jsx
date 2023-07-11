import Home from "./components/Home";
import Page from "./components/Page";
import Tutorial from "./components/Tutorial";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../src/assets/Group 1707477972.svg";
import Nav from "./components/Nav";
import "./App.css";
import Contact from "./components/Contact";

function App() {
  const [loading, setloading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 8000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex justify-center h-screen">
          <img src={logo} alt="logo" className="animate-pulse w-60" />
        </div>
      ) : (
        <BrowserRouter>
        <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/page" element={<Page />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/tutorial" element={<Tutorial />} />
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
