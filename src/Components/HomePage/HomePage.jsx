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
import LoginModal from "../LoginModal/index.js";
import RegisterModal from "../RegisterModal/index.js";
import Header from "../Header/index.js";
import Footer from "../Footer/index.js";
import DiscoundSlider from "./DiscoundSlider.jsx";
import TopClinic from "./TopClinic/index.js";
import DoctorSearch from "./DoctorSearch/index.js";
import HomeReviews from "./HomeReviews/index.js";


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
  const [openLogin, setOpenLogin] = useState(false)
  const [openRegister, setOpenRegister] = useState(false)

  const handleMenu = () =>{
    setShowMenu(!showMenu)
  }

  const onOpenLogin = () => {
    setOpenLogin(true)
  }

  const onCloseLogin = () =>{
    setOpenLogin(false)
  }

  const onCloseRegister= () =>{
    setOpenRegister(false)
  }

  const onOpenRegister = () => {
    setOpenRegister(true)
    setOpenLogin(false)
  }


  return (
    <>
      <Header/>
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
      <DiscoundSlider/>

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

      <div className="container">
        <h3 className={"foreign-title"}>
          Спецпредложения
        </h3>
        <p className={"foreign-subtitle"}>
          Акции, скидки и специалные предложения для вас.
        </p>
      </div>
      <div className="containerSliderSecond">
        <SliderThird />
      </div>

      <TopClinic/>
      <DoctorSearch/>
      <HomeReviews/>

      <Footer/>

      <LoginModal openLogin={openLogin} onCloseLogin={onCloseLogin} onOpenRegister={onOpenRegister}/>
      <RegisterModal openRegister={openRegister} onCloseRegister={onCloseRegister}/>
    </>
  );
};

export default HomePage;
