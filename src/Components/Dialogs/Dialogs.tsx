import React, {ChangeEvent} from 'react';
import cl from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import {DialogsPageType} from '../../Redux/Types';




type DialogsType = {

    state: DialogsPageType
    onSendMessageClick: () => void
    onNewMessageChange: (text: string) => void

}

function Dialogs(props: DialogsType) {


    let dialogsElements: Array<JSX.Element> = props.state.dialogsData.map(item => <DialogItem name={item.name} id={item.id}/>)
    let messagesElements: Array<JSX.Element> = props.state.messagesData.map(item => <MessageItem message={item.message}/>)

    let onSendMessageClickCallback = () => {
        props.onSendMessageClick()
    }
    let onNewMessageChangeCallback = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.onNewMessageChange(e.currentTarget.value)
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
                        <textarea value={props.state.newMessageBody} onChange={onNewMessageChangeCallback} placeholder='Enter your message'/>
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