import React from "react";
import "./styles.scss";
import { Input, Tooltip, Checkbox, Upload, message } from "antd";
import infoIcon from "../../../../assets/Images/infoicon.png";
import Switch from "@mui/material/Switch";
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
  
      <div className="fieldData mt-4">
        <div>
          <h5>
          Metadata set-up

            <Switch checked={true} color="secondary" />
          </h5>
        </div>
        <div style={{color:'#A4A4A4'}}>
        The URL where your metadata are stored. It’s the link where everyone can find the json file of NFTs from your collection.
        </div>
        <div className="singlefield mt-4 w-50">
          <div className="sf">
            <h6>Enter number of NFT you want to reserve </h6>
            <div className="textfield" >
              <Input
                style={{
                  width:'500px',
                  padding: "20px",
                  borderRadius: "8px",
                  outline: "none",
                  border: "none",
                }}
                placeholder="URL "
              />
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
