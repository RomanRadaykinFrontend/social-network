import React from "react"
import store, {RootStoreType} from "./Redux/redux-store";
import {StoreType} from "./Redux/Types";

const StoreContext = React.createContext({} as RootStoreType)

export type ProviderType = {
    store: RootStoreType
    children: any
}

export const Provider = (props: ProviderType) => {
   return <StoreContext.Provider value={props.store}>
        {props.children}
    </StoreContext.Provider>
}

export default StoreContext