// Posts.js
import React from "react";
import posts from "../utils/data";

const Posts = () => {
  return (
    <div>
      <h1>Posts</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <img src="" alt={} />
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Posts;
