import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { Field, reduxForm} from 'redux-form';
import { postEditedService,getIndividualService,clearServiceDetail } from '../../actions';




class ServiceEditForm extends Component{

    componentDidMount(){
        this.props.getIndividualService(this.props.match.params.serviceId)
    }

    componentWillUnmount(){
        this.props.clearServiceDetail()
    }
    

    submit(values){
        this.props.postEditedService(values,this.props.match.params.serviceId,()=>{
            this.props.history.push('/dashboard');
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



    render(){
        
        return(
            <div className='container'>
            <div className='col-md-12 col-sm-12 col-xs-12 text-center'>
                <h3 id='signIn_form_header'>Add A New Service</h3>
                <form style={{width:'80%',margin:'0 auto'}} onSubmit={this.props.handleSubmit((event)=>this.submit(event))}>
                        <div className='form-group'>
                            <Field
                                placeholder='Service Name*'
                                name='name'
                                component={this.renderInputField}
                            />
                        </div>
                        <div className='form-group'>
                            <Field
                                placeholder='Thumbnail Image*'
                                name='summaryImage'
                                component={this.renderInputField}
                            />
                        </div>
                        <div className='form-group'>
                            <Field
                                placeholder='Summary*'
                                name='summary'
                                component={this.renderTextAreaField}
                            />
                        </div>
                    
                    <div className='form-group'>
                            <Field
                                placeholder='Description*'
                                name='description1'
                                component={this.renderTextAreaField}
                            />
                    </div>
                    <div className='form-group'>
                            <Field
                                placeholder='Description (Optional)'
                                name='description2'
                                component={this.renderTextAreaField}
                            />
                        </div>
                    
                    <div className='form-group'>
                            <Field
                                placeholder='Descritpion (Optional)'
                                name='description3'
                                component={this.renderTextAreaField}
                            />
                    </div>
                    <Link to={`/services/images/${this.props.match.params.serviceId}`}><button type='button' className='btn btn-outline-success' style={{marginRight:15}}>Manage Images</button></Link>
                    <button type="submit" className="btn btn-primary submit" style={{marginRight:15}}>Submit</button>
                    <Link to='/dashboard'><button type='button' className='btn btn-danger'>Cancel </button></Link>
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
    if(!values.summaryImage){
        errors.summaryImage = 'Required'
    }
    if(!values.summary){
        errors.summary='Required'
    }
    if(!values.description1){
        errors.description1='Required'
    }
    return errors;
}

// Decorate with reduxForm(). It will read the initialValues prop provided by connect()
ServiceEditForm = reduxForm({
    validate,
    form: 'initializeFromState2', // a unique identifier for this form
    enableReinitialize: true
  })(ServiceEditForm)
  
  // You have to connect() to any reducers that you wish to connect to yourself
  ServiceEditForm = connect(
    state => ({
      initialValues: state.Service.service // pull initial values from account reducer
    }),
    { postEditedService,getIndividualService,clearServiceDetail} // bind account loading action creator
  )(ServiceEditForm)
  
  export default ServiceEditForm;


