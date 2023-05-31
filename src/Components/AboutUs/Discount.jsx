import React from 'react';
import percentIcon from "../../assets/Svg/percent.svg"

const Discount = () => {
  return (
    <section className={"container"}>
      <div className="discount">
        <div className="discount__item active">
          <div className="discount__item-img">
            <img src={percentIcon} alt=""/>
          </div>
          <div className="discount__item-footer">
            <p className="discount__item-footer-percent">до 50% скидки</p>
            <p className="discount__item-footer-text">Lorem ipsum</p>
          </div>
        </div>
        <div className="discount__item second">
          <div className="discount__item-img">
            <span>?</span>
          </div>
          <div className="discount__item-footer">
            <p className="discount__item-footer-percent">до 50% скидки</p>
            <p className="discount__item-footer-text">Lorem ipsum</p>
          </div>
        </div>
        <div className="discount__item third">
          <div className="discount__item-img">
            <span>?</span>
          </div>
          <div className="discount__item-footer">
            <p className="discount__item-footer-percent">до 50% скидки</p>
            <p className="discount__item-footer-text">Lorem ipsum</p>
          </div>
        </div>
        <div className="discount__item fourth">
          <div className="discount__item-img">
            <span>?</span>
          </div>
          <div className="discount__item-footer">
            <p className="discount__item-footer-percent">до 50% скидки</p>
            <p className="discount__item-footer-text">Lorem ipsum</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discount;
