import React from "react";

import { Dropdown, Button, Space, Breadcrumb, Collapse } from "antd";
import Vector from "../../assets/Images/Vector.svg";
import USD from "../../assets/Svg/usdIcon.svg";
import EUO from "../../assets/Svg/GroupEuro.svg";
import POU from "../../assets/Svg/GroupPound.svg";
import RUB from "../../assets/Svg/rub.svg";
import azFlag from "../../assets/Svg/azFlag.svg";
import trFlag from "../../assets/Svg/trFlag.svg";
import absFlag from "../../assets/Svg/absFlag.svg";

import russianFlag from "../../assets/Images/russianFlagIcon.png";
import question from "../../assets/Images/question.png";
import heart from "../../assets/Images/heart.png";
import facebook from "../../assets/Images/facebook.png";
import instagram from "../../assets/Images/instagram.png";
import vk from "../../assets/Images/vk.png";
import "./PrivacyPolicy.css"

import { ArrowRightOutlined} from "@ant-design/icons";

const { Panel } = Collapse;

const items = [
  {
    label: (
      <span
        style={{
          fontFamily: "Gilroy",
          fontSize: "16px",
          fontWeight: "600",
          color: "black",
          paddingLeft: "10px",
        }}
      >
        USD
      </span>
    ),
    key: "1",
    icon: (
      <img
        style={{ width: "30px", objectFit: "cover", marginLeft: "20px" }}
        src={USD}
      />
    ),
  },
  {
    label: (
      <span
        style={{
          fontFamily: "Gilroy",
          fontSize: "16px",
          fontWeight: "600",
          color: "black",
          paddingLeft: "10px",
        }}
      >
        EUR
      </span>
    ),
    key: "2",
    icon: (
      <img
        style={{ width: "30px", objectFit: "cover", marginLeft: "20px" }}
        src={EUO}
      />
    ),
  },
  {
    label: (
      <span
        style={{
          fontFamily: "Gilroy",
          fontSize: "16px",
          fontWeight: "600",
          color: "black",
          paddingLeft: "10px",
        }}
      >
        {" "}
        GBP
      </span>
    ),
    key: "3",
    icon: (
      <img
        style={{ width: "30px", objectFit: "cover", marginLeft: "20px" }}
        src={POU}
      />
    ),
  },
];

const itemsFlag = [
  {
    label: (
      <span
        style={{
          fontFamily: "Gilroy",
          fontSize: "16px",
          fontWeight: "600",
          color: "black",
          paddingLeft: "10px",
        }}
      >
        AZ
      </span>
    ),
    key: "1",
    icon: (
      <img
        style={{ width: "30px", objectFit: "cover", marginLeft: "20px" }}
        src={azFlag}
      />
    ),
  },
  {
    label: (
      <span
        style={{
          fontFamily: "Gilroy",
          fontSize: "16px",
          fontWeight: "600",
          color: "black",
          paddingLeft: "10px",
        }}
      >
        TR
      </span>
    ),
    key: "2",
    icon: (
      <img
        style={{ width: "30px", objectFit: "cover", marginLeft: "20px" }}
        src={trFlag}
      />
    ),
  },
  {
    label: (
      <span
        style={{
          fontFamily: "Gilroy",
          fontSize: "16px",
          fontWeight: "600",
          color: "black",
          paddingLeft: "10px",
        }}
      >
        {" "}
        EN
      </span>
    ),
    key: "3",
    icon: (
      <img
        style={{ width: "30px", objectFit: "cover", marginLeft: "20px" }}
        src={absFlag}
      />
    ),
  },
];

const handleMenuClick = (e) => {
  console.log("click", e);
};

const handleMenuFlagClick = (e) => {
  console.log("click", e);
};

const menuProps = {
  items,
  onClick: handleMenuClick,
};

const menuPropsFlag = {
  items: itemsFlag,
  onClick: handleMenuFlagClick,
};

