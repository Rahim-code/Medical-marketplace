import React from 'react';
import {Breadcrumb} from "antd";

const BreadCrumbs = () => {
  return (
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
              href: "#",
            },
            {
              title: "Клиники",
              href: "#"
            },
            {
              title: "Турция",
              href: "#"
            },
            {
              title: "Результаты поиска",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default BreadCrumbs;
