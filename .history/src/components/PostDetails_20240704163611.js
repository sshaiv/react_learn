import React from "react";
import { useParams } from "react-router-dom";


const PostDetails=()=>{
    const {postId = useParams();
    

    return(
        <div><h1>PostDetails: {postId}</h1></div>
    );
};

export default PostDetails;