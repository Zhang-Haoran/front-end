import {applyMiddleware, combineReducers, createStore} from "redux";
import {Teachers} from "./teachersReducer";
import {COURSES} from "./coursesReducer";
import {logger} from "redux-logger/src";
import thunk from "redux-thunk";

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            teachers:Teachers,
            courses: COURSES
        }),
        applyMiddleware(thunk,logger)
    );
    return store;
}