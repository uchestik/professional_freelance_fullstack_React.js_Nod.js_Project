import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {getAllProjects,deleteProject} from '../../actions'
import {Link} from 'react-router-dom'

class ProjectList extends Component{
    state={
        toDeleteId:null
    }

    componentDidMount(){
        this.props.getAllProjects()
    }

    deleteState = (id) =>{
        this.setState({
            toDeleteId:id
        })
    }

    deleteItem = (id) =>{
        this.props.deleteProject(id,()=>{
            this.setState({
                toDeleteId:null
            },()=>{
                this.props.getAllProjects();
            })
        })
    }

    clearState = ()=>{
        this.setState({
            toDeleteId:null
        })
    }

    renderProjectList = ({projects}) =>{
        if(projects){
            return projects.map((project)=>{
                return (
                    <div className='col-md-6 col-sm-6 col-xs-12 col-lg-3' style={{marginBottom:'10px'}}>
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
                                    <Link to={`/project/edit/${project._id}`} className="btn btn-primary" style={{marginRight:'10px'}}>Edit</Link>
                                    <button data-toggle="modal" data-target="#exampleModal" className='btn btn-danger' onClick={()=>this.deleteState(project._id)}>Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
        }
    }

    renderModal=({toDeleteId})=>{
        // if(toDeleteId){
            return(
                <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Delete Project?</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>Are you sure you want to delete Project?</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={()=>this.clearState()}>Cancel</button>
                            <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={()=>this.deleteItem(this.state.toDeleteId)}>Delete</button>
                        </div>
                        </div>
                    </div>
                    </div>
            )
        // }
    }

    render(){
        return(
            <div className='container' style={{paddingTop:'30px',paddingBottom:'30px'}}>
                <Link to={`/project/new`} className='btn btn-primary'>Add a New Project</Link>
                <div className='project-page-header text-center'>Projects</div>
                <div className='row'>{this.renderProjectList(this.props)}</div>
                {this.renderModal(this.state)}
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({getAllProjects,deleteProject},dispatch);
}

function mapStateToProps(state){
    return {
        projects:state.Project.allProjects
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProjectList);