import {
    LOGIN,
    INCREMENT,
    DECREMENT,
    INCREMENTAL_DECREMENTAL_VALUE
} from "./type";

const AppReducer = (state, action) => {
    switch (action.type) {
        case LOGIN: return {
            ...state,
            username: action.payload.username,
            password: action.payload.password,
            isLoggedIn: true
        };

        case INCREMENTAL_DECREMENTAL_VALUE: return {
            ...state,
            incrementalOrDecrementalValue: action.payload.incrementalOrDecrementalValue
        };

        case INCREMENT: return {
            ...state,
            count: state.count + +state.incrementalOrDecrementalValue
        };

        case DECREMENT: return {
            ...state,
            count: state.count - +state.incrementalOrDecrementalValue
        };

        default: return state;
    }
}

export default AppReducer;