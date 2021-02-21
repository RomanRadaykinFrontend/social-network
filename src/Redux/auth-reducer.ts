import {ActionTypes} from "./ActionTypes";

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

export const setAuthUserData = (id: number, email: string, login: string) => ({type: SET_USER_DATA, data: {id, email, login}})

export default authReducer