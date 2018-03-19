import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux'
import { Field, reduxForm} from 'redux-form';
import { postProjectImage,getIndividualProject,deleteImage } from '../../actions';
import ServiceImageTable from '../services/serviceImageTable'




class ProjectImageManager extends Component{

    componentDidMount(){
        this.props.getIndividualProject(this.props.match.params.projectId)
    }
    

    submit(values){
        this.props.postProjectImage(values,this.props.match.params.projectId,()=>{
            this.props.getIndividualProject(this.props.match.params.projectId);
            this.props.reset();
        });
     
    }

    deleteFunction = (id)=>{
        this.props.deleteImage(id,()=>{
            this.props.getIndividualProject(this.props.match.params.projectId)
        })
    }

    renderInputField(field){
        const className = `form-input ${field.meta.touched && field.meta.error ? 'has-error':''}`

        return(
            <div className={className}>
                <input
                type='text'
                className='form-control'
                placeholder={field.placeholder}
                {...field.input}
                />
                <div className='error'>
                    {field.meta.touched ? field.meta.error:''}
                </div>
            </div>
        )
    }

    renderTextAreaField(field){
        const className = `form-input ${field.meta.touched && field.meta.error ? 'has-error':''}`

        return(
            <div className={className}>
                <textarea
                type='text'
                rows='5'
                className={`form-control text-area ${className}`}
                placeholder={field.placeholder}
                {...field.input}
                />
                <div className='error'>
                    {field.meta.touched ? field.meta.error:''}
                </div>
            </div>
        )
    }

    renderImageTable = ({project})=>{
        if(project){
            const images = project.images;
            return <ServiceImageTable header={'Project Images'} images={images} deleteFunction={this.deleteFunction}/>
        }
    }


    render(){
        
        return(
            <div className='container'>
            <div className='col-md-12 col-sm-12 col-xs-12 text-center'>
                <h3 id='signIn_form_header'>Add Images To Project</h3>
                <form style={{width:'80%',margin:'0 auto'}} onSubmit={this.props.handleSubmit((event)=>this.submit(event))}>
                        <div className='form-group'>
                            <Field
                                placeholder='Image URL*'
                                name='image'
                                component={this.renderInputField}
                            />
                        </div>
                        <div className='form-group'>
                            <Field
                                placeholder='Location'
                                name='location'
                                component={this.renderInputField}
                            />
                        </div>
                        <div className='form-group'>
                            <Field
                                placeholder='Date'
                                name='date'
                                component={this.renderInputField}
                            />
                        </div>
                    
                    <div className='form-group'>
                            <Field
                                placeholder='Caption*'
                                name='caption'
                                component={this.renderTextAreaField}
                            />
                    </div>
                    <button type="submit" className="btn btn-primary submit" style={{marginRight:15}}>Submit</button>
                    <button type='button' className='btn btn-danger' onClick={()=>this.props.reset()}>Cancel </button>
                </form><br/><br/>

                <span  className='copyright'>Copyright <i  className="fa fa-copyright" aria-hidden="true"></i> Fire Hunt Nigeria {new Date().getFullYear()} <br/></span><br /> <br/>

            </div>
            {this.renderImageTable(this.props)}
            </div>
        )
    }
}

function validate(values){
    const errors={}

    if(!values.image){
        errors.image = 'Required'
    }
    if(!values.caption){
        errors.caption='Required'
    }
    return errors;
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({getIndividualProject,postProjectImage,deleteImage},dispatch)
}

function mapStateToProps(state){
    return {
        project:state.Project.singleProject
    }
}

export default reduxForm({validate, form:'ProjectImageManager'}) (
    connect(mapStateToProps,mapDispatchToProps)(ProjectImageManager)
)