import React, {ChangeEvent} from 'react';
import cl from './Dialogs.module.css';
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";


/*type DialogsTypeContainer = {
    store: RootStoreType
}*/

function DialogsContainer() {


    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    const state = store.getState().dialogsPage;

                    const onSendMessageClick = () => {
                        store.dispatch(sendMessageActionCreator())
                    }
                    const onNewMessageChange = (text: string) => {
                        store.dispatch(updateNewMessageBodyActionCreator(text))
                    }
                    return <Dialogs state={state} onSendMessageClick={onSendMessageClick}
                                    onNewMessageChange={onNewMessageChange}/>
                }
            }
        </StoreContext.Consumer>
    )

}

export default DialogsContainer