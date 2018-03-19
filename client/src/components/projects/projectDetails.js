import React,{Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {getIndividualProject,clearProjectDetails,getAllProjects} from '../../actions'
import {Link} from 'react-router-dom'
import {Carousel} from 'react-responsive-carousel';

class ProjectDetails extends Component{

    componentDidMount(){
        this.props.getIndividualProject(this.props.match.params.projectId)
        this.props.getAllProjects()
    }
    componentWillUnmount(){
        this.props.clearProjectDetails()
    }

    routeToProject = (id) => {
        this.props.getIndividualProject(id)
    }

    renderProjectsList = (projects) => {
        return projects.map((project)=>{
            return (
                <div key={project.id} onClick={()=>this.routeToProject(project._id)}>
                    <div >
                        <div className='d-inline'>{project.name}</div>
                        <div className='d-inline'>{project.location}</div>
                    </div>
                </div>
            )
        })
    }

    renderProjectDetails = (project) => {
        if(project){
            return (
                <div>
                    <div className='text-center'>
                        {project.name} - {project.location}
                    </div>
                    <br/>
                    <p>{project.description1}</p>
                    {project.description2 ? 
                    <p>{project.description2}</p> : ''}
                    {project.description3 ? 
                    <p>{project.description3}</p> : ''}
                </div>
            )
        }
    }

    renderProjectSlides = (images) =>{
        if(images){
            return images.map((image)=>{
                return (
                    <div className='item-slider'>
                        <img className='slider-img' style={{maxHeight:'500px'}} src={image.image} />
                        <div className='legend'>
                            <div>{`${image.date} | ${image.location}`}</div>
                            <p>{image.caption}</p>
                        </div>
                        <div className='mobile-caption'>
                            <div>{`${image.date} | ${image.location}`}</div>
                            <p>{image.caption}</p>
                        </div>
                    </div>
                )
            })
        }
    }

    renderContent = ({project,projects}) => {
        var otherProjects;
        if(project && projects){
            otherProjects = projects.filter((eachProject)=>{
                return eachProject._id !== project._id;
            }).slice(0,8);
            return (
                <div>
                    <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true}
                    interval={8000} emulateTouch={true} useKeyboardArrows={true}
                    >
                    {this.renderProjectSlides(project.images)}
                    </Carousel>
                    {/* <br/> */}
                    <div className='row' style={{paddingBottom:'30px',paddingTop:'30px'}}>
                        <div className='col-md-3 hidden-sm-down'>
                            <div className='text-center'>Other Projects</div>
                            {this.renderProjectsList(otherProjects)}
                        </div>
                        <div className='col-md-6'>
                            {this.renderProjectDetails(project)}
                        </div>
                    </div>
                </div>
            )

        }
    }
    
    render(){
        return (
            <div className='container'>
                    {this.renderContent(this.props)}
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({clearProjectDetails,getIndividualProject,getAllProjects},dispatch)
}

function mapStateToProps(state){
    return {
        project:state.Project.singleProject,
        projects:state.Project.allProjects
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProjectDetails);