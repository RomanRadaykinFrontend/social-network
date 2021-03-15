import React from 'react'
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {required} from "../../utils/validators/validators";
import { Input } from '../Common/formsControls/FormsControls';
import {connect} from "react-redux";
import { loginThunk } from '../../Redux/auth-reducer';
import { Redirect } from 'react-router-dom';
import {RootStateType} from "../../Redux/redux-store";
import style from './../Common/formsControls/FormsControls.module.css'

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}
type MapDispatchToPropsType = {
    loginThunk: (email: string, password: string, rememberMe: boolean) => void
}
type MapStateToPropsType = {
    isAuth: boolean | null
}

type LoginPropsType = MapDispatchToPropsType & MapStateToPropsType;
const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={'Login'} name={'email'} component={Input} validate={[required]}/>
                </div>
                <div>
                    <Field placeholder={'Password'} name={'password'} component={Input} validate={[required]}/>
                </div>
                <div>
                    <Field type={'checkbox'} component={Input} name={'rememberMe'}/>
                    remember me
                </div>
                {props.error && <div className={style.forSummaryError}>
                    {props.error}
                </div>}
                <div>
                    <button placeholder={'Login'}>
                        Login
                    </button>
                </div>
            </form>
        </div>


    )
}

const LoginReduxForm = reduxForm<FormDataType>({
    form: 'login'
})(LoginForm)

function Login(props: LoginPropsType){

    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
        props.loginThunk(formData.email, formData.password, formData.rememberMe)
    }

    if(props.isAuth){
        debugger
        console.log(props.isAuth)
        return <Redirect to={'/profile'}/>
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>


    )
}

const mapStateToProps = (state: RootStateType) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {loginThunk}) (Login)