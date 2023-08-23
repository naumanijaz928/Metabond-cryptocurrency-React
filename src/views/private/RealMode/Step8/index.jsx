import React from "react";
import "./styles.scss";
import { Input, Tooltip, Checkbox, Upload, message } from "antd";

import { InboxOutlined } from "@ant-design/icons";
import questionIcon from "../../../../assets/Images/questionmark.png";
import fileupload from "../../../../assets/Images/fileupload.png";
import Ethreum from "../../../../assets/Images/Ethereum_logo.png";
import Avalance from "../../../../assets/Images/avalanche_logo.png";
import Fantom from "../../../../assets/Images/Fantom_logo.png";
import Binance from "../../../../assets/Images/binance_logo.png";
const index = () => {
  const { Dragger } = Upload;
  return (
    <div className="step5_main">
      <div>
        <h3>Would you like to set up royalties for NFT sales</h3>
        <h3>on the secondary market?</h3>
      </div>
      <div className="buttons">
        <button id="yesBtn">Yes</button>
        <button id="noBtn">No</button>
      </div>
      <div className="fields">
        <div className="field1">
          <Input
            style={{
              padding: "20px",
              borderRadius: "8px",
              outline: "none",
              border: "none",
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "24px",
              lineHeight: "28px",
              color: "#A4A4A4",
            }}
            placeholder="Set royalties in % of sale price"
            suffix={
              <Tooltip title="Extra information">
                <img src={questionIcon} />
              </Tooltip>
            }
          />
        </div>
      </div>
      <div className="mt-5 simpletext">
        <span>I will do it later</span>
      </div>
      <div>
        <h3>Would you like to upload legal notes for your NFT?</h3>
        <p>Choose what you plan to do</p>
      </div>
      <div className="buttons">
        <button id="yesBtn">Yes</button>
        <button id="noBtn">No</button>
      </div>
      <div>
        <h3>Terms and conditions of sale</h3>
      </div>
      <div className="upload">
        <div className="fileupload">
          <img src={fileupload} alt="" srcset="" />
          <p>
            Drag and Drop
            <br />
            or
            <br />
            Click here to upload
          </p>
        </div>
      </div>
      <div className="mt-5">
        <h3>Privacy policy</h3>
      </div>
      <div className="upload">
        <div className="fileupload">
          <img src={fileupload} alt="" srcset="" />
          <p>
            Drag and Drop
            <br />
            or
            <br />
            Click here to upload
          </p>
        </div>
      </div>
      <div className="mt-5 simpletext">
        <span>I will do it later</span>
      </div>
      <div>
        <h3>Do you already have a design?</h3>
        <p>choose what you plan to do</p>
      </div>
      <div className="buttons">
        <button id="noBtn">Yes</button>
        <button id="yesBtn">No</button>
      </div>
      {/* <div className="mt-2">
        <h3>Design</h3>
      </div>
      <div className="upload">
        <div className="fileupload">
          <img src={fileupload} alt="" srcset="" />
          <p>
            Drag and Drop
            <br />
            or
            <br />
            Click here to upload
          </p>
        </div>
      </div> */}
      <div className="fields">
        <div className="field1">
          <Input
            style={{
              padding: "20px",
              borderRadius: "8px",
              outline: "none",
              border: "none",
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "24px",
              lineHeight: "28px",
              color: "#A4A4A4",
            }}
            placeholder="Book a call with designer"
            suffix={
              <Tooltip title="Extra information">
                <img src={questionIcon} />
              </Tooltip>
            }
          />
        </div>
      </div>
      <div className="mt-5 simpletext">
        <span>I will do it later</span>
      </div>
      <div>
        <h3>Where you would you like to deploy your NFT?</h3>
        <p>Choose what you plan to do</p>
      </div>

      <div className="deployCards">
        <div className="card" id="card1">
          <div className="imagebox">
            <img src={Ethreum} alt="" />
          </div>
          <div className="cardContent">
            <h4>Ethereum</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div className="card" id="card2">
          <div className="imagebox">
            <img src={Avalance} alt="" />
          </div>
          <div className="cardContent">
            <h4>Avalanche</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div className="card" id="card3">
          <div className="imagebox">
            <img src={Fantom} alt="" />
          </div>
          <div className="cardContent">
            <h4>Fantom</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div className="card" id="card4">
          <div className="imagebox">
            <img src={Binance} alt="" />
          </div>
          <div className="cardContent">
            <h4>Binance</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>
      <div className="mt-5 simpletext">
        <span>I will do it later</span>
      </div>
      <div>
        <h3>Register to the platform to deploy your NFT!</h3>
      </div>
      <div id="registerBtn" className="mb-5">
        <button className="btn btn-outline registerBtn">Register now</button>
      </div>
    </div>
  );
};

export default index;
