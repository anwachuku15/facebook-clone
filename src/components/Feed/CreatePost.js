import React, { useState, useRef } from "react";
import "./CreatePost.css";
import { useStateValue } from "../../context/StateProvider";
import axios from "../../axios";
import FormData from "form-data";

import { Avatar, Input } from "@material-ui/core";
import Videocam from "@material-ui/icons/VideocamRounded";
import PhotoLibrary from "@material-ui/icons/PhotoLibraryRounded";
import InsertEmoticon from "@material-ui/icons/InsertEmoticonRounded";

const CreatePost = () => {
  const [{ user }, dispatch] = useStateValue();
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [image, setImage] = useState(null);

  const photoVideoButton = useRef();

  const openFileDialog = () => {
    photoVideoButton.current.click();
  };
  const handleChange = (e) => {
    if (e.target.files[0]) {
      console.log(e.target.files[0]);
      setImage(e.target.files[0]);
    }
  };

  const savePost = async (postData) => {
    await axios.post("/upload/post", postData).then((res) => {
      console.log(res);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (image) {
      const imgForm = new FormData();
      imgForm.append("file", image, image.name);

      axios
        .post("/upload/image", imgForm, {
          headers: {
            accept: "application/json",
            "Accept-Language": "en-US,en;q=0.8",
            "Content-Type": `multipart/form-data; boundary=${imgForm._boundary}`,
          },
        })
        .then((res) => {
          console.log(res.data);

          const postData = {
            text: input,
            imgName: res.data.filename,
            user: user.displayName,
            avatar: user.photoURL,
            timestamp: Date.now(),
          };
          console.log(postData);
          savePost(postData);
        });
    } else {
      const postData = {
        text: input,
        user: user.displayName,
        avatar: user.photoURL,
        timestamp: Date.now(),
      };
      console.log(postData);
      savePost(postData);
    }

    setImageUrl("");
    setInput("");
    setImage(null);
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
          <input
            type="file"
            accept="image/*, video/*"
            style={{ visibility: "hidden", width: 0, height: 0 }}
            ref={photoVideoButton}
            onChange={handleChange}
          />
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
    </div>
  );
};

export default CreatePost;
