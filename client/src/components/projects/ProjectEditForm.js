import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { Field, reduxForm} from 'redux-form';
import { getIndividualProject,postEditedProject,clearProjectDetails } from '../../actions';
import { bindActionCreators } from 'redux';




class ProjectEditForm extends Component{
    

    componentDidMount(){
        this.props.getIndividualProject(this.props.match.params.projectId)
    }

    componentWillUnmount(){
        this.props.clearProjectDetails();
    }

    submit(values){
        this.props.postEditedProject(values, this.props.match.params.projectId, ()=>{
            this.props.history.push('/project/dashboard');
        });
     
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
                className='form-control text-area'
                placeholder={field.placeholder}
                {...field.input}
                />
                <div className='error'>
                    {field.meta.touched ? field.meta.error:''}
                </div>
            </div>
        )
    }

    renderForm = ({initialValues})=>{
        if(initialValues){
            return(
                <form style={{width:'80%',margin:'0 auto'}} onSubmit={this.props.handleSubmit((event)=>this.submit(event))}>
                            <div className='form-group'>
                                <Field
                                    placeholder='Name*'
                                    name='name'
                                    component={this.renderInputField}
                                />
                            </div>
                            <div className='form-group'>
                                <Field
                                    placeholder='Location*'
                                    name='location'
                                    component={this.renderInputField}
                                />
                            </div>
                            <div className='form-group'>
                                <Field
                                    placeholder='Date*'
                                    name='date'
                                    component={this.renderInputField}
                                />
                            </div>
                            <div className='form-group'>
                                <Field
                                    placeholder='Paragraph*'
                                    name='description1'
                                    component={this.renderTextAreaField}
                                />
                            </div>
                        
                        <div className='form-group'>
                                <Field
                                    placeholder='Paragraph (Oprional)'
                                    name='description2'
                                    component={this.renderTextAreaField}
                                />
                        </div>
                        <div className='form-group'>
                                <Field
                                    placeholder='Paragraph (Optional)'
                                    name='description3'
                                    component={this.renderTextAreaField}
                                />
                        </div>
                        <Link style={{marginRight:15}} className='btn btn-outline-success' to={`/project/${initialValues._id}/images`}>Manage Images</Link>
                        <button type="submit" className="btn btn-primary submit" style={{marginRight:15}}>Submit</button>
                        <Link to='/project/dashboard'><button type='button' className='btn btn-danger'>Cancel </button></Link>
                    </form>
            )
        }
    }


    render(){
        
            return(
                <div className='container'>
                <div className='col-md-12 col-sm-12 col-xs-12 text-center'>
                    <h3 id='signIn_form_header'>Edit Project</h3>
                    {this.renderForm(this.props)}
                    <br/><br/>
    
                    <span  className='copyright'>Copyright <i  className="fa fa-copyright" aria-hidden="true"></i> Fire Hunt Nigeria {new Date().getFullYear()} <br/></span><br /> <br/>
    
                </div>
                </div>
            )
        
    }
}

function validate(values){
    const errors={}

    if(!values.name){
        errors.name = 'Required'
    }
    if(!values.location){
        errors.location = 'Required'
    }
    if(!values.date){
        errors.date='Required'
    }
    if(!values.description1){
        errors.description1='Required'
    }
    return errors;
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({postEditedProject,getIndividualProject,clearProjectDetails}, dispatch)
}

// Decorate with reduxForm(). It will read the initialValues prop provided by connect()
ProjectEditForm = reduxForm({
    validate,
    form: 'initializeFromState1', // a unique identifier for this form
    enableReinitialize: true
  })(ProjectEditForm)
  
  // You have to connect() to any reducers that you wish to connect to yourself
  ProjectEditForm = connect(
    state => ({
      initialValues: state.Project.singleProject // pull initial values from account reducer
    }),
    mapDispatchToProps // bind account loading action creator
  )(ProjectEditForm)
  
  export default ProjectEditForm;