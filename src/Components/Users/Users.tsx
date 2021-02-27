import React from 'react';
import style from './Users.module.css'
import userPhoto from './../../assets/images/user.png'
import {NavLink} from 'react-router-dom';
import {UserDataItemAPIType} from '../../Redux/users-reducer';
import axios from "axios";
import {userAPI} from "../../api/api";


type UsersPropsType = {
    totalUserCount: number
    pageSize: number
    onPageChanged: (page: number) => void
    users: Array<UserDataItemAPIType>
    currentPage: number
    followingInProgress: [] | Array<string>
    followUser: (userId: string) => void
    unFollowUser: (userId: string) => void
}


const Users = (props: UsersPropsType) => {

    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }


    return (
        <div>
            <div>
                {
                    pages.map(page => {
                        if (props.currentPage === page) {
                            return <span className={style.page}
                                         onClick={(e) => props.onPageChanged(page)}>{page}</span>
                        } else {
                            return <span className='' onClick={(e) => props.onPageChanged(page)}>{page}</span>
                        }

                    })
                }
            </div>
            {
                props.users.map(item => <div key={item.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + item.id}>
                                <img src={item.photos.small != null ? item.photos.small : userPhoto}
                                     className={style.photo}/>
                            </NavLink>
                        </div>
                        <div>
                            {!item.followed
                                ? <button disabled={props.followingInProgress.some(id => id === item.id)}
                                          onClick={() => {
                                              props.followUser(item.id)
                                          }}>unfollow</button>

                                : <button disabled={props.followingInProgress.some(id => id === item.id)}
                                          onClick={() => {
                                              props.unFollowUser(item.id)
                                          }}>follow</button>}

                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{item.name}</div>
                            <div>{item.status}</div>
                        </span>
                        <span>
                            <div>{'item.location.country'}</div>
                            <div>{'item.location.city'}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}


export default Users