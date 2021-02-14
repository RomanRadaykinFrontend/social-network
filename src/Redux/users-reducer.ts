import {ActionTypes, UserDataItemAPIType, UsersPageType} from "./Types";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

let initialState: UsersPageType = {
    users: [],
    pageSize: 5,
    totalUserCount: 100,
    currentPage: 1,
    isFetching: false
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
            return {...state, users: [...action.users]}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_COUNT:
            return {...state, totalUserCount: action.totalCount}
            case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        default:
            return state
    }
};

export const follow = (userID: string): ActionTypes => ({type: FOLLOW, id: userID});
export const unFollow = (userID: string): ActionTypes => ({type: UNFOLLOW, id: userID});
export const setUsers = (usersArray: Array<UserDataItemAPIType>): ActionTypes => ({
    type: SET_USERS,
    users: usersArray
});
export const setCurrentPage = (currentPage: number): ActionTypes => ({
    type: SET_CURRENT_PAGE,
    currentPage: currentPage
});
export const setTotalCount = (totalCount: number): ActionTypes => ({
    type: SET_TOTAL_COUNT,
    totalCount: totalCount
});
export const toggleIsFetching = (isFetching: boolean): ActionTypes => ({
    type: TOGGLE_IS_FETCHING,
    isFetching: isFetching
});


export default userReducer