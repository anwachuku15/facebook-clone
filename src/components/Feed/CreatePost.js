import React, { useState, useRef } from "react";
import "./CreatePost.css";
import { useStateValue } from "../../context/StateProvider";
import avi from "../../assets/andrew.jpg";

import { Avatar } from "@material-ui/core";
import Videocam from "@material-ui/icons/VideocamRounded";
import PhotoLibrary from "@material-ui/icons/PhotoLibraryRounded";
import InsertEmoticon from "@material-ui/icons/InsertEmoticonRounded";

const CreatePost = () => {
  const [{ user }, dispatch] = useStateValue();

  const [input, setInput] = useState("");
  const [image, setImage] = useState(null);

  const photoVideoButton = useRef();

  const openFileDialog = () => {
    photoVideoButton.current.click();
  };
  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = () => {
    console.log("Submitting");
  };

  const name = user.displayName.split(" ");

  return (
    <div className="createPost">
      <div className="createPost__top">
        <Avatar src={user.photoURL} />
        <form>
          <input
            type="text"
            className="createPost__input"
            placeholder={`What's on your mind, ${name[0]}?`}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          {/* <Input
            type="file"
            className="createPost__fileSelector"
            onChange={handleChange}
          /> */}
          <button onClick={handleSubmit} type="submit">
            Hidden Submit
          </button>
        </form>
      </div>
      <div className="createPost__bottom">
        <div className="createPost__option">
          <Videocam style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>

        <div
          className="createPost__option"
          onClick={openFileDialog}
          onChange={handleChange}
        >
          <PhotoLibrary style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>

        <div className="createPost__option">
          <InsertEmoticon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>

      <input
        type="file"
        accept="image/*, video/*"
        style={{ visibility: "hidden", width: 0, height: 0 }}
        ref={photoVideoButton}
      />
    </div>
  );
};

export default CreatePost;
