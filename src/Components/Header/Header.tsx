import React from "react";
import { NavLink } from "react-router-dom";
import style from './Header.module.css'

type HeaderType = {
    isAuth: boolean | null
    login: string | null
    logOutThunk: () => void
}

function Header (props: HeaderType) {

    const logOut = () => {
        props.logOutThunk()
    }

    return(
        <header className={style.header}>
            <img src="https://png.pngtree.com/element_pic/00/16/07/115783931601b5c.jpg" alt=""/>
            <div className={style.loginBlock}>
                {props.isAuth ? <div>{props.login} - <button onClick={logOut}>Log out</button></div>
                : <NavLink to={'/login'}>Login</NavLink>}

            </div>
        </header>
    )
}


export default Header