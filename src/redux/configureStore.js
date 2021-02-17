import {applyMiddleware, combineReducers, createStore} from "redux";
import {Teachers} from "./teachersReducer";
import {logger} from "redux-logger/src";
import thunk from "redux-thunk";
import {TimeRecords} from "./timeRecordsReducer";
import {createForms} from "react-redux-form";
import {InitialAddTeacher} from "./teacherForm";

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            teachers:Teachers,
            timeRecords: TimeRecords,
            ...createForms({
                addTeacher: InitialAddTeacher
            })
        }),
        applyMiddleware(thunk,logger)
    );
    return store;
}