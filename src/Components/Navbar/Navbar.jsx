import React from "react";
import './Navbar.css';
import Logo from "../../assets/Logo.svg";
import Cart from "../../assets/Cart-Icon.png";
import Insta from "../../assets/Insta.png";
import Fb from "../../assets/Fb.png";
import Twiter from "../../assets/Twiter.png";
import Pintrest from "../../assets/Pintrest.png";


const Navbar = () => {
    return (
        <div className="navbar">
            <div className="welcome">
                <div>
                    <button className="call">Call - 987 654 321</button>
                </div>
                <div className="taste">
                    <img src={Logo} alt=""></img>
                </div>
                <div className="cart">
                    <img src={Cart} alt=""></img>
                </div>
                <div>
                    <button className="reserve">Reservation</button>
                </div>
            </div>
            <div className="social-media">
                <div className="social">
                    <div className="menu">
                        <p>Homes</p>
                        <p>About</p>
                        <p>Menu</p>
                        <p>Reservation</p>
                        <p>Gallery</p>
                        <p>Blog</p>
                        <p>Contact</p>
                    </div>
                    <div className="media">
                        <img src={Insta} alt=""></img>
                        <img src={Fb} alt=""></img>
                        <img src={Twiter} alt=""></img>
                        <img src={Pintrest} alt=""></img>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Navbar