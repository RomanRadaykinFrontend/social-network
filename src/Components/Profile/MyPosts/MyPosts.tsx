import React from "react";
import cl from './MyPosts.module.css'
import Post from "../Post/Post";
import {ActionTypes, PostsDataItemType} from "../../../Redux/Types";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profile-reducer";



type myPostsType = {
    postsData: Array<PostsDataItemType>
    newPostText: string
    dispatch: (action: ActionTypes) => void
}



function MyPosts({postsData, newPostText, dispatch}: myPostsType) {

    let postsElements: Array<JSX.Element> = postsData.map(item => <Post message={item.message}
                                                                        likesCount={item.likesCount}/>);

    const newPostElementRef = React.createRef<HTMLTextAreaElement>();

    const addPostCallback = () => {
        if (newPostElementRef.current) {
            dispatch(addPostActionCreator());
            dispatch(updateNewPostTextActionCreator(''))
        }
    };

    let onPostChange = () => {
        if (newPostElementRef.current) {
            dispatch(updateNewPostTextActionCreator(newPostElementRef.current.value))
        }
    };


    return (
        <div>
            <h2>My posts:</h2>
            <div>
                <textarea ref={newPostElementRef}
                          onChange={onPostChange}
                          value={newPostText}/>
                <button onClick={addPostCallback}>Add post</button>
                <button>Remove post</button>
            </div>
            <div className={cl.posts}>
                {postsElements}
            </div>

        </div>
    )
}


export default MyPosts