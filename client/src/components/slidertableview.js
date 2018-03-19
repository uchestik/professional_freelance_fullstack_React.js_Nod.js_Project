import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import {deleteSliderItem,getHomeSliders} from '../actions'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';


class SliderTableView extends Component{

    deleteSlider = (id) =>{
        this.props.deleteSliderItem(id,()=>{
            this.props.getHomeSliders()
        });
    }
    
    renderTableFunction = ({data}) =>{
        if(data){
            return data.map((item)=>{
                return(
                    <tr>
                        <td>{item.headline}</td>
                        <td>{item.message}</td>
                        <td>{item.image}</td>
                        <td><Link className='btn btn-primary' to={`/sliders/edit/${item._id}`} >Edit</Link></td>
                        <td><button type='button' className='btn btn-danger' onClick={()=>this.deleteSlider(item._id)} >Delete</button></td>
                    </tr>
                )
            })
        }
    }

   render(){
    return (
        <div className='container'>
            <table className="table table-bordered table-striped table-hover" style={{marginTop:'15px'}}>
                 <thead>
                     <tr>
                     <th>Headline</th>
                     <th>Message</th>
                     <th>Image Url</th>
                     <th>Edit</th>
                     <th>Delete</th>
                     </tr>
                 </thead>
                 <tbody>
                    {this.renderTableFunction(this.props)}
                 </tbody>
             </table><br /><br/>

             <span  className='copyright'>Copyright <i  className="fa fa-copyright" aria-hidden="true"></i> Fire Hunt Nigeria {new Date().getFullYear()} <br/></span><br /> <br/>

        </div>
    )
   }

}

function mapDispatchToProps(dispatch){
    return bindActionCreators({getHomeSliders,deleteSliderItem},dispatch);
}

export default connect(null,mapDispatchToProps)(SliderTableView);
