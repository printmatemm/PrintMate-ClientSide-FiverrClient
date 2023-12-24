import emailjs from "@emailjs/browser"
import DoneAllIcon from '@mui/icons-material/DoneAll'
import React, { useContext, useEffect } from 'react'
import Footer from '../../Components/Navigation/Footer'
import Navigation from '../../Components/Navigation/Navigation'
import Pathway from '../../Components/ProductBar/Pathway'
import Context from '../../Context/Context'
import './product.modules.css'

import { Collapse } from 'antd'
import StardardBusinessCardForm from './Forms/StandardBusinessCard'
import StickerForm from './Forms/StickerForm'
import StickerForm2 from './Forms/StickerForm2'
import StickerForm3 from './Forms/StickerForm3'
import StickerForm4 from './Forms/StickerForm4'

import AFrameForm from './Forms/AFrameForm'
import AluminumForm from './Forms/AluminumForm'
import BookmarkForm from './Forms/BookmarkForm'
import BusinessCardType2 from './Forms/BusinessCardType2'
import BusinessCardType3 from './Forms/BusinessCardType3'
import BusinessCardType4 from './Forms/BusinessCardType4'
import BusinessCardType5 from './Forms/BusinessCardType5'
import BusinessCardType6 from './Forms/BusinessCardType6'
import BusinessCardType7 from './Forms/BusinessCardType7'
import CalenderForm from './Forms/CalenderForm'
import CalenderForm2 from './Forms/CalenderForm2'
import CardboardForm from './Forms/CardboardForm'
import CertificatesForm from './Forms/CertificatesForm'
import ChristmasCardForm from './Forms/ChristmasCardForm'
import CorrexForm from './Forms/CorrexForm'
import ExhibitionStandForm from './Forms/ExhibitionStandForm'
import FlagForm from './Forms/FlagForm'
import FlyerForm from './Forms/FlyerForm'
import FoilFlyerForm from './Forms/FoilFlyerForm'
import FoilFolderForm from './Forms/FoilFolderForm'
import FoilInviteForm from './Forms/FoilInviteForm'
import FoilLeafletForm from './Forms/FoilLeafletForm'
import LeafletForm from './Forms/LeafletForm'
import LeafletForm1 from './Forms/LeafletForm1'
import LeafletForm2 from './Forms/LeafletForm2'
import LeafletForm3 from './Forms/LeafletForm3'
import LetterHeadForm from './Forms/LetterHeadForm'
import MenuForm from './Forms/MenuForm'
import MenuForm1 from './Forms/MenuForm1'
import MugForm from './Forms/MugForm'
import NoteCardForm from './Forms/NoteCardForm'
import NotepadForm from './Forms/NotepadForm'
import PVCBannerForm from './Forms/PVCBannerForm'
import PVCBannerForm2 from './Forms/PVCBannerForm2'
import Perforation from './Forms/Perforation'
import PosterForm from './Forms/PosterForm'
import RollerBannerForm from './Forms/RollerBannerForm'
import StretchCurvedFabricForm from './Forms/StretchCurvedFabricForm'
import StretchStraightFabricForm from './Forms/StretchStraightFabricForm'
import StapledBookletForm from './Forms/StapledBookletForm'
import TShirtForm from './Forms/TShirtForm'
import ToteBagForm from './Forms/ToteBagForm'
import VestForm from './Forms/VestForm'


// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
    const Product = useContext(Context).Product;
    useEffect(() => {
        if (!Product) {
            window.location.href = "/";
        }
    }, [Product])

    useEffect(() => emailjs.init("4UXhp1ho-2XzxocHz"), []);

    const ChangeProductImage = (image, index) => {
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
            for (let i = 0; i < Product?.SecondaryImages?.length; i++) {
                if (i !== index) {
                    document.getElementById(`Image-${i}`).style.border = 'none';
                }
            }
        }
    }

    const items = [
        {
            key: '1',
            label: 'What if I don’t have a design?',
            children: "No design? No problem! We have a wealth of templates available for you to use. We Will get in touch and provide you with suggestions",
        },
    ];


    return (
        <>
            {Product && <>
                <Navigation />
                <Pathway />
                <div className="ShowcaseWrapper">
                    <div className="container Showcase">
                        <div className="ShowcasePT1">
                            <h2>{Product?.Description}</h2>
                            {Product?.InnerDescription?.map((item, index) => {
                                return (
                                    <div className='DescriptionDiv'>
                                        <DoneAllIcon style={{ color: 'rgb(229, 85, 85)' }} />
                                        <p key={index}>{item}</p>
                                    </div>
                                )
                            }
                            )}

                            <div className="ImagesWrapper">
                                <div className="ProductSideImages">
                                    {Product?.SecondaryImages?.map((item, index) => {
                                        return <img key={index} src={item} alt={Product?.Description} onClick={() => ChangeProductImage(item, index)} id={`Image-${index}`} />
                                    }
                                    )}
                                </div>

                                <div className='ProductMainImage'>
                                    <img src={Product?.SecondaryImages?.[0]} alt={Product?.Description} id="MainImage" />
                                </div>
                            </div>


                            <div styles={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: '100%',
                                marginTop: '50px',
                                textAlign: 'left'
                            }}>
                                <div className="RoadMapImageHolder">
                                    <img src="/ProductCover.png" alt="FAQ" />
                                </div>
                                <div className="FAQHidden">
                                    <h4>Frequently Asked Questions</h4>
                                    <div style={
                                        {
                                            border: '2px solid #d3f3ef',
                                            borderRadius: '5px',
                                            padding: '15px',
                                            width: '100%',
                                            display: 'flex',
                                            fontFamily: 'Nunito',
                                            flexDirection: 'column',
                                            justifyContent: 'center',
                                        }}>
                                        <p><b>What if i don't have a design?</b></p>
                                        <p>No design? No problem! We have a wealth of templates available for you to use. We Will get in touch and provide you with suggestions!</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="ShowcasePT2">
                            <h4>Design your product</h4>
                            {Product?.Image.includes("AFrames") &&
                                <div className="ShowcasePT2-1">
                                    <AFrameForm />
                                </div>
                            }
                            {Product?.Image.includes("BusinessCards") &&
                                <div className="ShowcasePT2-1">
                                    {Product?.Description === "Standard" &&
                                        <StardardBusinessCardForm />
                                    }
                                    {Product?.Description === "Premium" &&
                                        <StardardBusinessCardForm />
                                    }
                                    {Product?.Description === "Rounded Corner Cards" &&
                                        <StardardBusinessCardForm />
                                    }

                                    {Product?.Description === "Mini" &&
                                        <BusinessCardType2 />
                                    }
                                    {Product?.Description === "Square" &&
                                        <BusinessCardType2 />
                                    }
                                    {Product?.Description === "Folded" &&
                                        <BusinessCardType3 />
                                    }
                                    {Product?.Description === "Loyalty" &&
                                        <BusinessCardType4 />
                                    }

                                    {Product?.Description === "Economy 350gsm" &&
                                        <BusinessCardType5 />
                                    }

                                    {Product?.Description === "Pearlescent Business Cards" &&
                                        <BusinessCardType5 />
                                    }
                                    {Product?.Description === "Recycled" &&
                                        <BusinessCardType6 />
                                    }
                                    {Product?.Description === "Kraft Business" &&
                                        <BusinessCardType6 />
                                    }

                                    {Product?.Description === "Spot UV Business Cards" &&
                                        <BusinessCardType7 />
                                    }
                                </div>
                            }



                            {Product?.Image.includes("Calenders") &&

                                <div className="ShowcasePT2-1">
                                    {Product?.Description === "Desk Calender" &&
                                        <CalenderForm />
                                    }
                                    {Product?.Description === "Wall Calender" &&
                                        <CalenderForm2 />
                                    }
                                    {Product?.Description === "Stapled Calender" &&
                                        <CalenderForm2 />
                                    }
                                </div>
                            }


                            {Product?.Image.includes("Cardboard-Signs") &&
                                <CardboardForm />
                            }

                            {Product?.Image.includes("CardsAndInvites") &&
                                <div className="ShowcasePT2-1">
                                    <ChristmasCardForm />
                                </div>
                            }


                            {Product?.Image.includes("Correx") &&
                                <div className="ShowcasePT2-1">
                                    <CorrexForm />
                                </div>
                            }



                            {Product?.Image.includes("Aluminum") &&
                                <div className="ShowcasePT2-1">
                                    <AluminumForm />
                                </div>
                            }

                            {Product?.Image.includes("Banners") &&
                                <div className="ShowcasePT2-1">
                                    {Product?.Description === "Roller Banners" &&
                                        <RollerBannerForm />
                                    }

                                    {Product?.Description === "Flags" &&
                                        <FlagForm />
                                    }

                                    {Product?.Description === "PVC Banners" &&
                                        <PVCBannerForm />
                                    }

                                    {Product?.Description === "PVC Free Banners" &&
                                        <PVCBannerForm />
                                    }

                                    {Product?.Description === "PVC Mesh Banners" &&
                                        <PVCBannerForm2 />
                                    }
                                    {Product?.Description === "Stretch Straight Fabric" &&
                                        <StretchStraightFabricForm />
                                    }

                                    {Product?.Description === "Stretch Curved Fabric" &&
                                        <StretchCurvedFabricForm />
                                    }

                                    {Product?.Description === "Exhibition Stands" &&
                                        <ExhibitionStandForm />
                                    }
                                </div>
                            }

                            {Product?.Image.includes("Flyers") &&
                                <div className="ShowcasePT2-1">
                                    <FlyerForm />
                                </div>
                            }

                            {Product?.Image.includes('Foil') &&
                                <div className="ShowcasePT2-1">
                                    {
                                        Product?.Description === "Foil Business Cards" &&
                                        <BusinessCardType7 />
                                    }
                                    {
                                        Product?.Description === "Flyers" &&
                                        <FoilFlyerForm />
                                    }
                                    {
                                        Product?.Description === "Stapled Booklets" &&
                                        <StapledBookletForm />
                                    }
                                    {
                                        Product?.Description === "Foil Greatings" &&
                                        <ChristmasCardForm />
                                    }

                                    {
                                        Product?.Description === "Foil Leaflets" &&
                                        <FoilLeafletForm />
                                    }{
                                        Product?.Description === "Foil Invitations" &&
                                        <FoilInviteForm />
                                    }
                                    {
                                        Product?.Description === "Presentation Folders" &&
                                        <FoilFolderForm />
                                    }
                                    {
                                        Product?.Description === "Foil Christmas Cards" &&
                                        <ChristmasCardForm />
                                    }
                                </div>
                            }

                            {Product?.Image.includes('Stationary') &&
                                <div className="ShowcasePT2-1">
                                    {
                                        Product?.Description === "Letterheads" &&
                                        <LetterHeadForm />
                                    }
                                    {
                                        Product?.Description === "Compliment Slips" &&
                                        <LetterHeadForm />
                                    }
                                    {
                                        Product?.Description === "Note Cards" &&
                                        <NoteCardForm />
                                    }
                                    {
                                        Product?.Description === "Postcards" &&
                                        <ChristmasCardForm />
                                    }
                                    {
                                        Product?.Description === "Notepads" &&
                                        <NotepadForm />
                                    }
                                    {
                                        Product?.Description === "Presentation Folders" &&
                                        <FoilFolderForm />
                                    }
                                    {
                                        Product?.Description === "Bookmarks" &&
                                        <BookmarkForm />
                                    }
                                    {
                                        Product?.Description === "Certificates" &&
                                        <CertificatesForm />
                                    }
                                </div>
                            }
                            {Product?.Image.includes('FoldedLeaflets') &&
                                <div className="ShowcasePT2-1">
                                    {Product?.Description === 'Half Folded Leaflets' &&
                                        <LeafletForm />
                                    }
                                    {Product?.Description === 'C Fold Leaflets' &&
                                        <LeafletForm1 />
                                    }
                                    {Product?.Description === 'Z Fold Leaflets' &&
                                        <LeafletForm1 />
                                    }
                                    {Product?.Description === 'Cross Fold Leaflets' &&
                                        <LeafletForm2 />
                                    }
                                    {Product?.Description === 'Roll Fold Leaflets' &&
                                        <LeafletForm3 />
                                    }
                                    {Product?.Description === 'Order of Service Leaflets' &&
                                        <LeafletForm2 />
                                    }
                                    {Product?.Description === 'Folded Pamphlets' &&
                                        <LeafletForm />
                                    }
                                    {Product?.Description === 'Folded Maps' &&
                                        <LeafletForm2 />
                                    }
                                </div>
                            }
                            {Product?.Image.includes('Menus') &&
                                <div className="ShowcasePT2-1">
                                    {Product?.Description === 'Flat Takeaway Menus' &&
                                        <MenuForm />
                                    }
                                    {Product?.Description === 'Folded Takeaway Menus' &&
                                        <MenuForm1 />
                                    }
                                    {Product?.Description === 'Flat Restaurant Menus' &&
                                        <MenuForm />
                                    }
                                    {Product?.Description === 'Folded Restaurant Menus' &&
                                        <MenuForm1 />
                                    }
                                    {Product?.Description === 'Stapled Menus' &&
                                        <MenuForm />
                                    }
                                    {Product?.Description === 'Flat Drinks Lists' &&
                                        <MenuForm />
                                    }
                                    {Product?.Description === 'Folded Drinks Lists' &&
                                        <MenuForm1 />
                                    }
                                </div>
                            }
                            {Product?.Image.includes('Merchandise') &&
                                <div className="ShowcasePT2-1">
                                    {Product?.Description === 'Mugs' &&
                                        <MugForm />
                                    }
                                    {Product?.Description === 'Tote Bags' &&
                                        <ToteBagForm />
                                    }
                                    {Product?.Description === 'Tea Towels' &&
                                        <MugForm />
                                    }
                                    {Product?.Description === 'Water Bottles' &&
                                        <MugForm />
                                    }
                                    {Product?.Description === 'High Vis Vests' &&
                                        <VestForm />
                                    }
                                    {
                                        Product?.Description === "Notebooks" &&
                                        <NotepadForm />
                                    }
                                    {
                                        Product?.Description === "Bookmarks" &&
                                        <BookmarkForm />
                                    }
                                    {
                                        Product?.Description === "Screen Printed T-Shirts" &&
                                        <TShirtForm />
                                    }
                                    {
                                        Product?.Description === "Custom T-Shirt Printing" &&
                                        <TShirtForm />
                                    }
                                </div>
                            }
                            {Product?.Image.includes('Perforation') &&
                                <Perforation />
                            }

                            {Product?.Image.includes('Posters') &&
                                <PosterForm />
                            }

                            {Product?.Image.includes("Stickers") &&
                                <div className="ShowcasePT2-1">
                                    {
                                        Product?.Description === 'Square Stickers' &&
                                        <StickerForm />
                                    }
                                    {
                                        Product?.Description === 'Circle Stickers' &&
                                        <StickerForm2 />
                                    }
                                    {
                                        Product?.Description === 'Rectangle Stickers' &&
                                        <StickerForm3 />
                                    }
                                    {
                                        Product?.Description === 'Window Clings' &&
                                        <StickerForm4 />
                                    }
                                    {
                                        Product?.Description === 'Vinyl Clings' &&
                                        <StickerForm4 />
                                    }
                                    {
                                        Product?.Description === 'Sticker Rolls' &&
                                        <MugForm />
                                    }
                                </div>
                            }

                            {Product?.Image.includes("Booklets") &&
                                <div className="ShowcasePT2-1">
                                    {
                                        Product?.Description === "Stapled Booklets" &&
                                        <StapledBookletForm />
                                    }
                                    {
                                        Product?.Description === "Perfect Bound Booklets" &&
                                        <StapledBookletForm />
                                    }
                                    {
                                        Product?.Description === "Wire Bound Booklets" &&
                                        <StapledBookletForm />
                                    }
                                    {
                                        Product?.Description === "Orders of Service" &&
                                        <StapledBookletForm />
                                    }
                                    {
                                        Product?.Description === "Notebooks" &&
                                        <NotepadForm />
                                    }
                                    {
                                        Product?.Description === "Notepads" &&
                                        <NotepadForm />
                                    }
                                    {
                                        Product?.Description === "Personalised Diaries" &&
                                        <NotepadForm />
                                    }
                                </div>
                            }
                        </div>
                    </div>

                </div>


                <Footer />
            </>}


        </>

    )
}