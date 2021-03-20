import React from 'react';
import {RootStateType} from "../../Redux/redux-store";
import {
    followUser,
    getUsers,
    unFollowUser,
    UserDataItemAPIType
} from "../../Redux/users-reducer";
import {connect} from "react-redux";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";
import { compose } from 'redux';
import {followingInProgressSelector, getCurrentPageSelector, getIsFetchingSelector, getPageSizeSelector, getTotalUsersCountSelector, getUsersSelector, getUsersSuper } from '../../Redux/users-selector';


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
        users: getUsersSuper(state),
        pageSize: getPageSizeSelector(state),
        totalUserCount: getTotalUsersCountSelector(state),
        currentPage: getCurrentPageSelector(state),
        isFetching: getIsFetchingSelector(state),
        followingInProgress: followingInProgressSelector(state)
    }
}
let mapDispatchToProps = {

    getUsers, followUser, unFollowUser
}

export default compose<React.ComponentType>(connect(mapStateToProps, mapDispatchToProps))(UsersContainer)