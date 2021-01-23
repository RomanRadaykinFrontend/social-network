import {combineReducers, createStore } from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer
});

/*export type ReducersType = typeof reducers;
type dada = ReturnType<ReducersType>*/

let store = createStore(reducers);

export type RootStoreType = typeof store;
/*type dadwdda = ReturnType<RootStoreType>*/



export default store

