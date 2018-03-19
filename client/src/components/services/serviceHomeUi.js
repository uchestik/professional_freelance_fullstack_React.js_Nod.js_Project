import React,{Component} from 'react'
import {Link} from 'react-router-dom'


class ServiceHomeUi extends Component{

    state={
        services:this.props.services
    }

    renderServices = ({services})=>{
        if(services){
            return services.map((service,i)=>{
                
                    return(
                        <div className="col-md-3 col-sm-6 col-xs-12 card service-card" style={{borderColor:'white'}} key={i} >
                            <div className='service-card-wrapper card-body'>
                            <img className="card-img-top image" src={service.summaryImage} alt={service.name} width={300} height={'auto'}/>
                            <div className="card-block">
                                <h4 className="card-title">{service.name}</h4>
                                <p className="card-text">{service.summary}</p>
                                
                            </div>
                            
                            </div>
                            <div class="card-footer">
                            <Link to={`/service/details/${service._id}`} className="btn btn-primary">Learn More</Link>
                            </div>
                        </div>

                     
                    )
                
            })
        }
    }

    render(){
        return(
            <div className='container home-service-section' >
                <br/>
                <h5 className='text-center service-section-header'>Our Services</h5>
                <br/>
                <div className='row'>
                    {this.renderServices(this.props)}
                </div>
            </div>
        )
    }
}



export default ServiceHomeUi;