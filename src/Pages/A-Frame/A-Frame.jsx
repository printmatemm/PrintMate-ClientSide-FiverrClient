import React, { useContext, useEffect, useState } from 'react'
import Navigation from '../../Components/Navigation/Navigation'
import Footer from '../../Components/Navigation/Footer'
import './styles.modules.css'
import Context from '../../Context/Context'
import { useNavigate } from 'react-router-dom/dist'
import { useParams } from 'react-router-dom'
import ServicesMeta from '../../Meta/ServicesMeta'
import ProductMeta from '../../Meta/ProductMeta'

export default function AFrame() {

  const { ServiceName } = useParams();
  const [Service, setService] = useState(null);
  const [Products, setProducts] = useState(null);

  useEffect(() => {
    if (ServiceName) {
      for (let i = 0; i < ServicesMeta.length; i++) {
        if (ServicesMeta[i].ID.toLowerCase() === ServiceName.toLowerCase()) {
          setService(ServicesMeta[i]);
          for(let j=0;j<ProductMeta.length;j++){
            if(ProductMeta[j].ID===ServicesMeta[i].ProductID){
              setProducts(ProductMeta[j].Products);
              console.log(Products)
              break;
            }
          }

          break;
        }
      }
    }
  }, [ServiceName, ServicesMeta]);


  return (
    <>
      <Navigation />

      <div className="AFrameWrapper">
        <div className="container AFrameCover">
          <div className="AFramePT1">
            <h2>{Service?.Name}</h2>
            <p>{Service?.CoverDescription}</p>
          </div>
          <div className="AFramePT2">
            <div className='Cover-Sidebar-Image-Container'>
              <img src={Service?.CoverImage} alt={Service?.CoverImageAlt} />
            </div>
          </div>
        </div>
      </div>

      <div className="AFramePT3Wrapper">
        <div className="container AFramePT3">
          <div className="A FramePT3-1">
            <p>Home | {Service?.ID}</p>
          </div>
          <div className="AFramePT3-2">
            <p>{Service?.Name}</p>
          </div>
        </div>
      </div>


      <div className="AProductsDisplay">
        <div className="container">
          <h2>Our <span>{Service?.ID}</span> Products</h2>
          <p>{Service?.Tags}</p>
        </div>
        {Products &&
        <div className="container AProductsDisplay-Inner">
          {Object.keys(Products).map((key) => {
            return <ProductGrid TempProduct={Products[key]} />
          }
          )}

        </div>
        }
      </div>

      {Service?.FAQS && <div className="FAQs-Wrapper">
        <div className="AProductsDisplay">
          <h2>Frequently Asked Questions</h2>
        </div>
        <div className="container FAQs">
          {Service?.FAQS?.map((item, index) => (
            <div className="FAQs-1" key={index}>
              <h5>{item.Question}</h5>
              {item.Answers.map((innerItem, innerIndex) => (
                <p key={innerIndex}>{innerItem}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
      }

      <Footer />

    </>
  )
}


const ProductGrid = (props) => {

  const ProductContext = useContext(Context);
  const navigate = useNavigate();

  const handleClick = () => {
    ProductContext.SetProduct(props.TempProduct)
    navigate('/A-Frame/Product')
  };
  return (
    <>
      <div className="AProductsDisplay-1">
        <div className="AProduct-Image">
          <img src={props.TempProduct.Image} alt="AFrame" />
        </div>
        <div className='AProduct-Description'>
          <h5>{props.TempProduct.Description}</h5>
          <ul>
            {props.TempProduct.List.map((item) => {
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