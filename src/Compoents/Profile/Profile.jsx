import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css"
const Profile =()=>{
    return(
      <div className={s.content}>
      <div>
        <img src="https://fotorelax.ru/wp-content/uploads/2015/12/Amazing-nature-of-the-Altai-territory-in-landscapes-08.jpg" />
      </div>
      <div>
        ava+description
      </div>
      <MyPosts/>
    </div>
    )
}
export default Profile