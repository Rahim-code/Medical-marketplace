import React from 'react';
import {Button} from "antd";

const DoctorInfo = () => {
  return (
    <div className={"container"}>
      <div className="doctor-info">
        <div className="doctor-info__btns">
          <Button type={"primary"} style={{backgroundColor:"#5282ff"}}>Образование</Button>
          <Button type={"Link"}>Опыт</Button>
        </div>
        <div className="doctor-info__content">
          <div className="doctor-info__content-item">
            <span className={"study-type"}>Bakalavr</span>
            <span className={"study-address"}>Tver Dövlət Tibb Universiteti. Fakultə – Müalicə işi.</span>
            <span className={"study-country"}>Rusiya, Tver</span>
            <span className={"study-date"}>2011-2017</span>
          </div>
          <div className="doctor-info__content-item">
            <span className={"study-type"}>Magistr</span>
            <span className={"study-address"}>Tver Dövlət Tibb Universiteti. Fakultə – Müalicə işi.</span>
            <span className={"study-country"}>Rusiya, Tver</span>
            <span className={"study-date"}>2011-2017</span>
          </div>
          <div className="doctor-info__content-item">
            <span className={"study-type"}>Doktorantura</span>
            <span className={"study-address"}>Tver Dövlət Tibb Universiteti. Fakultə – Müalicə işi.</span>
            <span className={"study-country"}>Rusiya, Tver</span>
            <span className={"study-date"}>2011-2017</span>
          </div>
        </div>
        <div className="doctor-info__content-mobile">
          <div className="doctor-info__content-mobile-item">
            <p className={"study-info line-large"}>
              <span className={"study-type-mobile"}>Bakalavr</span>
              <span className={"study-address-mobile"}>Tver Dövlət Tibb Universiteti. Fakultə – Müalicə işi.</span>
            </p>
            <p className={"study-country-mobile line"}>Rusiya, Tver</p>
            <p className={"study-date-mobile"}>2011-2017</p>
          </div>
          <div className="doctor-info__content-mobile-item">
            <p className={"study-info line-large"}>
              <span className={"study-type-mobile"}>Magistr</span>
              <span className={"study-address-mobile"}>Tver Dövlət Tibb Universiteti. Fakultə – Müalicə işi.</span>
            </p>
            <p className={"study-country-mobile line"}>Rusiya, Tver</p>
            <p className={"study-date-mobile"}>2011-2017</p>
          </div>
          <div className="doctor-info__content-mobile-item">
            <p className={"study-info line-large"}>
              <span className={"study-type-mobile"}>doktorantura</span>
              <span className={"study-address-mobile"}>Tver Dövlət Tibb Universiteti. Fakultə – Müalicə işi.</span>
            </p>
            <p className={"study-country-mobile line"}>Rusiya, Tver</p>
            <p className={"study-date-mobile"}>2011-2017</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorInfo;
