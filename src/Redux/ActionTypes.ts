import {ProfileDataItemAPIType} from "./profile-reducer"
import {UserDataItemAPIType} from "./users-reducer"

export type ActionTypes = AddPostACType
    | SendMessageACType
    | followACType
    | unFollowAddPostACType
    | setUsersACType
    | SetCurrentPageACType
    | SetTotalCountACType
    | ToggleIsFetchingACType
    | SetUserProfileACType
    | SetUserDataACType
    | ToggleIsFollowingProgressACType
    | SetStatusACType

type AddPostACType = {
    type: 'ADD-POST'
    newPostBody: string
}
type followACType = {
    type: 'FOLLOW'
    id: string
}
type unFollowAddPostACType = {
    type: 'UNFOLLOW'
    id: string
}
type setUsersACType = {
    type: 'SET_USERS'
    users: [] | Array<UserDataItemAPIType>
}

type SendMessageACType = {
    type: 'SEND_MESSAGE'
    newMessageBody: string
}
type SetCurrentPageACType = {
    type: 'SET_CURRENT_PAGE'
    currentPage: number
}
type SetTotalCountACType = {
    type: 'SET_TOTAL_COUNT'
    totalCount: number
}
type ToggleIsFetchingACType = {
    type: 'TOGGLE_IS_FETCHING'
    isFetching: boolean
}
type ToggleIsFollowingProgressACType = {
    type: 'TOGGLE_IS_FOLLOWING_PROGRESS'
    isFetching: boolean
    userId: string
}
type SetUserProfileACType = {
    type: 'SET_USER_PROFILE'
    profile: ProfileDataItemAPIType
}
type SetUserDataACType = {
    type: 'SET_USER_DATA'
    data: {
        id: number
        email: string
        login: string
    }
}
type SetStatusACType = {
    type: 'SET_STATUS'
    status: string
}