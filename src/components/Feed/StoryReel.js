import React from "react";
import Story from "./Story";
import "./StoryReel.css";

const StoryReel = () => {
  return (
    <div className="storyReel">
      <Story
        image={require("../../assets/aok.jpg")}
        profileSrc={require("../../assets/andrew.jpg")}
        title="Andrew Nwachuku"
      />
      <Story
        image={require("../../assets/aok.jpg")}
        profileSrc={require("../../assets/andrew.jpg")}
        title="Andrew Nwachuku"
      />
      <Story
        image={require("../../assets/aok.jpg")}
        profileSrc={require("../../assets/andrew.jpg")}
        title="Andrew Nwachuku"
      />
    </div>
  );
};

export default StoryReel;
