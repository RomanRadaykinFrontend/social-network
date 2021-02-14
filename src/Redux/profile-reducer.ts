import {ActionTypes, PostsDataItemType, ProfileDataItemAPIType, ProfilePageType} from "./Types";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

let initialState: ProfilePageType = {
    postsData: [
        {id: '1', message: 'hi! how are you?', likesCount: 12},
        {id: '2', message: 'this is my first post!', likesCount: 20}
    ],
    newPostText: '',
    profile: {
        aboutMe: '',
        contacts: {
            github: '',
            vk: '',
            facebook: '',
            instagram: '',
            twitter: '',
            website: '',
            youtube: '',
            mainLink: '',
        },
        lookingForAJob: true,
        lookingForAJobDescription: '',
        fullName: '',
        userId: undefined,
        photos: {
            small: '',
            large: '',
        },
        profileDataIsLoaded: true
    }
}

const profileReducer = (state: ProfilePageType = initialState, action: ActionTypes) => {
    switch (action.type) {
        case ADD_POST:
            const newPost: PostsDataItemType = {
                id: '5',
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: ''
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        default:
            return state
    }
};

export const addPost = (): ActionTypes => ({type: ADD_POST});

export const updateNewPostText = (text: string): ActionTypes =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text});
export const setUserProfile = (profile: ProfileDataItemAPIType): ActionTypes =>
    ({type: SET_USER_PROFILE, profile: profile});

export default profileReducer