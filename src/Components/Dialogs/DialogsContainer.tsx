import React from 'react';
import cl from './Dialogs.module.css';

import Dialogs from "./Dialogs";
import {connect} from 'react-redux';
import {ActionTypes, DialogsPageType} from "../../Redux/Types";
import {RootStateType} from "../../Redux/redux-store";
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from '../../Redux/dialog-reducer';

/*type DialogsContainerType = {
    dialogsPage: DialogsPageType
    onSendMessageClick: () => void
    onNewMessageChange: (text: string) => void
}*/

type MapStateToPropsType = {
    dialogsPage: DialogsPageType
}

type MapDispatchToPropsType = {
    onSendMessageClick: () => void
    onNewMessageChange: (text: string) => void
}

let mapStateToProps = (state: RootStateType) : MapStateToPropsType  => {
    return {
        dialogsPage: state.dialogsPage
    }
};
let mapDispatchToProps = (dispatch: (action: ActionTypes) => void) : MapDispatchToPropsType => {
    return {
        onSendMessageClick: () => {
            dispatch(sendMessageActionCreator())
        },
        onNewMessageChange: (text: string) => {
            dispatch(updateNewMessageBodyActionCreator(text))
        }
    }
}

const DialogsContainer = connect<MapStateToPropsType, MapDispatchToPropsType, {}, RootStateType>(mapStateToProps, mapDispatchToProps)(Dialogs);



export default DialogsContainer