import React from "react";
import cl from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionTypes, PostsDataItemType, StateType} from "../../Redux/Types";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import store, {RootStoreType} from "../../Redux/redux-store";




/*type ProfileType = {
    store: RootStoreType
}*/

function Profile() {

    return (
        <div className={cl.content}>

            <ProfileInfo/>
            <MyPostsContainer />

        </div>
    )
}


export default Profile