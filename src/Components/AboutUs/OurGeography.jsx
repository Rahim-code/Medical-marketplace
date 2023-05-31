import React from 'react';
import azFlagIcon from  "../../assets/Images/flags/azFlag.png"
import trFlagIcon from  "../../assets/Images/flags/trFlag.png"
import ruFlagIcon from  "../../assets/Images/flags/ruFlag.png"

const OurGeography = () => {
  return (
    <section className={"container"}>
      <div className="geography">
        <div className="geography__header">
          <h4 className="geography__header-title">Наша география</h4>
          <p className="geography__header-subtitle">Lorem ipsum dolor sit amet consectetur dolor sit amet.</p>
        </div>
        <div className="geography__items">
          <div className="geography__item">
            <img src={azFlagIcon} alt=""/>
            <p className="geography__item-text">Азербайджан</p>
          </div>
          <div className="geography__item">
            <img src={trFlagIcon} alt=""/>
            <p className="geography__item-text">Турция</p>
          </div>
          <div className="geography__item">
            <img src={ruFlagIcon} alt=""/>
            <p className="geography__item-text">Россия</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurGeography;
