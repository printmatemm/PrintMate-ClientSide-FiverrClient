import React, { useState } from 'react';
import './styles.modules.css';
import MailOutlineSharpIcon from '@mui/icons-material/MailOutlineSharp';
import PhonePausedOutlinedIcon from '@mui/icons-material/PhonePausedOutlined';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import { Link } from 'react-router-dom';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';
export default function Navigation() {

    const Navigate = useNavigate();

    return (
        <>
            <div className="Navigation-Wrapper">
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
                        <Select
                            defaultValue="Business-Cards"
                            variant='standard'
                            
                            onChange={(e) => 
                            {
                                if(e.target.value === "Business-Cards")
                                {
                                    Navigate('/Product/Business-Cards');
                                }
                                else if(e.target.value === "Flyers")
                                {
                                    Navigate('/Product/Flyers');
                                }
                                else if(e.target.value === "Stickers")
                                {
                                    Navigate('/Product/Stickers-and-Labels');
                                }
                            }
                        }
                        >   
                            <MenuItem value="Business-Cards">Business Cards</MenuItem>
                            <MenuItem value="Flyers">Flyers</MenuItem>
                            <MenuItem value="Stickers">Stickers</MenuItem>
                        </Select>
                        <h6>New Products</h6>
                        <h6>Best Sellers</h6>
                        <h6>Contact</h6>
                        <h6>Reviews</h6>
                    </div>
                </div>
            </div>
        </>
    )
}

