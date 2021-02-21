import React from "react";
import style from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import { ProfileDataItemAPIType } from "../../Redux/profile-reducer";

type ProfileType = {
    profile: ProfileDataItemAPIType
    setUserProfile: (profile: ProfileDataItemAPIType) => void
}


function Profile(props: ProfileType) {


    return (
        <div className={style.content}>

            <ProfileInfo profile = {props.profile}/>
            <MyPostsContainer />

        </div>
    )
}


export default Profile