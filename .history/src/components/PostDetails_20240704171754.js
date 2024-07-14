import React from "react";
import { useParams } from "react-router-dom";
import posts from "../utils/data";


const PostDetails=()=>{
    const {postId} = useParams();
    const post = posts.find((post)=>post.id===parseInt(postId));
    console.log(post);

    return(
        <div><h1>PostDetails: {postId}</h1>
        <p>{post.content}</p>
        <p>{}</p>
        </div>
    );
};

export default PostDetails;