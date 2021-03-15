import React from 'react';
import style from './Dialogs.module.css';
import Dialogs from "./Dialogs";
import {connect} from 'react-redux';
import {RootStateType} from "../../Redux/redux-store";
import {DialogsPageType, sendMessage} from '../../Redux/dialog-reducer';
import { compose } from 'redux';


type MapStateToPropsType = {
    dialogsPage: DialogsPageType
    isAuth: boolean | null
}

type MapDispatchToPropsType = {
    sendMessage: (newMessageBody: string) => void
}

let mapStateToProps = (state: RootStateType) : MapStateToPropsType  => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
};


let mapDispatchToProps = {sendMessage};

const DialogsContainer = compose<React.ComponentType>(connect(mapStateToProps, mapDispatchToProps))(Dialogs)

export default DialogsContainer