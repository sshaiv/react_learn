// Posts.js
import React from "react";
import postsData from "../utils/data";

const Posts = () => {
  return (
    <div>
      <h1>Posts</h1>
      {postsData.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <img src={post.image} alt={post.title} />
          <p>{post.author} - {post.date}</p>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Posts;