import React,{Component} from 'react'
import { bindActionCreators } from 'redux';
import {getAboutData,deleteAboutItem} from '../actions'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class AboutDashboard extends Component{

    componentDidMount(){
        this.props.getAboutData()
    }

    deleteAbout = (id)=>{
        this.props.deleteAboutItem(id,()=>{
            this.props.getAboutData()
        })
    }

    renderAbout = ({about})=>{
        if(about){
            return about.map((item,index)=>{
                return(
                    <div key={item._id} className='text-center'>
                        {index}
                        <div>section header : {item.header}</div><br />
                        <div>Paragraph One</div> <br />
                        <div>{item.paragraph1}</div><br/>
                        <div>Paragraph Two</div><br/>
                        <div>{item.paragraph2}</div><br/>
                        <Link className='btn btn-primary' to={`/aboutdashboard/edit/${item._id}`}>Edit</Link>
                        <button className='btn btn-danger' onClick={()=>this.deleteAbout(item._id)} >Delete</button> <br/>
                        <hr />
                    </div>
                )
            })
        }
    }

    render(){
        return(
            <div className='text-center container'>
                <h2 className='text-center'>Please Maintain <strong>ONLY ONE</strong> Unit</h2><br/>
                <Link className='btn btn-primary' to='/aboutdashboard/new'>Add About Section Details to Database</Link>
                {this.renderAbout(this.props)}
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        about:state.About.About
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({getAboutData,deleteAboutItem},dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AboutDashboard);