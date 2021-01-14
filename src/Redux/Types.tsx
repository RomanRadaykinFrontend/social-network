export type StateType = {
    profilePage:{
        postsData: Array<PostsDataItemType>
        newPostText: string
    }
    dialogsPage: {
        dialogsData: Array<DialogsDataItemType>
        messagesData: Array<MessagesDataItemType>
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
    dispatch: (action: AddPostActionType | UpdateNewPostTextType) => void
}

export type ActionTypes = AddPostActionType | UpdateNewPostTextType

type AddPostActionType = {
    type: 'ADD-POST',
}

type UpdateNewPostTextType = {
    type: 'UPDATE-NEW-POST-TEXT',
    newText: string
}