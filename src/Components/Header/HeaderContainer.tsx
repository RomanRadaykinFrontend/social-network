import React from "react";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {RootStateType} from "../../Redux/redux-store";
import {setAuthUserData} from "../../Redux/auth-reducer";

type MapStateToPropsType = {
    isAuth: boolean | null
    login: string | null
}
type MapDispatchToPropsType = {
    setAuthUserData: (id: number, email: string, login: string) => void
}

type PropsType = MapStateToPropsType & MapDispatchToPropsType

class HeaderContainer extends React.Component<PropsType, {}> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        }).then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data;
                this.props.setAuthUserData(id, email, login)
            }
        })
    }


    render() {
        return <Header {...this.props} />
    }

}

const mapStateToProps = (state: RootStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

const mapDispatchToProps: MapDispatchToPropsType = {setAuthUserData}

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, RootStateType>(mapStateToProps, mapDispatchToProps)(HeaderContainer)