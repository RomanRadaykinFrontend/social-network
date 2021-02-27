import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {RootStateType} from "../../Redux/redux-store";
import {getAuthUserData, setAuthUserData} from "../../Redux/auth-reducer";

type MapStateToPropsType = {
    isAuth: boolean | null
    login: string | null
}
type MapDispatchToPropsType = {
    getAuthUserData: () => void
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

const mapDispatchToProps: MapDispatchToPropsType = {getAuthUserData}

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, RootStateType>(mapStateToProps, mapDispatchToProps)(HeaderContainer)