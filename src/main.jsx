import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import "./Configs/i18n";
import { store } from "./store/store";
import { Provider } from "react-redux";
import { ConfigProvider } from "antd";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ConfigProvider
          theme={
            {
              // token: {
              //   colorBgContainer: "#5282FF",
              //   lineWidth:30,
              //   lineHeight:61
              // },
              // components:{
              //   Button:{
              //     colorPrimary:"#00b98b",
              //     colorBgContainer:"blue",
              //     colorBorderBg:"red"
              //   }
              // }
            }
          }
        >
          <App />
        </ConfigProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
