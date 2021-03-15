import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {RootStateType} from "../../Redux/redux-store";
import {getAuthUserData, logOutThunk, setAuthUserData} from "../../Redux/auth-reducer";
import { compose } from "redux";

type MapStateToPropsType = {
    isAuth: boolean | null
    login: string | null
}
type MapDispatchToPropsType = {
    getAuthUserData: () => void
    logOutThunk: () => void
}

type PropsType = MapStateToPropsType & MapDispatchToPropsType

class HeaderContainer extends React.Component<PropsType, {}> {

    componentDidMount() {
        this.props.getAuthUserData()
    }


    render() {
        return <Header {...this.props} />
    }

}

const mapStateToProps = (state: RootStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

const mapDispatchToProps: MapDispatchToPropsType = {getAuthUserData, logOutThunk}

export default compose<React.ComponentType>(connect(mapStateToProps, mapDispatchToProps))(HeaderContainer)
