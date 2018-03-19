export default function (state={},action){
    switch(action.type){
        case 'GET_SERVICES_DATA':
            return{...state, services:action.payload};
        case 'GET_INDIVIDUAL_SERVICE':
            return{...state, service:action.payload};
        case 'CLEAR_SERVICE_DETAIL':
            return{...state, service:action.payload};
        default:
            return state
    }
}