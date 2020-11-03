import React from "react";
import "./Story.css";
import { useStateValue } from "../../context/StateProvider";

import { Avatar } from "@material-ui/core";
const Story = ({ image, profileSrc, title }) => {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="story">
      <div style={{ backgroundImage: image }} className="story__bgImage" />
      <Avatar src={user.photoURL} className="story__avatar" />
      <h4>{title}</h4>
    </div>
  );
};

export default Story;
