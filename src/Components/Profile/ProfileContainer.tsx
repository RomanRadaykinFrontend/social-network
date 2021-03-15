import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, ProfileDataItemAPIType, setUserProfile, updateStatus} from "../../Redux/profile-reducer";
import {RootStateType} from "../../Redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router";
import { compose } from "redux";

type PathParamsType = {
    userId: string
}
type MapStateToPropsType = {
    profile: ProfileDataItemAPIType
    status: string
    myUserId: number | null
    isAuth: boolean | null
}
type MapDispatchToPropsType = {
    getUserProfile: (userId: string) => void
    getStatus: (userId: string) => void
    updateStatus: (status: string) => void
}

type OwnPropsType = MapStateToPropsType & MapDispatchToPropsType

type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType


class ProfileContainer extends React.Component <PropsType, {}> {


    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId && this.props.myUserId) userId = this.props.myUserId.toString()
        this.props.getUserProfile(userId);
        this.props.getStatus(userId)
    }

    render() {
        return (
            <Profile {...this.props} />
        )
    }
}


let mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        myUserId: state.auth.id,
        isAuth: state.auth.isAuth
    }
}
let mapDispatchToProps: MapDispatchToPropsType = {getUserProfile, getStatus, updateStatus}

export default compose<React.ComponentType>(
   // withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps),
    withRouter
)(ProfileContainer)

