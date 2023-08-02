import React, { useContext, useEffect } from 'react'
import Navigation from '../../Components/Navigation/Navigation'
import Context from '../../Context/Context'
import './product.modules.css'
import Pathway from '../../Components/ProductBar/Pathway'
import Footer from '../../Components/Navigation/Footer'

export default function () {
    const Product = useContext(Context).Product;

    useEffect(() => {
        if (!Product)
        {
            window.location.href = "/";
        }
    }, [Product])



    const ChangeProductImage = (image,index) => {
        document.getElementById("MainImage").src = image;
        document.getElementById("MainImage").style.animation = "FadeIn 0.5s ease-in-out";
        setTimeout(() => {
            document.getElementById("MainImage").style.animation = "none";
        }, 500);

        const imageElement = document.getElementById(`Image-${index}`);
        if (imageElement) {
          imageElement.style.border = '3px solid #d3f3ef';
          imageElement.style.borderRadius = '5px';
          imageElement.opacity = 0;
          imageElement.style.animation = 'FadeIn 0.5s ease-in-out';
          setTimeout(() => {
            imageElement.style.animation = 'none';
          }, 500);
          for(let i=0;i<Product?.SecondaryImages?.length;i++){
            if(i!==index){
              document.getElementById(`Image-${i}`).style.border = 'none';
            }
          }
        }
    }



    return (
        <>
        {Product && <>
            <Navigation />
            <Pathway />


            <div className="ShowcaseWrapper">
                <div className="container Showcase">
                    <div className="ShowcasePT1">
                        <div className="SideImages">
                            {Product?.SecondaryImages?.map((item, index) => {
                                return <img key={index} src={item} alt="AFrame" onClick={() => ChangeProductImage(item,index)} id={`Image-${index}`} />
                            }
                            )}
                        </div>
                        <div className="MainImage">
                            <img src={Product?.SecondaryImages?.[0]} alt="AFrame" id="MainImage" />

                        </div>
                    </div>
                    <div className="ShowcasePT2">
                        <h2>{Product?.Description}</h2>
                        {Product?.InnerDescription?.map((item, index) => {
                            return <p key={index}>{item}</p>
                        }
                        )}
                    </div>
                </div>
            </div>

        
            <Footer />
            </>}

        </>
    )
}
