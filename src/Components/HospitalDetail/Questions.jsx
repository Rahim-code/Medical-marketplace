import React from 'react';
import author from "../../assets/Images/author.png"
import checkGreen from "../../assets/Svg/check-green.svg"

const Questions = () => {
  return (
    <section className={"container"}>
      <div className="hospital-detail__questions">
        <div className={"detail-questions__header"}>
          <h4 className={"detail-questions__header-title"}>Вопросы пациентов</h4>
          <p className={"detail-questions__header-subtitle"}>Официальные ответы клиники</p>
          <div className={"detail-questions__items"}>
            <div className={"detail-questions__item"}>
              <div className={"detail-question"}>
                <div className={"detail-question__header"}>
                  <p className={"detail-question__header-author"}><span>O</span> Оксана З.</p>
                  <p className={"detail-question__header-date"}>21 января 2023</p>
                </div>
                <p className={"detail-questions__content"}>Предоставляет ли больница все услуги? Включены ли в стоимость все услуги?</p>
              </div>
              <div className={"dashed-divider"}></div>
              <div className={"detail-questions__answer"}>
                <p className={"detail-questions__answer-author"}>
                  <img className={"detail-questions__answer-author-img"} src={author} alt=""/>
                  Наталья П.
                  <img src={checkGreen} alt=""/>
                </p>
                <p className={"detail-questions__answer-desc"}>все услуги включены в пакет. У вас есть другие вопросы?</p>
                <div className={"detail-questions__answer-footer"}>
                  <div className={"answer__footer-right"}>
                    <p className={"answer__footer-right-desc"}>Вам помог этот ответ?</p>
                    <div className={"answer__footer-right-btns"}>
                      <button className={"answer__footer-right-btn"}><span>да</span>  <span>0</span></button>
                      <button className={"answer__footer-right-btn"}><span>нет</span>  <span>2</span></button>
                    </div>
                  </div>
                  <div className={"answer__footer-left"}>22 января 2023</div>
                </div>
              </div>
            </div>
            <div className={"detail-questions__item"}>
              <div className={"detail-question"}>
                <div className={"detail-question__header"}>
                  <p className={"detail-question__header-author"}><span>O</span> Оксана З.</p>
                  <p className={"detail-question__header-date"}>21 января 2023</p>
                </div>
                <p className={"detail-questions__content"}>Предоставляет ли больница все услуги? Включены ли в стоимость все услуги?</p>
              </div>
              <div className={"dashed-divider"}></div>
              <div className={"detail-questions__answer"}>
                <p className={"detail-questions__answer-author"}>
                  <img src={author} alt=""/>
                  Наталья П.
                  <img src={checkGreen} alt=""/>
                </p>
                <p className={"detail-questions__answer-desc"}>все услуги включены в пакет. У вас есть другие вопросы?</p>
                <div className={"detail-questions__answer-footer"}>
                  <div className={"answer__footer-right"}>
                    <p className={"answer__footer-right-desc"}>Вам помог этот ответ?</p>
                    <div className={"answer__footer-right-btns"}>
                      <button className={"answer__footer-right-btn"}><span>да</span>  <span>0</span></button>
                      <button className={"answer__footer-right-btn"}><span>нет</span>  <span>2</span></button>
                    </div>
                  </div>
                  <div className={"answer__footer-left"}>22 января 2023</div>
                </div>
              </div>
            </div>
          </div>
          <button className={"detail-questions__btn"}>Читать все вопросы/ответы</button>
        </div>
      </div>

    </section>
  );
};

export default Questions;
