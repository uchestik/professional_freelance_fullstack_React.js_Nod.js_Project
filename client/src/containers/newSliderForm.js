import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { Field, reduxForm} from 'redux-form';
import { postNewSlider } from '../actions';




class NewSliderForm extends Component{
    

    submit(values){
        this.props.postNewSlider(values,()=>{
            this.props.history.push('/');
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
                <h3 id='signIn_form_header'>Add a new slider to the Database</h3>
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
                                placeholder='Headline*'
                                name='headline'
                                component={this.renderTextAreaField}
                            />
                        </div>
                    
                    <div className='form-group'>
                            <Field
                                placeholder='Short Message'
                                name='message'
                                component={this.renderTextAreaField}
                            />
                    </div>
                    <button type="submit" className="btn btn-primary submit" style={{marginRight:15}}>Submit</button>
                    <Link to='/'><button type='button' className='btn btn-danger'>Cancel </button></Link>
                </form><br/><br/>

                <span  className='copyright'>Copyright <i  className="fa fa-copyright" aria-hidden="true"></i> Fire Hunt Nigeria {new Date().getFullYear()} <br/></span><br /> <br/>

            </div>
            </div>
        )
    }
}

function validate(values){
    const errors={}

    if(!values.image){
        errors.image = 'Image Url required'
    }
    if(!values.headline){
        errors.headline = 'A short headline message is required'
    }
    if(!values.message){
        errors.message='A short message is required'
    }
    return errors;
}


export default reduxForm({validate, form:'NewSliderForm'}) (
    connect(null,{postNewSlider})(NewSliderForm)
)