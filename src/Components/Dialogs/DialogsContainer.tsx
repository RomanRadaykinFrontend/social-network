import React from 'react';
import style from './Dialogs.module.css';
import Dialogs from "./Dialogs";
import {connect} from 'react-redux';
import {RootStateType} from "../../Redux/redux-store";
import {DialogsPageType, sendMessage, updateNewMessageBody} from '../../Redux/dialog-reducer';


type MapStateToPropsType = {
    dialogsPage: DialogsPageType
    isAuth: boolean | null
}

type MapDispatchToPropsType = {
    sendMessage: () => void
    updateNewMessageBody: (text: string) => void
}

let mapStateToProps = (state: RootStateType) : MapStateToPropsType  => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
};


let mapDispatchToProps = {sendMessage, updateNewMessageBody};

const DialogsContainer = connect<MapStateToPropsType, MapDispatchToPropsType, {}, RootStateType>(mapStateToProps, mapDispatchToProps)(Dialogs);



export default DialogsContainer