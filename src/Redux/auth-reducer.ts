import {ActionTypes} from "./ActionTypes";
import {Dispatch} from "react";
import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA'

export type AuthReducerInitialStateType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean | null
}

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state: AuthReducerInitialStateType = initialState, action: ActionTypes) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state
    }
}

//Action creators
export const setAuthUserData = (id: number, email: string, login: string) => ({type: SET_USER_DATA, data: {id, email, login}})

//Thunk creators
export const getAuthUserData = () => {
    return (dispatch: Dispatch<any>) => {
        authAPI.me()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data;
                    /*dispatch(setAuthUserData(id, email, login))*/
                    dispatch(setAuthUserData(id, email, login))
                }
            })
    }
}

export default authReducer