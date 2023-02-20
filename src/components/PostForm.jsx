import axios from "axios";
import React, { useState } from "react";

const PostForm = () => {
  const [data, setData] = useState({
    userId: "",
    title: "",
    body: "",
  });
  const handlePostData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    axios
      .post("https://jsonplaceholder.typicode.com/posts", data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const { userId, title, body } = data;
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={userId}
          type="text"
          name="userId"
          onChange={handlePostData}
        />{" "}
        <br />
        <input
          value={title}
          type="text"
          name="title"
          onChange={handlePostData}
        />{" "}
        <br />
        <input
          value={body}
          type="text"
          name="body"
          onChange={handlePostData}
        />{" "}
        <br />
        <button type="submit">Send data</button>
      </form>
    </div>
  );
};

export default PostForm;
