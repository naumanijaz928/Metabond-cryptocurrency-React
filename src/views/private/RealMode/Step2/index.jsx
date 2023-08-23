import React from "react";
import "./styles.scss";
import { Input, Tooltip, Checkbox } from "antd";

import questionIcon from "../../../../assets/Images/questionmark.png";
import dropdownIcon from "../../../../assets/Images/dropdownicon.png";
import infoIcon from "../../../../assets/Images/infoicon.png";
import Ethreum from "../../../../assets/Images/Ethereum_logo.png";
import Avalance from "../../../../assets/Images/avalanche_logo.png";
import Fantom from "../../../../assets/Images/Fantom_logo.png";
import Binance from "../../../../assets/Images/binance_logo.png";
const index = () => {
  return (
    <div className="step2_main">
      <div className="main-heading">
        <h5>1. Select a name  for your collection</h5>
      </div>
      <h6>Enter your name</h6>
      <div className="fields">
        <div className="textfield">
          <Input
            style={{
              fontSize: '15px',
              padding: "20px",
              borderRadius: "8px",
              outline: "none",
              border: "none",
            }}
            placeholder="Name of collection"
          />
        </div>
        <div className="infoicon">  <img src={infoIcon} /></div>

        <div className="fieldInfo">
          The name your single NFT or NFT collection will have on the blockchain and appear to others. Will your name be famous as Bored Ape Yatch Club?
        </div>
      </div>
      <div className="main-heading mt-5">
        <h5>2. Select a symbol  for your collection</h5>
      </div>
      <h6>Enter your symbol</h6>
      <div className="fields">
        <div className="textfield">
          <Input
            style={{
              fontSize: '15px',
              padding: "20px",
              borderRadius: "8px",
              outline: "none",
              border: "none",
            }}
            placeholder="Symbol of collection"
          />
        </div>
        <div className="infoicon">  <img src={infoIcon} /></div>

        <div className="fieldInfo">
          The name your single NFT or NFT collection will have on the blockchain and appear to others. Will your name be famous as Bored Ape Yatch Club?
        </div>
      </div>

    </div>
  );
};

export default index;
