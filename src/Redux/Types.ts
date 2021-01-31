export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: {}
}

export type ProfilePageType = {
    postsData: Array<PostsDataItemType>
    newPostText: string
}

export type DialogsPageType = {
    dialogsData: Array<DialogsDataItemType>
    messagesData: Array<MessagesDataItemType>
    newMessageBody: string
}

export type UsersPageType = {
    users: Array<UserDataItemType>
}

export type UserDataItemType = {
    id: string
    photo: string
    followed: boolean
    fullName: string
    status: string
    location: {
        city: string
        country: string
    }
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
    users: [] | Array<UserDataItemType>
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