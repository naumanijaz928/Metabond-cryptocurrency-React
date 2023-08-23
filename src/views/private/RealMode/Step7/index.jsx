import React from "react";
import "./styles.scss";
import { Input, Tooltip, Checkbox, Upload, message } from "antd";

import { InboxOutlined } from "@ant-design/icons";
import c1 from "../../../../assets/Images/c1.png";
import c2 from "../../../../assets/Images/c2.png";
import c3 from "../../../../assets/Images/c3.png";
import c4 from "../../../../assets/Images/c4.png";
import Fantom from "../../../../assets/Images/Fantom_logo.png";
import Binance from "../../../../assets/Images/binance_logo.png";
const index = () => {
  const { Dragger } = Upload;
  return (
    <div className="step7_main">
      <div className="mt-5">
        <h4>Connect a wallet</h4>
      </div>

      <div className="btnn mt-4">
        <button className="btn btn-outline me-2 genBtn">
          Connect a wallet
        </button>
      </div>
      <h5 className="colorHeading mt-5">
        Don’t have a wallet address? Set up one with the following services!
      </h5>
      <div className="mt-2">
        <div className="cards">
          <img src={c1} alt="" />
          <img src={c2} alt="" />
          <img src={c3} alt="" />
          <img src={c4} alt="" />
        </div>
      </div>
    </div>
  );
};

export default index;
