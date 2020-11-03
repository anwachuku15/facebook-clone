import React from "react";
import Story from "./Story";
import "./StoryReel.css";
import rapcaviar from "../../assets/rapcaviar.png";
import collabo from "../../assets/collabo.png";
import portfolio from "../../assets/portfolio.png";
import andrew from "../../assets/andrew.jpg";
const StoryReel = () => {
  return (
    <div className="storyReel">
      <Story
        image={`url(${andrew})`}
        profileSrc={require("../../assets/andrew.jpg")}
        title="Andrew Nwachuku"
      />
      <Story
        image={`url(${rapcaviar})`}
        profileSrc={require("../../assets/andrew.jpg")}
        title="Spotify Clone"
      />
      <Story
        image={`url(${collabo})`}
        profileSrc={require("../../assets/andrew.jpg")}
        title="Collabo"
      />
      <Story
        image={`url(${portfolio})`}
        profileSrc={require("../../assets/andrew.jpg")}
        title="Portfolio"
      />
    </div>
  );
};

export default StoryReel;
