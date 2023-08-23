import React, { useState } from "react";
import {ArrowLeftOutlined } from '@ant-design/icons';
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Stepper from "../../../components/stepper";
import back from '../../../assets/Images/back.png'
import "./styles.scss";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import Step6 from "./Step6";
import Step7 from "./Step7";
import Step8 from "./Step8";


const steps = ["Initial Set Up ", "Collection Details", "Sales Settings", "Other Settings", "Design", "Metadata", "Deploy"];

const formPages = (step) => {
  switch (step) {
    case 0:
      return <Step1 />;
      break;
    case 1:
      return <Step2 />;
      break;
    case 2:
      return <Step3 />;
      break;
    case 3:
      return <Step4 />;
      break;
    case 4:
      return <Step5 />;
      break;
    case 5:
      return <Step6 />;
      break;
    case 6:
      return <Step7 />;
      break;
    case 7:
      return <Step8 />;
      break;


    default:
      break;
  }
};

const RealMode = () => {
  const [step, setStep] = useState(0);
  return (
    <div className="mainbox">
      <div className="switch">
        <FormGroup>
          <FormControlLabel control={<Switch />} label="switch to Test mode" />
        </FormGroup>
        <div className="switchText">
          Through test mode you can experiment with minting and platform setup on a test network. It basically means you do not <br /> need to worry about any errors that may come up during the process of creating and developing your Non-Fungible Tokens.

        </div>
      </div>

      <div className="steps">
        <Stepper steps={steps} onClick={(e)=>console.log(e)} activeStep={step} />
      </div>

      <div className="allForms">{formPages(step)}</div>
      <div className="stepsBtns">
        {step ? (
          <button
            className="btn btn-outline me-2 backBtn"
            onClick={() => setStep(step < 1 ? 0 : step - 1)}
          >
            <img src={back} alt="" />
           {/* <ArrowLeftOutlined /> <span>Back</span> */}
          </button>
        ) : null}
        <button
          className="btn btn-outline w-25 me-4 nextBtn"
          onClick={() => setStep(step > 5 ? 6 : step + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default RealMode;
