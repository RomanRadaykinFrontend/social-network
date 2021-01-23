import {ActionTypes, PostsDataItemType, ProfilePageType} from "./Types";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState: ProfilePageType = {
    postsData: [
        {id: '1', message: 'hi! how are you?', likesCount: 12},
        {id: '2', message: 'this is my first post!', likesCount: 20}
    ],
    newPostText: ''
}

const profileReducer = (state: ProfilePageType = initialState, action: ActionTypes) => {
    switch (action.type) {
        case ADD_POST:
            const newPost: PostsDataItemType = {
                id: '5',
                message: state.newPostText,
                likesCount: 0
            };
            state.postsData.push(newPost);
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state
    }
};

export const addPostActionCreator = (): ActionTypes  => ({type: ADD_POST});

export const updateNewPostTextActionCreator = (text: string): ActionTypes  =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text});

export default profileReducer