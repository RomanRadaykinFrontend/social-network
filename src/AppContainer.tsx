import React from 'react';
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import { compose } from 'redux';
import App from "./App";
import { initializeApp } from './Redux/app-reducer';
import { RootStateType } from './Redux/redux-store';
import Preloader from "./Components/Common/Preloader/Preloader";

type MDTPType = {
    initializeApp: () => void
};
type MSTPType = {
    initialized: boolean
};

type AppPropsType = MDTPType & MSTPType

class AppContainer extends React.Component<AppPropsType, any> {
    componentDidMount() {
        this.props.initializeApp()
    }
    render() {
        if(!this.props.initialized){
            return <Preloader/>
        } else {
            return <App/>
        }
    }
}

const mapStateToProps = (state: RootStateType) => ({
    initialized: state.app.initialized
})

export default compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializeApp})) (AppContainer);
