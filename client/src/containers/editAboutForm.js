import React,{Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {postEditedAbout,getIndividualAboutData} from '../actions'
import { Field, reduxForm} from 'redux-form';
import {Link} from 'react-router-dom'

class EditAboutForm extends Component{


    componentDidMount(){
        this.props.getIndividualAboutData(this.props.match.params.aboutId)
    }


    submit(values){
        this.props.postEditedAbout(values, this.props.match.params.aboutId, ()=>{
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
            <div>
                <div className='container'>
            <div className='col-md-12 col-sm-12 col-xs-12 text-center'>
                <h3 id='signIn_form_header'>Edit About</h3>
                <form style={{width:'80%',margin:'0 auto'}} onSubmit={this.props.handleSubmit((event)=>this.submit(event))}>
                        <div className='form-group'>
                            <Field
                                placeholder='Section Header*'
                                name='header'
                                component={this.renderInputField}
                            />
                        </div>
                        <div className='form-group'>
                            <Field
                                placeholder='Paragraph 1*'
                                name='paragraph1'
                                component={this.renderTextAreaField}
                            />
                        </div>
                    
                    <div className='form-group'>
                            <Field
                                placeholder='Paragraph 2'
                                name='paragraph2'
                                component={this.renderTextAreaField}
                            />
                    </div>
                    <button type="submit" className="btn btn-primary submit" style={{marginRight:15}}>Submit</button>
                    <Link to='/'><button type='button' className='btn btn-danger'>Cancel </button></Link>
                </form><br/><br/>

                <span  className='copyright'>Copyright <i  className="fa fa-copyright" aria-hidden="true"></i> Fire Hunt Nigeria {new Date().getFullYear()} <br/></span><br /> <br/>

            </div>
            </div>
            </div>
        )
    }
}

function validate(values){
    const errors={}

    if(!values.header){
        errors.header = 'Required'
    }
    if(!values.paragraph1){
        errors.paragraph1 = 'Required'
    }
    if(!values.paragraph2){
        errors.paragraph2 = 'Required'
    }
    return errors;
}

// Decorate with reduxForm(). It will read the initialValues prop provided by connect()
EditAboutForm = reduxForm({
    validate,
    form: 'initializeFromState1' // a unique identifier for this form
  })(EditAboutForm)
  
  // You have to connect() to any reducers that you wish to connect to yourself
  EditAboutForm = connect(
    state => ({
      initialValues: state.About.IndividualAbout // pull initial values from account reducer
    }),
    { postEditedAbout,getIndividualAboutData} // bind account loading action creator
  )(EditAboutForm)
  
  export default EditAboutForm;