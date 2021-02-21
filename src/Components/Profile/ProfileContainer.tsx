import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {ProfileDataItemAPIType, setUserProfile} from "../../Redux/profile-reducer";
import {RootStateType} from "../../Redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router";

type PathParamsType = {
    userId: string
}
type MapStateToPropsType = {
    profile: ProfileDataItemAPIType
}
type MapDispatchToPropsType = {
    setUserProfile: (profile: ProfileDataItemAPIType) => void
}

type OwnPropsType = MapStateToPropsType & MapDispatchToPropsType

type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType


class ProfileContainer extends React.Component <PropsType, {}> {


    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId) userId = '2';
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response => {
            this.props.setUserProfile(response.data)
        })
    }

    render() {
        return (
            <Profile {...this.props} />
        )
    }
}

let mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile
    }
}
let mapDispatchToProps: MapDispatchToPropsType = {setUserProfile}

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, RootStateType>(mapStateToProps, mapDispatchToProps)(WithUrlDataContainerComponent)

