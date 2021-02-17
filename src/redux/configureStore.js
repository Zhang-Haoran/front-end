import {applyMiddleware, combineReducers, createStore} from "redux";
import {Teachers} from "./teachersReducer";
import {logger} from "redux-logger/src";
import thunk from "redux-thunk";
import {TimeRecords} from "./timeRecordsReducer";

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            teachers:Teachers,
            timeRecords: TimeRecords
        }),
        applyMiddleware(thunk,logger)
    );
    return store;
}