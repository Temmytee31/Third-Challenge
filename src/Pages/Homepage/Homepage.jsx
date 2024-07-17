import react from "react";
import './Homepage.css';
import image from "../../assets/Image.png";
import Location from "../../assets/Location.png";
import Group from "../../assets/Group.png";
import Reserve from "../../assets/Reserve.png";
import Table from "../../assets/Table.png"
import food from "../../assets/food.png"
import blue from "../../assets/blue.png"
import snack from "../../assets/snack.png"
import onion from "../../assets/onion.png"
import tomatoes from "../../assets/tomatoes.png"
import Pattern from "../../assets/Pattern.png"
import sauce from "../../assets/sauce.png"
import beef from "../../assets/beef.png"
import curry from "../../assets/curry.png"
import potatoes from "../../assets/potatoes.png"
import apple from "../../assets/apple.png"
import lemon from "../../assets/lemon.png"
import males from "../../assets/males.png"
import female from "../../assets/female.png"
import male from "../../assets/male.png"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { EVENT_AUTOPLAY_PLAY, EVENT_AUTOPLAY_PLAYING } from "@splidejs/splide";


const Homepage = () => {
    return (
        <div>
            <section className="hero-section">
                <div className="general">
                    <div className="hero">
                        <h1>Welcome to Restaurantate</h1>
                        <p>Simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy .
                        </p>
                        <button>View Menu</button>
                    </div>
                    <div className="image">
                        <img src={image} alt=""></img>
                    </div>
                    </div>
            </section>
            <section className="place">
                <div className="parent">
                    <div className="location">
                        <div className="locate">
                            <img className="cate" src={Location} alt=""></img>
                        </div>
                        <div className="river">
                            <h6>Locate Us</h6>
                            <p>Riverside 25, San Francisco, California</p>
                        </div>
                    </div>
                    <div className="open">
                        <div className="group">
                            <img className="roup" src={Group} alt=""></img>
                        </div>
                        <div className="hours">
                            <h6>Open Hours</h6>
                            <p>Mon To Fri 9:00 AM - 9:00 PM</p>
                        </div>
                    </div>
                    <div className="serve">
                        <div className="Reserve">
                            <img className="rent" src={Reserve} alt=""></img>
                        </div>
                        <div className="hired">
                            <h6>Reservation</h6>
                            <p>hirestaurantate@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className="table">
                    <div className="cup">
                        <img src={Table} alt=""></img>
                    </div>
                    <div className="story">
                        <div className="letter">
                            <h6>The Story</h6>
                            <p>Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 
                                'Content here, content gfshere', makinlook like readable English. Many desktop publishing packages.
                            </p>
                        </div>
                        <div className="date">
                            <div className="year">
                                <h6>1996</h6>
                                <p>Lorem Ipsum is that it has a more-or-less normal distribution </p>
                            </div>
                            <div className="years">
                                <h6>2021</h6>
                                <p>Lorem Ipsum is that it has a more-or-less normal Content content </p>
                            </div>
                        </div>
                        <div className="fine">
                            <p className="yes">JOSEFINE</p>
                            <p className="no">Josefine</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="special">
                <div className="offer">
                    <div className="all">
                        <h6>MENU</h6>
                        <h5>Try Our Special Offer</h5>
                        <p>
                        Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to 
                        using 'Content here, content making it look like readable English.
                        </p>
                        <img src={food} alt=""></img>
                        <div><button className="dishes">See all dishes</button></div>
                    </div>
                    <div className="starter">
                        <div>
                            <div className="scallop">
                                <h5>Starters</h5>
                                <div className="raw">
                                    <img src={blue} alt=""></img>
                                    <div className="erquy">
                                        <h6>Raw Scallops from Erquy</h6>
                                        <div className="truffle">
                                            <div className="candle">
                                                <p>Candied Jerusalem artichokes, truffle</p>
                                            </div>
                                            <div className="empty"><img src={Pattern} alt=""></img> </div>
                                            <div className="dollar">$40</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="raw">
                                    <img src={snack} alt="" ></img>
                                    <div className="erquy">
                                        <h6>Spring Roll</h6>
                                        <div className="truffle">
                                            <div className="candle">
                                                <p>Candied Jerusalem artichokes, truffle</p>
                                            </div>
                                            <div className="empty"><img src={Pattern} alt=""></img> </div>
                                            <div className="dollar">$20</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="raw">
                                    <img src={onion} alt="" ></img>
                                    <div className="erquy">
                                        <h6>French Onion Soup</h6>
                                        <div className="truffle">
                                            <div className="candle">
                                                <p>Candied Jerusalem artichokes, truffle</p>
                                            </div>
                                            <div className="empty"><img src={Pattern} alt=""></img> </div>
                                            <div className="dollar">$25</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="raw">
                                    <img src={tomatoes} alt="" ></img>
                                    <div className="erquy">
                                        <h6>Tomato Bruschetta</h6>
                                        <div className="truffle">
                                            <div className="candle">
                                                <p>Candied Jerusalem artichokes, truffle</p>
                                            </div>
                                            <div className="empty"><img src={Pattern} alt=""></img> </div>
                                            <div className="dollar">$30</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="scallop">
                                <h5>Main Dish</h5>
                                <div className="raw">
                                    <img src={sauce} alt=""></img>
                                    <div className="erquy">
                                        <h6>Grilled Salmon with Dil Sauce</h6>
                                        <div className="truffle">
                                            <div className="candle">
                                                <p>Candied Jerusalem artichokes, truffle</p>
                                            </div>
                                            <div className="empty"><img src={Pattern} alt=""></img> </div>
                                            <div className="dollar">$40</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="raw">
                                    <img src={beef} alt="" ></img>
                                    <div className="erquy">
                                         <h6>Roast Beef with Vegetable</h6>
                                        <div className="truffle">
                                            <div className="candle">
                                                <p>Candied Jerusalem artichokes, truffle</p>
                                            </div>
                                            <div className="empty"><img src={Pattern} alt=""></img> </div>
                                            <div className="dollar">$20</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="raw">
                                    <img src={curry} alt="" ></img>
                                    <div className="erquy">
                                        <h6>Marrkesh Vegetetarian Curruy</h6>
                                        <div className="truffle">
                                            <div className="candle">
                                                <p>Candied Jerusalem artichokes, truffle</p>
                                            </div>
                                            <div className="empty"><img src={Pattern} alt=""></img> </div>
                                            <div className="dollar">$25</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="raw">
                                    <img src={potatoes} alt="" ></img>
                                    <div className="erquy">
                                        <h6>Spicy Vegan Potato Curry</h6>
                                        <div className="truffle">
                                            <div className="candle">
                                                <p>Candied Jerusalem artichokes, truffle</p>
                                            </div>
                                            <div className="empty"><img src={Pattern} alt=""></img> </div>
                                            <div className="dollar">$30</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="scallop">
                                <h5>Dessert</h5>
                                <div className="raw">
                                    <img src={apple} alt=""></img>
                                    <div className="erquy">
                                        <h6>Apple Pie with Cream</h6>
                                        <div className="truffle">
                                            <div className="candle">
                                                <p>Candied Jerusalem artichokes, truffle</p>
                                            </div>
                                             <div className="empty"><img src={Pattern} alt=""></img> </div>
                                            <div className="dollar">$40</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="raw">
                                    <img src={lemon} alt="" ></img>
                                    <div className="erquy">
                                        <h6>Lemon Meringue Pie</h6>
                                        <div className="truffle">
                                            <div className="candle">
                                                <p>Candied Jerusalem artichokes, truffle</p>
                                            </div>
                                            <div className="empty"><img src={Pattern} alt=""></img> </div>
                                            <div className="dollar">$20</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="customer">
                <div className="testimon">
                    <p>TESTIMONIAL</p>
                    <h6>What our clients say</h6>
                </div>
                <div className="hear"><p>We love to hear from customers, so please leave a comment or say hello in an email.</p></div>
                <Splideoptions= {{
                    arrows: false,
                    autoplay: true,
                    perPage: 3,
                    speed: 500,
                     
                }}>
                    <div className="mine">
                        <SplideSlide className="personal">
                                <div className="person">
                                    <div className="males">
                                        <img src={males} alt=""></img>
                                    </div>
                                    <div className="daniyal">
                                        <h5>Daniyal Sppra</h5>
                                        <h6>Newyork</h6>
                                    </div>
                                </div>
                                <div className="bord"></div>
                                <p className="profess">"It is professional, considers everyone's time, can think about the  There are many 
                                    variations of passages whole probls small niche, friendly.
                                </p>
                        </SplideSlide> 
                        <SplideSlide className="personal">
                                <div className="person">
                                    <div className="males">
                                        <img src={female} alt=""></img>
                                    </div>
                                    <div className="daniyal">
                                        <h5>Natasha D</h5>
                                        <h6>Salt Lake City</h6>
                                    </div>
                                </div>
                                <div className="bord"></div>
                                <p className="profess">""It is professional, considers everyone's time, can think 
                                    about the  There are many variations of passages.
                                </p>
                        </SplideSlide>
                        <SplideSlide className="personal">
                                <div className="person">
                                    <div className="males">
                                        <img src={male} alt=""></img>
                                    </div>
                                    <div className="daniyal">
                                        <h5>Jack Sparrow</h5>
                                        <h6>San Diego</h6>
                                    </div>
                                </div>
                                <div className="bord"></div>
                                <p className="profess">"It is professional, considers everyone's time, can think about 
                                    the  There are many  passages whole probls small niche, friendly.
                                </p>
                        </SplideSlide>
                        <SplideSlide className="personal">
                                <div className="person">
                                    <div className="males">
                                        <img src={males} alt=""></img>
                                    </div>
                                    <div className="daniyal">
                                        <h5>Daniyal Sppra</h5>
                                        <h6>Newyork</h6>
                                    </div>
                                </div>
                                <div className="bord"></div>
                                <p className="profess">"It is professional, considers everyone's time, can think about the  There are many 
                                    variations of passages whole probls small niche, friendly.
                                </p>
                        </SplideSlide> 
                        <SplideSlide className="personal">
                                <div className="person">
                                    <div className="males">
                                        <img src={female} alt=""></img>
                                    </div>
                                    <div className="daniyal">
                                        <h5>Natasha D</h5>
                                        <h6>Salt Lake City</h6>
                                    </div>
                                </div>
                                <div className="bord"></div>
                                <p className="profess">""It is professional, considers everyone's time, can think 
                                    about the  There are many variations of passages.
                                </p>
                        </SplideSlide>
                        <SplideSlide className="personal">
                                <div className="person">
                                    <div className="males">
                                        <img src={male} alt=""></img>
                                    </div>
                                    <div className="daniyal">
                                        <h5>Jack Sparrow</h5>
                                        <h6>San Diego</h6>
                                    </div>
                                </div>
                                <div className="bord"></div>
                                <p className="profess">"It is professional, considers everyone's time, can think about 
                                    the  There are many  passages whole probls small niche, friendly.
                                </p>
                        </SplideSlide>
                    </div>
                </Splide>
            </section>
        </div>
    )
}

export default Homepage