import React from "react";
import bg from "../assets/mainpage.webp";
import GlitchText from "./Glitch";
import "../Css files/Body.css";

const Body = () => {
  return (
    <div className="flex items-center justify-between mt-[7vh] h-[70vh]">
      <div className="text-white">
        <div className="m-[10vh] g-[1vh]">
          <GlitchText size="4rem" heading="Dive into the future" />
          <div>
            <GlitchText size="4rem" heading="Build, Innovate, and Conquer" />
          </div>
          <div>
            <GlitchText size="2.5rem" heading="The metaverse at HackNocturn" />
          </div>
        </div>
        <div className="bodybutton m-[9vh]">
          <button className="registerbutton m-[2.2vh] rounded-xl p-1.5">
            <GlitchText size="2.2rem" heading="Register Now" />
          </button>
          <button className="learnmore m-[2.2vh] rounded-xl p-1.5">
            <GlitchText size="2.2rem" heading="Learn More" />
          </button>
        </div>
      </div>
      <div>
        <img src={bg} className="h-[38vw]" alt="" />
      </div>
    </div>
  );
};

export default Body;
