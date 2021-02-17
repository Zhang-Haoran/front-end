import * as ActionTypes from './ActionTypes';
import {baseUrl} from "../shared/baseUrl";

//get Teachers list from server
export const addTeachers = (teachers) => ({
    type:ActionTypes.FETCH_TEACHERS,
    payload: teachers
})

export const teachersLoading = () => ({
    type: ActionTypes.TEACHERS_LOADING
})

export const teachersFailed = (errmess) => ({
    type:ActionTypes.TEACHERS_FAILED,
    payload:errmess
})

export const fetchTeachers = () => (dispatch)=> {
    dispatch(teachersLoading(true));
    return fetch(baseUrl + 'teachers')
        .then(response => {
            if(response.ok){
                return response;
            }else {
                let error = new Error('Error'+ response.status+':' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error=> {
                let errmess = new Error(error.message);
                throw errmess;
            })
        .then(response=>response.json())
        .then(teachers=>dispatch(addTeachers(teachers)))
        .catch(error=>dispatch(teachersFailed(error.message)));
}

//get TimeRecord list from server
export const addTimeRecords = (timeRecords) => ({
    type:ActionTypes.FETCH_TIMERECORDS,
    payload: timeRecords
})

export const timeRecordsLoading = () => ({
    type: ActionTypes.TIMERECORDS_LOADING
})

export const timeRecordsFailed = (errmess) => ({
    type:ActionTypes.TIMERECORDS_FAILED,
    payload:errmess
})

export const fetchTimeRecords = () => (dispatch)=> {
    dispatch(timeRecordsLoading(true));
    return fetch(baseUrl + 'timerecords')
        .then(response => {
                if(response.ok){
                    return response;
                }else {
                    let error = new Error('Error'+ response.status+':' + response.statusText);
                    error.response = response;
                    throw error;
                }
            },
            error=> {
                let errmess = new Error(error.message);
                throw errmess;
            })
        .then(response=>response.json())
        .then(timeRecords=>dispatch(addTimeRecords(timeRecords)))
        .catch(error=>dispatch(timeRecordsFailed(error.message)));
}
