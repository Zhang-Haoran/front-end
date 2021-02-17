import * as ActionTypes from './ActionTypes';
import {baseUrl} from "../shared/baseUrl";

//get Teachers list from server
export const addTeachers = (teachers) => ({
    type:ActionTypes.ADD_TEACHER,
    payload: teachers
})

export const teachersLoading = () => ({
    type: ActionTypes.TEACHERS_LOADING
})

export const teachersFailed = () => ({
    type:ActionTypes.TEACHERS_FAILED
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
    type:ActionTypes.ADD_TIMERECORD,
    payload: timeRecords
})

export const timeRecordsLoading = () => ({
    type: ActionTypes.TIMERECORDS_LOADING
})

export const timeRecordsFailed = () => ({
    type:ActionTypes.TIMERECORDS_FAILED
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
