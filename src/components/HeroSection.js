import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";
// import video from '../assets/video/video-2.mp4'
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";

function HeroSection() {
  return (
    <div className="hero-container">
      {/* <video src="../assets/video/test_video.ogg" controls/> */}
      {/* <video src={video} width="750" height="500" autoPlay loop muted>
     </video> */}
      <h1>INTELECTRONICA</h1>
      <p>Customized solutions</p>
      <div className="hero-btns">
        {/* <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          linkTo="/services"
        >
          GET STARTED
        </Button> */}
        {/* <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          onClick={console.log("hey")}
          linkTo="/sign-up"
        >
          WATCH TRAILER
          <PlayCircleFilledWhiteIcon />
        </Button> */}
      </div>
    </div>
  );
}

export default HeroSection;
