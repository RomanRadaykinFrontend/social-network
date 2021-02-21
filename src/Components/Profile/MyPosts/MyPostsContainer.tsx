import React from "react";
import style from './MyPosts.module.css'
import {addPost, PostsDataItemType, updateNewPostText} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";
import {ActionTypes} from "../../../Redux/ActionTypes";
import {RootStateType} from "../../../Redux/redux-store";


type MapStateToPropsType = {
    postsData: Array<PostsDataItemType>
    newPostText: string
}
type MapDispatchToPropsType = {
    updateNewPostText: (text: string) => void
    addPost: () => void
}

const mapStateToProps = (state: RootStateType) :MapStateToPropsType => {
    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch: (action: ActionTypes) => void): MapDispatchToPropsType => {
    return {
        updateNewPostText: (text: string) => {
            dispatch(updateNewPostText(text))
        },
        addPost: () => {
            dispatch(addPost());
            dispatch(updateNewPostText(''))
        }
    }
}


const MyPostsContainer = connect<MapStateToPropsType, MapDispatchToPropsType, {}, RootStateType>(mapStateToProps, mapDispatchToProps)(MyPosts);


export default MyPostsContainer

