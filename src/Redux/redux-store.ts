import {combineReducers, createStore } from "redux";
import dialogsReducer from "./dialog-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    userPage: usersReducer,
    sidebar: sidebarReducer
});

export type ReducersType = typeof reducers;
export type RootStateType = ReturnType<ReducersType>

let store = createStore(reducers);

export type RootStoreType = typeof store;


export default store

