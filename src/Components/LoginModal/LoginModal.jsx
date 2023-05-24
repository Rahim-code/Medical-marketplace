import React from 'react';
import {Button, ConfigProvider, Divider, Form, Input, Modal, Typography} from "antd";
import './LoginModal.css'

const {Item} = Form
const LoginModal = ({openLogin, onCloseLogin,onOpenRegister}) => {


  const onFinish = (data) => {
    console.log(data)
  }
  return (
    <Modal open={openLogin} onCancel={onCloseLogin} footer={[]}>
      <Typography className={'login-title'}>Войти или <br/>завести аккаунт</Typography>
      <Divider/>
      <Form onFinish={onFinish}>
        <Item name="email">
          <Input placeholder={'электронной почты'} className={'login-input'} />
        </Item>
        <Item
          name="password"
        >
          <Input.Password placeholder={'Пароль'} className={'login-input'} />
        </Item>
        <Button type={'primary'} htmlType={'submit'} block size={'large'}
                style={{display: 'block', marginBottom: '.5rem'}}>Войти</Button>
        <Button type={'link'} htmlType={'submit'} block size={'large'} style={{ marginBottom: '.5rem'}}>Забыли
          пароль?</Button>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: '#56C661',
            },

          }}
        >
          <Button type={'primary'} htmlType={'button'} block size={'large'} style={{margin:'0 !important'}} onClick={onOpenRegister}>Создать новый аккаунт</Button>
        </ConfigProvider>
      </Form>
    </Modal>
  );
};

export default LoginModal;
