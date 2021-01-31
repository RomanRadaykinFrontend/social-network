import React from 'react';
import Users from "./Users";
import {ActionTypes, PostsDataItemType, UserDataItemType} from "../../Redux/Types";
import {RootStateType} from "../../Redux/redux-store";
import {followActionCreator, setUsersActionCreator, unFollowActionCreator} from "../../Redux/users-reducer";
import {connect} from "react-redux";

type MapStateToPropsType = {
    users: Array<UserDataItemType>
}
type MapDispatchToPropsType = {
    follow: (userID: string) => void
    unFollow: (userID: string) => void
    setUsers: (users: Array<UserDataItemType>) => void
}

let mapStateToProps = (state: RootStateType): MapStateToPropsType =>  {
    return{
        users: state.userPage.users
    }
}

let mapDispatchToProps = (dispatch: (action: ActionTypes) => void): MapDispatchToPropsType => {
    return {
        follow: (userID: string) => {
            dispatch(followActionCreator(userID))
        },
        unFollow: (userID: string) => {
            dispatch(unFollowActionCreator(userID))
        },
        setUsers: (users: Array<UserDataItemType>) => {
            dispatch(setUsersActionCreator(users))
        },
    }
}


export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, RootStateType> (mapStateToProps, mapDispatchToProps)(Users)