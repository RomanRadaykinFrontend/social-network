import React from 'react';
import {RootStateType} from "../../Redux/redux-store";
import {
    follow,
    setCurrentPage, setTotalCount,
    setUsers, toggleIsFetching,
    toggleIsFollowingProgress,
    unFollow,
    UserDataItemAPIType
} from "../../Redux/users-reducer";
import {connect} from "react-redux";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";
import {userAPI} from '../../api/api';

type UsersContainerPropsType = MapStateToPropsType & MapDispatchToPropsType;

class UsersContainer extends React.Component<UsersContainerPropsType, {}> {

    componentDidMount() {
        this.props.toggleIsFetching(true);

        userAPI.getUser(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
                this.props.setTotalCount(data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true)
        userAPI.getUser(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
            })
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
    follow: (userID: string) => void
    unFollow: (userID: string) => void
    setUsers: (users: Array<UserDataItemAPIType>) => void
    setCurrentPage: (page: number) => void
    setTotalCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    toggleIsFollowingProgress: (isFollowingProgress: boolean, userId: string) => void
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
    follow, unFollow, setUsers, setCurrentPage, setTotalCount, toggleIsFetching, toggleIsFollowingProgress
}


export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, RootStateType>(mapStateToProps, mapDispatchToProps)(UsersContainer)