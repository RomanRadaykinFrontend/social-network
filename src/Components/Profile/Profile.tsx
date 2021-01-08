import React from "react";
import cl from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { PostsDataItemType } from "../../Redux/Types";




type ProfileType = {
    profilePage:{
        postsData: Array<PostsDataItemType>
        newPostText: string
    }
    addPost: () => void
    updateNewPostText: (newText: string) => void
}

function Profile({profilePage, addPost, updateNewPostText}: ProfileType) {




    return (
        <div className={cl.content}>

            <ProfileInfo/>
            <MyPosts postsData={profilePage.postsData}
                     newPostText={profilePage.newPostText}
                     updateNewPostText={updateNewPostText}
                     addPost={addPost}/>

        </div>
    )
}


export default Profile