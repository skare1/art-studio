import React from 'react'
import inst from './images/social-inst-ic.svg'
import tiktok from './images/social-tiktok-ic.svg'
import vk from './images/social-vk-ic.svg'
import fb from './images/social-fb-ic.svg'

function Social() {
   return(
        <div className="social">
            <a href="#" className="social-item">
                <img src={fb} alt="facebook" className="social-item-img" />
            </a>
            <a href="#" className="social-item">
                <img src={vk} alt="vkontakte" className="social-item-img" />
            </a>
            <a href="#" className="social-item">
                <img src={tiktok} alt="tiktok" className="social-item-img" />
            </a>
            <a href="#" className="social-item">
                <img src={inst} alt="instagram" className="social-item-img" />
            </a>
        </div>
   ) 
}


export default Social