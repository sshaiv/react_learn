import React from "react";
import { useParams } from "react-router-dom";


const PostDetails=()=>{
    const postId = useParams().pos;
    console.log(postId);

    return(
        <div>PostDetails</div>
    );
};

export default PostDetails;