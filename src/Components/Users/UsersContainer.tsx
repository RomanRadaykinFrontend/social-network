import React from 'react';
import {ActionTypes, UserDataItemAPIType} from "../../Redux/Types";
import {RootStateType} from "../../Redux/redux-store";
import {
    follow,
    setCurrentPage, setTotalCount,
    setUsers, toggleIsFetching,
    unFollow
} from "../../Redux/users-reducer";
import {connect} from "react-redux";
import axios from "axios";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";


type UsersContainerPropsType = {
    users: Array<UserDataItemAPIType>
    pageSize: number
    totalUserCount: number
    currentPage: number
    follow: (userID: string) => void
    unFollow: (userID: string) => void
    setUsers: (users: Array<UserDataItemAPIType>) => void
    setCurrentPage: (page: number) => void
    setTotalCount: (totalCount: number) => void
    isFetching: boolean
    toggleIsFetching: (isFetching: boolean) => void
}

class UsersContainer extends React.Component<UsersContainerPropsType, {}> {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items)
            this.props.setTotalCount(response.data.totalCount)
        })

    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        return <>
            {this.props.isFetching  && <Preloader/>}
           {/* <Users totalUserCount={this.props.totalUserCount}
                   pageSize={this.props.pageSize}
                   onPageChanged={this.onPageChanged}
                   follow={this.props.follow}
                   unFollow={this.props.unFollow}
                   users={this.props.users}
                   currentPage={this.props.currentPage}/>*/}
                   <Users {...this.props} onPageChanged={this.onPageChanged} />
        </>

    }
}

type MapStateToPropsType = {
    users: Array<UserDataItemAPIType>
    pageSize: number
    totalUserCount: number
    currentPage: number
    isFetching: boolean
}
type MapDispatchToPropsType = {
    follow: (userID: string) => void
    unFollow: (userID: string) => void
    setUsers: (users: Array<UserDataItemAPIType>) => void
    setCurrentPage: (page: number) => void
    setTotalCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}

let mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        users: state.userPage.users,
        pageSize: state.userPage.pageSize,
        totalUserCount: state.userPage.totalUserCount,
        currentPage: state.userPage.currentPage,
        isFetching: state.userPage.isFetching
    }
}
let mapDispatchToProps = {
    follow, unFollow, setUsers, setCurrentPage, setTotalCount, toggleIsFetching
}

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, RootStateType>(mapStateToProps, mapDispatchToProps)(UsersContainer)