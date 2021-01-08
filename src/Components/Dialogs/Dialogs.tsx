import React, {FunctionComponent} from 'react';
import cl from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import { DialogsDataItemType, MessagesDataItemType } from '../../Redux/Types';



type DialogsType = {
    state: {
        dialogsData: Array<DialogsDataItemType>
        messagesData: Array<MessagesDataItemType>
    }
}

function Dialogs({state}: DialogsType) {


    let dialogsElements: Array<JSX.Element> = state.dialogsData.map(item => <DialogItem name={item.name} id={item.id}/>)
    let messagesElements: Array<JSX.Element> = state.messagesData.map(item => <MessageItem message={item.message}/>)

    return (
        <div className={cl.dialogs}>

            <div className={cl.dialogsItems}>

                {dialogsElements}


            </div>

            <div className={cl.messages}>

                {messagesElements}

            </div>

        </div>
    )
}

export default Dialogs