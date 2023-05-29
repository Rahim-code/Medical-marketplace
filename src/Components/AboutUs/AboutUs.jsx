import React from 'react';
import "./AboutUs.css"
import Header from "../Header/index.js";
import Footer from "../Footer/index.js";
import BreadCrumbs from "../HospitalDetail/BreadCrumbs.jsx";
import WelcomeSection from "./WelcomeSection.jsx";
import Stats from "./Stats.jsx";
import Discount from "./Discount.jsx";
import AboutUsInfo from "./AboutUsInfo.jsx";
import Companies from "./Companies.jsx";
import CertifiedClinics from "./CertifiedClinics.jsx";
import OurGeography from "./OurGeography.jsx";

const AboutUs = () => {
  return (
    <div style={{background: "#f6f6f6"}}>
      <Header/>
      {/*breadcrumbs*/}
      <div style={{background: "#fff"}}>
        <BreadCrumbs/>
        <WelcomeSection/>
        <Stats/>
        <Discount/>
        <AboutUsInfo/>
        <Companies/>
      </div>
      <CertifiedClinics/>
      <div style={{background: "#fff"}}>
        <OurGeography/>
      </div>
      <Footer/>
    </div>
  );
};

export default AboutUs;
