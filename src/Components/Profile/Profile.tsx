import React from "react";
import style from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import { ProfileDataItemAPIType } from "../../Redux/profile-reducer";

type ProfileType = {
    profile: ProfileDataItemAPIType
    getUserProfile: (userId: string) => void
    status: string
    getStatus: (userId: string) => void
    updateStatus: (status: string) => void
}


function Profile(props: ProfileType) {
    return (
        <div className={style.content}>

            <ProfileInfo profile = {props.profile}
                         getStatus={props.getStatus}
                         updateStatus={props.updateStatus}
                         status={props.status}/>
            <MyPostsContainer />

        </div>
    )
}


export default Profile