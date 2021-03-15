import {ActionTypes} from "./ActionTypes";
import {Dispatch} from "react";
import {profileAPI, userAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

export type ProfileDataItemAPIType = {
    aboutMe: string
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number | undefined
    photos: {
        small: string
        large: string
    }
    profileDataIsLoaded?: boolean
}
export type PostsDataItemType = {
    id: string
    message: string
    likesCount: number
}
export type ProfilePageType = {
    postsData: Array<PostsDataItemType>
    newPostText?: string
    profile: ProfileDataItemAPIType
    status: string
}

let initialState: ProfilePageType = {
    postsData: [
        {id: '1', message: 'hi! how are you?', likesCount: 12},
        {id: '2', message: 'this is my first post!', likesCount: 20}
    ],
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
    },
    status: ''
}

const profileReducer = (state: ProfilePageType = initialState, action: ActionTypes) => {
    switch (action.type) {
        case ADD_POST:
            const newPost: PostsDataItemType = {
                id: '5',
                message: action.newPostBody,
                likesCount: 0
            };
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: ''
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return {...state, status: action.status}
        default:
            return state
    }
};


//Action Creators
export const addPost = (newPostBody: string): ActionTypes => ({type: ADD_POST, newPostBody});
export const setUserProfile = (profile: ProfileDataItemAPIType): ActionTypes =>
    ({type: SET_USER_PROFILE, profile: profile});
export const setStatus = (status: string): ActionTypes =>
    ({type: SET_STATUS, status: status});

//Thunk Creators
export const getUserProfile = (userId: string) => {
    return (dispatch: Dispatch<ActionTypes>) => {
        userAPI.getProfile(userId)
            .then(response => {
                dispatch(setUserProfile(response.data))
            })
    }
}
export const getStatus = (userId: string) => {
    return (dispatch: Dispatch<ActionTypes>) => {
        profileAPI.getStatus(userId)
            .then(response => {
                debugger
                dispatch(setStatus(response.data))
            })
    }
}

export const updateStatus = (status: string) => {
    return (dispatch: Dispatch<ActionTypes>) => {
        profileAPI.updateStatus(status)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setStatus(status))
                }
            })
    }
}

export default profileReducer