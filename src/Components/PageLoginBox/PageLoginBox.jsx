import React, {useState} from 'react';
import {Button} from "antd";
import LoginModal from "../LoginModal/index.js";
import RegisterModal from "../RegisterModal/index.js";
import './PageLoginBox.css'

const PageLoginBox = () => {
  const [openLogin, setOpenLogin] = useState(false)
  const [openRegister, setOpenRegister] = useState(false)

  const onOpenLogin = () => {
    setOpenLogin(true)
  }
  const onOpenRegister = () => {
    setOpenRegister(true)
  }

  const onCloseLogin = () =>{
    setOpenLogin(false)
  }

  const onCloseRegister= () =>{
    setOpenRegister(false)
  }
  return (
    <>
      <div className={"hospitals__login-wrapper"}>
        <a href="#" className="hospitals__login-title">Получите доступ к скидкам на услуги Войти в</a>
        <p className="hospitals__login-desc">(только для зарегистрированных пользователей)</p>
        <div className="hospitals__login-btns">
          <Button className="hospitals__login-btn" type={"primary"} onClick={onOpenLogin}>Войти в аккаyнт </Button>
          <Button className="hospitals__reg-btn" type={"link"} onClick={onOpenRegister}>Зарегистрироваться</Button>
        </div>
      </div>
      <LoginModal openLogin={openLogin} onCloseLogin={onCloseLogin}/>
      <RegisterModal openRegister={openRegister} onCloseRegister={onCloseRegister}/>
    </>
  );
};

export default PageLoginBox;
