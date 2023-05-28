import React from 'react';
import {Divider, Form, Input, Select} from "antd";
import './RegisterMOdal.css'


const {Item} = Form
const DoctorForm = () => {
  const onFinish = (data) => {
    console.log(data)
  }
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
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
      <Divider/>
      <Item style={{
        marginBottom: 0,
      }}>
        <Item name="position" style={{
          display: 'inline-block',
          width: 'calc(50% - 0.5rem)',
        }}>
          <Input placeholder={'Position'} className={'input'}/>
        </Item>
        <Item name="hospital" style={{
          display: 'inline-block',
          width: 'calc(50% - 0.5rem)',
          margin: '0 0 0 1rem',
        }}>
          <Input placeholder={'Position'} className={'input'}/>
        </Item>
      </Item>
      <Item name="category">
        <Select
          defaultValue="lucy"
          className={'select'}
          onChange={handleChange}
          options={[
            { value: 'jack', label: 'Jack' },
            { value: 'lucy', label: 'Lucy' },
            { value: 'Yiminghe', label: 'yiminghe' },
            { value: 'disabled', label: 'Disabled', disabled: true },
          ]}
        />
      </Item>
    </Form>
  );
};

export default DoctorForm;
