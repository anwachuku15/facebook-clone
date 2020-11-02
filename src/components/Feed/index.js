import React from "react";
import "./Feed.css";
import StoryReel from "./StoryReel";
import CreatePost from "./CreatePost";
import Post from "./Post";
import avi from "../../assets/andrew.jpg";
import { useStateValue } from "../../context/StateProvider";

const Feed = () => {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="feed">
      <div className="feed__container">
        <StoryReel />
        <CreatePost />
        <Post
          profilePic={user.photoURL}
          body="This is an example of a post"
          timestamp="1604328116365"
          imgName="imgName"
          username={user.displayName}
        />
        {/* {
                postsData.map(post => (
                    <Post 
                        profilePic={post.avatar} 
                        body={post.body}
                        timestamp={post.timestamp}
                        imgName={post.imgName}
                        user={post.user}
                    />
                ))
            } */}
      </div>
    </div>
  );
};

export default Feed;
