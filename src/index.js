import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Item from "./Components/Item/Item.jsx";
import Description from "./Components/Description/Description.jsx";
import Buy from "./Components/Description/Buy.jsx";
import Buynow from "./Components/Description/Buynow.jsx";
import Delivery from "./Components/Description/Delivery.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />

    <div class="havic">
      {" "}
      Account
      <span class="first-span">/ Gaming</span>
      <span class="second-span"> / Havic G-92 Gamepad</span>
    </div>
    <Item></Item>
    <div>
      <Description></Description>
    </div>
    <div>
      <Buy></Buy>
    </div>
    <div>
      <Buynow></Buynow>
    </div>
    <div>
      <Delivery></Delivery>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
