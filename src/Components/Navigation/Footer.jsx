import React from 'react'
import './styles.modules.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer() {
    return (
        <>
            <div className="footer">
                <div className="container footer-inner">
                    <div className="footer-1">
                        <h3>PrintMate</h3>
                        <p>
                            A print is a plot of land that is used to grow crops and raise livestock, as in our farm, we raise sheep and sell their wool. The word farm is also used as a verb to mean to work land.</p>
                    </div>
                    <div className="footer-1">
                        <h3>Get in Touch</h3>
                        <ul>
                            <li>Tel: 01908 915388</li>
                            <li>Email: mansoor@printmate.uk</li>
                            <li>21 Radcliffe Street, Wolverton, Milton Keynes, MK12 5DQ</li>
                        </ul>
                    </div>
                    <div className="footer-1">
                        <h3>Want more information?</h3>
                        <p>Request a quotation to get more information.</p>
                        <button>Get Quote</button>
                        <p><b>Print Excellence, Guaranteed</b></p>
                    </div>
                </div>
            </div>
            <div className="footer-end">
                <div className='container footer-end-inner'>
                    <div>
                        © 2021 PrintMate. All Rights Reserved.
                    </div>
                    <div className="footer-icons-container">
                        <div className="footer-icon">
                            <FacebookIcon />
                        </div>
                        <div className="footer-icon">
                            <InstagramIcon />
                        </div>
                        <div className="footer-icon">
                            <TwitterIcon />
                        </div>
                        <div className="footer-icon">
                            <LinkedInIcon />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
