import React, {ChangeEvent} from 'react';
import cl from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import {ActionTypes, DialogsDataItemType, MessagesDataItemType} from '../../Redux/Types';
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../Redux/dialogs-reducer";



type DialogsType = {
    state: {
        dialogsData: Array<DialogsDataItemType>
        messagesData: Array<MessagesDataItemType>
        newMessageBody: string
    }
    dispatch: (action: ActionTypes) => void
}

function Dialogs({state, dispatch}: DialogsType) {


    let dialogsElements: Array<JSX.Element> = state.dialogsData.map(item => <DialogItem name={item.name} id={item.id}/>)
    let messagesElements: Array<JSX.Element> = state.messagesData.map(item => <MessageItem message={item.message}/>)

    let onSendMessageClick = () => {
        dispatch(sendMessageActionCreator())
    }
    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(updateNewMessageBodyActionCreator(e.currentTarget.value))
    }

    return (
        <div className={cl.dialogs}>

            <div className={cl.dialogsItems}>

                {dialogsElements}


            </div>

            <div className={cl.messages}>

                <div>{messagesElements}</div>
                <div>
                    <div>
                        <textarea value={state.newMessageBody} onChange={onNewMessageChange} placeholder='Enter your message'/>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
  

            </div>

        </div>
    )
}

export default Dialogs