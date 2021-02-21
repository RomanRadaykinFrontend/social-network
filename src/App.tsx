import React from 'react';
import cl from './App.module.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import {Route} from "react-router-dom";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";


function App() {
    return (

        <div className={cl.appWrapper}>
            <HeaderContainer/>
            <Navbar/>
            <div className={cl.appWrapperContent}>
                <Route path='/dialogs' render={() => <DialogsContainer/> }/>
                <Route path='/profile/:userId?' render={() => <ProfileContainer />}/>
                <Route path='/users' render={() => <UsersContainer/>}/>

            </div>

        </div>
    )
}

export default App;
