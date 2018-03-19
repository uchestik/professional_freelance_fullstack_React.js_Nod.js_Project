import React from 'react'
import {Link} from 'react-router-dom'

const SideMenu =()=>{
    return (
        <div className='pull-left sidebar'>
            <ul>
                <li>
                    <Link to='/sliders/new'><i className="far fa-file-alt"></i> New Slider Form</Link>
                </li>
                <li>
                    <Link to='/sliders'><i className="far fa-images"></i>  Sliders Delete/Edit</Link>
                </li>
                <li>
                    <Link to='/aboutdashboard'><i className="far fa-address-card"></i> About Us Delete/Edit</Link>
                </li>
                <li>
                    <Link to='/service/dashboard'><i className="fas fa-wrench"></i> Services Add/Delete/Edit</Link>
                </li>
                <li>
                    <Link to='/project/dashboard'><i className="far fa-folder-open"></i> Projects Add/Delete/Edit</Link>
                </li>
            </ul>
        </div>
    )
}

export default SideMenu;