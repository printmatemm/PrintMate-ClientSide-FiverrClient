import React from 'react'
import './styles.modules.css'
import MailOutlineSharpIcon from '@mui/icons-material/MailOutlineSharp';
import PhonePausedOutlinedIcon from '@mui/icons-material/PhonePausedOutlined';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';

export default function Navigation() {
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
                        <h6>Shop All Products</h6>
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
