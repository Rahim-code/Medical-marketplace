import {Button, Divider, Form, Input, Modal, Tabs, Typography} from "antd";
import './RegisterMOdal.css'
import ClientForm from "./ClientForm.jsx";
import DoctorForm from "./DoctorForm.jsx";



const items = [
  {
    key: '1',
    label: `Как клиент`,
    children: <ClientForm/>,
  },
  {
    key: '2',
    label: `Как доктор`,
    children: <DoctorForm/>,
  },
];
const RegisterModal = ({openRegister, onCloseRegister}) => {

  const onChange = (key) => {
    console.log(key);
  };


  return (
    <Modal open={openRegister} onCancel={onCloseRegister} footer={[
      <Button type={'primary'} htmlType={'submit'} block size={'large'}
              style={{display: 'block', marginBottom: '.5rem'}}>Войти</Button>
    ]}>
      <Typography className={'login-title'}>Зарегистрироваться</Typography>
      <Divider/>
      <Tabs
        defaultActiveKey="1"
        type="card"
        tabBarStyle={{ textAlign: 'center' }} // Add this line to modify the tab bar style
        onChange={onChange}
      >
        {items.map((item) => (
          <Tabs.TabPane key={item.key} tab={item.label}>
            {item.children}
          </Tabs.TabPane>
        ))}
      </Tabs>
    </Modal>
  );
};

export default RegisterModal;
