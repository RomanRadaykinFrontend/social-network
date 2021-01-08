import React from 'react';
import cl from './App.module.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import { StateType } from './Redux/Types';


type AppType = {
    state: StateType
    addPost: () => void
    updateNewPostText: (newText: string) => void
}

function App({state, addPost, updateNewPostText}: AppType) {

    return (

        <BrowserRouter>
            <div className={cl.appWrapper}>
                <Header/>
                <Navbar/>
                <div className={cl.appWrapperContent}>
                    <Route path='/dialogs' render={() => <Dialogs state={state.dialogsPage}/>}/>
                    <Route path='/profile' render={() => <Profile profilePage={state.profilePage}
                                                                  updateNewPostText={updateNewPostText}
                                                                  addPost={addPost}/>}/>

                </div>

            </div>

        </BrowserRouter>

    )
}

export default App;
