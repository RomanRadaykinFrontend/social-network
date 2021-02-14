import React from "react";
import cl from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionTypes, PostsDataItemType, ProfileDataItemAPIType, StateType} from "../../Redux/Types";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import store, {RootStoreType} from "../../Redux/redux-store";

type ProfileType = {
    profile: ProfileDataItemAPIType
    setUserProfile: (profile: ProfileDataItemAPIType) => void
}


function Profile(props: ProfileType) {


    return (
        <div className={cl.content}>

            <ProfileInfo profile = {props.profile}/>
            <MyPostsContainer />

        </div>
    )
}


export default Profile