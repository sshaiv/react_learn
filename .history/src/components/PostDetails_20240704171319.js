import React from "react";
import { useParams } from "react-router-dom";
import posts from "../utils/data";


const PostDetails=()=>{
    const {postId} = useParams();
    xconst
    

    return(
        <div><h1>PostDetails: {postId}</h1></div>
    );
};

export default PostDetails;