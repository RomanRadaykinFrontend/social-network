import React from 'react';
import cl from './Dialogs.module.css';

import Dialogs from "./Dialogs";
import {connect} from 'react-redux';
import {ActionTypes, DialogsPageType} from "../../Redux/Types";
import {RootStateType} from "../../Redux/redux-store";
import {sendMessage, updateNewMessageBody} from '../../Redux/dialog-reducer';

/*type DialogsContainerType = {
    dialogsPage: DialogsPageType
    onSendMessageClick: () => void
    onNewMessageChange: (text: string) => void
}*/

type MapStateToPropsType = {
    dialogsPage: DialogsPageType
}

type MapDispatchToPropsType = {
    sendMessage: () => void
    updateNewMessageBody: (text: string) => void
}

let mapStateToProps = (state: RootStateType) : MapStateToPropsType  => {
    return {
        dialogsPage: state.dialogsPage
    }
};


let mapDispatchToProps = {sendMessage, updateNewMessageBody};

const DialogsContainer = connect<MapStateToPropsType, MapDispatchToPropsType, {}, RootStateType>(mapStateToProps, mapDispatchToProps)(Dialogs);



export default DialogsContainer