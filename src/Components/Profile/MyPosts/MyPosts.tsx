import React from "react";
import cl from './MyPosts.module.css'
import Post from "../Post/Post";
import { PostsDataItemType } from "../../../Redux/profile-reducer";

type myPostsType = {
    postsData: Array<PostsDataItemType>
    newPostText: string
    updateNewPostText: (text: string) => void
    addPost: () => void
}


function MyPosts(props: myPostsType) {

    let postsElements: Array<JSX.Element> = props.postsData.map(item => <Post message={item.message}
                                                                              key={item.id}
                                                                              likesCount={item.likesCount}/>);

    const newPostElementRef = React.createRef<HTMLTextAreaElement>();

    const addPostCallback = () => {
        if (newPostElementRef.current) {
            props.addPost()
        }
    };

    let updateNewPostTextCallback = () => {
        if (newPostElementRef.current) {
            props.updateNewPostText(newPostElementRef.current.value)
        }
    };


    return (
        <div>
            <h2>My posts:</h2>
            <div>
                <textarea ref={newPostElementRef}
                          onChange={updateNewPostTextCallback}
                          value={props.newPostText}/>
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