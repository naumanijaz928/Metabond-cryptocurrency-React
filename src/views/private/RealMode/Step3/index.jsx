import React from "react";
import "./styles.scss";
import { Input, Tooltip, Checkbox } from "antd";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import hands from "../../../../assets/Images/st1.png";
import hand2 from "../../../../assets/Images/st2.png";
import usflag from "../../../../assets/Images/usflag.png";
import arrows from "../../../../assets/Images/arrows.png";
import selectdropdown from "../../../../assets/Images/selectdropdown.png";
import infoIcon from "../../../../assets/Images/infoicon.png";
import Ethereum_logo from "../../../../assets/Images/Ethereum_logo.png";
import Binance from "../../../../assets/Images/binance_logo.png";
const index = () => {
  return (
    <div className="step3_main">
      <div>
        <h3 className="colorHeading">Minting</h3>
      </div>
      <h6>Minting is the process of creating NFTs on the blockchain. </h6>

      <div className="blockchainSelection mt-4" id="blockchainRow1">
        <div className="card1">
          <div className="imagebox">
            <img src={hands} alt="" height={"100%"} />
          </div>
          <div className="cardContent">
            <h4>Ethereum</h4>
            <p>
              Compatibility with most major marketplaces. Incurs transaction
              fees. Great for high value assets
            </p>
          </div>
        </div>
        <div className="card2">
          <div className="imagebox">
            <img src={hand2} alt="" height={"100%"} />
          </div>
          <div className="cardContent">
            <h4>Polygon</h4>
            <p>
              Compatibility with most major marketplaces. Incurs transaction
              fees. Great for high value assets
            </p>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <h3 className="colorHeading">
          Pre-sale
          <Switch checked={true} color="secondary" />
        </h3>
      </div>

      <div className="fieldData mt-4">
        <div>
          <h5>
            1.Set up a pre-sale price
            <Switch checked={true} color="secondary" />
          </h5>
        </div>

        <div className="fields">
          <div className="no1f">
            <h6>Select the Currency</h6>
            <div className="textfield">
              <Input
                style={{
                  padding: "20px",
                  borderRadius: "8px",
                  outline: "none",
                  border: "none",
                }}
                placeholder="Select the Currency"
                suffix={<img src={selectdropdown} />}

              />
            </div>
          </div>
          <div className="no1f">
            <h6>Enter minting price</h6>
            <div className="textfield">
              <Input
                style={{
                  padding: "20px",
                  borderRadius: "8px",
                  outline: "none",
                  border: "none",
                }}
                placeholder="minting price"
              />
             <img src={infoIcon} /> Put 0 to mint for free. Price does not include gas fees.
            </div>
          </div>
        </div>
      </div>
      <div className="fieldData mt-4">
        <h5>Exchange rate</h5>

        <div className="fields">
          <div className="no1f" id="usaflagField">
            <h6>I have</h6>
            <div className="textfield">
              <Input
                style={{
                  padding: "20px",
                  borderRadius: "8px",
                  outline: "none",
                  border: "none",
                }}
                placeholder="1"
                value={1}
                prefix={<img src={usflag} />}
            
              />
            </div>
          </div>
          <img src={arrows} alt="" srcset="" />
          <div className="no1f">
            <h6>I want</h6>
            <div className="textfield">
              <Input
                style={{
                  padding: "20px",
                  borderRadius: "8px",
                  outline: "none",
                  border: "none",
                }}
                value={0.00039}
                placeholder="minting price"
                prefix={<img src={Ethereum_logo} width={20} />}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="fieldData mt-4">
        <div>
          <h5>
            2. Set up sale limits
            <Switch checked={true} color="secondary" />
          </h5>
        </div>

        <div className="fields mt-4">
          <div className="no1f">
            <h6>Enter mintable NFTs limit</h6>
            <div className="textfield">
              <Input
                style={{
                  padding: "20px",
                  borderRadius: "8px",
                  outline: "none",
                  border: "none",
                }}
                placeholder="Select the Currency"
                suffix={<img src={selectdropdown} />}
              />
              <img src={infoIcon} />
              The maximum number of NFT a single wallet can mint during one
              transaction.
            </div>
          </div>
          <div className="no1f">
            <h6>Enter transaction limit </h6>
            <div className="textfield">
              <Input
                style={{
                  padding: "20px",
                  borderRadius: "8px",
                  outline: "none",
                  border: "none",
                }}
                placeholder="minting price"
              />
              <img src={infoIcon} />
              The maximum number of transactions a single wallet can perform
              during the minting.
            </div>
          </div>
        </div>
      </div>
      <div className="fieldData mt-4">
        <div>
          <h5>
            3. Set up a whitelist
            <Switch checked={true} color="secondary" />
          </h5>
        </div>
        <div style={{color:'#A4A4A4'}}>
          Through a whitelist your audience will get their wallet address
          pre-approved to mint an NFT at some predefined date and time.
        </div>
        <div className="singlefield mt-4">
          <div className="sf">
            <h6>Select a whitelist from the list</h6>
            <div className="textfield">
              <Input
                style={{
                  padding: "20px",
                  borderRadius: "8px",
                  outline: "none",
                  border: "none",
                  
                }}
                suffix={<img src={selectdropdown} />}
                placeholder="Select the Currency"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <h3 className="colorHeading">
          Main public sale
          <Switch checked={true} color="secondary" />
        </h3>
      </div>
      <div className="fieldData mt-4">
        <div>
          <h5>
            1.Set up the main public sale
            <Switch checked={true} color="secondary" />
          </h5>
        </div>

        <div className="fields">
          <div className="no1f">
            <h6>Select the Currency</h6>
            <div className="textfield">
              <Input
                style={{
                  padding: "20px",
                  borderRadius: "8px",
                  outline: "none",
                  border: "none",
                }}
                placeholder="Select the Currency"
                suffix={<img src={selectdropdown} />}
              />
            </div>
          </div>
          <div className="no1f">
            <h6>Enter minting price</h6>
            <div className="textfield">
              <Input
                style={{
                  padding: "20px",
                  borderRadius: "8px",
                  outline: "none",
                  border: "none",
                }}
                placeholder="minting price"
              />
              Put 0 to mint for free. Price does not include gas fees.
            </div>
          </div>
        </div>
      </div>
      <div className="fieldData mt-4">
        <h5>Exchange rate</h5>

        <div className="fields">
          <div className="no1f" id="no1fsingle">
            <h6>I have</h6>
            <div className="textfield">
              <Input
                style={{
                  padding: "20px",
                  borderRadius: "8px",
                  outline: "none",
                  border: "none",
                }}
                placeholder="Select the Currency"
                prefix={<img src={usflag} />}
                
              />
            </div>
          </div>
          <img src={arrows} alt="" />
          <div className="no1f">
            <h6>I want</h6>
            <div className="textfield">
              <Input
                style={{
                  padding: "20px",
                  borderRadius: "8px",
                  outline: "none",
                  border: "none",
                }}
                placeholder="minting price"
                prefix={<img src={Ethereum_logo} width={20} />}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="fieldData mt-4">
        <div>
          <h5>
            2. Set up sale limits
            <Switch checked={true} color="secondary" />
          </h5>
        </div>

        <div className="fields">
          <div className="no1f">
            <h6>Enter mintable NFTs limit</h6>
            <div className="textfield">
              <Input
                style={{
                  padding: "20px",
                  borderRadius: "8px",
                  outline: "none",
                  border: "none",
                }}
                placeholder="Select the Currency"
              />
              <img src={infoIcon} />
              The maximum number of NFT a single wallet can mint during one
              transaction.
            </div>
          </div>
          <div className="no1f">
            <h6>Enter transaction limit </h6>
            <div className="textfield">
              <Input
                style={{
                  padding: "20px",
                  borderRadius: "8px",
                  outline: "none",
                  border: "none",
                }}
                placeholder="minting price"
              />
              <img src={infoIcon} />
              The maximum number of transactions a single wallet can perform
              during the minting.
            </div>
          </div>
        </div>
      </div>
      <div className="fieldData mt-4">
        <div>
          <h5>
            3. Set up a whitelist
            <Switch checked={true} color="secondary" />
          </h5>
        </div>
        <div style={{color:'#A4A4A4'}}>
          Through a whitelist your audience will get their wallet address
          pre-approved to mint an NFT at some predefined date and time.
        </div>
        <div className="fields">
          <div className="no1f">
            <h6>Select a whitelist from the list</h6>
            <div className="textfield ">
              <Input
                style={{
                  padding: "20px",
                  borderRadius: "8px",
                  outline: "none",
                  border: "none",
                }}
                suffix={<img src={selectdropdown} />}
                placeholder="Select the Currency"
              />
            </div>
          </div>
          <div className="no1f">
            <h6>Enter number of pre-approved wallets </h6>
            <div className="textfield">
              <Input
                style={{
                  padding: "20px",
                  borderRadius: "8px",
                  outline: "none",
                  border: "none",
                }}
                placeholder="minting price"
              />
              <img src={infoIcon} />
              The maximum number of spots available in your whitelist.
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="colorHeading">Royalties</h3>
      </div>
      <div className="fieldData mt-4">
        <div>
          <h5>
            Set up royalities
            <Switch checked={true} color="secondary" />
          </h5>
        </div>
        <div>
          Royalties allow creators to earn from NFT sales on secondary market.
          They are calculated as % of sale price.
        </div>
        <div className="singlefield mt-4">
          <div className="sf">
            <h6>Enter royalities</h6>
            <div className="textfield" style={{color:'#A4A4A4'}}>
              <Input
                style={{
                  padding: "20px",
                  borderRadius: "8px",
                  outline: "none",
                  border: "none",
                }}
                placeholder="Royalities"
              />
              <img src={infoIcon} />
              Set up a %. Usually not more than 7%.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
