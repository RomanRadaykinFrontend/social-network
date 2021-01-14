import {ActionTypes, PostsDataItemType, StoreType} from "./Types";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const store: StoreType = {
    _state: {
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
    },
    _callSubscriber(){},

    subscribe(observer){
        this._callSubscriber = observer
    },
    getState(){
        return this._state
    },

    dispatch(action){
        if(action.type === 'ADD-POST'){
            const newPost: PostsDataItemType = {
                id: '5',
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.postsData.push(newPost)
            this._callSubscriber()
        } else if(action.type === 'UPDATE-NEW-POST-TEXT'){
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber()
        }
    }
}

export const addPostActionCreator = (): ActionTypes  => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (text: string): ActionTypes  =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})



export default store