export default function (state={},action){
    switch(action.type){
        case 'POST_NEW_ABOUT':
            return{...state, about:action.payload};
        case 'GET_ABOUT_DATA':
            return{...state, About:action.payload};
        case 'GET_INDIVIDUAL_ABOUT_DATA':
            return{...state, IndividualAbout:action.payload};
        default:
            return state
    }
}