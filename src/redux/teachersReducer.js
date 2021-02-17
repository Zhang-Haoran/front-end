import * as ActionType from "./ActionTypes";

export const Teachers = (state = {
    isLoading: true,
    errMess: null,
    teachers: []
},action) => {
    switch (action.type){
        case ActionType.ADD_TEACHER:
            return{...state, isLoading: false, errMess: null, teachers: action.payload}
        case ActionType.TEACHERS_LOADING:
            return{...state, isLoading: true, errMess: null, teachers: []}
        case ActionType.TEACHERS_FAILED:
            return{...state, isLoading: false, errMess: null, teachers: []}
        default:
            return state;
    }
}