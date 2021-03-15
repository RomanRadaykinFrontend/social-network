import React from "react";
import style from './MyPosts.module.css'
import {addPost, PostsDataItemType} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";
import {ActionTypes} from "../../../Redux/ActionTypes";
import {RootStateType} from "../../../Redux/redux-store";
import { compose } from "redux";


type MapStateToPropsType = {
    postsData: Array<PostsDataItemType>
}
type MapDispatchToPropsType = {
    addPost: (newPostBody: string) => void
}

const mapStateToProps = (state: RootStateType) :MapStateToPropsType => {
    return {
        postsData: state.profilePage.postsData
    }
}
const mapDispatchToProps = (dispatch: (action: ActionTypes) => void): MapDispatchToPropsType => {
    return {
        addPost: (newPostBody: string) => {
            dispatch(addPost(newPostBody));
        }
    }
}

const MyPostsContainer = compose<React.ComponentType>(connect(mapStateToProps, mapDispatchToProps))(MyPosts)

export default MyPostsContainer

