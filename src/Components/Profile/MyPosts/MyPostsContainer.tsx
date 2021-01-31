import React from "react";
import cl from './MyPosts.module.css'
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";
import {ActionTypes, PostsDataItemType, StateType} from "../../../Redux/Types";
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
            dispatch(updateNewPostTextActionCreator(text))
        },
        addPost: () => {
            dispatch(addPostActionCreator());
            dispatch(updateNewPostTextActionCreator(''))
        }
    }
}

const MyPostsContainer = connect<MapStateToPropsType, MapDispatchToPropsType, {}, RootStateType>(mapStateToProps, mapDispatchToProps)(MyPosts);


export default MyPostsContainer

