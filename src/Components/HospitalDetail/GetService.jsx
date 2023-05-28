import React from 'react';
import pathImg from "../../assets/Svg/path.svg"

const GetService = () => {
  return (
    <div className={"container"}>
      <div className="get-service">
        <div className="get-service__header">
          <h4 className={"detail-questions__header-title"}>Условия получения услуг </h4>
          <p className={"detail-questions__header-subtitle"}>LuviMed принимает особые пожелания - добавьте их на следующем шаге
          </p>
        </div>
        <div className="get-service__content">
          <div className="get-service__content-item">
            <div className="get-service__content-item-path">
              <img src={pathImg} alt=""/>
              <span>Quiet hours</span>
            </div>
            <div className="get-service__content-item-desc">Guests need be quiet between 11:00 PM and 8:00 AM.</div>
          </div>
          <div className="get-service__content-item">
            <div className="get-service__content-item-path">
              <img src={pathImg} alt=""/>
              <span>Parties</span>
            </div>
            <div className="get-service__content-item-desc">Parties/events are not allowed</div>
          </div>
          <div className="get-service__content-item">
            <div className="get-service__content-item-path">
              <img src={pathImg} alt=""/>
              <span>Smoking</span>
            </div>
            <div className="get-service__content-item-desc">Smoking is not allowed.</div>
          </div>
          <div className="get-service__content-item">
            <div className="get-service__content-item-path">
              <img src={pathImg} alt=""/>
              <span>Quiet hours</span>
            </div>
            <div className="get-service__content-item-desc">Guests need be quiet between 11:00 PM and 8:00 AM.</div>
          </div>
          <div className="get-service__content-item">
            <div className="get-service__content-item-path">
              <img src={pathImg} alt=""/>
              <span>Children & Beds</span>
            </div>
            <div className="get-service__content-item-desc">
              <span>Child policies</span>
              <span>Children not allowed.</span>
              <span>Crib and extra bed policies</span>
              <span>There's no capacity for cribs at this property.</span>
              <span>This property doesn't offer extra beds.</span>
            </div>
          </div>
          <div className="get-service__content-item">
            <div className="get-service__content-item-path">
              <img src={pathImg} alt=""/>
              <span>Quiet hours</span>
            </div>
            <div className="get-service__content-item-desc">Guests need be quiet between 11:00 PM and 8:00 AM.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetService;
