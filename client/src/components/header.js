import React,{Component} from 'react'
import {Link} from 'react-router-dom'

class Header extends Component{

    renderHeader = ()=>{
        return(
          <nav class="navbar navbar-toggleable-md navbar-light bg-faded">
            <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <Link class="navbar-brand" to="/">Navbar</Link>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <Link class="nav-item nav-link active" to="/">Home <span class="sr-only">(current)</span></Link>
                <Link class="nav-item nav-link" to="/dashboard">Dashboard</Link>
                
              </div>
            </div>
          </nav>
        )
    }

    render(){

        return(
            <div>
                {this.renderHeader()}
            </div>
        )
    }
}

export default Header;
