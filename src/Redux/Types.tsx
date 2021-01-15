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
    | UpdateNewPostTextType
    | UpdateNewMessageBodyType
    | SendMessageType

type AddPostActionType = {
    type: 'ADD-POST'
}

type UpdateNewMessageBodyType = {
    type: 'UPDATE_NEW_MESSAGE_BODY'
    body: string
}

type UpdateNewPostTextType = {
    type: 'UPDATE-NEW-POST-TEXT',
    newText: string
}

type SendMessageType = {
    type: 'SEND_MESSAGE'
}