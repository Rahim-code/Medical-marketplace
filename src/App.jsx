import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import  Footer  from "./Components/Footer";
import Contact from "./Pages/Contact";
import  Home  from "./Pages/Home";
import {useTranslation} from 'react-i18next'
import {Counter} from '../src/Counter'
import Global from './Global'
import './index.css'

const App = () => {

  const {t} = useTranslation()
  return (
    <>
     <h1>{t("learn")}</h1>
     <p className="hello">Salam</p>
      <Header/>
     <Counter/>
     <Global/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </>
  );
};

export default App;
