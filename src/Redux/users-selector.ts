import {RootStateType} from "./redux-store";
import {createSelector} from 'reselect'

export const getUsersSelector = (state: RootStateType) => {
    return state.userPage.users
}

export const getPageSizeSelector = (state: RootStateType) => {
    return state.userPage.pageSize
}

export const getTotalUsersCountSelector = (state: RootStateType) => {
    return state.userPage.totalUserCount
}

export const getCurrentPageSelector = (state: RootStateType) => {
    return state.userPage.currentPage
}

export const getIsFetchingSelector = (state: RootStateType) => {
    return state.userPage.isFetching
}

export const followingInProgressSelector = (state: RootStateType) => {
    return state.userPage.followingInProgress
}

export const getUsersSuper = createSelector(getUsersSelector, (users) => {
    return users
})