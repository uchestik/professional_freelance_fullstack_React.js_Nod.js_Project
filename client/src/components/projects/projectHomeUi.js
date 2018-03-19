import React from 'react'
import {Link} from 'react-router-dom'

const renderHeader = (props) =>{
    return (
        <div className='text-center'>
            Recent Projects
        </div>
    )
}

const renderProjects = (projects) =>{
    return projects.map((project)=>{
        return (
            <div className='col-md-3 col-sm-6 col-xs-12 col-lg-3' style={{marginBottom:'10px'}}>
                <div className='project-card-container'>
                    <div className='card project-card'>
                    <div className="card-header">
                            <h6>{project.name}</h6>
                        </div>
                        <div className="card-body">
                            <div className="card-text" style={{fontSize:'14px'}}>{project.date}</div>
                            <div className="card-text" style={{fontSize:'14px'}}>{project.location}</div>
                            <hr/>
                            <p className="card-text">{project.description1.substring(0,100)}...</p>
                            
                        </div>
                        <div className="card-footer">
                            <Link to={`/project/details/${project._id}`} className="btn btn-primary btn-block" style={{marginRight:'10px'}}>Learn More</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    })
}

const ProjectHomeUi = ({projects})=>{
    if(projects){
        return (
            <div className='container' style={{paddingBottom:'30px', paddingTop:'30px'}}>
                {renderHeader(projects)}
                <br/>
                <div className='row' >
                    {renderProjects(projects)}
                </div>
                <div>
                    <div style={{textAlign:'right'}}>
                        <Link to='#'>See More Projects <i class="fas fa-angle-right"></i></Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProjectHomeUi;