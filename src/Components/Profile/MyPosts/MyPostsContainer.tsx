import React from "react";
import cl from './MyPosts.module.css'
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import {RootStoreType} from "../../../Redux/redux-store";
import StoreContext from "../../../StoreContext";


/*type myPostsContainerType = {
    store: RootStoreType
}*/


function MyPostsContainer() {


    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState().profilePage;
                    const addPost = () => {
                        store.dispatch(addPostActionCreator());
                        store.dispatch(updateNewPostTextActionCreator(''))
                    };
                    const updateNewPostText = (text: string) => {
                        store.dispatch(updateNewPostTextActionCreator(text))
                    };
                    return <MyPosts updateNewPostText={updateNewPostText}
                                    addPost={addPost}
                                    postsData={state.postsData}
                                    newPostText={state.newPostText}/>
                }

            }
        </StoreContext.Consumer>
    )
}


export default MyPostsContainer

/*
if (newPostElementRef.current) {}*/
/*
newPostElementRef.current.value*/
