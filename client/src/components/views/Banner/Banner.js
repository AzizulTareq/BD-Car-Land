import React, { useState } from 'react'
import './Banner.css'

import { Carousel } from 'react-bootstrap'
import banner1 from '../../../Images/banner1.jpg'
import banner2 from '../../../Images/banner2.jpg'
import banner3 from '../../../Images/banner3.jpg'


const Banner = () => {
	
    return (
        <div>
           <section data-description="bold/cursive">
	<div className="wrapper">
	 <h1 className="beta uppercase montserrat regular" style={{color: '#fff'}}>
		FIND YOUR NEXT CAR HERE 
		</h1>
	 </div>
 </section>
        </div>
    )
}

export default Banner
