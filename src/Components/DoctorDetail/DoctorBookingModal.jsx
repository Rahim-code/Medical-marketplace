import React from 'react';
import {Button, DatePicker, Divider, Form, Input, Modal, Select, Typography, TimePicker} from "antd";
const { RangePicker } = DatePicker;

const {Item} = Form
const DoctorBookingModal = ({onCloseBookingModal, openBooking}) => {
  const onFinish = (data) => {
    console.log(data)
  }

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <Modal open={openBooking} onCancel={onCloseBookingModal} footer={[]}>
      <Typography className={'login-title'}>Войти или <br/>завести аккаунт</Typography>
      <Divider/>
      <Form onFinish={onFinish}>
        <Item name="name">
          <Input placeholder={'Полное имя'} className={'booking-input'} />
        </Item>
        <Item
          name="phone"
        >
          <Input placeholder={'(+994)'} className={'booking-input'} />
        </Item>
        <Item name="category">
          <Select
            // defaultValue="lucy"
            placeholder={"категория"}
            className={'booking-input'}
            onChange={handleChange}
            options={[
              { value: 'jack', label: 'Jack' },
              { value: 'lucy', label: 'Lucy' },
              { value: 'Yiminghe', label: 'yiminghe' },
              { value: 'disabled', label: 'Disabled', disabled: true },
            ]}
          />
        </Item>
        <Item name={"date"}
        >
          <TimePicker className={"booking-modal__time-input"}/>
          <DatePicker className={"booking-modal__date-input"}/>
        </Item>
        <Button type={'primary'} htmlType={'submit'} block size={'large'} style={{backgroundColor:"#5282ff",display: 'block', marginBottom: '.5rem'}}>бронировать</Button>
      </Form>
    </Modal>
  )
};

export default DoctorBookingModal;
