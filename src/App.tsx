import React from 'react';
import cl from './App.module.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import {Route} from "react-router-dom";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";


/*type AppType = {
    store: RootStoreType
}*/

function App() {
    return (

        <div className={cl.appWrapper}>
            <Header/>
            <Navbar/>
            <div className={cl.appWrapperContent}>
                <Route path='/dialogs' render={() => <DialogsContainer/> }/>
                <Route path='/profile' render={() => <Profile />}/>
                <Route path='/users' render={() => <UsersContainer/>}/>

            </div>

        </div>
    )
}

export default App;
