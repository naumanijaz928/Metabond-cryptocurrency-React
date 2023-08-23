import React, { useState } from "react";
import "./styles.scss";
// import LeftScreen from "../../../assets/Images/homeImage.png";
import icon1 from "../../../assets/Images/icon1.png";
import icon2 from "../../../assets/Images/icon2.png";
import icon3 from "../../../assets/Images/icon3.png";
import { Modal } from "antd";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="container mt-3">
      <section className="section1">
        <div className="left">
          {/* <img src={LeftScreen} alt="image" className="img-fluid" /> */}
        </div>
        <div className="right">
          <h1 className="rightheading"> Revamp best sellers as NFT</h1>
          <div className="reading">
            <p>
              Best sellers are the products that made history for your brand at
              one time or even today. They were fashionable and eye-catching
              enough to win over entire generations, and their apt style
              probably set the stage for new products to be created.
            </p>
            <p>
              "Fashion passes, Style remains", someone used to say. NFT
              technology can help you breathe new life into your best sellers
              and engage your most loyal audience with a more modern and
              sophisticated style.
            </p>

            <p>
              Call on your best product designers and contemporary artists to
              revamp your best sellers in the form of NFT. Choose the collection
              size, price and engagement logic of your customers to be
              implemented on the blockchain (pre-sale, whitelists, giveaways and
              much more).
            </p>
            <p>
              Just focus on the strategy, we'll take care of the technology.
              Blockchain doesn't need to be scary: before you go to market, you
              can experiment with NFT using our test mode.
            </p>
          </div>
        </div>
      </section>
      <div className="midBtn">
        <button
          onClick={() => setOpen(true)}
          className="btn btn-outline getStart"
        >
          Get started now
        </button>
      </div>

      <section className="section2">
        <div id="box1" className="box">
          <p className="boxtitle">
            <b>METABOND</b>
          </p>
          <p className="content">
            Connect with your audience in the Metaverse. We help brands and
            marketers create direct, long-lasting and gamified bonds with their
            audience through NFT technology.
          </p>
        </div>
        <div id="box2" className="box">
          <p className="boxtitle">Metabond</p>

          <p>About us</p>
          <p>Terms and conditons</p>
          <p>Privacy Policy</p>
        </div>
        <div id="box3" className="box">
          <p className="boxtitle">More</p>
          <p>Schedule a call</p>
          <p>join the white list</p>
        </div>
        <div id="box4" className="box">
          <p className="boxtitle">Lets connect</p>

          <span>
            <img src={icon1} alt="" />
            <img src={icon2} alt="" />
            <img src={icon3} alt="" />
          </span>
        </div>
      </section>
      <footer>
        <hr />
        <div className="footertext">MetaBond 2022 - Powered by iCareX</div>
      </footer>
      <Modal
        width={"45%"}
        visible={open}
        onCancel={() => setOpen(false)}
        footer={null}
      >
        <div className="modaldata">
          <h3>Please select the desired mode</h3>
          <div className="modes">
            <div className="mode1">
              <div className="div1">
                <h3>Test mode</h3>
                <p>
                  Through test mode you can experiment with minting and platform setup on a test network. It basically means you do not need to worry about any errors that may come up during the process of creating and developing your Non-Fungible Tokens.<br /><br />

                  NFT that have been minted can be edited anytime. In the test mode, your Brand will never be publicly associated with an NFT you are experimenting with. You go live when you are ready and feel confident to start.
                </p>
              </div>
              <div className="btnDiv">
                <button onClick={() => navigate("form")} className="modeBtn">Run Test mode</button>
              </div>
            </div>

            <div className="mode2">
              <div className="div1">
                <h3>Real mode</h3>
                <p>
                  Simply not the test mode. Things start to get more serious. When you deploy, you go live on the main network.
                </p>
              </div>
              <div className="btnDiv">
                <button onClick={() => navigate("form")} className="modeBtn">
                  Run Real mode
                </button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Home;
