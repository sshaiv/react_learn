import React from "react";
import { useParams } from "react-router-dom";


const PostDetails=()=>{
    const postId = useParams();
    console.log(postId);

    return(
        <div><h1>PostDetails</h1></div>
    );
};

export default PostDetails;