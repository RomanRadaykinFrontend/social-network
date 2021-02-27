import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {getUserProfile, ProfileDataItemAPIType, setUserProfile} from "../../Redux/profile-reducer";
import {RootStateType} from "../../Redux/redux-store";
import {Redirect, RouteComponentProps, withRouter} from "react-router";

type PathParamsType = {
    userId: string
}
type MapStateToPropsType = {
    profile: ProfileDataItemAPIType
    isAuth: boolean | null
}
type MapDispatchToPropsType = {
    getUserProfile: (userId: string) => void
}

type OwnPropsType = MapStateToPropsType & MapDispatchToPropsType

type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType


class ProfileContainer extends React.Component <PropsType, {}> {


    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) userId = '2';
        this.props.getUserProfile(userId)
    }

    render() {

        if(!this.props.isAuth) return <Redirect to={'/login'}/>

        return (
            <Profile {...this.props} />
        )
    }
}

let mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth
    }
}
let mapDispatchToProps: MapDispatchToPropsType = {getUserProfile}

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, RootStateType>(mapStateToProps, mapDispatchToProps)(WithUrlDataContainerComponent)

