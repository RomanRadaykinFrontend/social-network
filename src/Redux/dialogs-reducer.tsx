import {ActionTypes, DialogsPageType} from "./Types";

const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

let initialState: DialogsPageType = {
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
}

const dialogsReducer = (state: DialogsPageType = initialState, action: ActionTypes) => {
    switch(action.type){
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messagesData.push({id: '6', message: body});
            return state;
        default:
            return state
    }

};

export const sendMessageActionCreator = (): ActionTypes  => ({type: SEND_MESSAGE});

export const updateNewMessageBodyActionCreator = (body: string): ActionTypes  =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body});


export default dialogsReducer