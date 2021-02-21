import {ActionTypes} from "./ActionTypes";

const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

export type DialogsDataItemType = {
    id: string
    name: string
}

export type MessagesDataItemType = {
    id: string
    message: string
}

export type DialogsPageType = {
    dialogsData: Array<DialogsDataItemType>
    messagesData: Array<MessagesDataItemType>
    newMessageBody: string
}

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
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messagesData: [...state.messagesData, {id: '6', message: body}]
            };
        default:
            return state
    }
};

export const sendMessage = (): ActionTypes => ({type: SEND_MESSAGE});

export const updateNewMessageBody = (body: string): ActionTypes =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body});


export default dialogsReducer