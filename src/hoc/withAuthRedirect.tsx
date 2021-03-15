import React, {ComponentType} from 'react'
import {Redirect} from "react-router";
import {connect} from "react-redux";
import {RootStateType} from "../Redux/redux-store";

type MapStateToPropsType = {
    isAuth: boolean | null
}

const mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export function withAuthRedirect<T> (Component: ComponentType<T>){

    const RedirectComponent = (props: MapStateToPropsType) => {
        let {isAuth, ...restProps} = props
        if(!props.isAuth) return <Redirect to={'/login'}/>
        return <Component {...restProps as T}/>
    }

    let ConnectRedirectComponent = connect(mapStateToProps)(RedirectComponent)

    return ConnectRedirectComponent
}