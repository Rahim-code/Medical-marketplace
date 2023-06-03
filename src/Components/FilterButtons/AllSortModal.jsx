import React from 'react';
import {Button, Divider, Form, Input, Modal, Typography} from "antd";
const {Item} = Form
const AllSortModal = ({openSort, onCloseSort}) => {
  const onFinish = (data) => {
    console.log(data)
  }
  return (
    <Modal open={openSort} onCancel={onCloseSort} footer={[]}>
      <Typography className={'login-title'}>All Sorts</Typography>
      <Divider/>
      <Form onFinish={onFinish}>
        <Item name="name">
          <Input placeholder={'Filters'} className={'login-input'} />
        </Item>
        <Button type={'primary'} htmlType={'submit'} block size={'large'}
                style={{display: 'block', marginBottom: '.5rem'}}>Sort</Button>
      </Form>
    </Modal>
  );
};

export default AllSortModal;
