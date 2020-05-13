import React, { useState } from "react";
import "./NewPost.css";
import axios from "axios";


import { MDBContainer, MDBInputGroup } from "mdbreact";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";



const NewPost = () => {
  const [newPost, setNewPost] = useState({
    title: "",
    desc: "",
    img: "",
  });

  const changeValueHandler = (e) => {
    setNewPost({
      ...newPost,
      [e.target.name]: e.target.value,
    });
  };

  const addPostHandler = (e) => {
    e.preventDefault();

    axios.post("http://localhost:3001/posts", newPost).then((response) => {
      console.log(response.data);
    });
  };

  return (
    <>
      <MDBContainer>
        <div className="form-group">
          <div>
            <h1>Add new post</h1>
          </div>
          <div>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              className="form-control"
              id="title"
              onChange={changeValueHandler}
            />
          </div>
          <div className="form-group">
            <label htmlFor="desc">Description</label>
            <textarea className="form-control" id="desc" rows="5" />
          </div>
          <div>
            <label htmlFor="img">Image URL</label>
            <input
              type="text"
              name="img"
              className="form-control"
              id="img"
              onChange={changeValueHandler}
            />
          </div>
          <button variant="primary" onClick={addPostHandler} type="submit">
            Add new post
          </button>
        </div>
      </MDBContainer>
    </>
  );
};

export default NewPost;
