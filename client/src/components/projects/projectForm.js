import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { Field, reduxForm} from 'redux-form';
import { postNewProject } from '../../actions';




class ProjectForm extends Component{
    

    submit(values){
        this.props.postNewProject(values,()=>{
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



    render(){
        
        return(
            <div className='container'>
            <div className='col-md-12 col-sm-12 col-xs-12 text-center'>
                <h3 id='signIn_form_header'>Add a new project to the Database</h3>
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
                    <button type="submit" className="btn btn-primary submit" style={{marginRight:15}}>Submit</button>
                    <Link to='/project/dashboard'><button type='button' className='btn btn-danger'>Cancel </button></Link>
                </form><br/><br/>

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


export default reduxForm({validate, form:'ProjectForm'}) (
    connect(null,{postNewProject})(ProjectForm)
)