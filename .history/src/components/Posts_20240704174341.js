import React from "react";
import posts from "../utils/data";
import { Link } from "react-router-dom";
import "./Posts.css"; // Ensure correct path to CSS file

const Posts = () => {
  return (
    <div className="posts-container">
      <h1>Posts</h1>
      {posts.map((post) => (
        <Link to={`/posts/${post.id}`} key={post.id} className="post-link">
          <div className="post">
            <h2>{post.title}</h2>
            <img src={post.image} alt={post.title} />
            <p>{post.content}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Posts;
