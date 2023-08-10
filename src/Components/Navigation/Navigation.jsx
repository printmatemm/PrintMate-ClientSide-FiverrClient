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
import { Link  } from 'react-router-dom';

import './styles.modules.css';

export default function Navigation() {
    const [deviceType, setDeviceType] = useState('laptop');
    const [open, setOpen] = useState(false);

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

    return (
        <>
            <div className="Navigation-Wrapper">
                {deviceType === 'laptop' &&
                    <>
                        <div className="Navigation">
                            <div className='container Navigation-Inner'>
                                <h1 className="Company-Name">Print<span>Mate</span></h1>
                                <div className="Navigation-Icons">
                                    <MailOutlineSharpIcon id="Icon" />
                                    <div className="Navigation-Icons-Text">
                                        <h6><b>Email Address</b></h6>
                                        <h6>printmate@gmail.com</h6>
                                    </div>
                                </div>
                                <div className="Navigation-Icons">
                                    <PhonePausedOutlinedIcon id="Icon" />
                                    <div className="Navigation-Icons-Text">
                                        <h6><b>Phone Number</b></h6>
                                        <h6>+92 123 456 789</h6>
                                    </div>
                                </div>
                                <div className="Navigation-Icons">
                                    <BusinessOutlinedIcon id="Icon" />
                                    <div className="Navigation-Icons-Text">
                                        <h6><b>Address</b></h6>
                                        <h6>123, ABC Street, XYZ City</h6>
                                    </div>
                                </div>
                                <div className="Navigation-Button">
                                    Get Quote
                                </div>
                            </div>
                        </div>
                        <div className="container Navigation-Down">
                            <div className='Navigation-Inner-Down'>
                                <h6>Home</h6>
                                <h6>Shop All Products</h6>
                                <h6>Best Sellers</h6>
                                <h6>Featured Products</h6>
                                <h6>Contact</h6>
                            </div>
                        </div>
                    </>
                }
                {(deviceType === 'tablet' || deviceType==="mobile") &&
                    <>
                        <div className="Navigation">
                            <h1 className="Company-Name">Print<span>Mate</span></h1>
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
                                        <CloseIcon className='ButtonToClose'/>
                                    </div>


                                    <ListItem>
                                    </ListItem>

                                    <div className='MobMenu'>
                                        <Link className="Link" to="/">Home</Link>
                                        <Divider className='Divider' />
                                        <Link className="Link" to="/shop/allproducts/">Shop All Products</Link>
                                        <Divider className='Divider' />
                                        <Link className="Link" to="/shop/popularproducts">Popular Products</Link>
                                        <Divider className='Divider' />
                                        <Link className="Link" to="/shop/featured">Featured Products</Link>
                                        <Divider className='Divider' />
                                        <Link className="Link" to="/aboutus/" >About us</Link>
                                    </div>
                    

                                <div className='Extras'>
                                    <div className="Navigation-Icons">
                                        <MailOutlineSharpIcon id="Icon" styles={{
                                            color: '#ffab00'
                                        }} />
                                        <div className="Navigation-Icons-Text">
                                            <h4><b>Email Address</b></h4>
                                            <h4>printmate@gmail.com</h4>
                                        </div>
                                    </div>
                                    <div className="Navigation-Icons">
                                        <PhonePausedOutlinedIcon id="Icon" />
                                        <div className="Navigation-Icons-Text">
                                            <h4><b>Phone Number</b></h4>
                                            <h5>+92 123 456 789</h5>
                                        </div>
                                    </div>
                                    <div className="Navigation-Icons">
                                        <BusinessOutlinedIcon id="Icon" />
                                        <div className="Navigation-Icons-Text">
                                            <h4><b>Address</b></h4>
                                            <h5>123, ABC Street, XYZ City</h5>
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

