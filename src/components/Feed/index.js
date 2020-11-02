import React, { useEffect, useState } from "react";
import "./Feed.css";
import { useStateValue } from "../../context/StateProvider";
import db from "../../firebase";
import axios from "../../axios";
import Pusher from "pusher-js";
import StoryReel from "./StoryReel";
import CreatePost from "./CreatePost";
import Post from "./Post";

const Feed = () => {
  const [{ user }, dispatch] = useStateValue();
  const [postsData, setPostsData] = useState([]);

  const syncFeed = () => {
    axios.get("/retrieve/posts").then((res) => {
      console.log(res.data);
      setPostsData(res.data);
    });
  };

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
        <Post
          profilePic={user.photoURL}
          body="This is an example of a post"
          timestamp="1604328116365"
          username={user.displayName}
        />
      </div>
    </div>
  );
};

export default Feed;
