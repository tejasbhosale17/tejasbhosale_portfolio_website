import React from "react";
import "./styles/rough.min.css";

const WelcomeText = ({ text = "", speed = 8 }) => {
  return (
    <div className="scrolling_wrapper">
      <div
        className="scrolling_text_container"
        style={{ animationDuration: `${speed}s` }}
      >
        <div className="scrolling_text">
          {text}&nbsp;{text}&nbsp;{text}&nbsp;{text}&nbsp;
        </div>
        <div className="scrolling_text">
          {text}&nbsp;{text}&nbsp;{text}&nbsp;{text}&nbsp;
        </div>
      </div>
    </div>
  );
};

export default WelcomeText;
