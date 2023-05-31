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
import "./FAQ.css"

import { ArrowRightOutlined} from "@ant-design/icons";
import Header from "../Header/index.js";
import Footer from "../Footer/index.js";

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

const FAQ = () => {
  return (
    <div style={{ backgroundColor: "#F4F4F4" }}>
      <Header/>
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
          <div  className="menuNav faq-nav-wrapper">
            <Collapse
              className={"faq-nav"}
              bordered={false}
              defaultActiveKey={["1"]}
            >
              <Panel
                style={{ border: "none" }}
                header="Врачи и медицинский персонал говорят по-английски?"
                key="1"
              ></Panel>
              <Panel
                style={{ border: "none" }}
                header="Безопасен ли медицинский туризм?"
                key="2"
              ></Panel>
              <Panel
                style={{ border: "none" }}
                header="Какие процедуры доступны?"
                key="3"
              ></Panel>
              <Panel
                style={{ border: "none" }}
                header="Сколько я экономлю?"
                key="4"
              ></Panel>
              <Panel
                style={{ border: "none" }}
                header="Сколько я экономлю?"
                key="5"
              ></Panel>
              <Panel
                style={{ border: "none" }}
                header="Сколько я экономлю?"
                key="6"
              ></Panel>
              <Panel
                style={{ border: "none" }}
                header="Сколько я экономлю?"
                key="7"
              ></Panel>
            </Collapse>
            <div className={"faq-contact"}
            >
              <p style={{ color: "#FFF", fontSize: "24px" }}>Hужна помощь</p>
              <hr style={{ marginBottom: "50px" }} />
              <p style={{ color: "#FFF" }}>+994 000 00 00 </p>
              <p style={{ color: "#FFF" }}>+994 000 00 00 </p>
              <p style={{ color: "#FFF" }}>info@112med.com</p>

              <div
                style={{
                  marginTop: "60px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <img
                  style={{ width: "24.66px", height: "24.66px" }}
                  src={facebook}
                />
                <img
                  style={{
                    width: "34.66px",
                    height: "34.66px",
                    margin: "0px 12px",
                  }}
                  src={vk}
                />
                <img
                  style={{ width: "24.66px", height: "24.66px" }}
                  src={instagram}
                />
              </div>
            </div>
          </div>

          <div className="menuRight">
            <p className={"faq-desc"} >
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

      <Footer/>
    </div>
  );
};

export default FAQ;
