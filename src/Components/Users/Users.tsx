import React from 'react';
import cl from './Users.module.css'
import {UserDataItemType} from "../../Redux/Types";

type UsersPropsType = {
    users: Array<UserDataItemType>
    follow: (userID: string) => void
    unFollow: (userID: string) => void
    setUsers: (users: Array<UserDataItemType>) => void
}

function Users(props: UsersPropsType) {
    if(props.users.length === 0){
        props.setUsers([
            {id: '1', photo: 'https://static.probusiness.io/n/03/d/38097027_439276526579800_2735888197547458560_n.jpg', followed: false, fullName: 'Dmitry', status: 'I am a boss', location: {city: 'Minsk', country: 'Belarus'}},
            {id: '2', photo: 'https://static.probusiness.io/n/03/d/38097027_439276526579800_2735888197547458560_n.jpg', followed: true, fullName: 'Roman', status: 'Yo!', location: {city: 'Moscow', country: 'Russia'}},
            {id: '3', photo: 'https://static.probusiness.io/n/03/d/38097027_439276526579800_2735888197547458560_n.jpg', followed: false, fullName: 'Dasha', status: 'Hello!', location: {city: 'Saratov', country: 'Russia'}}
        ])
    }

    return (
        <div>
            {
                props.users.map(item => <div key={item.id}>
                    <span>
                        <div>
                            <img src={item.photo} className={cl.photo}/>
                        </div>
                        <div>
                            {item.followed
                                ? <button onClick={() => props.follow(item.id)}>unfollow</button>
                                : <button onClick={() => props.unFollow(item.id)}>follow</button>}

                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{item.fullName}</div>
                            <div>{item.status}</div>
                        </span>
                        <span>
                            <div>{item.location.country}</div>
                            <div>{item.location.city}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}

export default Users