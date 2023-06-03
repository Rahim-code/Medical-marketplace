import React, {useState} from 'react';
import Header from "../Header/index.js";
import Footer from "../Footer/index.js";
import BreadCrumbs from "../HospitalDetail/BreadCrumbs.jsx";
import "./DoctorDetail.css"
import Reviews from "../HospitalDetail/Reviews.jsx";
import DoctorCard from "./DoctorCard.jsx";
import DoctorBookingModal from "./DoctorBookingModal.jsx";
import DoctorInfo from "./DoctorInfo.jsx";
import FilterButtons from "../FilterButtons/index.js";

const DoctorDetail = () => {

  const [openBooking, setOpenBooking] = useState(false)
  const onOpenBookingModal = () => {
    console.log('1')
    setOpenBooking(true)
  }
  const onCloseBookingModal = () => {
    setOpenBooking(false)
  }
  console.log(openBooking)
  return (
    <div style={{background: "#f6f6f6"}}>
      <Header/>
      {/*breadcrumbs*/}
      <BreadCrumbs/>
      <FilterButtons/>
      <DoctorCard onOpenBookingModal={onOpenBookingModal}/>
      <DoctorInfo/>
      <Reviews/>
      <Footer/>
      <DoctorBookingModal openBooking={openBooking} onCloseBookingModal={onCloseBookingModal}/>
    </div>
  );
};

export default DoctorDetail;
