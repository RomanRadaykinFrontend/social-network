import {ActionTypes, UserDataItemType, UsersPageType} from "./Types";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS'

let initialState: UsersPageType = {
    users: []
}

const userReducer = (state: UsersPageType = initialState, action: ActionTypes) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(item => {
                    if (item.id === action.id) {
                        return {...item, followed: false}
                    }
                    return item
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(item => {
                    if (item.id === action.id) {
                        return {...item, followed: true}
                    }
                    return item
                })
            }
        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state
    }
};

export const followActionCreator = (userID: string): ActionTypes => ({type: FOLLOW, id: userID});
export const unFollowActionCreator = (userID: string): ActionTypes => ({type: UNFOLLOW, id: userID});
export const setUsersActionCreator = (usersArray: Array<UserDataItemType>): ActionTypes => ({type: SET_USERS, users: usersArray});


export default userReducer