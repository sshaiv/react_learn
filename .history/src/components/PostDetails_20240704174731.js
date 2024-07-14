import React from "react";
import { useParams } from "react-router-dom";
import posts from "../utils/data";
import "./Home.css"; // Import CSS file for styling

const PostDetails = () => {
  const { postId } = useParams();
  const post = posts.find((post) => post.id === parseInt(postId));

  if (!post) {
    return <div>Post not found!</div>;
  }

  return (
    <div className="post-details-container">
      <div className="post-details">
        <h1>{post.title}</h1>
        <p>{post.content}</p>
        <p>Author: {post.author}</p>
        <p style={{height:'25px'}}><img src={post.image} alt={post.title} /></p>
        <p>Date: {post.date}</p>
      </div>
    </div>
  );
};

export default PostDetails;
