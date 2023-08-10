import React from 'react'
import './styles.modules.css'
import { Carousel } from 'antd';
import Navigation from '../../Components/Navigation/Navigation';
import Footer from '../../Components/Navigation/Footer';

export default function LandingPage() {
    return (
        <>
            <Navigation />


            <div className="Landing-Page-Cover">
                <img src='/Cover.png' alt="PrintMate"/>
            </div>


            <Carousel autoplay>
                <div className="container my-5" id="carousel">
                    <div className="carousel-section1">
                        <h1>PrintMate</h1>
                    </div>
                    <div className="carousel-section2">
                        <img src="/BusinessCard.png" alt="PrintMate"/>
                        <h2>Business Cards</h2>
                        <p>Unlock Your Professional Potential with Our Exquisite Business Cards!</p>
                        <ul>
                            <li>Economy Business Cards</li>
                            <li>Folded Business Cards</li>
                            <li>Gloss Business Cards</li>
                            <li>Loyalty Cards</li>
                            <li>Many more..</li>
                        </ul>
                        <div className='carousel-btn'>
                            <button>Shop Business Cards</button>
                        </div>

                    </div>
                </div>
                <div className="container my-5" id="carousel">
                    <div className="carousel-section1">
                        <h1>PrintMate</h1>
                    </div>
                    <div className="carousel-section2">
                        <img src="/Books.png" alt="PrintMate"/>
                        <h2>Books and Booklets</h2>
                        <p>Unlock the World of Knowledge with Our Enchanting Books and Booklets!</p>
                        <ul>
                            <li>Deskpads</li>
                            <li>Stapled Booklets</li>
                            <li>Perfect Bound Booklets</li>
                            <li>Wire Bound Booklets</li>
                            <li>Many more..</li>
                        </ul>
                        <div className='carousel-btn'>
                            <button>Shop Books and Booklets</button>
                        </div>
                    </div>
                </div>
                <div className="container my-5" id="carousel">
                    <div className="carousel-section1">
                        <h1>PrintMate</h1>
                    </div>
                    <div className="carousel-section2">
                        <img src="/Banner.png" alt="Mockup"/>
                        <h2>Banner</h2>
                        <p>Unleash Your Business's Potential with Our Captivating Banners</p>
                        <ul>
                            <li>Exhibition Popups</li>
                            <li>Flags</li>
                            <li>PVC Banners</li>
                            <li>Roller Banners</li>
                            <li>Many more..</li>
                        </ul>
                        <div className='carousel-btn'>
                            <button>Shop Banners</button>
                        </div>
        
                    </div>
                </div>
                </Carousel>

            <div className="ourselves">
                <div className="container ourselves-inner">
                    <div>
                        <div className="ourselves-top">
                            <img src="/Icons/Delivery.png" alt="Delivery" width="45" height="45"></img>
                            <h4>Express Printing</h4>
                        </div>
                        <div className="ourselves-top-p">
                            <p>On-demand printing services for all of your last-minute projects.</p>
                        </div>
                    </div>
                    <div>
                        <div className="ourselves-top">
                            <img src="/Icons/Quality Control.png" alt="Quality" width="30" height="30"></img>
                            <h4>Quality Guaranteed</h4>
                        </div>
                        <div className="ourselves-top-p">
                            <p>We take care of every printing materials to provide high quality printing service</p>
                        </div>
                    </div>
                    <div>
                        <div className="ourselves-top">
                            <img src="/Icons/Customize.png" alt="Customize" width="40" height="40"></img>
                            <h4>Customize Anything</h4>
                        </div>
                        <div className="ourselves-top-p">
                            <p>Customize your printing materials with our easy-to-use online designer.</p>
                        </div>
                    </div>
                    <div>
                        <div className="ourselves-top">
                            <img src="/Icons/Personalized.png" alt="Support" width="40" height="40"></img>
                            <h4>Personalized Service</h4>
                        </div>
                        <div className="ourselves-top-p">
                            <p>Our team of experts is always ready to help you with your printing needs.</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="Grid-Wrapper">
            <div className="container my-5">
                <h2>High Quality Online Printing Services</h2>
            </div>

            <div className="container grid" >
                <div className="grid-1">
                    <img src="/Grid/Flyer.png" alt="Mockup"/>
                    <div className="grid-1div" onMouseEnter={()=>{
                        document.getElementById("Flyer-Div").style.display="block"
                    }}
                    onMouseLeave={()=>{
                        document.getElementById("Flyer-Div").style.display="none"
                    }}
                    >
                        <h5>Flyer</h5>
                        <p id="Flyer-Div">Promote your business with high quality flyers!</p>
                        <h6>Shop Now</h6>
                    </div>
                </div>
                <div className="grid-1">
                    <img src="/Grid/Business Card.png" alt="PrintMate" />
                    <div className="grid-1div" onMouseEnter={()=>{
                        document.getElementById("Flyer-Div-2").style.display="block"
                    }}
                    onMouseLeave={()=>{
                        document.getElementById("Flyer-Div-2").style.display="none"
                    }}
                    >
                        <h5>Business Card</h5>
                        <p id="Flyer-Div-2">Promote your business with high quality flyers!</p>
                        <h6>Shop Now</h6>
                    </div>
                </div>
                <div className="grid-1">
                    <img src="/Grid/Poster.png" alt="PrintMate"/>
                    <div className="grid-1div" onMouseEnter={()=>{
                        document.getElementById("Flyer-Div-3").style.display="block"
                    }}
                    onMouseLeave={()=>{
                        document.getElementById("Flyer-Div-3").style.display="none"
                    }}
                    >
                        <h5>Posters</h5>
                        <p id="Flyer-Div-3">Promote your business with high quality flyers!</p>
                        <h6>Shop Now</h6>
                    </div>
                </div>
                <div className="grid-1">
                    <img src="/Grid/Merch.png" alt="PrintMate"/>
                    <div className="grid-1div" onMouseEnter={()=>{
                        document.getElementById("Flyer-Div-4").style.display="block"
                    }}
                    onMouseLeave={()=>{
                        document.getElementById("Flyer-Div-4").style.display="none"
                    }}
                    >
                        <h5>Merchandise</h5>
                        <p id="Flyer-Div-4">Promote your business with high quality flyers!</p>
                        <h6>Shop Now</h6>
                    </div>
                </div>
                <div className="grid-1">
                    <img src="/Grid/Stationary.png" alt="PrintMate"/>
                    <div className="grid-1div" onMouseEnter={()=>{
                        document.getElementById("Flyer-Div-5").style.display="block"
                    }}
                    onMouseLeave={()=>{
                        document.getElementById("Flyer-Div-5").style.display="none"
                    }}
                    >
                        <h5>Business Stationery</h5>
                        <p id="Flyer-Div-5">Promote your business with high quality flyers!</p>
                        <h6>Shop Now</h6>
                    </div>
                </div>
                <div className="grid-1">
                    <img src="/Grid/Invites.png" alt="PrintMate"/>
                    <div className="grid-1div" onMouseEnter={()=>{
                        document.getElementById("Flyer-Div-6").style.display="block"
                    }}
                    onMouseLeave={()=>{
                        document.getElementById("Flyer-Div-6").style.display="none"
                    }}
                    >
                        <h5>Cards & Invites</h5>
                        <p id="Flyer-Div-6">Promote your business with high quality flyers!</p>
                        <h6>Shop Now</h6>
                    </div>
                </div>
                <div className="grid-1">
                    <img src="/Grid/Calender.png"  alt="PrintMate"/>
                    <div className="grid-1div" onMouseEnter={()=>{
                        document.getElementById("Flyer-Div-7").style.display="block"
                    }}
                    onMouseLeave={()=>{
                        document.getElementById("Flyer-Div-7").style.display="none"
                    }}
                    >
                        <h5>Calenders</h5>
                        <p id="Flyer-Div-7">Promote your business with high quality flyers!</p>
                        <h6>Shop Now</h6>
                    </div>
                </div>
                <div className="grid-1">
                    <img src="/Grid/Banners.jpg" alt="PrintMate"/>
                    <div className="grid-1div" onMouseEnter={()=>{
                        document.getElementById("Flyer-Div-8").style.display="block"
                    }}
                    onMouseLeave={()=>{
                        document.getElementById("Flyer-Div-8").style.display="none"
                    }}
                    >
                        <h5>Banners</h5>
                        <p id="Flyer-Div-8">Promote your business with high quality flyers!</p>
                        <h6>Shop Now</h6>
                    </div>
                </div>
                


            </div>

            </div>


            <div className="container my-5">
                <h2 className='Headingg'>About Us</h2>
            </div>

            <div className="container about-us">
                <div className="about-us-2">
                    <h2>Our Experience Spans Every Industry</h2>

                    <p>PrintMate is a leading online printing company, offering high quality printing services and solutions to on-demand customers worldwide. PrintMate serves thousands of on-demand business printing and graphic printing orders online daily, using high-quality press printing and a robust yet simple and easy-to-use online ordering system, resulting in high-end printing services and reliable color printing at discount printing costs.</p>
                    <div className='aboutus-div'>
                        Appropriate for your spacific business
                    </div>
                    <div className='aboutus-div'>
                        Design and Development
                    </div>
                    <div className='aboutus-div'>
                        Online Support and Action
                    </div>

                    <div className='about-btn'>
                        <button>Learn More</button>
                    </div>
                </div>
                <div className="about-us-1">
                    <img src="/Mockup.png" alt="Mockup" />
                </div>

            </div>


            <Footer/>

            
        </>
    )
}
