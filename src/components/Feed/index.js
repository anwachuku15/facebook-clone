import React, { useEffect, useState } from "react";
import "./Feed.css";
import "./Post.css";
import { useStateValue } from "../../context/StateProvider";
import db from "../../firebase";
import axios from "../../axios";
import Pusher from "pusher-js";
import StoryReel from "./StoryReel";
import CreatePost from "./CreatePost";
import Post from "./Post";
import avi from "../../assets/andrew.jpg";
import moment from "moment";
import { Avatar } from "@material-ui/core";
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

const pusher = new Pusher("c7fd13149f9cdec61900", {
  cluster: "us2",
});

const Feed = () => {
  const [{ user }, dispatch] = useStateValue();
  const [postsData, setPostsData] = useState([]);

  const syncFeed = () => {
    axios.get("/retrieve/posts").then((res) => {
      console.log(res.data);
      setPostsData(res.data);
    });
  };

  // real-time updates
  useEffect(() => {
    const channel = pusher.subscribe("posts");
    channel.bind("inserted", (data) => {
      console.log(data);
      syncFeed();
    });
  }, []);

  useEffect(() => {
    syncFeed();
  }, []);

  return (
    <div className="feed">
      <div className="feed__container">
        <StoryReel />
        <CreatePost />
        {postsData.map((post) => (
          <Post
            profilePic={post.avatar}
            body={post.text}
            timestamp={post.timestamp}
            imgName={post.imgName}
            username={post.user}
          />
        ))}
        <div className="firstPost">
          <div className="post__top">
            <Avatar src={avi} className="post__avatar" />
            <div className="post__topInfo">
              <h3>Andrew Nwachuku</h3>
              <p>{moment(parseInt("1604328116365")).fromNow()}</p>
            </div>
          </div>
          <div className="post__bottom">
            <p>This is an example of a post</p>
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
      </div>
    </div>
  );
};

export default Feed;
