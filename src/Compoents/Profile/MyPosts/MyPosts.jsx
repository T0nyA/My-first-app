import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Posts/Post";
const MyPosts =()=>{
    return(      
      <div>
        My posts
        <div>
          <textarea></textarea>
          <div>
          <button>Add post</button>
          </div>
        </div>
        <div className={s.posts}>
          <Post/>
          <Post/>
        </div>
      </div>
    
    )
}
export default MyPosts