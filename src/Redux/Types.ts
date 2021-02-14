export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: {}
}

export type ProfilePageType = {
    postsData: Array<PostsDataItemType>
    newPostText: string
    profile: ProfileDataItemAPIType
}

export type DialogsPageType = {
    dialogsData: Array<DialogsDataItemType>
    messagesData: Array<MessagesDataItemType>
    newMessageBody: string
}

export type UsersPageType = {
    users: Array<UserDataItemAPIType>
    pageSize: number
    totalUserCount: number
    currentPage: number
    isFetching: boolean
}

export type UserDataItemAPIType = {
    id: string
    photos: {
        small: string
        large: string
    }
    followed: boolean
    name: string
    status: string
    location: {
        city: string
        country: string
    }
}
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
export type DialogsDataItemType = {
    id: string
    name: string
}
export type MessagesDataItemType = {
    id: string
    message: string
}

export type StoreType = {
    _state: StateType
    _callSubscriber: () => void
    subscribe: (observer: () => void) => void
    getState: () => StateType
    dispatch: (action: ActionTypes) => void
}

export type ActionTypes = AddPostActionType
    | UpdateNewPostTextACType
    | UpdateNewMessageBodyACType
    | SendMessageACType
    | followActionType
    | unFollowAddPostActionType
    | setUsersActionType
    | SetCurrentPageType
    | SetTotalCountType
    | ToggleIsFetchingType
    | SetUserProfileType

type AddPostActionType = {
    type: 'ADD-POST'
}

type followActionType = {
    type: 'FOLLOW'
    id: string
}

type unFollowAddPostActionType = {
    type: 'UNFOLLOW'
    id: string
}

type setUsersActionType = {
    type: 'SET_USERS'
    users: [] | Array<UserDataItemAPIType>
}

type UpdateNewMessageBodyACType = {
    type: 'UPDATE_NEW_MESSAGE_BODY'
    body: string
}

type UpdateNewPostTextACType = {
    type: 'UPDATE-NEW-POST-TEXT',
    newText: string
}

type SendMessageACType = {
    type: 'SEND_MESSAGE'
}

type SetCurrentPageType = {
    type: 'SET_CURRENT_PAGE'
    currentPage: number
}

type SetTotalCountType = {
    type: 'SET_TOTAL_COUNT'
    totalCount: number
}

type ToggleIsFetchingType = {
    type: 'TOGGLE_IS_FETCHING'
    isFetching: boolean
}

type SetUserProfileType = {
    type: 'SET_USER_PROFILE'
    profile: ProfileDataItemAPIType
}