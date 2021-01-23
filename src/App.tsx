import React from 'react';
import cl from './App.module.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {ActionTypes, StateType} from './Redux/Types';
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import {RootStoreType} from "./Redux/redux-store";


/*type AppType = {
    store: RootStoreType
}*/

function App() {

    return (
        <div className={cl.appWrapper}>
            <Header/>
            <Navbar/>
            <div className={cl.appWrapperContent}>
                <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                <Route path='/profile' render={() => <Profile />}/>

            </div>

        </div>
    )
}

export default App;
