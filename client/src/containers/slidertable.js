import React,{Component} from 'react'
import {getHomeSliders} from '../actions'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import SliderTableView from '../components/slidertableview'

class SliderTable extends Component{

    componentDidMount(){
        this.props.getHomeSliders()
    }

    renderSliderTable = (props) =>{
        const {sliders} = props;
        if(sliders){
            return <SliderTableView 
                data={sliders.sliders}
            />
        }
    }

    render(){

        return(
            <div>
                {this.renderSliderTable(this.props)}
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        sliders:state.HomeSliders
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({getHomeSliders},dispatch)
}


export default connect(mapStateToProps,mapDispatchToProps)(SliderTable);