import React from "react";
import "./styles.scss";
import { Input, Tooltip, Checkbox, Upload, message } from "antd";

import infoIcon from "../../../../assets/Images/infoicon.png";
import Switch from "@mui/material/Switch";
import { InboxOutlined } from "@ant-design/icons";
import leftarrow from "../../../../assets/Images/leftarrow.png";
import rightarrow from "../../../../assets/Images/rightarrow.png";
import questionIcon from "../../../../assets/Images/questionmark.png";
import fileupload from "../../../../assets/Images/fileupload.png";
import Ethreum from "../../../../assets/Images/Ethereum_logo.png";
import Avalance from "../../../../assets/Images/avalanche_logo.png";
import Fantom from "../../../../assets/Images/Fantom_logo.png";
import Binance from "../../../../assets/Images/binance_logo.png";
const index = () => {
  const { TextArea } = Input;
  const { Dragger } = Upload;
  return (
    <div className="step4_main">
      <div>
        <h4>Reservation</h4>
      </div>
      <div className="fieldData mt-4">
        <div>
          <h5>
            Set up reservations
            <Switch checked={true} color="secondary" />
          </h5>
        </div>
        <div style={{ color: "#A4A4A4" }}>
          Reservations allow you to reserve some NFT from your collection to you
          and your team. It’s a great way to reward your team for the hard work.
        </div>
        <div className="singlefield mt-4">
          <div className="sf">
            <h6 style={{ color: "#626262" }}>
              Enter number of NFT you want to reserve{" "}
            </h6>
            <div className="textfield" style={{ color: "#A4A4A4" }}>
              <Input
                style={{
                  padding: "20px",
                  borderRadius: "8px",
                  outline: "none",
                  border: "none",
                }}
                placeholder="Number of NFT you want to reserve "
              />
              <img src={infoIcon} />
              It can’t be higher than the collection size. The selected number
              of random NFTs will be reserved and sent to your wallet.
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <h4>Legal Notes</h4>
      </div>
      <div className="fieldData mt-4">
        <div>
          <h5>
            Set up legal notes
            <Switch checked={true} color="secondary" />
          </h5>
        </div>
        <div style={{ color: "#A4A4A4" }}>
          You can copy and past some legal notes here. They will be saved
          forever in the smart contract of your NFT collection.
        </div>
        <div
          className="d-flex mt-4 justify-content-between align-middle"
          style={{ alignItems: "center" }}
        >
          <div>
            <img src={leftarrow} alt="" />
          </div>
          <div
            className="cardnotes bg-white"
            style={{ width: '30%', padding: "15px", borderRadius: "10px" }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s...
          </div>
          <div
            className="cardnotes bg-white"
            style={{ width: '30%', padding: "15px", borderRadius: "10px" }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s...
          </div>
          <div
            className="cardnotes bg-white"
            style={{ width: '30%', padding: "15px", borderRadius: "10px" }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s...
          </div>
          <div>
            <img src={rightarrow} alt="" />
          </div>
        </div>
        <div className="singlefield mt-4">
          <div className="sf">
            <h6>Write legal notes here</h6>
            <div className="textfield">
              <TextArea rows={4} placeholder="Write legal notes here …" maxLength={100} />
              {/* <Input
                style={{
                  padding: "20px",
                  borderRadius: "8px",
                  outline: "none",
                  border: "none",
                }}
                placeholder="Write legal notes here … "
              /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
