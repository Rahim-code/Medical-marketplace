import {Button, Dropdown, Space} from "antd";
import RUB from "../../assets/Svg/rub.svg";
import russianFlag from "../../assets/Images/russianFlagIcon.png";
import question from "../../assets/Images/question.png";
import heart from "../../assets/Images/heart.png";
import {ArrowRightOutlined} from "@ant-design/icons";
import React from "react";
import facebook from "../../assets/Images/facebook.png";
import vk from "../../assets/Images/vk.png";
import instagram from "../../assets/Images/instagram.png";
import './MobileMenu.css'

const MobileMenu = ({menuProps, showMenu, menuPropsFlag}) => {
  console.log(showMenu)
  return (
    <div className={`menu ${showMenu && 'show'}`}>
      <div style={{width:"100%"}}>
        <div className={"divider"}></div>
        <ul className={"menuList"}>
          <div className={"menuListItem"} style={{ marginLeft:'-15px'}}>
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
          </div>
          <li className={"menuListItem"}>
            <div className="question">
              <img src={question} />
            </div>
            <div>
              <p>связаться с нами </p>
            </div>
          </li>
          <li className={"menuListItem"}>
            <img
              style={{ objectFit: "cover !important" }}
              className="heart"
              src={heart}

            />
            <p>избранная</p>
          </li>
        </ul>
      </div>

      <div className={"menuFooter"}>
        <div  className="footerIcons reverse">
          <div style={{display:"flex", gap: "10px"}}>
            <li><img style={{ width: "30.66px"}} src={facebook} /></li>
            <li><img style={{ width: "36.66px" }} src={vk} /></li>
            <li><img style={{ width: "30.66px" }} src={instagram} /></li>
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

        <p
          className="white"
          style={{
            textAlign: "center",
            paddingBottom: "30px",
            margin: "0px",
          }}
        >
          © All rights reserved 2023. 112 Med
        </p>
      </div>
    </div>
  );
};

export default MobileMenu;
