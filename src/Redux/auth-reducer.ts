import {ActionTypes} from "./ActionTypes";
import {Dispatch} from "react";
import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

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
                ...action.data
            }
        default:
            return state
    }
}

//Action creators
export const setAuthUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean | null) => ({
    type: SET_USER_DATA,
    data: {id, email, login, isAuth}
})

//Thunk creators
export const getAuthUserData = () => (dispatch: Dispatch<any>) => {
    return authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data;
                dispatch(setAuthUserData(id, email, login, true))
            }
        })
}
export const loginThunk = (email: string, password: string, rememberMe: boolean) => {
    return (dispatch: Dispatch<any>) => {
        authAPI.login(email, password, rememberMe)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(getAuthUserData())
                } else {
                    let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error';
                    dispatch(stopSubmit('login', {_error: message}))
                }
            })
    }
}
export const logOutThunk = () => {
    return (dispatch: Dispatch<any>) => {
        authAPI.loginOut()
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setAuthUserData(null, null, null, false))
                }
            })
    }
}

export default authReducer