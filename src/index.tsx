import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom";
import store from "./Redux/redux-store";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import AppContainer from "./AppContainer";



ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);


//const rerenderEntireTree = () => {}

//rerenderEntireTree()


reportWebVitals();
/*
state={store.getState()} dispatch={store.dispatch.bind(store)*/
