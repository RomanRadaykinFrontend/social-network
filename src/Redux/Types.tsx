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