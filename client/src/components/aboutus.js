import React from 'react'

const AboutUs=({aboutUs})=>{
    if(aboutUs){
        return aboutUs.map((item)=>{
            return(
                <div className='container' id='HomeSection2'>
                    <div className='text-center aboutCard' style={{width:'80%',margin:'40px auto'}}>
                        <div className='text-center home-section2-header'>{item.header}</div><br/>
                        <div className='row'>
                            <div className='col-md-12'>
                                <div>
                                    <div className='about-box'>
                                        {item.paragraph1}
                                    </div><br/>
                                    <div className='about-box'>
                                        {item.paragraph2}
                                    </div><br/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
    }
}

export default AboutUs;