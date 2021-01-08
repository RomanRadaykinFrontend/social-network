import React from "react";
import cl from "../Dialogs.module.css";


type MessageItemType = {
    message: string
}

function MessageItem(props: MessageItemType) {


    return(
        <div className={cl.message}>
            {props.message}
        </div>
    )
}

export default MessageItem