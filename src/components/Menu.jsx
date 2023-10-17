import React from 'react'
import site_logo from './images/site-logo.svg'
import section2 from './images/section2-ic.svg'
import section3 from './images/section3-ic.svg'
import section4 from './images/section4-ic.svg'
import section5 from './images/section5-ic.svg'
import section6 from './images/section6-ic.svg'

function Menu() {
	return(
		<div className="nav-menu">
        <a href="#" className="menu-item logo" >
            <img src={site_logo} alt="logo" className="logo-img" />
        </a>
        <a href="#" className="menu-item">
            <img src={section2} alt="about" className="item-img" />
        </a>
        <a href="#" className="menu-item">
            <img src={section3} alt="feature" className="item-img" />
        </a>
        <a href="#" className="menu-item">
            <img src={section4} alt="photographer" className="item-img" />
        </a>
        <a href="#" className="menu-item">
            <img src={section5} alt="portfolio" className="item-img" />
        </a>
        <a href="#" className="menu-item">
            <img src={section6} alt="contact" className="item-img" />
        </a>
    </div>
	)
}

export default Menu