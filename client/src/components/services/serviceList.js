import React,{Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {bindActionCreators} from 'redux'
import {getAllServices,deleteService} from '../../actions'

class ServiceList extends Component{

    componentDidMount(){
        this.props.getAllServices()
    }

    deleteService =(id)=>{
        this.props.deleteService(id,()=>{
            this.props.getAllServices()
        })
    }

    renderTableFunction = (services)=>{
        if(services){
            return services.map((item)=>{
                return(
                    <tr>
                        <td>{item.name}</td>
                        <td>{item.summary}</td>
                        <td><Link className='btn btn-primary' to={`/services/edit/${item._id}`} >Edit</Link></td>
                        <td><button type='button' className='btn btn-danger' onClick={()=>this.deleteService(item._id)}>Delete</button></td>
                    </tr>
                )
            })
        }
    }

    renderServiceTable = ({services})=>{
        if(services){
            return(
                <div>
                    <table className="table table-bordered table-striped table-hover" style={{marginTop:'15px'}}>
                 <thead>
                     <tr>
                     <th>Name</th>
                     <th>Summary</th>
                     <th>Edit</th>
                     <th>Delete</th>
                     </tr>
                 </thead>
                 <tbody>
                    {this.renderTableFunction(services)}
                 </tbody>
             </table><br /><br/>

             <span  className='copyright'>Copyright <i  className="fa fa-copyright" aria-hidden="true"></i> Fire Hunt Nigeria {new Date().getFullYear()} <br/></span><br /> <br/>
                </div>
            )
        }
    }

    render(){
        return(
            <div className='container'>
                <div className='text-center'>
                    <Link to='/service/new'><button className='btn btn-primary'>Add a New Service</button></Link>
                </div><br/>
                {this.renderServiceTable(this.props)}
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({getAllServices,deleteService},dispatch)
}
function mapStateToProps(state){
    return{
        services:state.Service.services
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ServiceList);