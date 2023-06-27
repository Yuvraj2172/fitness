import React from "react";
import "./Hero.css";
import Header from "./Header/Header";
const Hero = () => {
  return (
    <div className="hero">
      <div className="left-h">
        <Header />
        {/* the best ad */}
        <div className="the-best-ad">
          <div></div>
          <span>The best fitness club in the town</span>
        </div>
        {/* hero heading */}
        <div className="hero-txt">
          <div>
            <span className="stroke-text">Shape</span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal Body</span></div>
        </div>
      </div>
      <div className="right-h">right side</div>
    </div>
  );
};

export default Hero;
