import React, {ChangeEvent} from 'react';
import cl from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import {DialogsPageType} from "../../Redux/dialog-reducer";
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../utils/validators/validators';
import { Textarea } from '../Common/formsControls/FormsControls';


type DialogsType = {
    dialogsPage: DialogsPageType
    sendMessage: (newMessageBody: string) => void
    isAuth: boolean | null
}

const maxLength50 = maxLengthCreator(50)

function Dialogs(props: DialogsType) {


    let dialogsElements: Array<JSX.Element> = props.dialogsPage.dialogsData
        .map(item => <DialogItem key={item.id} name={item.name} id={item.id}/>)
    let messagesElements: Array<JSX.Element> = props.dialogsPage.messagesData
        .map(item => <MessageItem key={item.id} message={item.message}/>)

    /*let onNewMessageChangeCallback = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewMessageBody(e.currentTarget.value)
    }*/
    let addNewMessage = (value: AddMessageFormDataType) => {
        props.sendMessage(value.newMessageBody)
    }

    return (
        <div className={cl.dialogs}>

            <div className={cl.dialogsItems}>

                {dialogsElements}


            </div>

            <div className={cl.messages}>

                <div>{messagesElements}</div>

                <AddMessageFormRedux onSubmit={addNewMessage}/>

            </div>

        </div>
    )
}

type AddMessageFormDataType = {
    form: string
    newMessageBody: string
}
const AddMessageForm: React.FC<InjectedFormProps<AddMessageFormDataType>> = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} validate={[required, maxLength50]} name={'newMessageBody'} placeholder={'Enter your message'}/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}
const AddMessageFormRedux = reduxForm<AddMessageFormDataType>({
    form: 'dialogAddMessageForm'
})(AddMessageForm)

export default Dialogs