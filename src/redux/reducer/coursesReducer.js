import * as ActionType from "../ActionTypes";

export const Courses = (state = {
    isLoading: true,
    errMess: null,
    courses: []
},action) => {
    switch (action.type){
        case ActionType.FETCH_COURSES:
            return{...state, isLoading: false, errMess: null, courses: action.payload}
        case ActionType.COURSES_LOADING:
            return{...state, isLoading: true, errMess: null, courses: []}
        case ActionType.COURSES_FAILED:
            return{...state, isLoading: false, errMess: action.payload, courses: []}
        default:
            return state;
    }
}