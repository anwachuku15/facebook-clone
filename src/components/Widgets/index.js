import React from "react";
import "./Widgets.css";

const Widgets = () => {
  return (
    <div className="widgets">
      <iframe
        className="responsive_iframe"
        style={{ border: "none" }}
        title="COVID-19"
        src="https://anwachuku15.github.io/"
        width="340"
        height="1500"
        scrolling="yes"
        frameborder="0"
        allowTransparency="true"
        allow="encrypted-media"
      ></iframe>
    </div>
  );
};

export default Widgets;
