import React,{useState} from "react";
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
import './main.css'



const App = () => {
  const [showMenu, setShowMenu] = useState(false)

  const handleMenu = () =>{
    setShowMenu(!showMenu)
  }
  return (
    <main className={`${showMenu && 'overflowHidden'} `}>
       {/*<MobileLogin />*/}
         <HomePage handleMenu={handleMenu} showMenu={showMenu} setShowMenu={setShowMenu}/>
       {/* <Profile/>*/}
       {/*<ReviewDoctors/>*/}
       {/*<ReviewHospitals/>*/}
       {/*<FavDoctors/>*/}
       {/*<FavHospitals />*/}
       {/*<Hospitals/>*/}
       {/* <Doctors/> */}
       {/*<HospitalsReviewsAll/>*/}
       {/*<DoctorsReviewsAll/>*/}
       {/*<FAQ/>*/}
       {/*<PrivacyPolicy/>*/}
       {/*<ContactUs/>*/}
      {/*<HospitalDetail/>*/}
      {/*<DoctorDetail/>*/}
      {/*< AboutUs/>*/}

      {/* <Slider/> */}
    </main>
  );
};

export default App;
