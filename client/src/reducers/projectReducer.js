export default function (state={},action){
    switch(action.type){
        case 'GET_ALL_PROJECTS':
            return{...state, allProjects:action.payload};
        case 'GET_INDIVIDUAL_PROJECT':
            return{...state, singleProject:action.payload};
            case 'CLEAR_PROJECT_DETAIL':
            return{...state, singleProject:action.payload};
        default:
            return state
    }
}