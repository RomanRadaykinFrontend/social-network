import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../Redux/profile-reducer";
import {RootStateType} from "../../Redux/redux-store";
import {ProfileDataItemAPIType} from "../../Redux/Types";
import {RouteComponentProps, withRouter} from "react-router";

type PathParamsType = {
    userId: string
}

type MapStatePropsType = {
    profile: ProfileDataItemAPIType
}

type MapDispatchPropsType = {
    setUserProfile: (profile: ProfileDataItemAPIType) => void
}

type OwnPropsType = MapStatePropsType & MapDispatchPropsType

type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

/*type ProfileContainerPropsType = {
    profile: ProfileDataItemAPIType
    setUserProfile: (profile: ProfileDataItemAPIType) => void
}*/

class ProfileContainer extends React.Component <PropsType, {}> {


    componentDidMount() {
        let userId = this.props.match.params.userId
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

type MapStateToPropsType = {
    profile: ProfileDataItemAPIType
}
type MapDispatchToPropsType = {
    setUserProfile: (profile: ProfileDataItemAPIType) => void
}

let mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile
    }
}
let mapDispatchToProps: MapDispatchToPropsType = {setUserProfile}

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, RootStateType>(mapStateToProps, mapDispatchToProps)(WithUrlDataContainerComponent)

