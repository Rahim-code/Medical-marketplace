import React from 'react';
import facebook from "../../assets/Images/facebook.png";
import vk from "../../assets/Images/vk.png";
import instagram from "../../assets/Images/instagram.png";
import {Button} from "antd";
import footerArrow from "../../assets/Svg/footer-arrow.svg"

const Footer = () => {
  return (
    <footer className="bgFooter">
      <div className="container footer-wrapper">
        <div className="rowGrid">
          <div id="textFooterid" className={"textFooterid"}>
            <ul style={{ listStyle: "none" }} className={"footer-med"}>
              <li className={"footer-title"}
              >
                112 Med
              </li>
              <li className={"footer-subtitle"} >
                Медицинский <br />
                маркетплейс
              </li>
            </ul>
          </div>
          <div>
            <ul style={{ listStyle: "none" }} >
              <li className={"footer-nav-title"}>
                Для пациентов
              </li>
              <li className={"footer-nav-link"}>
                Врачи{" "}
              </li>
              <li className={"footer-nav-link"}>
                Больницы
              </li>
              <li className={"footer-nav-link"}>
                Услуги
              </li>
            </ul>
          </div>
          <div>
            <ul style={{ listStyle: "none" }}>
              <li className={"footer-nav-title"}>
                O Hас
              </li>
              <li className={"footer-nav-link"}>
                Условия Эксплуатации
              </li>
              <li className={"footer-nav-link"}>
                {" "}
                Политика Oтзывов
              </li>
              <li className={"footer-nav-link"}>
                О «112 мед».
              </li>
              <li className={"footer-nav-link"}>
                FAQ
              </li>
            </ul>
          </div>
          <div>
            <ul style={{ listStyle: "none" }}>
              <li className={"footer-nav-title"}>
                Для партнеров
              </li>
              <li className={"footer-nav-link"}>
                Добавить больницу
              </li>
              <li className={"footer-nav-link"}>
                {" "}
                добавить врача
              </li>
              <li className={"footer-nav-link"}>
                Войти как партнер
              </li>
            </ul>
          </div>
        </div>
        <div className="footerIcons-header">
          <h4>Свяжись с нами</h4>
          <a href={"mailto:info@112med.com"}>
            <img src={footerArrow} alt=""/>
            info@112med.com
          </a>
        </div>
        <div  className="footerIcons">
          <div style={{display:"flex", gap:"16px",marginTop:"10px"}}>
            <div >
              <img className={"footer-social"} src={facebook} />
            </div>
            <div>
              <img className={"footer-social"} src={vk} />
            </div>
            <div>
              <img className={"footer-social"} src={instagram} />
            </div>
          </div>

          <div className="pad-wrapper" >
            <Button className="pad">
              КОНТАКТ
            </Button>
          </div>
        </div>
      </div>
      <p className="footer-copy">
        © All rights reserved 2023. 112 Med
      </p>
    </footer>
  );
};

export default Footer;
