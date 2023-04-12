import React, { useState } from "react";
import { Button } from "antd";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";

import vector from "../assets/Images/vector.png";
import vectorWhite from "../assets/Images/vector_white.png";
import user from "../assets/Images/user.png";
import russianFlag from "../assets/Images/russianFlagIcon.png";
import rublicon from "../assets/Images/rublicon.png";
import question from "../assets/Images/question.png";
import heart from "../assets/Images/heart.png";
import facebook from "../assets/Images/facebook.png";
import instagram from "../assets/Images/instagram.png";
import vk from "../assets/Images/vk.png";

import "../index.css";

const MobileLogin = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="bg">
        <div style={{ paddingTop: "10px" }} className="container">
          <div id="topPanel">
            <img src={vectorWhite} />
            <div id="content">
              <h1 className="white">112 Med</h1>
              <h2 className="white">
                Медицинский <br /> маркетплейс
              </h2>
            </div>
            <img className="user" src={user} />
            {isOpen ? (
              <CloseOutlined onClick={toggleMenu} className="white" />
            ) : (
              <MenuOutlined onClick={toggleMenu} className="white" />
            )}
          </div>
        </div>
      </div>
      <div className="bgUl">
        <div className="container">
          {isOpen && (
            <div style={{ paddingBottom: "8vh" }}>
              <img src={vector} alt="medicalMarketPlace" id="vector" />
              <ul className="ul">
                <li className="li" id="d-flex">
                  <div id="d-flex">
                    <div id="whiteCircle">
                      <img id="rublicon" src={rublicon} />
                    </div>
                    <p className="white">RUB</p>
                  </div>
                  <div id="d-flex">
                    <img id="langFlag" src={russianFlag} />
                    <p className="white">RU</p>
                  </div>
                </li>
                <li className="li">
                  <div id="d-flex">
                    <div id="whiteCircle">
                      <img style={{ width: "14px" }} src={question} />
                    </div>
                    <p className="white" id="up">
                      связаться с нами
                    </p>
                  </div>
                </li>
                <li className="li">
                  <div id="d-flex">
                    <img style={{ width: "45px" }} src={heart} />
                    <p className="white" id="up">
                      избранная
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          )}

          {isOpen && (
            <div className="ft">
              <div className="container">
                <div className="footer">
                  <div style={{paddingRight:"10px"}}>
                    {" "}
                    <Button
                      style={{
                        fontFamily: "Gilroy",
                        fontSize: "14.46px",
                        fontWeight: "600",
                      }}
                      className="contactBtn"
                    >
                      КОНТАКТ
                    </Button>
                  </div>
                  <img style={{ width: "24px" }} src={facebook} />
                  <img style={{ width: "30px" }} src={vk} />
                  <img style={{ width: "24px" }} src={instagram} />
                </div>
                <p
                  className="white"
                  style={{ textAlign: "center", paddingBottom: "30px" }}
                >
                  © All rights reserved 2023. 112 Med
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MobileLogin;
