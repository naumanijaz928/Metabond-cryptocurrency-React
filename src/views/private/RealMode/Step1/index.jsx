import React from "react";
import "./styles.scss";
import { Input, Tooltip } from "antd";
import { InfoCircleOutlined, UserOutlined } from "@ant-design/icons";
import questionIcon from "../../../../assets/Images/questionmark.png";
import Ethreum from "../../../../assets/Images/Ethereum_logo.png";
import Polygone from "../../../../assets/Images/polygone_logo.png";
import Avalance from "../../../../assets/Images/avalanche_logo.png";
import Fantom from "../../../../assets/Images/Fantom_logo.png";
import Optimisim from "../../../../assets/Images/Optimism.png";
import Binance from "../../../../assets/Images/binance_logo.png";
const index = () => {
  return (
    <div className="step1_main">

      <div className="main-heading">
        <h5>1. Select a blockchain</h5>
      </div>
      <div className="blockchainSelection row" id="blockchainRow1">
        <div className="card1 col-sm-12 col-md-4 col-lg-4">
          <div className="imagebox">
            <img src={Ethreum} alt="" height={'100%'} />
          </div>
          <div className="cardContent">
            <h4>Ethereum</h4>
            <p>Compatibility with most major marketplaces. Incurs transaction fees. Great for high value assets</p>
          </div>
        </div>
        <div className="card2 col-sm-12 col-md-4 col-lg-4">
          <div className="imagebox">
            <img src={Polygone} alt="" height={'100%'} />
          </div>
          <div className="cardContent">
            <h4>Polygon</h4>
            <p>Compatibility with most major marketplaces. Incurs transaction fees. Great for high value assets</p>
          </div>
        </div>
        <div className="card3 col-sm-12 col-md-4 col-lg-4">
          <div className="imagebox">
            <img src={Fantom} alt="" height={'100%'} />
          </div>
          <div className="cardContent">
            <h4>Fantom</h4>
            <p>Compatibility with most major marketplaces. Incurs transaction fees. Great for high value assets</p>
          </div>
        </div>
      </div>
      <div className="blockchainSelection mt-4" id="blockchainRow2">
        <div className="card1 col-sm-12 col-md-4 col-lg-4">
          <div className="imagebox">
            <img src={Avalance} alt="" height={'100%'} />
          </div>
          <div className="cardContent">
            <h4>Avalanche</h4>
            <p>Compatibility with most major marketplaces. Incurs transaction fees. Great for high value assets</p>
          </div>
        </div>
        <div className="card2 col-sm-12 col-md-4 col-lg-4">
          <div className="imagebox">
            <img src={Optimisim} alt="" height={'100%'} />
          </div>
          <div className="cardContent">
            <h4>Optimism</h4>
            <p>Compatibility with most major marketplaces. Incurs transaction fees. Great for high value assets</p>
          </div>
        </div>
        <div className="card3 col-sm-12 col-md-4 col-lg-4">
          <div className="imagebox">
            <img src={Binance} alt="" height={'100%'} />
          </div>
          <div className="cardContent">
            <h4>Binance</h4>
            <p>Compatibility with most major marketplaces. Incurs transaction fees. Great for high value assets</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
