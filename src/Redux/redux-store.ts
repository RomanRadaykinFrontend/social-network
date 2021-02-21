import {combineReducers, createStore } from "redux";
import authReducer from "./auth-reducer";
import dialogsReducer from "./dialog-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    userPage: usersReducer,
    sidebar: sidebarReducer,
    auth: authReducer
});

export type ReducersType = typeof reducers;
export type RootStateType = ReturnType<ReducersType>

let store = createStore(reducers);

export type RootStoreType = typeof store;


export default store

