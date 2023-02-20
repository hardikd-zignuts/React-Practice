import React, { useEffect, useState } from "react";
import axios from "axios";

const Posts = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response);
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      {data.length
        ? data.map((item) => {
            return <li key={item.id}>{item.title}</li>;
          })
        : "Error for retrieving data"}
    </div>
  );
};

export default Posts;
