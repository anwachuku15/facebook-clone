import React from "react";
import "./Story.css";
import avi from "../../assets/andrew.jpg";
import aok from "../../assets/aok.jpg";

import { Avatar } from "@material-ui/core";
const Story = ({ image, profileSrc, title }) => {
  return (
    <div style={{ backgroundImage: `url(${aok})` }} className="story">
      <Avatar src={avi} className="story__avatar" />
      <h4>{title}</h4>
    </div>
  );
};

export default Story;
