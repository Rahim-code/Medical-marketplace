import React from 'react';
import Carousel from "react-elastic-carousel";
import "./HomeReviews.css"
import stars from "../../../assets/Svg/starIcon.svg"
import author from "../../../assets/Images/author.png"
import quote from "../../../assets/Svg/quote.svg"


const TabClinics = () => {
  const breakPoints = [
    { width: 500, itemsToShow: 2 },
    { width: 768, itemsToShow: 2 },
    { width: 1200, itemsToShow: 2 },
    { width: 1500, itemsToShow: 2 },
  ];
  return (
    <>
      <div className={"home-reviews__items"}>
        <Carousel breakPoints={breakPoints}>
          <div className="home-reviews__item">
            <div className="reviews-item__header">
              <div className="reviews-item__author">
                <img src={author} alt={""} className="reviews-item__author-img"/>
                <div className="reviews-item__author-name">Алина <br/>Леонидовна </div>
              </div>
              <div className="reviews-item__rating">
                <p className={"reviews-item__rating-name"}>Клиника <span>POLYmed</span> </p>
                <img className={"reviews-item__rating-stars"} src={stars} alt=""/>
              </div>
            </div>
            <div className="divider"></div>
            <div className="reviews-item__content">
              <p className="reviews-item__content-desc">Здравствуйте! Хочу пожаловаться на врача клиники, Очень благодарен врачам клиники, Спасибо огромное! </p>
              <div className="reviews-item__content-footer">
                <span className="reviews-item__content-date">23.07.2022</span>
                <img className="reviews-item__content-quote" src={quote} alt=""/>
              </div>
            </div>
          </div>
          <div className="home-reviews__item">
            <div className="reviews-item__header">
              <div className="reviews-item__author">
                <img src={author} alt={""} className="reviews-item__author-img"/>
                <div className="reviews-item__author-name">Алина <br/>Леонидовна </div>
              </div>
              <div className="reviews-item__rating">
                <p className={"reviews-item__rating-name"}>Клиника <span>POLYmed</span> </p>
                <img className={"reviews-item__rating-stars"} src={stars} alt=""/>
              </div>
            </div>
            <div className="divider"></div>
            <div className="reviews-item__content">
              <p className="reviews-item__content-desc">Здравствуйте! Хочу пожаловаться на врача клиники, Очень благодарен врачам клиники, Спасибо огромное! </p>
              <div className="reviews-item__content-footer">
                <span className="reviews-item__content-date">23.07.2022</span>
                <img className="reviews-item__content-quote" src={quote} alt=""/>
              </div>
            </div>
          </div>
          <div className="home-reviews__item">
            <div className="reviews-item__header">
              <div className="reviews-item__author">
                <img src={author} alt={""} className="reviews-item__author-img"/>
                <div className="reviews-item__author-name">Алина <br/>Леонидовна </div>
              </div>
              <div className="reviews-item__rating">
                <p className={"reviews-item__rating-name"}>Клиника <span>POLYmed</span> </p>
                <img className={"reviews-item__rating-stars"} src={stars} alt=""/>
              </div>
            </div>
            <div className="divider"></div>
            <div className="reviews-item__content">
              <p className="reviews-item__content-desc">Здравствуйте! Хочу пожаловаться на врача клиники, Очень благодарен врачам клиники, Спасибо огромное! </p>
              <div className="reviews-item__content-footer">
                <span className="reviews-item__content-date">23.07.2022</span>
                <img className="reviews-item__content-quote" src={quote} alt=""/>
              </div>
            </div>
          </div>
          <div className="home-reviews__item">
            <div className="reviews-item__header">
              <div className="reviews-item__author">
                <img src={author} alt={""} className="reviews-item__author-img"/>
                <div className="reviews-item__author-name">Алина <br/>Леонидовна </div>
              </div>
              <div className="reviews-item__rating">
                <p className={"reviews-item__rating-name"}>Клиника <span>POLYmed</span> </p>
                <img className={"reviews-item__rating-stars"} src={stars} alt=""/>
              </div>
            </div>
            <div className="divider"></div>
            <div className="reviews-item__content">
              <p className="reviews-item__content-desc">Здравствуйте! Хочу пожаловаться на врача клиники, Очень благодарен врачам клиники, Спасибо огромное! </p>
              <div className="reviews-item__content-footer">
                <span className="reviews-item__content-date">23.07.2022</span>
                <img className="reviews-item__content-quote" src={quote} alt=""/>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
      <div className="home-reviews__items-mobile">
        <div className="home-reviews__item">
          <div className="reviews-item__header">
            <div className="reviews-item__author">
              <img src={author} alt={""} className="reviews-item__author-img"/>
              <div className="reviews-item__author-name">Алина <br/>Леонидовна </div>
            </div>
            <div className="reviews-item__rating">
              <p className={"reviews-item__rating-name"}>Клиника <span>POLYmed</span> </p>
              <img className={"reviews-item__rating-stars"} src={stars} alt=""/>
            </div>
          </div>
          <div className="divider"></div>
          <div className="reviews-item__content">
            <p className="reviews-item__content-desc">Здравствуйте! Хочу пожаловаться на врача клиники, Очень благодарен врачам клиники, Спасибо огромное! </p>
            <div className="reviews-item__content-footer">
              <span className="reviews-item__content-date">23.07.2022</span>
              <img className="reviews-item__content-quote" src={quote} alt=""/>
            </div>
          </div>
        </div>
        <div className="home-reviews__item">
          <div className="reviews-item__header">
            <div className="reviews-item__author">
              <img src={author} alt={""} className="reviews-item__author-img"/>
              <div className="reviews-item__author-name">Алина <br/>Леонидовна </div>
            </div>
            <div className="reviews-item__rating">
              <p className={"reviews-item__rating-name"}>Клиника <span>POLYmed</span> </p>
              <img className={"reviews-item__rating-stars"} src={stars} alt=""/>
            </div>
          </div>
          <div className="divider"></div>
          <div className="reviews-item__content">
            <p className="reviews-item__content-desc">Здравствуйте! Хочу пожаловаться на врача клиники, Очень благодарен врачам клиники, Спасибо огромное! </p>
            <div className="reviews-item__content-footer">
              <span className="reviews-item__content-date">23.07.2022</span>
              <img className="reviews-item__content-quote" src={quote} alt=""/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TabClinics;
