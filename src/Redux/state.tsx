import {PostsDataItemType, StateType } from "./Types";


let rerenderEntireTree = () => {}

let state: StateType = {
    profilePage:{
        postsData: [
            {id: '1', message: 'hi! how are you?', likesCount: 12},
            {id: '2', message: 'this is my first post!', likesCount: 20}
        ],
        newPostText: ''
    },
    dialogsPage: {
        dialogsData: [
            {id: '1', name: 'Roma'},
            {id: '2', name: 'Sasha'},
            {id: '3', name: 'Dasha'},
            {id: '4', name: 'Sergei'},
            {id: '5', name: 'Inna'},
            {id: '6', name: 'Sveta'}
        ],
        messagesData: [
            {id: '1', message: 'Hi'},
            {id: '2', message: 'How are you'},
            {id: '3', message: 'Yo!'},
            {id: '4', message: 'Yo!'},
            {id: '5', message: 'Yo!'}
        ]
    }
};

export const addPost = () => {

    const newPost: PostsDataItemType = {
        id: '5',
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.postsData.push(newPost)
    rerenderEntireTree()
};

export const updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree()
};

export const subscribe = (observer: () => void) => {
    rerenderEntireTree = observer
}

export default state