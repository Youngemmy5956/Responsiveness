import Home from "./components/Home";
import Page from "./components/Page";
import Tutorial from "./components/Tutorial";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../src/assets/Group 1707477972.svg";
import Nav from "./components/Nav";
import "./App.css";
import Contact from "./components/Contact";
import Props from "./components/Props"
import Port from "./components/Port";

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
            <Route path="/port" element={<Port />} />
            <Route path="/props" element={<Props  name = "Emma" age = "12" />} />


          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
