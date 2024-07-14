import React from "react";
import { useParams } from "react-router-dom";


const PostDetails=()=>{
    const postId = useParams().postId;
    console.log(postId);

    return(
        <div>PostDetails</div>
    );
};

export default PostDetails;