import React from 'react';
import {Button, Divider, Form, Input, Modal, Typography} from "antd";
const {Item} = Form
const AllFiltersModal = ({openFilters,onCloseFilter}) => {
  const onFinish = (data) => {
    console.log(data)
  }
  return (
    <Modal open={openFilters} onCancel={onCloseFilter} footer={[]}>
      <Typography className={'login-title'}>All Filters</Typography>
      <Divider/>
      <Form onFinish={onFinish}>
        <Item name="name">
          <Input placeholder={'Filters'} className={'login-input'} />
        </Item>
        <Button type={'primary'} htmlType={'submit'} block size={'large'}
                style={{display: 'block', marginBottom: '.5rem'}}>Filter</Button>
      </Form>
    </Modal>
  );
};

export default AllFiltersModal;
