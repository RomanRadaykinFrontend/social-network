import React from "react";
import cl from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionTypes, PostsDataItemType} from "../../Redux/Types";




type ProfileType = {
    profilePage:{
        postsData: Array<PostsDataItemType>
        newPostText: string
    }
    dispatch: (action: ActionTypes) => void
}

function Profile({profilePage, dispatch}: ProfileType) {




    return (
        <div className={cl.content}>

            <ProfileInfo/>
            <MyPosts postsData={profilePage.postsData}
                     newPostText={profilePage.newPostText}
                     dispatch={dispatch}/>

        </div>
    )
}


export default Profile