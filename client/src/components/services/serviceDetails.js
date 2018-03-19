import React,{Component} from 'react'
import {getIndividualService,clearServiceDetail} from '../../actions'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Carousel} from 'react-responsive-carousel';
import {Link} from 'react-router-dom'

class ServiceDetails extends Component{

    componentDidMount(){
        this.props.getIndividualService(this.props.match.params.serviceId)
    }

    componentWillUnmount(){
        this.props.clearServiceDetail()
    }

    renderServiceSlides = (images) =>{
        if(images){
            return images.map((image)=>{
                return (
                    <div className='item-slider'>
                        <img className='slider-img' style={{maxHeight:'500px'}} src={image.image} />
                        <div className='legend'>
                            <div>{`${image.date} | ${image.location}`}</div>
                            <p>{image.caption}</p>
                        </div>
                        <div className='mobile-caption'>
                            <div>{`${image.date} | ${image.location}`}</div>
                            <p>{image.caption}</p>
                        </div>
                    </div>
                )
            })
        }
    }

    renderParagraphs = (content)=>{
        if(content){
            return(
                <div className='container'>
                    {content.description1 && 
                        <p className='service-paragraph'>{content.description1}</p>
                    }
                    <br/>
                    {content.description2 &&
                        <p className='service-paragraph'>{content.description2}</p>
                    }
                    <br/>
                    {content.description3 &&
                        <p className='service-paragraph'>{content.description3}</p>
                    }
                    <br/>

                </div>
            )
        }
    }

    renderServiceDetails = ({service}) => {
        if(service){
            return(
                <div>
                    
                    <div className='service-slider-box' >
                    <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true}
                    interval={8000} emulateTouch={true} useKeyboardArrows={true}
                    >
                    {this.renderServiceSlides(service.images)}
                    </Carousel>
                    </div>
                    <div className='text-center service-header'>{service.name}</div>
                    {this.renderParagraphs(service)}
                    <div className='text-center'>
                        <Link className='btn btn-success' to='#'>Conact Our Team</Link>
                    </div>
                    <br/>
                    
                </div>
            )
        }
    }

    render(){
        return(
            <div>
                {this.renderServiceDetails(this.props)}
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({getIndividualService,clearServiceDetail}, dispatch)
}

function mapStateToProps(state){
    return {
        service:state.Service.service
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ServiceDetails);