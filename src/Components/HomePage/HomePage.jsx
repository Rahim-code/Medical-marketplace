import React, {useState} from "react";
import {
  ArrowRightOutlined,
  SearchOutlined,
  EnvironmentOutlined, CloseOutlined,
} from "@ant-design/icons";
import { Button, Dropdown, Space, Input, Row, Col } from "antd";

import Slider from "../Slider";
import SliderSecond from "../SliderSecond/SliderSecond";
import SliderThird from "../SliderThird/SliderThird";

import russianFlag from "../../assets/Images/russianFlagIcon.png";
import question from "../../assets/Images/question.png";
import heart from "../../assets/Images/heart.png";
import group from "../../assets/Images/Group1.png";
import group2 from "../../assets/Images/Group2.png";
import group3 from "../../assets/Images/Group3.png";
import group4 from "../../assets/Images/Group4 (2).png";
import group5 from "../../assets/Images/Group5.png";
import group6 from "../../assets/Images/Group6.png";
import group7 from "../../assets/Images/Group7.png";
import group8 from "../../assets/Images/Group8.png";
import group9 from "../../assets/Images/Group9.png";
import group10 from "../../assets/Images/Group10.png";
import group11 from "../../assets/Images/Group11.png";
import group12 from "../../assets/Images/Group12.png";
import group13 from "../../assets/Images/Group13.png";
import group14 from "../../assets/Images/Group14.png";
import group15 from "../../assets/Images/Group15.png";
import group16 from "../../assets/Images/Group16.png";
import group17 from "../../assets/Images/Group17.png";
import group18 from "../../assets/Images/Group18.png";
import facebook from "../../assets/Images/facebook.png";
import instagram from "../../assets/Images/instagram.png";
import vk from "../../assets/Images/vk.png";

import Vector from "../../assets/Images/Vector.svg";
import USD from "../../assets/Svg/usdIcon.svg";
import EUO from "../../assets/Svg/GroupEuro.svg";
import POU from "../../assets/Svg/GroupPound.svg";
import RUB from "../../assets/Svg/rub.svg";
import azFlag from "../../assets/Svg/azFlag.svg";
import trFlag from "../../assets/Svg/trFlag.svg";
import absFlag from "../../assets/Svg/absFlag.svg";
import userLogin from "../../assets/Svg/userlogin.svg";
import menuIcon from "../../assets/Svg/menuIcon.svg";

import "../HomePage/HomePage.css";
import MobileMenu from "../MobileMenu/index.js";

const handleMenuClick = (e) => {
  console.log("click", e);
};

const handleMenuFlagClick = (e) => {
  console.log("click", e);
};

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
        en
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

const menuProps = {
  items,
  onClick: handleMenuClick,
};
const menuPropsFlag = {
  items: itemsFlag,
  onClick: handleMenuFlagClick,
};

