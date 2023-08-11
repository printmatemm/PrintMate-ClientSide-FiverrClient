import React from 'react'
import Navigation from '../../Components/Navigation/Navigation'
import Footer from '../../Components/Navigation/Footer'
import Iframe from 'react-iframe'

export default function ContactUs() {
  return (
    <>
        <Navigation></Navigation>
    
    
        <div className="container" id="Contact-Body">
                <div className="Contact-Holder">
                    <h3 className='Contact'>Contact Us</h3>
                    <div>
                        <h4 className='Contact1'>
                            Visit us at:
                        </h4 >
                        <h6 className='Contact'>
                            21 Radcliffe street, Wolverton, Milton Keynes, MK12 5DQ
                        </h6>
                    </div>
                    <div>
                        <h4 className='Contact1'>
                            Or call us at:
                        </h4 >
                        <h6 className='Contact'>
                            Tel: 01908 915388
                        </h6>
                        <h6 className='Contact'>
                            Email: mansoor@printmate.uk
                        </h6>
                    </div>


                </div>
                <div className='Contact-Holder2'>
                    <Iframe
                        url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2453.0330093536595!2d-0.8096840999999999!3d52.0609226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48770150c8811ccf%3A0xb899d8664d5a34d6!2sPrintMate!5e0!3m2!1sen!2s!4v1691722354277!5m2!1sen!2s"
                        className='Map'
                        frameBorder="0"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />

                </div>

            </div>



        <Footer/>
    </>
  )
}
