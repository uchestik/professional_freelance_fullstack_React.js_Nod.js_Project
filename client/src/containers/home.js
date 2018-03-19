import React,{Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {getHomeSliders,getAboutData,getAllServices,getAllProjects} from '../actions'
import Slider from 'react-slick'
import {Carousel} from 'react-responsive-carousel';
import Fade from 'react-reveal/Fade';

import AboutUs from '../components/aboutus'
import ServiceHomeUi from '../components/services/serviceHomeUi'
import ProjectHomeUi from '../components/projects/projectHomeUi'

class Home extends Component{

    componentDidMount(){
        this.props.getHomeSliders()
        this.props.getAboutData()
        this.props.getAllServices()
        this.props.getAllProjects()
    }

    renderImages = (sliders)=>{
        return sliders.map((item)=>{
            return(
                <div className='item-slider'>
                    <img className='slider-img' style={{maxHeight:'500px'}} src={item.image} />
                    
                    <div className='legend'>
                        <h4>{item.headline}</h4>
                        <p>{item.message}</p>
                    </div>
                    <div className='mobile-caption'>
                        <h4>{item.headline}</h4>
                        <p>{item.message}</p>
                    </div>
                    
                </div>
            )
        })
    }



    renderSlider = ({sliders})=>{

        if(sliders){
                return(
                    <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true}
                    interval={8000} emulateTouch={true} useKeyboardArrows={true}
                    >
                    {this.renderImages(sliders)}
                </Carousel>
                )

        }
    }

    renderAboutUs = ({aboutUs})=>{
        if(aboutUs){
            return <AboutUs aboutUs={aboutUs}/>;
        }
    }

    renderServices = ({services})=>{
        if(services){
            return <ServiceHomeUi services={services} />
        }
    }

    renderProjects = ({projects}) =>{
        var data;
        if(projects){
            data = projects.slice(0,4);
            return <ProjectHomeUi projects={data} />
        }
    }


    render(){

        return(
            <div className='slider-container'>
                {this.renderSlider(this.props)}
                {this.renderAboutUs(this.props)}
                {this.renderServices(this.props)}
                {this.renderProjects(this.props)}
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({getHomeSliders,getAboutData,getAllServices,getAllProjects}, dispatch);
}

function mapStateToProps(state){
    return {
        sliders:state.HomeSliders.sliders,
        aboutUs:state.About.About,
        services:state.Service.services,
        projects:state.Project.allProjects
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);