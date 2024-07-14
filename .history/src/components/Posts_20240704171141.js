// Posts.js
import React from "react";
import posts from "../utils/data";
import { Link } from "react-router-dom";

const Posts = () => {
  return (
    <div>
      <h1>Posts</h1>
      {posts.map((post) => (
        <Link > 
        <div key={post.id}>
          <h2>{post.title}</h2>
          {/* <img src={post.image} alt={post.title} /> */}
          <p>{post.content}</p>
        </div>
        </Link>
      ))}
    </div>
  );
};

export default Posts;
