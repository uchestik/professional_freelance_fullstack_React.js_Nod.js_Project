import React from 'react'

const renderTableFunction = ({images,deleteFunction})=>{
    if(images){
        return images.map((image)=>{
            return(
                <tr>
                <td><img style={{width:'200px', height:'auto', borderRadius:'10px'}}  src={image.image} alt={image._id} /></td>
                <td>{image.location}</td>
                <td>{image.caption}</td>
                <td>{image.date}</td>
                <td><button className='btn btn-danger' type='button' onClick={()=>deleteFunction(image._id)}>Delete</button></td>
            </tr>
            )
        })
    }
}

const ServiceImageTable = (props)=>{

    return(
        <div>
            <table className="table table-bordered table-striped table-hover" style={{marginTop:'15px'}}>
                 <thead>
                     <tr>
                     <th>Image Url</th>
                     <th>Location</th>
                     <th>Caption</th>
                     <th>Date</th>
                     <th>Delete</th>
                     </tr>
                 </thead>
                 <tbody>
                    {renderTableFunction(props)}
                 </tbody>
            </table>
        </div>
    )
}

export default ServiceImageTable;