import { Dispatch } from "redux";
import {ActionTypes} from "./ActionTypes";
import {getAuthUserData} from "./auth-reducer";


let initialState = {
    initialized: false
}

const appReducer = (state: typeof initialState = initialState, action: ActionTypes) => {
    switch (action.type) {
        case 'SET_INITIALIZED':
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}

//Action creators
export const setInitializedAC = () => ({type: 'SET_INITIALIZED'})

//TC
export const initializeApp = () => (dispatch: any) => {
    let promise = dispatch(getAuthUserData());
    Promise.all([promise])
        .then(() => {
        dispatch(setInitializedAC())
    })

}


export default appReducer