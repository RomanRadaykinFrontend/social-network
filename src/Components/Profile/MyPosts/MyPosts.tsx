import React from "react";
import cl from './MyPosts.module.css'
import Post from "../Post/Post";
import {PostsDataItemType} from "../../../Redux/Types";


type myPostsType = {
    postsData: Array<PostsDataItemType>
    newPostText: string
    updateNewPostText: (newText: string) => void
    addPost: () => void
}


function MyPosts({postsData, addPost, newPostText, updateNewPostText}: myPostsType) {

    let postsElements: Array<JSX.Element> = postsData.map(item => <Post message={item.message}
                                                                        likesCount={item.likesCount}/>);

    const newPostElementRef = React.createRef<HTMLTextAreaElement>()

    const addPostCallback = () => {
        if (newPostElementRef.current) {
            addPost()
            updateNewPostText('')
        }
    }

    let onPostChange = () => {
        if (newPostElementRef.current) {
            updateNewPostText(newPostElementRef.current.value)
        }
    }


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