import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
// import "./index.css";
import "./Configs/i18n";
import { store } from "./store/store";
import { Provider } from "react-redux";
import { ConfigProvider } from "antd";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ConfigProvider
          theme={{
            components: {
              Button: {
                colorBgTextHover: "transparent",
              },
              Breadcrumb: {
                colorText: "#5F5F5F",
                fontSize: 18,
                fontFamily: "Gilroy",
                colorBgTextHover: "transparent",
              },
              Select: {
                borderRadius: 0,
                colorBgContainer: "#f9f9f9",
              },
              Input: {
                colorBgContainer: "#f9f9f9",
              },
              Pagination: {
                borderRadius: 16,
                colorPrimary: "#5282FF",
                colorText: "#000",
                fontSize: 19,
              },
              Checkbox:{
                colorBgContainer:"white"
              }
            },
          }}
        >
          <App />
        </ConfigProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
