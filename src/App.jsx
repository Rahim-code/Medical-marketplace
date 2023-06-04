import React from "react";
import MobileLogin from "./Components/MobileLogin/MobileLogin";
import HomePage from "./Components/HomePage/HomePage";
import Profile from "./Components/Profile/Profile";
import ReviewDoctors from "./Components/ReviewDoctors/ReviewDoctors";
import FavDoctors from "./Components/FavDoctors/FavDoctors";
import ReviewHospitals from "./Components/ReviewHospitals/ReviewHospitals";
import FavHospitals from "./Components/FavHospitals/FavHospitals";
import Hospitals from "./Components/Hospitals/Hospitals";
import Doctors from "./Components/Doctors/Doctors";
import HospitalsReviewsAll from './Components/HospitalReviewsAll/HospitalsReviewsAll'
import DoctorsReviewsAll from "./Components/DoctorsReviewsAll/DoctorsReviewsAll";
import FAQ from "./Components/FAQ/FAQ";
import PrivacyPolicy from './Components/PrivacyPolicy/PrivacyPolicy'
import ContactUs from "./Components/ContactUs/ContactUs";


import Slider from "./Components/Slider";
import HospitalDetail from "./Components/HospitalDetail";
import DoctorDetail from "./Components/DoctorDetail/index.js";
import AboutUs from "./Components/AboutUs/index.js";



const App = () => {
  return (
    <>
       {/*<MobileLogin />*/}
        {/* <HomePage/> */}
       {/* <Profile/>*/}
       {/*<ReviewDoctors/>*/}
       {/*<ReviewHospitals/>*/}
       {/*<FavDoctors/>*/}
       {/*<FavHospitals />*/}
       {/*<Hospitals/>*/}
       <Doctors/>
       {/*<HospitalsReviewsAll/>*/}
       {/*<DoctorsReviewsAll/>*/}
       {/*<FAQ/>*/}
       {/*<PrivacyPolicy/>*/}
       {/*<ContactUs/>*/}
      {/*<HospitalDetail/>*/}
      {/*<DoctorDetail/>*/}
      {/*< AboutUs/>*/}

      {/* <Slider/> */}
    </>
  );
};

export default App;
