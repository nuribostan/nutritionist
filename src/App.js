import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./page/Home";
import About from "./page/About";
import Content1 from "./page/Content1";
import Content2 from "./page/Content2";
import Content3 from "./page/Content3";
import Content4 from "./page/Content4";
import Tarifler from "./page/Tarifler";
import Content5 from "./page/Content5";
import Tarifler2 from "./page/Tarifler2";
import Contact from "./page/Contact";
import Contact2 from "./page/Contact2";
import { HeightProvider } from "./context/HeighContext";
import Footer from "./page/Footer";


function App() {
  return (
    <div className="App">
      <HeightProvider>
        <NavBar />
        <Home />
        <About />
        <Content1 />
        <Content2 />
        <Content3 />
        <Content4 />
        <Tarifler />
        <Content5 />
        <Tarifler2 />
        <Contact />
        <Contact2 />
        <Footer />
      </HeightProvider>
    </div>
  );
}

export default App;
