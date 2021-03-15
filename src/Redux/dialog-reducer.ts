import {ActionTypes} from "./ActionTypes";

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
    newMessageBody?: string
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
}

const dialogsReducer = (state: DialogsPageType = initialState, action: ActionTypes) => {
    switch (action.type) {
        case SEND_MESSAGE:
            return {
                ...state,
                messagesData: [...state.messagesData, {id: '6', message: action.newMessageBody}]
            };
        default:
            return state
    }
};

export const sendMessage = (newMessageBody: string): ActionTypes => ({type: SEND_MESSAGE, newMessageBody});


export default dialogsReducer