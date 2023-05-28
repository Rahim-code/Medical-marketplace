import React from 'react';
import facebook from "../../assets/Images/facebook.png";
import vk from "../../assets/Images/vk.png";
import instagram from "../../assets/Images/instagram.png";
import {Button} from "antd";

const Footer = () => {
  return (
    <footer>
      <div className="bgFooter">
        <div style={{ paddingTop: "100px" }} className="container">
          <div className="rowGrid">
            <div id="textFooterid" style={{ paddingLeft: "15px" }}>
              <ul style={{ listStyle: "none" }}>
                <li
                  style={{
                    color: "white",
                    fontSize: "33.25px",
                    fontWeight: "500",
                    lineHeight: "45px",
                  }}
                >
                  112 Med
                </li>
                <li style={{ color: "white", fontSize: "18px" }}>
                  Медицинский <br />
                  маркетплейс
                </li>
              </ul>
            </div>
            <div>
              <ul style={{ listStyle: "none" }}>
                <li
                  style={{
                    color: "white",
                    fontWeight: "500px",
                    fontFamily: "Inter",
                    fontSize: "22px",
                    paddingBottom: "10px",
                  }}
                >
                  Для пациентов
                </li>
                <li
                  style={{
                    color: "#B6D0FF",
                    fontFamily: "Gilroy",
                    paddingBottom: "10px",
                  }}
                >
                  Врачи{" "}
                </li>
                <li
                  style={{
                    color: "#B6D0FF",
                    fontFamily: "Gilroy",
                    paddingBottom: "10px",
                  }}
                >
                  Больницы
                </li>
                <li
                  style={{
                    color: "#B6D0FF",
                    fontFamily: "Gilroy",
                    paddingBottom: "10px",
                  }}
                >
                  Услуги
                </li>
              </ul>
            </div>
            <div>
              <ul style={{ listStyle: "none" }}>
                <li
                  style={{
                    color: "white",
                    fontWeight: "500px",
                    fontFamily: "Inter",
                    fontSize: "22px",
                    paddingBottom: "10px",
                  }}
                >
                  O Hас
                </li>
                <li
                  style={{
                    color: "#B6D0FF",
                    fontFamily: "Gilroy",
                    paddingBottom: "10px",
                  }}
                >
                  Условия Эксплуатации
                </li>
                <li
                  style={{
                    color: "#B6D0FF",
                    fontFamily: "Gilroy",
                    paddingBottom: "10px",
                  }}
                >
                  {" "}
                  Политика Oтзывов
                </li>
                <li
                  style={{
                    color: "#B6D0FF",
                    fontFamily: "Gilroy",
                    paddingBottom: "10px",
                  }}
                >
                  О «112 мед».
                </li>
                <li
                  style={{
                    color: "#B6D0FF",
                    fontFamily: "Gilroy",
                    paddingBottom: "10px",
                  }}
                >
                  FAQ
                </li>
              </ul>
            </div>
            <div>
              <ul style={{ listStyle: "none" }}>
                <li
                  style={{
                    color: "white",
                    fontWeight: "500px",
                    fontFamily: "Inter",
                    fontSize: "22px",
                    paddingBottom: "10px",
                  }}
                >
                  Для партнеров
                </li>
                <li
                  style={{
                    color: "#B6D0FF",
                    fontFamily: "Gilroy",
                    paddingBottom: "10px",
                  }}
                >
                  Добавить больницу
                </li>
                <li
                  style={{
                    color: "#B6D0FF",
                    fontFamily: "Gilroy",
                    paddingBottom: "10px",
                  }}
                >
                  {" "}
                  добавить врача
                </li>
                <li
                  style={{
                    color: "#B6D0FF",
                    fontFamily: "Gilroy",
                    paddingBottom: "10px",
                  }}
                >
                  Войти как партнер
                </li>
              </ul>
            </div>
          </div>
          <div style={{ padding: "100px 0" }} className="footerIcons">
            <div>
              <img style={{ width: "30.66px" }} src={facebook} />
            </div>
            <div>
              <img style={{ width: "36.66px" }} src={vk} />
            </div>
            <div>
              <img style={{ width: "30.66px" }} src={instagram} />
            </div>

            <div style={{ paddingLeft: "30px" }}>
              <Button
                style={{
                  fontFamily: "Gilroy",
                  fontSize: "20px",
                  fontWeight: "600",
                }}
                className="pad"
              >
                КОНТАКТ
              </Button>
            </div>
          </div>
        </div>
        <p
          className="white"
          style={{
            textAlign: "center",
            paddingBottom: "15px",
            paddingTop: "15px",
            backgroundColor: "#2A52BA",
            margin: "0",
          }}
        >
          © All rights reserved 2023. 112 Med
        </p>
      </div>
    </footer>
  );
};

export default Footer;
