import React from 'react'
import Navigation from '../../Components/Navigation/Navigation'
import { useLocation } from 'react-router-dom'
export default function () {

  const location = useLocation()
  const Product = location.state.Product
    
  return (
    <>
        <Navigation />

        <div className="AFramePT3Wrapper">
            <h3>{Product.Description}</h3>
        </div>
        
    
    
    </>
  )
}
