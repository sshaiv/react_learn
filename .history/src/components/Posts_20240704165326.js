import React from "react";
import Posts from '../utils/data';


const Posts=()=>{
    return(
        <div>
            <h1>Posts</h1>
            {posts.map((post)=>(
                <div key={post}></div>
            ))}
        </div>
    );
};

export default Posts;