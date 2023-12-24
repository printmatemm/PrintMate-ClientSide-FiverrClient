import React, { useState, useEffect } from 'react';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Drawer from '@mui/material/Drawer';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import MailOutlineSharpIcon from '@mui/icons-material/MailOutlineSharp';
import PhonePausedOutlinedIcon from '@mui/icons-material/PhonePausedOutlined';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import { Link, useNavigate } from 'react-router-dom';

import './styles.modules.css';

export default function Navigation() {
    const Navigate = useNavigate()
    const [deviceType, setDeviceType] = useState('laptop');
    const [open, setOpen] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const [sellerDropDown, setSellerDropdown] = useState(false);
    const [FeaturedDropDown, setFeaturedDropDown] = useState(false);
    

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
        setSellerDropdown(false)
        setFeaturedDropDown(false)
    };
    const toggleSellerDropdwon = () => {
        setSellerDropdown(!sellerDropDown)
        setShowDropdown(false)
        setFeaturedDropDown(false)
    }
    const toggleFeaturedDropdwon = () => {
        setFeaturedDropDown(!FeaturedDropDown)
        setShowDropdown(false)
        setSellerDropdown(false)
    }

    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;
            if (screenWidth < 480) {
                setDeviceType('mobile');
            } else if (screenWidth < 1024) {
                setDeviceType('tablet');
            } else {
                setDeviceType('laptop');
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    const DropDown = () => {
        return (
            <div className='DropDown-Container' onMouseLeave={() => { setShowDropdown(false) }} onClick={() => {
                setShowDropdown(false)
            }}>
                <div className='DropDown'>
                    <div className='DropDown-Item-Box'>
                        <Link className='D-Link' to="/All-Products">
                            <h4>View All Products</h4>
                        </Link>
                    </div>

                    <div className='DropDown-Item'>
                        <Link className='D-Link' to="/Product/Business-Cards">
                            <div className="DropDown-Link">
                                <img src="/BusinessCards/Business-Product1.png" alt="Business Cards" width={150} height={150}></img>
                                <h5>Business Cards</h5>
                            </div>
                        </Link>
                    </div>
                    <div className='DropDown-Item'>
                        <Link className='D-Link' to="/Product/Calenders">
                            <div className="DropDown-Link">
                                <img src="/Calenders/Calender-Cover.jpg" alt="Calenders" width={150} height={150}></img>
                                <h5>Calenders</h5>
                            </div>
                        </Link>
                    </div>
                    <div className='DropDown-Item'>
                        <Link className='D-Link' to="/Product/Banners">
                            <div className="DropDown-Link">
                                <img src="/Banners/Banner-Product1.jpg" alt="Banners" width={150} height={150}></img>
                                <h5>Banners</h5>
                            </div>
                        </Link>
                    </div>
                    <div className='DropDown-Item'>
                        <Link className='D-Link' to="/Product/Business-Stationery">
                            <div className="DropDown-Link">
                                <img src="/Stationary/Stationary-Product1.jpg" alt="Business Stationery" width={150} height={150}></img>
                                <h5>Stationery</h5>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className='DropDown'>
                    <div className='DropDown-Item'>
                        <Link className='D-Link' to="/Product/Foils">
                            <div className="DropDown-Link">
                                <img src="/Foil/Foil-Product1.jpg" alt="Foils" width={150} height={150}></img>
                                <h5>Foils</h5>
                            </div>
                        </Link>
                    </div>
                    <div className='DropDown-Item'>
                        <Link className='D-Link' to="/Product/Merchandise">
                            <div className="DropDown-Link">
                                <img src="/Merchandise/Merchendise-Product1.jpg" alt="Merchandise" width={150} height={150}></img>
                                <h5>Merchandise</h5>
                            </div>
                        </Link>
                    </div>
                    <div className='DropDown-Item'>
                        <Link className='D-Link' to="/Product/Posters">
                            <div className="DropDown-Link">
                                <img src="/Posters/Posters-Product6.jpg" alt="Posters" width={150} height={150}></img>
                                <h5>Posters</h5>
                            </div>
                        </Link>
                    </div>
                    <div className='DropDown-Item'>
                        <Link className='D-Link' to="/Product/Books-and-Booklets">
                            <div className="DropDown-Link">
                                <img src="/Booklets/Booklets-Product3.jpg" alt="Books and Booklets" width={150} height={150}></img>
                                <h5>Booklets</h5>
                            </div>
                        </Link>
                    </div>
                    <div className='DropDown-Item'>
                        <Link className='D-Link' to="/Product/Stickers-and-Labels">
                            <div className="DropDown-Link">
                                <img src="/Stickers/Stickers-Product1.jpg" alt="Stickers and Labels" width={150} height={150}></img>
                                <h5>Stickers and Labels</h5>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }

    const BestSellers = () => {
        return (
            <div className='DropDown-Container' onMouseLeave={() => { setSellerDropdown(false) }} onClick={() => {
                setSellerDropdown(false)
            }}>
                <div className='DropDown'>
                    <div className='DropDown-Item'>
                        <Link className='D-Link' to="/Product/A-Frame">
                            <div className="DropDown-Link">
                                <img src="/AFrames/AFrame-Product1-1.png" alt="A-Frame" width={150} height={150}></img>
                                <h5>A Frames</h5>
                            </div>
                        </Link>
                    </div>
                    <div className='DropDown-Item'>
                        <Link className='D-Link' to="/Product/Business-Cards">
                            <div className="DropDown-Link">
                                <img src="/BusinessCards/Business-Product1.png" alt="Business Cards" width={150} height={150}></img>
                                <h5>Business Cards</h5>
                            </div>
                        </Link>
                    </div>
                    <div className='DropDown-Item'>
                        <Link className='D-Link' to="/Product/Banners">
                            <div className="DropDown-Link">
                                <img src="/Banners/Banner-Product1.jpg" alt="Banners" width={150} height={150}></img>
                                <h5>Banners</h5>
                            </div>
                        </Link>
                    </div>
                    <div className='DropDown-Item'>
                        <Link className='D-Link' to="/Product/Cardboard Signs">
                            <div className="DropDown-Link">
                                <img src="/Cardboard-Signs/CardboardSigns-Product2.jpg" alt="Cardboard Signs" width={150} height={150}></img>
                                <h5>Cardboard Signs</h5>
                            </div>
                        </Link>
                    </div>




                </div>

                <div className='DropDown'>
                    <div className='DropDown-Item'>
                        <Link className='D-Link' to="/Product/Correx">
                            <div className="DropDown-Link">
                                <img src="/Correx/Correx-Product1.jpg" alt="Correx" width={150} height={150}></img>
                                <h5>Correx</h5>
                            </div>
                        </Link>
                    </div>
                    <div className='DropDown-Item'>
                        <Link className='D-Link' to="/Product/Aluminium-Signs">
                            <div className="DropDown-Link">
                                <img src="/Aluminum/Aluminium-Product1.jpg" alt="Aluminium Signs" width={150} height={150}></img>
                                <h5>Aluminium Signs</h5>
                            </div>
                        </Link>
                    </div>
                    <div className='DropDown-Item'>
                        <Link className='D-Link' to="/Product/Folded-Leaflets">
                            <div className="DropDown-Link">
                                <img src="/FoldedLeaflets/FoldedLeaflets-Product1.jpg" alt="Folded Leaflets" width={150} height={150}></img>
                                <h5>Folded Leaflets</h5>
                            </div>
                        </Link>
                    </div>
                    <div className='DropDown-Item'>
                        <Link className='D-Link' to="/Product/Flyers">
                            <div className="DropDown-Link">
                                <img src="/Flyers/Flyers-Product1.jpg" alt="Flyers" width={150} height={150}></img>
                                <h5>Flyers</h5>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }

    const Featured = () => {
        return(
            <div className='DropDown-Container' onMouseLeave={() => { setFeaturedDropDown(false) }} onClick={() => {
                setFeaturedDropDown(false)
            }}>
                <div className='DropDown'>
                    <div className='DropDown-Item'>
                        <Link className='D-Link' to="/Product/Business-Stationery">
                            <div className="DropDown-Link">
                                <img src="/Stationary/Stationary-Product1.jpg" alt="Business Stationery" width={150} height={150}></img>
                                <h5>Stationery</h5>                                
                            </div>
                        </Link>
                    </div>
                    <div className='DropDown-Item'>
                        <Link className='D-Link' to="/Product/Menus">
                            <div className="DropDown-Link">
                                <img src="/Menus/Menus-Product1.jpg" alt="Menus" width={150} height={150}></img>
                                <h5>Menus</h5>
                            </div>
                        </Link>
                    </div>
                    <div className='DropDown-Item'>
                        <Link className='D-Link' to="/Product/Perforation">
                            <div className="DropDown-Link">
                                <img src="/Perforation/Perforation-Product1.jpg" alt="Perforation" width={150} height={150}></img>
                                <h5>Perforation</h5>
                            </div>
                        </Link>
                    </div>
                    <div className='DropDown-Item'>
                        <Link className='D-Link' to="/Product/Cardboard Signs">
                            <div className="DropDown-Link">
                                <img src="/Cardboard-Signs/CardboardSigns-Product2.jpg" alt="Cardboard Signs" width={150} height={150}></img>
                                <h5>Cardboard Signs</h5>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>                    
        )
    }           

    


    return (
        <>
            <div className="Navigation-Wrapper">
                {deviceType === 'laptop' &&
                    <>
                        <div className="Navigation">
                            <div className='container Navigation-Inner'>
                                <img src="/Logo.png" alt="Logo" width={150} className="Company-Name" height={50}></img>
                                <div className="Navigation-Icons">
                                    <MailOutlineSharpIcon id="Icon" />
                                    <div className="Navigation-Icons-Text">
                                        <h6><b>Email Address</b></h6>
                                        <h6>mansoor@printmate.uk</h6>
                                    </div>
                                </div>
                                <div className="Navigation-Icons">
                                    <PhonePausedOutlinedIcon id="Icon" />
                                    <div className="Navigation-Icons-Text">
                                        <h6><b>Phone Number</b></h6>
                                        <h6>01908 915388</h6>
                                    </div>
                                </div>
                                <div className="Navigation-Icons">
                                    <BusinessOutlinedIcon id="Icon" />
                                    <div className="Navigation-Icons-Text">
                                        <h6><b>Address</b></h6>
                                        <h6>21 Radcliffe Street, Wolverton, Milton Keynes, MK12 5DQ</h6>
                                    </div>
                                </div>
                                <div className="Navigation-Button" onClick={()=>{
                                    Navigate('/All-Products')
                                }}>
                                    Get Quote
                                </div>
                            </div>
                        </div>
                        <div className="container Navigation-Down">
                            <div className='Navigation-Inner-Down'>
                                <h6><Link className="Link" to="/" >
                                    Home
                                </Link>
                                </h6>
                                <div>
                                    <h6 onClick={toggleDropdown} onMouseEnter={toggleDropdown}>Shop All Products</h6>
                                    {showDropdown && <DropDown></DropDown>}
                                </div>
                                <div>
                                    <h6 onClick={toggleSellerDropdwon} onMouseEnter={toggleSellerDropdwon}>Best Sellers</h6>
                                    {sellerDropDown && <BestSellers></BestSellers>}
                                </div>
                                <div>
                                    <h6 onClick={toggleFeaturedDropdwon} onMouseEnter={toggleFeaturedDropdwon}>Featured Products</h6>
                                    {FeaturedDropDown && <Featured></Featured>}
                                </div>
                                <h6 onClick={()=>{
                                    //redirect to platenkeys4cars.co.uk in new tab
                                    window.location.href = 'https://platenkeys4cars.co.uk/'
                                }}>Order Plates</h6>
                                <h6 onClick={()=>{
                                    Navigate('/aboutus')
                                }}>Contact</h6>

                            </div>

                        </div>
                    </>
                }
                {(deviceType === 'tablet' || deviceType === "mobile") &&
                    <>
                        <div className="Navigation">
                            <img src="/Logo.png" alt="Logo" width={170} className="Company-Name" height={60}></img>                            
                            <IconButton onClick={() => setOpen(!open)}>
                                <MenuIcon className='Menu' />
                            </IconButton>
                            {open && <Drawer
                                anchor={'right'}
                                open={open}
                                onClose={() => setOpen(false)}
                                Paper
                                component='nav'
                                styles={{
                                    width: '25vw',
                                }}
                                className={`AnimatedDrawer ${open ? 'Open' : 'Closed'}`}
                            >
                                <div style={{ padding: 50 }} className='Sidebar'>
                                    <div className='CloseBtn'
                                        onClick={() => setOpen(false)}
                                    >
                                        <CloseIcon className='ButtonToClose' />
                                    </div>


                                    <ListItem>
                                    </ListItem>

                                    <div className='MobMenu'>
                                        <Link className="Link" to="/">Home</Link>
                                        <Divider className='Divider' />
                                        <Link className="Link" to="/all-products/">Shop All Products</Link>
                                        <Divider className='Divider' />
                                        <Link className="Link" to="/best-sellers">Popular Products</Link>
                                        <Divider className='Divider' />
                                        <Link className="Link" to="/featured-products">Featured Products</Link>
                                        <Divider className='Divider' />
                                        <p className="Link" onClick={
                                            ()=>{
                                                window.location.href = 'https://platenkeys4cars.co.uk/'
                                            }
                                        }>Order Plates</p>
                                        <Divider className='Divider' />
                                        <Link className="Link" to="/aboutus/" >About us</Link>
                                    </div>


                                    <div className='Extras'>
                                        <div className="Navigation-Icons">
                                            <MailOutlineSharpIcon id="Icon" styles={{
                                                color: '#ffab00'
                                            }} />
                                            <div className="Navigation-Icons-Text">
                                                <h6><b>Email Address</b></h6>
                                                <h6>mansoor@printmate.uk</h6>
                                            </div>
                                        </div>
                                        <div className="Navigation-Icons">
                                            <PhonePausedOutlinedIcon id="Icon" />
                                            <div className="Navigation-Icons-Text">
                                                <h6><b>Phone Number</b></h6>
                                                <h6>01908 915388</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Drawer>}
                        </div>
                    </>
                }
            </div>


        </>
    )
}
