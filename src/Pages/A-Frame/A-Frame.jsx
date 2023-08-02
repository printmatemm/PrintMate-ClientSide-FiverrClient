import React from 'react'
import Navigation from '../../Components/Navigation/Navigation'
import Footer from '../../Components/Navigation/Footer'
import './styles.modules.css'
import { useHistory } from 'react-router-dom';

export default function AFrame() {  
  const Products = {
    A1: {
      Image: "/AFrames/AFrame-Product1.png",
      Description: "A1 A-Frame with Two A1 Posters",
      List: [
        "Fits A1 size posters",
        "Double sided",
        "Includes 2 x A1 posters",
        "Includes 2 x clear protective covers"
      ]
    },
    A2: {
      Image: "/AFrames/AFrame-Product2.png",
      Description: "A2 A-Frame with Two A2 Posters",
      List: [
        "Fits A2 size posters",
        "Double sided",
        "Includes 2 x A2 posters",
        "Includes 2 x clear protective covers"
      ]
    },
  }

  return (
    <>
      <Navigation />

      <div className="AFrameWrapper">
        <div className="container AFrameCover">
          <div className="AFramePT1">
            <h2>A Frame Sign Printing</h2>
            <p>Our A Frame signs are a great way to advertise your business. They are portable and can be used both indoors and outdoors. They are made of durable material and are weather resistant. They are easy to set up and take down. They are also easy to store. They are a great way to advertise your business.</p>
          </div>
          <div className="AFramePT2">
            <img src="/AFrames/AFrame-Cover.png" alt="AFrame" />
          </div>
        </div>
      </div>

      <div className="AFramePT3Wrapper">
        <div className="container AFramePT3">
          <div className="A FramePT3-1">
            <p>Home | AFrames and Boards</p>
          </div>
          <div className="AFramePT3-2">
            <p>A Frame Sign Printing</p>
          </div>
        </div>
      </div>


      <div className="AProductsDisplay">
        <div className="container">
          <h2>Our <span>A Frame</span> Products</h2>
          <p>From A1 Frames to A2 Frames, get the right look for your next Frame.</p>
        </div>
        <div className="container AProductsDisplay-Inner">
          {Object.keys(Products).map((key) => {
            return <Product Image={Products[key].Image} Description={Products[key].Description} List={Products[key].List} />
          }
          )}

        </div>

      </div>


      <div className="FAQs-Wrapper">
      <div className="AProductsDisplay">
        <h2>Frequently Asked Questions</h2>
      </div>
      <div className="container FAQs">
        <div className="FAQs-1">
          <h5>How to Make an A-Frame Sign?</h5>
          <p>An A-frame board is essentially a double-sided poster frame than stands outside a shop or business to drive traffic inside. That means the only thing you’ll need to design is the poster!</p>
          <p>First things first, you’ll need to choose one of the sizes we offer; either A2 poster frames or A0 if you want a really large poster frame!</p>
          <p>Then, make your poster design to the size you’ve chosen. Make sure you add 3mm bleed area to each side to account for the bleed area and remember than a very slight area (around 10mm on each side) around the edges of the poster won’t be visible when it’s attached to the frame – just keep your main message central!</p>
          <p>The same poster is used on both sides of the A-frame sign so you only need one design. If you want to switch up or change your posters, you don’t need to order another A-frame – just order a new set of 220mic PVC posters to replace them.</p>
        </div>
        <div className="FAQs-2">
          <h5>What Are the Best Ways to Use A-Frame Signs?</h5>
          <p>An A-frame sign really makes a statement, but they work especially well in places where lots of people pass by – like busy roadsides and shopping streets. We print your graphics on a weatherproof stock and the stand itself is made from brushed aluminium, meaning they’re ideal for outdoor use to tempt customers in. They’re especially popular amongst restaurants and cafes, because it’s an eye-catching way to promote offers and specials.</p>
          <p>A-frame poster holders aren’t just for pavements and street corners! They also make a big impact when used indoors to advertise sales and promotions.</p>
          </div>
          </div>
        </div>
        <Footer />

        </>
        )
}


const Product = (props) => { 
  const history = useHistory()
  const handleClick = () => {
    history.push('/A-Frame/Product' , {Product,props})
  }

  return(
        <>
          <div className="AProductsDisplay-1">
            <div className="AProduct-Image">
              <img src={props.Image} alt="AFrame" />
            </div>
            <div className='AProduct-Description'>
              <h5>{props.Description}</h5>
              <ul>
                {props.List.map((item) => {
                  return <li>{item}</li>
                })}
              </ul>
            </div>
            <div className="View-Product">
              <button onClick={handleClick}>View Product</button>
            </div>
          </div>
        </>
        )
}