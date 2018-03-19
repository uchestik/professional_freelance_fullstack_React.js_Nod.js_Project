import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';


import Dashboard from '../containers/dashboard';
import NewSliderForm from '../containers/newSliderForm'
import SliderTable from '../containers/slidertable'
import EditSlider from '../containers/editslider'
import Home from '../containers/home'
import Header from './header'
import AboutDashboard from '../containers/aboutdashboard'
import EditAboutForm from '../containers/editAboutForm'
import NewAboutForm from '../containers/newAboutForm'
import ServiceForm from './services/serviceForm'
import ServiceList from './services/serviceList'
import ServiceEditForm from './services/serviceEditForm'
import ServiceImages from './services/serviceImages'
import ServiceDetails from './services/serviceDetails'
import ProjectList from './projects/projectList'
import ProjectForm from './projects/projectForm'
import ProjectEditForm from './projects/ProjectEditForm'
import ProjectDetails from './projects/projectDetails'
import ProjectImageManager from './projects/projectImageManager'

const App = ()=>{
        return(                
                <BrowserRouter>
                <div>
                <Header />
                        <Route exact path={'/project/:projectId/images'} component={ProjectImageManager} />
                        <Route exact path={'/project/details/:projectId'} component={ProjectDetails} />
                        <Route exact path={'/project/edit/:projectId'} component={ProjectEditForm} />
                        <Route exact path={'/project/new'} component={ProjectForm} />
                        <Route exact path={'/project/dashboard'} component={ProjectList} />
                        <Route exact path={'/service/details/:serviceId'} component={ServiceDetails} />
                        <Route exact path={'/services/images/:serviceId'} component={ServiceImages} />
                        <Route exact path={'/services/edit/:serviceId'} component={ServiceEditForm} />
                        <Route exact path={'/service/dashboard'} component={ServiceList} />
                        <Route exact path={'/service/new'} component={ServiceForm} />
                        <Route exact path={'/sliders/edit/:sliderId'} component={EditSlider} />
                        <Route exact path={'/sliders/new'} component={NewSliderForm} />
                        <Route exact path={'/sliders'} component={SliderTable} />
                        <Route exact path={'/aboutdashboard/edit/:aboutId'} component={EditAboutForm} />
                        <Route exact path={'/aboutdashboard/new'} component={NewAboutForm} />
                        <Route exact path={'/aboutdashboard'} component={AboutDashboard} />
                        <Route exact path={'/dashboard'} component={Dashboard} />
                        <Route exact path={'/'} component={Home} />
                </div>
            </BrowserRouter>
        )
    
}

export default App;