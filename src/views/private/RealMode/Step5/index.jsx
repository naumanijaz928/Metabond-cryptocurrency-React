import React from "react";
import "./styles.scss";
import { Input, Tooltip, Checkbox, Upload, message } from "antd";

import { InboxOutlined } from "@ant-design/icons";
import questionIcon from "../../../../assets/Images/questionmark.png";
import fileupload from "../../../../assets/Images/upload.png";
import Ethreum from "../../../../assets/Images/Ethereum_logo.png";
import Avalance from "../../../../assets/Images/avalanche_logo.png";
import Fantom from "../../../../assets/Images/Fantom_logo.png";
import Binance from "../../../../assets/Images/binance_logo.png";
// import fileupload from "../../../../assets/Images/fileupload.png";
const index = () => {
  const { Dragger } = Upload;
  return (
    <div className="step5_main">
      <div>
        <h3>Drag and drop your design here</h3>
      </div>
      <div className="upload ">
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

      <div className="btnn text-center" style={{textAlign:'center'}}>
        or
        <br />
        <button className="btn btn-outline me-2 genBtn">Use Generator</button>
        <br />
        <p style={{color:'#A4A4A4' ,width:'400px',textAlign:'center',margin:'auto'}}>
        I have some designed traits and I want to combine them with a random generator to get a generative NFT collection
        </p>
      </div>
    </div>
  );
};

export default index;
