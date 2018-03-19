export default function (state={},action){
    switch(action.type){
        case 'GET_HOME_SLIDER':
            return{...state, sliders:action.payload};
        case 'GET_INDIVIDUAL_HOME_SLIDER':
            return{...state, slider:action.payload};
        case 'CLEAR_SLIDER_DETAIL':
            return{...state, slider:action.payload};
        default:
            return state
    }
}