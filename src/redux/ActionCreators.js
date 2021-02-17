import * as ActionTypes from './ActionTypes';
import {TEACHERS} from "../shared/teachers";

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
    setTimeout(()=>{
        dispatch(addTeachers(TEACHERS));
    },2000);
}