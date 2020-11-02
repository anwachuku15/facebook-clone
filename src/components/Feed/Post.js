import React from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import moment from "moment";
import {
  AccountCircleRounded,
  ChatBubbleOutlineRounded,
  ExpandMoreOutlined,
  ThumbUpRounded,
  ReplyRounded,
} from "@material-ui/icons";

const messagesTimeConfig = {
  future: "in %s",
  past: "%s",
  s: "%ds",
  ss: "%ds",
  m: "%dm",
  mm: "%dm",
  h: "%dh",
  hh: "%dh",
  d: "%dd",
  dd: "%dd",
  M: "%dmo",
  MM: "%dmo",
  y: "%dy",
  yy: "%dy",
};
moment.updateLocale("en", { relativeTime: messagesTimeConfig });

const Post = ({ profilePic, imgName, username, timestamp, body }) => {
  return (
    <div className="post">
      <div className="post__top">
        <Avatar src={profilePic} className="post__avatar" />
        <div className="post__topInfo">
          <h3>{username}</h3>
          <p>{moment(parseInt(timestamp)).fromNow()}</p>
        </div>
      </div>
      <div className="post__bottom">
        <p>{body}</p>
        {/* Image */}
      </div>
      <div className="post__options">
        <div className="post__option">
          <ThumbUpRounded />
          <p>Like</p>
        </div>
        <div className="post__option">
          <ChatBubbleOutlineRounded />
          <p>Comment</p>
        </div>
        <div className="post__option">
          <ReplyRounded className="share" />
          <p>Share</p>
        </div>
        <div className="post__option">
          <AccountCircleRounded />
          <ExpandMoreOutlined />
        </div>
      </div>
    </div>
  );
};

export default Post;
