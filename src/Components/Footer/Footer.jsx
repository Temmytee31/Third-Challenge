import React from 'react'
import './Footer.css';
import Logo from "../../assets/Logo.svg";
import Insta from "../../assets/Insta.png";
import Fb from "../../assets/Fb.png";
import Twiter from "../../assets/Twiter.png";
import Pintrest from "../../assets/Pintrest.png";

const Footer = () => {
  return (
    <div className='family'>
        <div className='feed'>
            <div className='instagrams'>
                <div className="ins">
                    <h6>Instagram Feed</h6>
                </div>
                <div className='logos'><img src={Logo} alt="" ></img></div>

                <div className="media">
                    <img src={Insta} alt=""></img>
                    <img src={Fb} alt=""></img>
                    <img src={Twiter} alt=""></img>
                    <img src={Pintrest} alt=""></img>
                </div>
            </div>
            <div className="cont">
                <div className="contact">
                    <h6>CONTACT</h6>
                    <p>5 Rue Dalou, 75015 Paris <br /> <span>Call </span> - +33 156 78 89 56 <br /> <span>benoit@mail.com</span> </p>
                </div>
                <div className='join'>
                    <p> Join our mailing list for updates, <br /> Get news & offers events.</p>
                    <div className='sub'>
                        <input type="email" placeholder='Email' />
                        <button>Subscribe</button>
                    </div>
                </div>
                <div className="hour">
                    <h6>WORKING HOURS</h6>
                    <p> <span>Mon</span> – Fri: 7.00am – 6.00pm <br /> <span>Sat</span>: 7.00am – 6.00pm <br /> <span>Sun</span>: 8.00am – 6.00pm</p>
                </div>
            </div>
        </div>
        <div className='copy'>
            <p>© Copyright - Restaurantate | Designed by <span>VictorFlow</span> Templates - Powered by <span>Webflow</span></p>
        </div>
    </div>
  )
}

export default Footer