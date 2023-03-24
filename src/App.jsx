import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import  Footer  from "./Components/Footer";
import Contact from "./Pages/Contact";
import  Home  from "./Pages/Home";
import {useTranslation} from 'react-i18next'

const App = () => {

  const {t} = useTranslation()
  return (
    <>
     <h1>{t("learn")}</h1>
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
