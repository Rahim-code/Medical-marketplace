import React from 'react';
import "./HomeReviews.css"
import {Button} from "antd";
import { Tabs } from 'antd';
import TabDoctors from "./TabDoctors.jsx";
import TabClinics from "./TabClinics.jsx";


const items = [
  {
    key: '1',
    label: `Клиники`,
    children: <TabClinics/>,
  },
  {
    key: '2',
    label: `Врачи`,
    children: <TabDoctors/>,
  },
];


const HomeReviews = () => {
  const onChange = (key) => {
    console.log(key);
  };

  return (
    <section className={"home-review"}>
      <div className="container">
        <h3 className="home-reviews__title">Отзывы</h3>
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        <Button className={"home-review-btn"} type={"link"}>Все Отзывы</Button>
      </div>
    </section>
  );
};

export default HomeReviews;
