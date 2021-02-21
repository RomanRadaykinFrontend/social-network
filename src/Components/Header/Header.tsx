import React from "react";
import { NavLink } from "react-router-dom";
import style from './Header.module.css'

type HeaderType = {
    isAuth: boolean | null
    login: string | null
    setAuthUserData: (id: number, email: string, login: string) => void
}

function Header (props: HeaderType) {
    return(
        <header className={style.header}>
            <img src="https://png.pngtree.com/element_pic/00/16/07/115783931601b5c.jpg" alt=""/>
            <div className={style.loginBlock}>
                {props.isAuth ? props.login
                : <NavLink to={'/login'}>Login</NavLink>}

            </div>
        </header>
    )
}


export default Header