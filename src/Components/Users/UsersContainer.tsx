import React from 'react';
import {RootStateType} from "../../Redux/redux-store";
import {
    follow,
    followUser,
    getUsers,
    setCurrentPage,
    toggleIsFollowingProgress,
    unFollow, unFollowUser,
    UserDataItemAPIType
} from "../../Redux/users-reducer";
import {connect} from "react-redux";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";

type UsersContainerPropsType = MapStateToPropsType & MapDispatchToPropsType;

class UsersContainer extends React.Component<UsersContainerPropsType, {}> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching && <Preloader/>}
            <Users {...this.props} onPageChanged={this.onPageChanged}/>
        </>

    }
}

type MapStateToPropsType = {
    users: Array<UserDataItemAPIType>
    pageSize: number
    totalUserCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: [] | Array<string>
}
type MapDispatchToPropsType = {

    getUsers: (currentPage: number, pageSize: number) => void
    followUser: (userId: string) => void
    unFollowUser: (userId: string) => void
}

let mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        users: state.userPage.users,
        pageSize: state.userPage.pageSize,
        totalUserCount: state.userPage.totalUserCount,
        currentPage: state.userPage.currentPage,
        isFetching: state.userPage.isFetching,
        followingInProgress: state.userPage.followingInProgress
    }
}
let mapDispatchToProps = {

    getUsers, followUser, unFollowUser
}



export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, RootStateType>(mapStateToProps, mapDispatchToProps)(UsersContainer)