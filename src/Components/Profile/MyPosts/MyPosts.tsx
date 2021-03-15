import React from "react";
import cl from './MyPosts.module.css'
import Post from "../Post/Post";
import { PostsDataItemType } from "../../../Redux/profile-reducer";
import {reduxForm, Field, InjectedFormProps} from "redux-form";
import {maxLengthCreator, required } from "../../../utils/validators/validators";
import { Textarea } from "../../Common/formsControls/FormsControls";

type myPostsType = {
    postsData: Array<PostsDataItemType>
    updateNewPostText: (text: string) => void
    addPost: (newPostBody: string) => void
}

const maxLength10 = maxLengthCreator(10)


function MyPosts(props: myPostsType) {

    let postsElements: Array<JSX.Element> = props.postsData.map(item => <Post message={item.message}
                                                                              key={item.id}
                                                                              likesCount={item.likesCount}/>);

    const addPostCallback = (value: AddNewPostFormReduxType) => {
        props.addPost(value.newPostBody)
    };

    return (
        <div>
            <h2>My posts:</h2>
            <AddNewPostFormRedux onSubmit={addPostCallback}/>
            <div className={cl.posts}>
                {postsElements}
            </div>

        </div>
    )
}

type AddNewPostFormReduxType = {
    form: string
    newPostBody: string
}

const AddNewPostForm = (props: InjectedFormProps<AddNewPostFormReduxType>) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} name={'newPostBody'} validate={[required, maxLength10]}/>
            <button>Add post</button>
            <button>Remove post</button>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm<AddNewPostFormReduxType>({
    form: 'addNewPostForm'
})(AddNewPostForm)

export default MyPosts