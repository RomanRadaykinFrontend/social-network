import {ActionTypes, StoreType} from "./Types";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

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
            ],
            newMessageBody: ''
        },
        sidebar: {}
    },
    _callSubscriber(){},

    subscribe(observer){
        this._callSubscriber = observer
    },
    getState(){
        return this._state
    },

    dispatch(action: ActionTypes){

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber()
    }
};


export default store