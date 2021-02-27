import React, {ChangeEvent} from 'react';
import cl from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import {DialogsPageType} from "../../Redux/dialog-reducer";
import {Redirect} from "react-router";



type DialogsType = {
    dialogsPage: DialogsPageType
    sendMessage: () => void
    updateNewMessageBody: (text: string) => void
    isAuth: boolean | null
}

function Dialogs(props: DialogsType) {


    let dialogsElements: Array<JSX.Element> = props.dialogsPage.dialogsData.map(item => <DialogItem key={item.id} name={item.name} id={item.id}/>)
    let messagesElements: Array<JSX.Element> = props.dialogsPage.messagesData.map(item => <MessageItem key={item.id} message={item.message}/>)

    let onSendMessageClickCallback = () => {
        props.sendMessage()
    }
    let onNewMessageChangeCallback = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewMessageBody(e.currentTarget.value)
    }


   if(!props.isAuth) return <Redirect to={'/login'}/>

    return (
        <div className={cl.dialogs}>

            <div className={cl.dialogsItems}>

                {dialogsElements}


            </div>

            <div className={cl.messages}>

                <div>{messagesElements}</div>
                <div>
                    <div>
                        <textarea value={props.dialogsPage.newMessageBody} onChange={onNewMessageChangeCallback} placeholder='Enter your message'/>
                    </div>
                    <div>
                        <button onClick={onSendMessageClickCallback}>Send</button>
                    </div>
                </div>
  

            </div>

        </div>
    )
}

export default Dialogs