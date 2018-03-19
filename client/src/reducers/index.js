import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import HomeSliders from './sliderReducer'
import About from './aboutReducer'
import Service from './serviceReducer'
import Project from './projectReducer'

const rootreducer = combineReducers({
    form:formReducer,
    HomeSliders,
    About,
    Service,
    Project
})

export default rootreducer;