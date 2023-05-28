import React from 'react';
import masterCardIcon  from "../../assets/Svg/mastercard.svg"
import visaCardIcon  from "../../assets/Svg/visacard.svg"
import unionPayIcon  from "../../assets/Svg/unionpay.svg"
import mirCardIcon  from "../../assets/Svg/mircard.svg"

const PaySection = () => {
  return (
    <div className={"container"}>
      <div className="pay-section">
        <div className="pay-section__title">Способ оплаты, который принимает объект</div>
        <div className="pay-section-items">
          <div className="pay-section-item">
            <img src={masterCardIcon} alt=""/>
          </div>
          <div className="pay-section-item">
            <img src={visaCardIcon} alt=""/>
          </div>
          <div className="pay-section-item">
            <img src={unionPayIcon} alt=""/>
          </div>
          <div className="pay-section-item">
            <img src={mirCardIcon} alt=""/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaySection;
