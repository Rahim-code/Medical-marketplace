import React from "react";

import {
  Dropdown,
  Button,
  Space,
  Breadcrumb,
  Col,
  Row,
  Form,
  Input,
} from "antd";
import Vector from "../../assets/Images/Vector.svg";
import USD from "../../assets/Svg/usdIcon.svg";
import EUO from "../../assets/Svg/GroupEuro.svg";
import POU from "../../assets/Svg/GroupPound.svg";
import RUB from "../../assets/Svg/rub.svg";
import azFlag from "../../assets/Svg/azFlag.svg";
import trFlag from "../../assets/Svg/trFlag.svg";
import absFlag from "../../assets/Svg/absFlag.svg";
import mailIcon from "../../assets/Svg/mailIcon.svg";

import russianFlag from "../../assets/Images/russianFlagIcon.png";
import question from "../../assets/Images/question.png";
import heart from "../../assets/Images/heart.png";
import facebook from "../../assets/Images/facebook.png";
import instagram from "../../assets/Images/instagram.png";
import vk from "../../assets/Images/vk.png";

import { ArrowRightOutlined } from "@ant-design/icons";

import "../ContactUs/ContactUs.css";

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

const MyFormItemContext = React.createContext([]);
function toArr(str) {
  return Array.isArray(str) ? str : [str];
}
const MyFormItemGroup = ({ prefix, children }) => {
  const prefixPath = React.useContext(MyFormItemContext);
  const concatPath = React.useMemo(
    () => [...prefixPath, ...toArr(prefix)],
    [prefixPath, prefix]
  );
  return (
    <MyFormItemContext.Provider value={concatPath}>
      {children}
    </MyFormItemContext.Provider>
  );
};
const MyFormItem = ({ name, ...props }) => {
  const prefixPath = React.useContext(MyFormItemContext);
  const concatName =
    name !== undefined ? [...prefixPath, ...toArr(name)] : undefined;
  return <Form.Item name={concatName} {...props} />;
};

const ContactUs = () => {
  const onFinish = (value) => {
    console.log(value);
  };
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
        <div
          style={{
            borderBottom: "1px solid #E7E7E7",
            padding: "20px 0",
            marginBottom: "30px",
          }}
        >
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
                title: "Kонтакт",
              },
            ]}
          />
        </div>
        <div className="ContacUs_Grid">
          <div className="mailContactUs">
            <p
              style={{ color: "#5282FF", fontSize: "20px", margin: "0 0 10px" }}
            >
              Hапишите Hам
            </p>
            <p style={{ color: "#5F5F5F", fontSize: "16px", margin: "0" }}>
              Обновите свою информацию и узнайте, как она используется.
            </p>
            <hr
              style={{
                border: "1px solid #E7E7E7",
                marginTop: "15px",
                marginBottom: "15px",
              }}
            />
            <Form name="form_item_path" layout="vertical" onFinish={onFinish}>
              <MyFormItemGroup prefix={["user"]}>
                <MyFormItemGroup prefix={["name"]}>
                  <Row gutter={16}>
                    <Col span={12}>
                      <MyFormItem name="firstName" label="Имя">
                        <Input className="inputName" placeholder="Имя" />
                      </MyFormItem>
                    </Col>
                    <Col span={12}>
                      <MyFormItem name="lastName" label="Фамилия">
                        <Input
                          placeholder="Фамилия "
                          className="lastInputName"
                        />
                      </MyFormItem>
                    </Col>
                  </Row>

                  <Row>
                    <Col span={24}>
                      <MyFormItem name="email" label="Электронной почты">
                        <Input
                          suffix={<img src={mailIcon} />}
                          className="emailInput"
                        />
                      </MyFormItem>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={24}>
                      <Form.Item name="заметка" label="Заметка">
                        <Input.TextArea style={{ height: "156px" }} />
                      </Form.Item>
                    </Col>
                  </Row>
                </MyFormItemGroup>
              </MyFormItemGroup>

              <Button
                style={{
                  backgroundColor: "#5282FF",
                  color: "white",
                  width: "100%",
                  height: "61px",
                  fontSize: "20px",
                }}
                type="primary"
                htmlType="submit"
              >
                Отправить сообщение
              </Button>
            </Form>
          </div>
          <div
            style={{
              backgroundColor: "#5282FF",
              border: "1px solid #CDCDCD",
              borderRadius: "5px",
              width: "407px",
              height: "365px",
              padding: "20px",
            }}
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

        <div style={{ width: "1198px", height: "409px",backgroundColor:"#FBFBFB",padding:"40px",marginBottom:"20px" }}>
          <iframe
            style={{ border: "none" }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17439.59682519633!2d49.97557041806164!3d40.39300414904405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x403063737e96e061%3A0x5b925e8db0b28d35!2sBaku%20Medical%20Plaza!5e0!3m2!1sen!2saz!4v1682591396345!5m2!1sen!2saz"
            width="1123"
            height="323"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
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

export default ContactUs;
