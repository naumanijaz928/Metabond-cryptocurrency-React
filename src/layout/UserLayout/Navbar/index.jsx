import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../../assets/Images/logo.png";
import dropdownIcon from "../../../assets/Images/dropdownicon.png";
import './styles.scss'
const index = () => {
  return (
    <>
      <nav className="bg-white">
        <div className="navbarData">
          <div className="logo">
            <NavLink className="navbar-brand" to="/">
              <img src={Logo} alt="img" />
            </NavLink>
          </div>

          <div className="btns">
            <div id="coloredBtn" className="rightBtns">
              <button className="btn btn-outline me-3 secondbtn">
                Connect Wallet
              </button>
            </div>
            <div className="rightBtns">
              <button className="btn btn-outline me-3 firstbtn" >
                Olga Laprotova <img src={dropdownIcon} />
              </button>

            </div>

          </div>
        </div>
      </nav>
    </>
  );
};

export default index;
