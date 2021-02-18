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

//post teacher data into server
export const addTeacher = (teacher) => ({
    type: ActionTypes.ADD_TEACHER,
    payload: teacher
})

export const postTeacher = (teacherId,teacherName, expectedWorkHours,workBase)=>(dispatch)=>{
    const newTeacher = {
        id:teacherId,
        name:teacherName,
        weekly_expected_hours: expectedWorkHours,
        work_base: workBase,
    }
    console.log(newTeacher);

    return fetch(baseUrl+'teachers',{
        method: 'POST',
        body: JSON.stringify(newTeacher),
        headers: {
            'Content-Type':'application/json'
        },
        credentials:'same-origin'
    }).then(response=>{
        if(response.ok){
            return response;
        }else {
            let error = new Error('Error' + response.status + ': '+ response.statusText)
            error.response = response;
            throw error;
        }
    }, error=> {
        throw new Error(error.messages);
        })
        .then(response => response.json())
        .then(response => {
            dispatch(addTeacher(response));
            console.log(response)
        })
        .catch(error => {console.log(error.messages);
        alert(error.messages)})
}
