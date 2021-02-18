import * as ActionType from "../ActionTypes";

export const TimeRecords = (state = {
    isLoading: true,
    errMess: null,
    timeRecords: []
},action) => {
    switch (action.type){
        case ActionType.FETCH_TIMERECORDS:
            return{...state, isLoading: false, errMess: null, timeRecords: action.payload}
        case ActionType.TIMERECORDS_LOADING:
            return{...state, isLoading: true, errMess: null, timeRecords: []}
        case ActionType.TIMERECORDS_FAILED:
            return{...state, isLoading: false, errMess: action.payload, timeRecords: []}
        default:
            return state;
    }
}