import React from "react";
import {NavLink} from "react-router-dom";
import cl from './DialogItem.module.css'


type DialogItemType = {
    name: string
    id: string
}

function DialogItem(props: DialogItemType) {

    let path = '/dialogs/' + props.id;

    return(
        <div className={cl.dialogsItems}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem