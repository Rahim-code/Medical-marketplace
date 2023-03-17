import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import  Footer  from "./Components/Footer";
import Contact from "./Pages/Contact";
import  Home  from "./Pages/Home";

const App = () => {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </>
  );
};

export default App;
