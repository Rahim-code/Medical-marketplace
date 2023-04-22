import React from "react";
import Vector from "../../assets/Images/Vector.svg";
import USD from "../../assets/Svg/usdIcon.svg";
import EUO from "../../assets/Svg/GroupEuro.svg";
import POU from "../../assets/Svg/GroupPound.svg";
import RUB from "../../assets/Svg/rub.svg";
import russianFlag from "../../assets/Images/russianFlagIcon.png";
import question from "../../assets/Images/question.png";
import heart from "../../assets/Images/heart.png";
import peopleIcon from "../../assets/Svg/peopleIcon.svg";
import favDoctors from "../../assets/Svg/favDoctors.svg";
import favHospital from "../../assets/Svg/favHospital.svg";
import messageDoctor from "../../assets/Svg/messageDoc.svg";
import messageHospital from "../../assets/Svg/messageHos.svg";
import help112 from "../../assets/Svg/ambulans.svg";
import azFlag from "../../assets/Svg/azFlag.svg";
import trFlag from "../../assets/Svg/trFlag.svg";
import absFlag from "../../assets/Svg/absFlag.svg";
import facebook from "../../assets/Images/facebook.png";
import instagram from "../../assets/Images/instagram.png";
import vk from "../../assets/Images/vk.png";
import mailIcon from "../../assets/Svg/mailIcon.svg";
import passwordIcon from "../../assets/Svg/passwordIcon.svg";

import "../Profile/Profile.css";

import {
  Button,
  Dropdown,
  Space,
  Breadcrumb,
  Col,
  Row,
  Form,
  Input,
  DatePicker,
  Select,
} from "antd";

import { ArrowRightOutlined } from "@ant-design/icons";

const handleMenuClick = (e) => {
  console.log("click", e);
};

const handleMenuFlagClick = (e) => {
  console.log("click", e);
};
const onChange = (date, dateString) => {
  console.log(date, dateString);
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

const handleChange = (value) => {
  console.log(`selected ${value}`);
};

const Profile = () => {
  const onFinish = (value) => {
    console.log(value);
  };

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
                title: "Профиль",
              },
            ]}
          />
        </div>
      </div>

      <div style={{ paddingBottom: "50px" }} className="container">
        <div className="displayGrid">
          <div style={{ height: "320px" }} className="menuNav">
            <ul>
              <li
                style={{
                  listStyle: "none",
                  padding: "10px 20px",
                  fontSize: "16px !important",
                  fontWeight: "500 !important",
                  color: "#2A353D !important",
                }}
              >
                <img style={{ paddingRight: "27px" }} src={peopleIcon} />
                Личная информация
              </li>
              <li
                style={{
                  listStyle: "none",
                  padding: "10px 20px",
                  fontSize: "16px !important",
                  fontWeight: "500 !important",
                  color: "#2A353D !important",
                }}
              >
                <img style={{ paddingRight: "20px" }} src={favDoctors} />
                Мои любимые врачи
              </li>
              <li
                style={{
                  listStyle: "none",
                  padding: "10px 20px",
                  fontSize: "16px !important",
                  fontWeight: "500 !important",
                  color: "#2A353D !important",
                }}
              >
                <img style={{ paddingRight: "20px" }} src={favHospital} />
                Мои любимые больницы
              </li>
              <li
                style={{
                  listStyle: "none",
                  padding: "10px 20px",
                  fontSize: "16px !important",
                  fontWeight: "500 !important",
                  color: "#2A353D !important",
                }}
              >
                <img style={{ paddingRight: "27px" }} src={messageDoctor} />
                Мои отзывы о врачах
              </li>
              <li
                style={{
                  listStyle: "none",
                  padding: "10px 20px",
                  fontSize: "16px !important",
                  fontWeight: "500 !important",
                  color: "#2A353D !important",
                }}
              >
                <img style={{ paddingRight: "27px" }} src={messageHospital} />
                Мой обзор больниц
              </li>
              <li
                style={{
                  listStyle: "none",
                  padding: "10px 20px",
                  fontSize: "16px !important",
                  fontWeight: "500 !important",
                  color: "#2A353D !important",
                }}
              >
                <img style={{ paddingRight: "27px" }} src={help112} />
                Помощь
              </li>
            </ul>
          </div>

          <div className="userForm" style={{ padding: "40px" }}>
            <div
              style={{
                borderBottom: "1px solid #E7E7E7",
                paddingBottom: "30px",
              }}
            >
              <p
                style={{
                  color: "#5282FF",
                  fontSize: "20px",
                  fontWeight: "500",
                }}
              >
                Личная информация
              </p>
              <p
                style={{
                  color: "#5F5F5F",
                  fontSize: "16px",
                  fontWeight: "500",
                  paddingTop: "10px",
                }}
              >
                Обновите свою информацию и узнайте, как она используется.
              </p>
            </div>

            <div>
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
                    <Row gutter={16}>
                      <Col span={12}>
                        <MyFormItem name="date" label="Дата рождения">
                          <DatePicker
                            className="datePicker"
                            onChange={onChange}
                          />
                        </MyFormItem>
                      </Col>
                      <Col span={12}>
                        <MyFormItem name="number" label="Номер телефона">
                          <Row gutter={8}>
                            <Col span={8}>
                              <Select
                                defaultValue="+994"
                                onChange={handleChange}
                                options={[
                                  {
                                    value: "55",
                                    label: "055",
                                  },
                                  {
                                    value: "lucy",
                                    label: "050",
                                  },
                                  {
                                    value: "Yiminghe",
                                    label: "070",
                                  },
                                  {
                                    value: "disabled",
                                    label: "099",
                                  },
                                ]}
                              />
                            </Col>

                            <Col span={16}>
                              <Input type="tel" className="lastInputName" />
                            </Col>
                          </Row>
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
                      <Col span={24}>
                        <MyFormItem name="password" label="Текущий пароль">
                          <Input
                            placeholder=""
                            className="passwordInput"
                            type="password"
                            suffix={<img src={passwordIcon} />}
                          />
                        </MyFormItem>
                      </Col>
                      <Col span={24}>
                        <MyFormItem name="newpassword" label="Новый пароль">
                          <Input
                            placeholder=""
                            className="passwordInput"
                            type="password"
                            suffix={<img src={passwordIcon} />}
                          />
                          <p style={{ fontSize: "12.98px", color: "#5F5F5F" }}>
                            Ваш пароль должен состоять минимум из 7 символов и
                            максимум из 64 символов и содержать цифры.
                          </p>
                        </MyFormItem>
                      </Col>
                      <Col span={24}>
                        <MyFormItem name="newpassword" label="Новый пароль">
                          <Input
                            placeholder=""
                            className="passwordInput"
                            type="password"
                            suffix={<img src={passwordIcon} />}
                          />
                        </MyFormItem>
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
                  Oбновлять
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div className="bgFooter">
          <div style={{ paddingTop: "100px" }} className="container">
            <div className="rowGrid">
              {/* <div>
              <img style={{ width: "82px" }} src={Vector} />
                    </div> */}
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
    </>
  );
};

export default Profile;
