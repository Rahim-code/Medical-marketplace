import React from 'react';
import {Form, Input} from "antd";
import './RegisterMOdal.css'


const {Item} = Form
const ClientForm = () => {
  const onFinish = (data) => {
    console.log(data)
  }
  return (
    <Form onFinish={onFinish}>
      <Item style={{
        marginBottom: 0,
      }}>
        <Item name="name" style={{
          display: 'inline-block',
          width: 'calc(50% - 0.5rem)',
        }}>
          <Input placeholder={'First Name'} className={'input'}/>
        </Item>
        <Item name="name" style={{
          display: 'inline-block',
          width: 'calc(50% - 0.5rem)',
          margin: '0 0 0 1rem',
        }}>
          <Input placeholder={'Last Name'} className={'input'}/>
        </Item>
      </Item>
      <Item name="email">
        <Input placeholder={'Mobile number or email'} className={'input'}/>
      </Item>
      <Item
        name="password"
      >
        <Input.Password placeholder={'Пароль'} className={'input'}/>
      </Item>
    </Form>
  );
};

export default ClientForm;
