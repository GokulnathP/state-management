import React, {useReducer} from "react";
import AppContext from "./appContext";
import AppReducer from "./appReducer";
import {
    LOGIN,
    INCREMENT,
    DECREMENT,
    INCREMENTAL_DECREMENTAL_VALUE
} from "./type";

const AppState = (props) => {

    const initialState = {
        username: "",
        password: "",
        isLoggedIn: false,
        incrementalOrDecrementalValue: 0,
        count: 0
    };

    const [state, dispatch] = useReducer(AppReducer, initialState);

    const login = (username, password) => {
        dispatch({type: LOGIN, payload: {username, password}});
    }

    const setIncrementalOrDecrementalValue = (incrementalOrDecrementalValue) => {
        dispatch({type: INCREMENTAL_DECREMENTAL_VALUE, payload: {incrementalOrDecrementalValue}});
    }

    const increment = () => {
        dispatch({type: INCREMENT});
    }

    const decrement = () => {
        dispatch({type: DECREMENT});
    }

    return(
        <AppContext.Provider
            value={{
                isLoggedIn: state.isLoggedIn,
                incrementalOrDecrementalValue: state.incrementalOrDecrementalValue,
                count: state.count,
                login,
                setIncrementalOrDecrementalValue,
                increment,
                decrement
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
}

export default AppState;