const HomePage = () => {
  const [showMenu, setShowMenu] = useState(false)

  const handleMenu = () =>{
    console.log('show')
    setShowMenu(!showMenu)
  }
  return (
    <>
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
                <img
                  style={{ objectFit: "cover !important" }}
                  className="heart"
                  src={heart}
                />
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
            <ul className={"mobileList"}>
              {showMenu ?
                <><Button type="text" size={"large"} style={{display:"flex", alignItems:"center"}}>
                  <img id="flag" src={userLogin} />
                </Button>
                  <Button type="text" size={"large"} style={{display:"flex", alignItems:"center"}} onClick={handleMenu}>
                    <img id="flag" src={menuIcon} />
                  </Button>
                </>:
                <Button type="text" size={"large"} style={{display:"flex", alignItems:"center"}} onClick={handleMenu}>
                  <CloseOutlined onClick={handleMenu} className="white" style={{fontSize:"36px"}} />
                </Button>
              }
            </ul>
          </div>
        </div>
      </div>
{/*<MobileMenu menuProps={menuProps} menuPropsFlag={menuPropsFlag} showMenu={showMenu} handleMenu={handleMenu} />*/}
      <div id="bgHome">
        <div className="container heroTitle">
          <p className="fontMed">
            Бронируйте <br /> Mедицинскую услугу
          </p>
          <p className="text">Ищите клинику, врачей по всему миру</p>
        </div>
        <div id="marginBTN" className="container">
          <Space>
            <Button
              className="btn_ activeBtn"
            >
              Услуги
            </Button>
            <Button
              className="btn_ "
            >
              Клиники
            </Button>
            <Button
              className="btn_"
            >
              Врачи{" "}
            </Button>
          </Space>
        </div>
        <div id="inputDiv" className="container">
          <div>
            <Row gutter={12}>
              <Col lg={12} xs={24} style={{marginBottom:"10px"}}>
                <Input
                  size="large"
                  placeholder="Процедура, заболевание, клинка, врач"
                  prefix={
                    <SearchOutlined
                      style={{ fontSize: "23px", color: "#5282FF" }}
                    />
                  }
                  id="inputSearch"
                />
              </Col>
              <Col lg={8} xs={12}>
                <Input
                  size="large"
                  placeholder="Москва, Россия"
                  prefix={
                    <EnvironmentOutlined
                      style={{ fontSize: "23px", color: "#5282FF" }}
                    />
                  }
                  id="inputEnviroment"
                />
              </Col>
              <Col lg={4} xs={12}>
                <Button className="inputBtn" type="primary">
                  Yзнать цены
                </Button>
              </Col>
            </Row>
          </div>
          <div className="textFlex">
            <Button style={{ backgroundColor: "#F4F4F4" }} type="text">
              Клиники сети Медикал Парк
            </Button>
            <Button style={{ backgroundColor: "#F4F4F4" }} type="text">
              Больница Американ
            </Button>
            <Button style={{ backgroundColor: "#F4F4F4" }} type="text">
              Клиники сети Аджибадем
            </Button>
            <Button style={{ backgroundColor: "#F4F4F4" }} type="text">
              Университетская клиник Бируни
            </Button>
            <Button style={{ backgroundColor: "#F4F4F4" }} type="text">
              Университетская больница Коч
            </Button>
          </div>
        </div>
      </div>

      <div style={{ paddingTop: "200px" }} className="container">
        <Space wrap>
          <p style={{ fontWeight: "600", fontSize: "20px", color: "#000" }}>
            Поиск по:
          </p>
         <div>
           <Button
             className={"sortBtn sortActive"}
             type="primary"
           >
             Hаправлениям
           </Button>
           <Button
             onClick={() => changeStyleButton}
             className={"sortBtn"}
             type="link"
           >
             Tипам
           </Button>
           <Button
             className={"sortBtn"}
             type="link"
           >
             Pейтингу
           </Button>
           <Button
             className={"sortBtn"}
             type="link"
           >
             Бюджету
           </Button>
         </div>
        </Space>
      </div>

      <div style={{ paddingTop: "40px" }} className="container">
        <div className="grid">
          <div className="box1">
            <div className="box1_2">
              <p className={"box1-text"}>
                Пластическая Хирургия
              </p>
            </div>
            <div
              className="box1_3"
            >
              <Button
                className={"box1-btn"}
                type="primary"
              >
                Смотреть еще
              </Button>
            </div>
          </div>
          <div id="_box2" className="box2">
            <p>Нейрохирургия</p>
          </div>
          <div id="_box2_2" className="box2">
            <p>Хирургия Снижен Веса </p>
          </div>
          <div id="_box2_3" className="box2">
            <p>Офтальмология</p>
          </div>
          <div id="_box2_4" className="box2">
            <p>Офтальмология</p>
          </div>
        </div>
      </div>

      <div className="container">
        <div style={{ paddingTop: "30px" }} className="grid">
          <div className="box1">
            <div className="box1_2">
              <p className={"box1-text"}>
                Пластическая Хирургия
              </p>
            </div>
            <div className="box1_3">
              <Button className={"box1-btn"}
                type="primary"
              >
                Смотреть еще
              </Button>
            </div>
          </div>
          <div className="box1">
            <div className="box1_2">
              <p className={"box1-text"}>
                Пластическая Хирургия
              </p>
            </div>
            <div className="box1_3">
              <Button className={"box1-btn"}
                type="primary"
              >
                Смотреть еще
              </Button>
            </div>
          </div>
          <div className="box1">
            <div className="box1_2">
              <p className={"box1-text"}>
                Пластическая Хирургия
              </p>
            </div>
            <div className="box1_3">
              <Button
                className={"box1-btn"}
                type="primary"
              >
                Смотреть еще
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div style={{ paddingTop: "30px" }} className="container">
        <div className="bgDoctor">
          <span>Нейрохирургия</span>
        </div>
      </div>

      <div className="container">
        <p
          className={"deals-title"}
        >
          Лучшие предложения
        </p>
        <div className="grid_2">
          <div>
            <img src={group} />
          </div>
          <div>
            <img src={group2} />
          </div>
          <div>
            <img src={group3} />
          </div>
          <div>
            <img src={group4} />
          </div>
          <div>
            <img src={group5} />
          </div>
          <div>
            <img src={group6} />
          </div>
          <div>
            <img src={group7} />
          </div>
          <div>
            <img src={group8} />
          </div>
        </div>
      </div>

      <div className="container">
        <p className={"deals-title"}>
          Baм понравится
        </p>
        <div className="grid_3">
          <div>
            <img src={group9} />
          </div>
          <div>
            <img src={group10} />
          </div>
          <div>
            <img src={group11} />
          </div>
          <div>
            <img src={group12} />
          </div>
        </div>
        <div style={{ paddingTop: "15px" }} className="grid_4">
          <div>
            <img style={{ width: "615px" }} src={group13} />
          </div>
          <div>
            <img style={{ width: "615px" }} src={group14} />
          </div>
        </div>
      </div>

      <div className="container">
        <p className={"deals-title"}>
          Хиты продаж
        </p>
        <div className="grid_3">
          <div>
            <img src={group9} />
          </div>
          <div>
            <img src={group10} />
          </div>
          <div>
            <img src={group11} />
          </div>
          <div>
            <img src={group12} />
          </div>
        </div>
      </div>

      {/*<div style={{ paddingTop: "10px" }} className="container">*/}
      {/*  <div className="grid_6">*/}
      {/*    <div>*/}
      {/*      <img src={group15} />*/}
      {/*    </div>*/}
      {/*    <div>*/}
      {/*      <img src={group16} />*/}
      {/*    </div>*/}
      {/*    <div>*/}
      {/*      <img src={group17} />*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}

      <div style={{ paddingTop: "10px" }} className="container">
        <div>
          <img className={"group-18"} src={group18} />
        </div>
      </div>

      <div className="container">
        <h3 className={"foreign-title"} >
          Выберите клинику в другой стране дешевле
        </h3>
        <p className={"foreign-subtitle"}>
          Поиск по странам, популярные направления
        </p>
      </div>

      <div className="containerSliderSecond">
        {" "}
        <Slider />
      </div>

      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}
      >
        <div>
          {" "}
          <h3 className={"foreign-title"}>
            Бронируйте медицинскую услугу <br /> со скидкой до - 50%
          </h3>
          <p className={"foreign-subtitle"}>Поиск по бюджетy</p>
        </div>
        <Button className={"foreign-btn-lg"}>
          Посмотреть категории
        </Button>
      </div>

      <div className="containerSliderSecond" style={{ paddingTop: "50px" }}>
        <SliderSecond />
        <Button
          className={"foreign-btn-sm"}
          type={"primary"}
        >
          Посмотреть категории
        </Button>
      </div>

      {/*<div className="container">*/}
      {/*  <h3 style={{ fontSize: "38px", marginBottom: "15px" }}>*/}
      {/*    Спецпредложения*/}
      {/*  </h3>*/}
      {/*  <p style={{ fontSize: "22px", marginTop: "10px" }}>*/}
      {/*    Акции, скидки и специалные предложения для вас.*/}
      {/*  </p>*/}
      {/*</div>*/}
      {/*<div className="containerSliderSecond">*/}
      {/*  <SliderThird />*/}
      {/*</div>*/}

      {/*<div className="bgFooter">*/}
      {/*  <div style={{ paddingTop: "100px" }} className="container">*/}
      {/*    <div className="rowGrid">*/}
      {/*      <div id="textFooterid" style={{ paddingLeft: "15px" }}>*/}
      {/*        <ul style={{ listStyle: "none" }}>*/}
      {/*          <li*/}
      {/*            style={{*/}
      {/*              color: "white",*/}
      {/*              fontSize: "33.25px",*/}
      {/*              fontWeight: "500",*/}
      {/*              lineHeight: "45px",*/}
      {/*            }}*/}
      {/*          >*/}
      {/*            112 Med*/}
      {/*          </li>*/}
      {/*          <li style={{ color: "white", fontSize: "18px" }}>*/}
      {/*            Медицинский <br />*/}
      {/*            маркетплейс*/}
      {/*          </li>*/}
      {/*        </ul>*/}
      {/*      </div>*/}
      {/*      <div>*/}
      {/*        <ul style={{ listStyle: "none" }}>*/}
      {/*          <li*/}
      {/*            style={{*/}
      {/*              color: "white",*/}
      {/*              fontWeight: "500px",*/}
      {/*              fontFamily: "Inter",*/}
      {/*              fontSize: "22px",*/}
      {/*              paddingBottom: "10px",*/}
      {/*            }}*/}
      {/*          >*/}
      {/*            Для пациентов*/}
      {/*          </li>*/}
      {/*          <li*/}
      {/*            style={{*/}
      {/*              color: "#B6D0FF",*/}
      {/*              fontFamily: "Gilroy",*/}
      {/*              paddingBottom: "10px",*/}
      {/*            }}*/}
      {/*          >*/}
      {/*            Врачи{" "}*/}
      {/*          </li>*/}
      {/*          <li*/}
      {/*            style={{*/}
      {/*              color: "#B6D0FF",*/}
      {/*              fontFamily: "Gilroy",*/}
      {/*              paddingBottom: "10px",*/}
      {/*            }}*/}
      {/*          >*/}
      {/*            Больницы*/}
      {/*          </li>*/}
      {/*          <li*/}
      {/*            style={{*/}
      {/*              color: "#B6D0FF",*/}
      {/*              fontFamily: "Gilroy",*/}
      {/*              paddingBottom: "10px",*/}
      {/*            }}*/}
      {/*          >*/}
      {/*            Услуги*/}
      {/*          </li>*/}
      {/*        </ul>*/}
      {/*      </div>*/}
      {/*      <div>*/}
      {/*        <ul style={{ listStyle: "none" }}>*/}
      {/*          <li*/}
      {/*            style={{*/}
      {/*              color: "white",*/}
      {/*              fontWeight: "500px",*/}
      {/*              fontFamily: "Inter",*/}
      {/*              fontSize: "22px",*/}
      {/*              paddingBottom: "10px",*/}
      {/*            }}*/}
      {/*          >*/}
      {/*            O Hас*/}
      {/*          </li>*/}
      {/*          <li*/}
      {/*            style={{*/}
      {/*              color: "#B6D0FF",*/}
      {/*              fontFamily: "Gilroy",*/}
      {/*              paddingBottom: "10px",*/}
      {/*            }}*/}
      {/*          >*/}
      {/*            Условия Эксплуатации*/}
      {/*          </li>*/}
      {/*          <li*/}
      {/*            style={{*/}
      {/*              color: "#B6D0FF",*/}
      {/*              fontFamily: "Gilroy",*/}
      {/*              paddingBottom: "10px",*/}
      {/*            }}*/}
      {/*          >*/}
      {/*            {" "}*/}
      {/*            Политика Oтзывов*/}
      {/*          </li>*/}
      {/*          <li*/}
      {/*            style={{*/}
      {/*              color: "#B6D0FF",*/}
      {/*              fontFamily: "Gilroy",*/}
      {/*              paddingBottom: "10px",*/}
      {/*            }}*/}
      {/*          >*/}
      {/*            О «112 мед».*/}
      {/*          </li>*/}
      {/*          <li*/}
      {/*            style={{*/}
      {/*              color: "#B6D0FF",*/}
      {/*              fontFamily: "Gilroy",*/}
      {/*              paddingBottom: "10px",*/}
      {/*            }}*/}
      {/*          >*/}
      {/*            FAQ*/}
      {/*          </li>*/}
      {/*        </ul>*/}
      {/*      </div>*/}
      {/*      <div>*/}
      {/*        <ul style={{ listStyle: "none" }}>*/}
      {/*          <li*/}
      {/*            style={{*/}
      {/*              color: "white",*/}
      {/*              fontWeight: "500px",*/}
      {/*              fontFamily: "Inter",*/}
      {/*              fontSize: "22px",*/}
      {/*              paddingBottom: "10px",*/}
      {/*            }}*/}
      {/*          >*/}
      {/*            Для партнеров*/}
      {/*          </li>*/}
      {/*          <li*/}
      {/*            style={{*/}
      {/*              color: "#B6D0FF",*/}
      {/*              fontFamily: "Gilroy",*/}
      {/*              paddingBottom: "10px",*/}
      {/*            }}*/}
      {/*          >*/}
      {/*            Добавить больницу*/}
      {/*          </li>*/}
      {/*          <li*/}
      {/*            style={{*/}
      {/*              color: "#B6D0FF",*/}
      {/*              fontFamily: "Gilroy",*/}
      {/*              paddingBottom: "10px",*/}
      {/*            }}*/}
      {/*          >*/}
      {/*            {" "}*/}
      {/*            добавить врача*/}
      {/*          </li>*/}
      {/*          <li*/}
      {/*            style={{*/}
      {/*              color: "#B6D0FF",*/}
      {/*              fontFamily: "Gilroy",*/}
      {/*              paddingBottom: "10px",*/}
      {/*            }}*/}
      {/*          >*/}
      {/*            Войти как партнер*/}
      {/*          </li>*/}
      {/*        </ul>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*    <div style={{ padding: "100px 0" }} className="footerIcons">*/}
      {/*      <div>*/}
      {/*        <img style={{ width: "30.66px" }} src={facebook} />*/}
      {/*      </div>*/}
      {/*      <div>*/}
      {/*        <img style={{ width: "36.66px" }} src={vk} />*/}
      {/*      </div>*/}
      {/*      <div>*/}
      {/*        <img style={{ width: "30.66px" }} src={instagram} />*/}
      {/*      </div>*/}

      {/*      <div style={{ paddingLeft: "30px" }}>*/}
      {/*        <Button*/}
      {/*          style={{*/}
      {/*            fontFamily: "Gilroy",*/}
      {/*            fontSize: "20px",*/}
      {/*            fontWeight: "600",*/}
      {/*          }}*/}
      {/*          className="pad"*/}
      {/*        >*/}
      {/*          КОНТАКТ*/}
      {/*        </Button>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*  <p*/}
      {/*    className="white"*/}
      {/*    style={{*/}
      {/*      textAlign: "center",*/}
      {/*      paddingBottom: "15px",*/}
      {/*      paddingTop: "15px",*/}
      {/*      backgroundColor: "#2A52BA",*/}
      {/*      margin: "0px",*/}
      {/*    }}*/}
      {/*  >*/}
      {/*    © All rights reserved 2023. 112 Med*/}
      {/*  </p>*/}
      {/*</div>*/}
    </>
  );
};

export default HomePage;