const PrivacyPolicy = () => {
  return (
    <div style={{ backgroundColor: "#F4F4F4" }}>
      <header>
        <div id="bg">
          <div className="container container1">
            <div>
              <img src={Vector} />
            </div>
            <div className="mR">
              <h1 className="textMed">112 Med</h1>
              <p className="medMarket">Медицинский маркетплейс</p>
            </div>
            <div className="dropdownBefore">
              <ul className="ul" id="ulList">
                <li style={{ paddingBottom: "15px" }}>
                  <Dropdown menu={menuProps}>
                    <Button type="text">
                      <Space>
                        <img id="rubl" src={RUB} />
                        <span
                          style={{
                            fontFamily: "Gilroy",
                            fontSize: "17.5px",
                            fontWeight: "500",
                            color: "white",
                          }}
                        >
                          RUB
                        </span>
                      </Space>
                    </Button>
                  </Dropdown>
                </li>
                <li style={{ paddingBottom: "15px" }}>
                  <Dropdown menu={menuPropsFlag}>
                    <Button type="text">
                      <Space>
                        <img id="flag" src={russianFlag} />
                        <span
                          style={{
                            fontFamily: "Gilroy",
                            fontSize: "17.5px",
                            fontWeight: "500",
                            color: "white",
                          }}
                        >
                          RU
                        </span>
                      </Space>
                    </Button>
                  </Dropdown>
                </li>
                <li style={{ paddingBottom: "15px" }} className="dFlex">
                  <div className="question">
                    <img src={question} />
                  </div>
                  <div>
                    <p>связаться с нами </p>
                  </div>
                </li>
                <li style={{ paddingBottom: "15px" }}>
                  <img className="heart" src={heart} />
                </li>
                <li style={{ paddingBottom: "15px" }}>
                  <Button
                    className="button"
                    type="primary"
                    icon={<ArrowRightOutlined className="Arrow" />}
                  >
                    Bойти
                  </Button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <div style={{ paddingTop: "30px" }} className="container">
        <div style={{ borderBottom: "1px solid #E7E7E7", padding: "20px 0" }}>
          <Breadcrumb
            separator={
              <span
                style={{
                  color: "#5282FF",
                  paddingLeft: "5px",
                  paddingRight: "10px",
                }}
              >
                {" "}
                {">"}{" "}
              </span>
            }
            items={[
              {
                title: "Главная",
                href: "",
              },
              {
                title: "FAQ",
              },
            ]}
          />
        </div>
      </div>

      <div className="container">
        <div className="displayGridReviewDr">
          <div className="menuNav faq-nav-wrapper mb-20">
            <Collapse
              className={"faq-nav"}
              bordered={false}
              defaultActiveKey={["1"]}
            >
              <Panel
                style={{ border: "none" }}
                header="Финансовая политика"
                key="1"
              ></Panel>
              <Panel
                style={{ border: "none" }}
                header="Политика отзывов"
                key="2"
              ></Panel>
              <Panel
                style={{ border: "none" }}
                header="Политика ранжирования"
                key="3"
              ></Panel>
              <Panel
                style={{ border: "none" }}
                header="Сколько я экономлю?"
                key="4"
              ></Panel>
              <Panel
                style={{ border: "none" }}
                header="Безопасен ли медицинский туризм?"
                key="5"
              ></Panel>
              <Panel
                style={{ border: "none" }}
                header="Какие процедуры доступны?"
                key="6"
              ></Panel>
              <Panel
                style={{ border: "none" }}
                header="Сколько я экономлю?"
                key="7"
              ></Panel>
            </Collapse>
          </div>

          <div className="menuRight">
            <p className={"privacy-desc"}>
              Это первый и, наверное, самый главный вопрос, который приходит на
              ум, когда речь <br /> заходит о медицинском туризме. <br /> Любая
              медицинская операция или процедура, где бы она ни проводилась,
              сопряжена <br /> с определенным риском. Чтобы снизить этот риск,
              мы прилагаем все усилия, чтобы <br /> исследовать и предоставлять
              нашим клиентам информацию о различных вариантах <br />{" "}
              высококачественных медицинских учреждений.
              <br /> Ниже приведены некоторые важные аспекты, которые мы
              учитываем при добавлении <br /> любого поставщика медицинских
              услуг в нашу сеть (одного или нескольких из <br /> перечисленных
              ниже):
              <br />
              Сертификат ISO 9000 или аккредитация от Joint Commission
              International (JCI), США.
              <br /> (JCI является международным подразделением Объединенной
              комиссии по <br /> аккредитации организаций здравоохранения,
              которое оценивает стандарты качества <br /> больниц США). Если они
              еще не аккредитованы ни одним из них, они должны, по <br />{" "}
              крайней мере, работать над получением этих сертификатов или
              аккредитаций. Они <br /> следуют лучшим практикам и стандартам
              качества в отрасли.
              <br /> Послужной список качественного обслуживания, отсутствие
              очередей, персональное <br /> внимание врачей. Отзывы, которые мы
              получаем от предыдущих пациентов, позволяют <br /> нам получить
              эту информацию.
              <br /> Предпочтение отдается медицинскому персоналу с опытом
              работы в медицинских <br /> учреждениях США, Европы или других
              развитых стран.
              <br /> Сертифицирован одной из ведущих мировых компаний по
              производству медицинских <br /> протезов.
              <br /> Персонал, который говорит по-английски или имеет
              англоговорящего переводчика <br /> для иностранных пациентов.{" "}
              <br /> Отличная инфраструктура (чистые комнаты с кондиционером,
              телевидение, <br /> подключение к Интернету) <br /> Комфортное
              размещение и удобства для всех, кто сопровождает пациента.
              <br />
              Лицензия на практику в своей стране
            </p>
          </div>
        </div>
      </div>

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
    </div>
  );
};

export default PrivacyPolicy;
