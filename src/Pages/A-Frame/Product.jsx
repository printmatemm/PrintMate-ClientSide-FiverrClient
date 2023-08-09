import React, { useContext, useEffect } from 'react'
import Navigation from '../../Components/Navigation/Navigation'
import Context from '../../Context/Context'
import './product.modules.css'
import Pathway from '../../Components/ProductBar/Pathway'
import Footer from '../../Components/Navigation/Footer'
import DoneAllIcon from '@mui/icons-material/DoneAll';
import { FormControl } from '@mui/material';
import { notification } from 'antd'

import { Collapse } from 'antd';

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
    const Product = useContext(Context).Product;

    useEffect(() => {
        if (!Product) {
            window.location.href = "/";
        }
    }, [Product])

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
            label: 'What if I don’t have a fold out business card design?',
            children: <p>"No design? No problem! We have a wealth of templates available for you to use. We Will get in touch and provide you with suggestions"</p>,
        },
        {
            key: '2',
            label: 'How are they printed?',
            children: 'Your artwork goes on an incredible journey here at the instantprint headquarters; from arriving with our quality check team to being passed down to the printing room. We have a dedicated business card room in our production facility where all our fold out business cards are printed on our Fujifilm Jet Press.',
        },
        {
            key: '3',
            label: 'When will my business cards be delivered?',
            children: 'We offer a range of delivery options to suit your needs. Our standard delivery is free and takes 3-5 working days, while our express delivery takes 1-2 working days and costs £4.99. Once your order has been dispatched, you can track your order on your account page.'
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
                                <Collapse accordion items={items}
                                    style={{
                                        backgroundColor: 'white',
                                        borderRadius: '5px',
                                        padding: '10px',
                                        fontFamily: 'Rubik'

                                    }} />
                                </div>
                            </div>
                        </div>

                        <div className="ShowcasePT2">
                            <h4>Design your product</h4>
{/*
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
*/}

                            {Product?.Image.includes('Foil') &&
                                <div className="ShowcasePT2-1">
{/*
                                    {
                                        Product?.Description === "Foil Business Cards" &&
                                        <BusinessCardType7 />
                                    }
                */}

                                    {
                                        Product?.Description === "Flyers" &&
                                        <FoilFlyerForm />
                                    }
                                    {
                                        Product?.Description === "Stapled Booklets" &&
                                        <StapledBookletForm />
                                    }
                                    {/*

                                    {
                                        Product?.Description === "Foil Greatings" &&
                                        <ChristmasCardForm />
                                    }
                */}

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
{/*

                                    {
                                        Product?.Description === "Foil Christmas Cards" &&
                                        <ChristmasCardForm />
                                    }
                */}

                                    </div>
                            }
{/*

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
                                        <Book
                                        markForm />
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
                                    }g
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
                */}
                        </div>
                    </div>

                </div>


                <Footer />
            </>}


        </>

    )
}

const CallAPI = async (body) => {
    const Response = await fetch('http://127.0.0.1:4002/addQuotation',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
    const ResponseData = await Response.json();
    if (ResponseData.success) {
        SuccessNotification();
    }
    else ErrorNotification()
    console.log("Response Data", Response);
    
}

const ValidateForm = (Name, Email, Phone, Address) => {
    if (Name === '') {
        notification.open({
            message: 'Please Enter Name',
            description:
                'Please Enter Name',
            icon: <DoneAllIcon style={{ color: '#108ee9' }} />,
        })
        return false;
    }
    if (Email === '') {
        notification.open({
            message: 'Please Enter Email',
            description:

                'Please Enter Email',
            icon: <DoneAllIcon style={{ color: '#108ee9' }} />,
        })
        return false;
    }
    if (Phone === '') {
        notification.open({
            message: 'Please Enter Phone',
            description:

                'Please Enter Phone',
            icon: <DoneAllIcon style={{ color: '#108ee9' }} />,
        })
        return false;
    }
    if (Email.includes('@') === false || Email.includes('.') === false) {
        notification.open({
            message: 'Please Enter Valid Email',
            description:
                "Please Enter Valid Email",
            icon: <DoneAllIcon style={{ color: '#108ee9' }} />,
        })
        return false;
    }
    return true;

}

const SuccessNotification = () => {
    notification.open({
        message: 'Request Submitted Successfully',
        description:
            'Your Request has been submitted successfully, we will contact you soon',
        icon: <DoneAllIcon style={{ color: '#108ee9' }} />,
    })
}

const ErrorNotification = () => {
    notification.open({
        message: 'Request Submission Failed',
        description:
            "Unable to send a request, Sorry for inconvience",
    })
}


const FoilFlyerForm = () => {
    const Product = useContext(Context).Product;
    const [options, setOptions] = React.useState({
        Sizes: '',
        Sides: '',
        UVSpot: '',
        Quantity: 0,
        Delivery: '',
        Name: '',
        Email: '',
        Phone: '',
        Address: '',
    });

    const [Name, setName] = React.useState('');
    const [Email, setEmail] = React.useState('');
    const [Phone, setPhone] = React.useState('');
    const [Address, setAddress] = React.useState('');

    const handleOptionChange = (category, value) => {
        setOptions((prevOptions) => ({
            ...prevOptions,
            [category]: value,
        }));
    };

    const Submit = () => {
        if (options.Sizes === '' || options.Sides === '' || options.UVSpot === '' || options.Quantity === 0 || options.Delivery === '') {
            notification.open({
                message: 'Please Select All Options',
                description:
                    'Please Select All Options',
                icon: <DoneAllIcon style={{ color: '#108ee9' }} />,
            })
            return;
        }
        if (ValidateForm(Name, Email, Phone, Address)) {
            CallAPI({
                Name: Name,
                Email: Email,
                Phone: Phone,
                Address: Address,
                Quantity: options.Quantity,
                Delivery: options.Delivery,
                Sizes: options.Sizes,
                Sides: options.Sides,
                UVSpot: options.UVSpot,
                Product: Product.Description
            })
        }
    }

    return (
        <FormControl size="small">
            <div className="FormBox">
                <h5>Choose Paper Size</h5>
                <div className="Boxes">
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="Sizes"
                            value="A4"
                            checked={options.Sizes === 'A4'}
                            onChange={() => handleOptionChange('Sizes', 'A4')}
                        />
                        <span className="text-tile">
                            <span className="text-label">A4</span>
                        </span>
                    </label>
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="Sizes"
                            value="A5"
                            checked={options.Sizes === 'A5'}
                            onChange={() => handleOptionChange('Sizes', 'A5')}
                        />
                        <span className="text-tile">
                            <span className="text-label">A5</span>
                        </span>
                    </label>
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="Sizes"
                            value="A6"
                            checked={options.Sizes === 'A6'}
                            onChange={() => handleOptionChange('Sizes', 'A6')}
                        />
                        <span className="text-tile">
                            <span className="text-label">A6</span>
                        </span>
                    </label>
                </div>
            </div>
            <div className="FormBox">
                <h5>Choose Sides</h5>
                <div className="Boxes">
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="Sides"
                            value="Single"
                            checked={options.Sides === 'Single'}
                            onChange={() => handleOptionChange('Sides', 'Single')}
                        />
                        <span className="text-tile">
                            <span className="radio-icon">
                                <img src="/Icons/SingleSide.png" alt="Bicycle" className='radio-icons-2' />
                            </span>
                            <span className="text-label">Single</span>
                        </span>
                    </label>
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="Sides"
                            value="Double"
                            checked={options.Sides === 'Double'}
                            onChange={() => handleOptionChange('Sides', 'Double')}
                        />
                        <span className="text-tile">
                            <span className="radio-icon">
                                <img src="/Icons/DoubleSide.png" alt="Bicycle" className='radio-icons-2' />
                            </span>
                            <span className="text-label">Double</span>
                        </span>
                    </label>
                </div>
            </div>
            <div className="FormBox">
                <h5>Choose UV Spot</h5>
                <div className="Boxes">
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="UVSpot"
                            value="None"
                            checked={options.UVSpot === 'None'}
                            onChange={() => handleOptionChange('UVSpot', 'None')}
                        />
                        <span className="text-tile">
                            <span className="radio-icon">
                                <img src="/Icons/NoUV.png" alt="Bicycle" className='radio-icons-2' />
                            </span>
                            <span className="text-label">None</span>
                        </span>
                    </label>
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="UVSpot"
                            value="Gold-UVSpot"
                            checked={options.UVSpot === 'Gold-UVSpot'}
                            onChange={() => handleOptionChange('UVSpot', 'Gold-UVSpot')}
                        />
                        <span className="text-tile">
                            <span className="radio-icon">
                                <img src="/Icons/GoldUV.png" alt="Bicycle" className='radio-icons-2' />
                            </span>
                            <span className="text-label">Gold UV Spot</span>
                        </span>
                    </label>
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="UVSpot"
                            value="Silver-UVSpot"
                            checked={options.UVSpot === 'Silver-UVSpot'}
                            onChange={() => handleOptionChange('UVSpot', 'Silver-UVSpot')}
                        />
                        <span className="text-tile">
                            <span className="radio-icon">
                                <img src="/Icons/SilverUV.png" alt="Bicycle" className='radio-icons-2' />
                            </span>
                            <span className="text-label">Silver UV Spot</span>
                        </span>
                    </label>
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="UVSpot"
                            value="Chrome-UVSpot"
                            checked={options.UVSpot === 'Chrome-UVSpot'}
                            onChange={() => handleOptionChange('UVSpot', 'Chrome-UVSpot')}
                        />
                        <span className="text-tile">
                            <span className="radio-icon">
                                <img src="/Icons/ChromeUV.png" alt="Bicycle" className='radio-icons-2' />
                            </span>
                            <span className="text-label">Chrome UV Spot</span>
                        </span>
                    </label>
                </div>
            </div>
            <div className="FormBox">
                <h5>Choose Quantity</h5>
                <div className="Boxes">
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="Quantity"
                            value="100"
                            checked={options.Quantity === '50'}
                            onChange={() => handleOptionChange('Quantity', '50')}
                        />
                        <span className="text-tile">
                            <span className="text-label">50</span>
                        </span>
                    </label>
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="Quantity"
                            value="100"
                            checked={options.Quantity === '100'}
                            onChange={() => handleOptionChange('Quantity', '100')}
                        />
                        <span className="text-tile">
                            <span className="text-label">100</span>
                        </span>
                    </label>
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="Quantity"
                            value="250"
                            checked={options.Quantity === '250'}
                            onChange={() => handleOptionChange('Quantity', '250')}
                        />
                        <span className="text-tile">
                            <span className="text-label">250</span>
                        </span>
                    </label>
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="Quantity"
                            value="500"
                            checked={options.Quantity === '500'}
                            onChange={() => handleOptionChange('Quantity', '500')}
                        />
                        <span className="text-tile">
                            <span className="text-label">500</span>
                        </span>
                    </label>
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="Quantity"
                            value="1000"
                            checked={options.Quantity === '1000'}
                            onChange={() => handleOptionChange('Quantity', '1000')}
                        />
                        <span className="text-tile">
                            <span className="text-label">1000</span>
                        </span>
                    </label>
                </div>
            </div>
            <div className="FormBox">
                <h5>Choose Delivery</h5>
                <div className="Boxes">
                    <label>
                        <input
                            className="radio-input"
                            type="radio"
                            name="engine"
                            value="Delivery"
                            checked={options.Delivery === '1-2'}
                            onChange={() => handleOptionChange('Delivery', '1-2')}
                        />
                        <span className="radio-tile">
                            <span className="radio-icon">
                                <img src="/Icons/Delivery.png" alt="Bicycle" className='radio-icons' />
                            </span>
                            <span className="radio-label">1-2 Delivery Days</span>
                        </span>
                    </label>
                    <label>
                        <input
                            className="radio-input"
                            type="radio"
                            name="engine"
                            value="Delivery"
                            checked={options.Delivery === '3-4'}
                            onChange={() => handleOptionChange('Delivery', '3-4')}
                        />
                        <span className="radio-tile">
                            <span className="radio-icon">
                                <img src="/Icons/Delivery.png" alt="Bicycle" className='radio-icons' />
                            </span>
                            <span className="radio-label">3-4 Delivery Days</span>
                        </span>
                    </label>
                </div>

                <div className='FormSend'>
                    <div className="AFrameForm-2">
                        <input type="text" placeholder="Name" value={Name} onChange={(e) => setName(e.target.value)} />
                        <input type="text" placeholder="Email" value={Email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="AFrameForm-2">
                        <input type="text" placeholder="Phone" value={Phone} onChange={(e) => setPhone(e.target.value)} />
                        <input type="text" placeholder="Address" value={Address} onChange={(e) => setAddress(e.target.value)} />
                    </div>

                    <div className="RequestQuote" onClick={Submit}>
                        Request Quote
                    </div>
                </div>

            </div>
        </FormControl>
    );
};

const StapledBookletForm = () => {
    const Product = useContext(Context).Product;
    const [options, setOptions] = React.useState({
        PaperType: '',
        PaperWeight: '',
        Sizes: '',
        Sides: '',
        Fold: '',
        AmountOfPrintedPages: '',
        CoverOption: '',
        Lamination: '',
        UVSpot: '',
        Quantity: 0,
        Delivery: '',
        Name: '',
        Email: '',
        Phone: '',
        Address: '',
    });

    const [Name, setName] = React.useState('');
    const [Email, setEmail] = React.useState('');
    const [Phone, setPhone] = React.useState('');
    const [Address, setAddress] = React.useState('');

    const handleOptionChange = (category, value) => {
        setOptions((prevOptions) => ({
            ...prevOptions,
            [category]: value,
        }));
    };

    const Submit = () => {
        if (options.PaperType === '' || options.PaperWeight === '' || options.Sizes === '' || options.Sides === '' || options.Fold === '' || options.AmountOfPrintedPages === '' || options.CoverOption === '' || options.Lamination === '' || options.UVSpot === '' || options.Quantity === 0 || options.Delivery === '') {
            notification.open({
                message: 'Please Select All Options',
                description:
                    'Please Select All Options',
                icon: <DoneAllIcon style={{ color: '#108ee9' }} />,
            })
            return;
        }
        if (ValidateForm(Name, Email, Phone, Address)) {
            CallAPI({
                Name: Name,
                Email: Email,
                Phone: Phone,
                Address: Address,
                Quantity: options.Quantity,
                Delivery: options.Delivery,
                PaperType: options.PaperType,
                PaperWeight: options.PaperWeight,
                Sizes: options.Sizes,
                Sides: options.Sides,
                Fold: options.Fold,
                AmountOfPrintedPages: options.AmountOfPrintedPages,
                CoverOption: options.CoverOption,
                Lamination: options.Lamination,
                UVSpot: options.UVSpot,
                Product: Product.Description
            })
        }
    }

    return (
        <FormControl size="small">
            <div className="FormBox">
                <h5>Choose Paper Size</h5>
                <div className='Boxes'>
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="Sizes"
                            value="A4"
                            checked={options.Sizes === 'A4'}
                            onChange={() => handleOptionChange('Sizes', 'A4')}
                        />
                        <span className="text-tile">
                            <span className="text-label">A4</span>
                        </span>
                    </label>
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="Sizes"
                            value="A5"
                            checked={options.Sizes === 'A5'}
                            onChange={() => handleOptionChange('Sizes', 'A5')}
                        />
                        <span className="text-tile">
                            <span className="text-label">A5</span>
                        </span>
                    </label>
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="Sizes"
                            value="A6"
                            checked={options.Sizes === 'A6'}
                            onChange={() => handleOptionChange('Sizes', 'A6')}
                        />
                        <span className="text-tile">
                            <span className="text-label">A6</span>
                        </span>
                    </label>
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="Sizes"
                            value="DL"
                            checked={options.Sizes === 'DL'}
                            onChange={() => handleOptionChange('Sizes', 'DL')}
                        />
                        <span className="text-tile">
                            <span className="text-label">DL</span>
                        </span>
                    </label>
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="Sizes"
                            value="148x148mm"
                            checked={options.Sizes === '148x148mm'}
                            onChange={() => handleOptionChange('Sizes', '148x148mm')}
                        />
                        <span className="text-tile">
                            <span className="text-label">148x148mm</span>
                        </span>
                    </label>
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="Sizes"
                            value="210x210mm"
                            checked={options.Sizes === '210x210mm'}
                            onChange={() => handleOptionChange('Sizes', '210x210mm')}
                        />
                        <span className="text-tile">
                            <span className="text-label">210x210mm</span>
                        </span>
                    </label>
                </div>
            </div>
            <div className="FormBox">
                <h5>Choose Paper Type</h5>
                <div className='Boxes'>
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="PaperType"
                            value="Silk"
                            checked={options.PaperType === 'Silk'}
                            onChange={() => handleOptionChange('PaperType', 'Silk')}
                        />

                        <span className="text-tile">
                            <span className="radio-icon">
                                <img src="/Icons/Silk.png" alt="Bicycle" className='radio-icons-2' />
                            </span>
                            <span className="text-label">Silk</span>
                        </span>
                    </label>
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="PaperType"
                            value="Uncoated"
                            checked={options.PaperType === 'Uncoated'}
                            onChange={() => handleOptionChange('PaperType', 'Uncoated')}
                        />
                        <span className="text-tile">
                            <span className="radio-icon">
                                <img src="/Icons/Uncoated.png" alt="Bicycle" className='radio-icons-2' />
                            </span>
                            <span className="text-label">Uncoated</span>
                        </span>
                    </label>
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="PaperType"
                            value="Spaciality"
                            checked={options.PaperType === 'Spaciality'}
                            onChange={() => handleOptionChange('PaperType', 'Spaciality')}
                        />
                        <span className="text-tile">
                            <span className="radio-icon">
                                <img src="/Icons/Spaciality.png" alt="Bicycle" className='radio-icons-2' />
                            </span>
                            <span className="text-label">Spaciality</span>
                        </span>
                    </label>
                </div>
            </div>
            <div className="FormBox">
                <h5>Choose Paper Weight</h5>
                <div className="Boxes">
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="PaperWeight"
                            value="115"
                            checked={options.PaperWeight === '115'}
                            onChange={() => handleOptionChange('PaperWeight', '115')}
                        />
                        <span className="text-tile">
                            <span className="text-label">115 gsm Silk</span>
                        </span>
                    </label>
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="PaperWeight"
                            value="150"
                            checked={options.PaperWeight === '150'}
                            onChange={() => handleOptionChange('PaperWeight', '150')}
                        />
                        <span className="text-tile">
                            <span className="text-label">150 gsm Silk</span>
                        </span>
                    </label>
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="PaperWeight"
                            value="250"
                            checked={options.PaperWeight === '250'}
                            onChange={() => handleOptionChange('PaperWeight', '250')}
                        />
                        <span className="text-tile">
                            <span className="text-label">250 gsm Silk</span>
                        </span>
                    </label>
                </div>
            </div>
            <div className="FormBox">
                <h5>Choose Fold</h5>
                <div className="Boxes">
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="Fold"
                            value="Landscape"
                            checked={options.Fold === 'Landscape'}
                            onChange={() => handleOptionChange('Fold', 'Landscape')}
                        />
                        <span className="text-tile">
                            <span className="radio-icon">
                                <img src="/Icons/Landscape.png" alt="Bicycle" className='radio-icons-2' />
                            </span>
                            <span className="text-label">Landscape</span>
                        </span>
                    </label>
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="Fold"
                            value="Portrait"
                            checked={options.Fold === 'Portrait'}
                            onChange={() => handleOptionChange('Fold', 'Portrait')}
                        />
                        <span className="text-tile">
                            <span className="radio-icon">
                                <img src="/Icons/PotraitFold.png" alt="Bicycle" className='radio-icons-2' />
                            </span>
                            <span className="text-label">Portrait</span>
                        </span>
                    </label>
                </div>
            </div>

            <div className="FormBox">
                <h5>Choose Amount of Printed Pages</h5>
                <select
                    className="Selection"
                    onChange={(e) => handleOptionChange('AmountOfPrintedPages', e.target.value)}
                >
                    <option value="8PP">8PP</option>
                    <option value="12PP">12PP</option>
                    <option value="16PP">16PP</option>
                    <option value="20PP">20PP</option>
                    <option value="24PP">24PP</option>
                    <option value="28PP">28PP</option>
                    <option value="32PP">32PP</option>
                    <option value="36PP">36PP</option>
                    <option value="40PP">40PP</option>
                    <option value="44PP">44PP</option>
                    <option value="48PP">48PP</option>
                    <option value="52PP">52PP</option>
                    <option value="56PP">56PP</option>
                    <option value="60PP">60PP</option>
                    <option value="64PP">64PP</option>
                    <option value="68PP">68PP</option>
                    <option value="72PP">72PP</option>
                    <option value="76PP">76PP</option>
                    <option value="80PP">80PP</option>
                    <option value="84PP">84PP</option>
                    <option value="88PP">88PP</option>
                    <option value="92PP">92PP</option>
                    <option value="96PP">96PP</option>
                    <option value="100PP">100PP</option>

                </select>
            </div>

            <div className="FormBox">
                <h5>Choose Cover Option</h5>
                <div className="Boxes">

                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="CoverOption"
                            value="250"
                            checked={options.CoverOption === '250'}
                            onChange={() => handleOptionChange('CoverOption', '250')}
                        />
                        <span className="text-tile">
                            <span className="text-label">250 gsm Silk</span>
                        </span>
                    </label>
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="CoverOption"
                            value="350"
                            checked={options.CoverOption === '350'}
                            onChange={() => handleOptionChange('CoverOption', '350')}
                        />
                        <span className="text-tile">
                            <span className="text-label">350 gsm Silk</span>
                        </span>
                    </label>
                </div>
            </div>


            <div className="FormBox">
                <h5>Choose Sides</h5>
                <div className="Boxes">
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="Sides"
                            value="Single"
                            checked={options.Sides === 'Single'}
                            onChange={() => handleOptionChange('Sides', 'Single')}
                        />
                        <span className="text-tile">
                            <span className="radio-icon">
                                <img src="/Icons/SingleSide.png" alt="Bicycle" className='radio-icons-2' />
                            </span>
                            <span className="text-label">Single</span>
                        </span>
                    </label>
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="Sides"
                            value="Double"
                            checked={options.Sides === 'Double'}
                            onChange={() => handleOptionChange('Sides', 'Double')}
                        />
                        <span className="text-tile">
                            <span className="radio-icon">
                                <img src="/Icons/DoubleSide.png" alt="Bicycle" className='radio-icons-2' />
                            </span>
                            <span className="text-label">Double</span>
                        </span>
                    </label>
                </div>
            </div>
            <div className="FormBox">
                <h5>Choose Lamination</h5>
                <div className="Boxes">
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="Lamination"
                            value="Matt"
                            checked={options.Lamination === 'Matt'}
                            onChange={() => handleOptionChange('Lamination', 'Matt')}
                        />
                        <span className="text-tile">
                            <span className="radio-icon">
                                <img src="/Icons/MattLamination.png" alt="Bicycle" className='radio-icons-2' />
                            </span>
                            <span className="text-label">Matt</span>
                        </span>
                    </label>
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="Lamination"
                            value="Valvet"
                            checked={options.Lamination === 'Valvet'}
                            onChange={() => handleOptionChange('Lamination', 'Valvet')}
                        />
                        <span className="text-tile">
                            <span className="radio-icon">
                                <img src="/Icons/ValvetLamination.png" alt="Bicycle" className='radio-icons-2' />
                            </span>
                            <span className="text-label">Valvet</span>
                        </span>
                    </label>
                </div>
            </div>
            <div className="FormBox">
                <h5>Choose UV Spot</h5>
                <div className="Boxes">
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="UVSpot"
                            value="None"
                            checked={options.UVSpot === 'None'}
                            onChange={() => handleOptionChange('UVSpot', 'None')}
                        />
                        <span className="text-tile">
                            <span className="radio-icon">
                                <img src="/Icons/NoUV.png" alt="Bicycle" className='radio-icons-2' />
                            </span>
                            <span className="text-label">None</span>
                        </span>
                    </label>
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="UVSpot"
                            value="Gold-UVSpot"
                            checked={options.UVSpot === 'Gold-UVSpot'}
                            onChange={() => handleOptionChange('UVSpot', 'Gold-UVSpot')}
                        />
                        <span className="text-tile">
                            <span className="radio-icon">
                                <img src="/Icons/GoldUV.png" alt="Bicycle" className='radio-icons-2' />
                            </span>
                            <span className="text-label">Gold UV Spot</span>
                        </span>
                    </label>
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="UVSpot"
                            value="Silver-UVSpot"
                            checked={options.UVSpot === 'Silver-UVSpot'}
                            onChange={() => handleOptionChange('UVSpot', 'Silver-UVSpot')}
                        />
                        <span className="text-tile">
                            <span className="radio-icon">
                                <img src="/Icons/SilverUV.png" alt="Bicycle" className='radio-icons-2' />
                            </span>
                            <span className="text-label">Silver UV Spot</span>
                        </span>
                    </label>
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="UVSpot"
                            value="Chrome-UVSpot"
                            checked={options.UVSpot === 'Chrome-UVSpot'}
                            onChange={() => handleOptionChange('UVSpot', 'Chrome-UVSpot')}
                        />
                        <span className="text-tile">
                            <span className="radio-icon">
                                <img src="/Icons/ChromeUV.png" alt="Bicycle" className='radio-icons-2' />
                            </span>
                            <span className="text-label">Chrome UV Spot</span>
                        </span>
                    </label>
                </div>
            </div>
            <div className="FormBox">
                <h5>Choose Quantity</h5>
                <div className="Boxes">
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="Quantity"
                            value="100"
                            checked={options.Quantity === '50'}
                            onChange={() => handleOptionChange('Quantity', '50')}
                        />
                        <span className="text-tile">
                            <span className="text-label">50</span>
                        </span>
                    </label>
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="Quantity"
                            value="100"
                            checked={options.Quantity === '100'}
                            onChange={() => handleOptionChange('Quantity', '100')}
                        />
                        <span className="text-tile">
                            <span className="text-label">100</span>
                        </span>
                    </label>
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="Quantity"
                            value="200"
                            checked={options.Quantity === '200'}
                            onChange={() => handleOptionChange('Quantity', '200')}
                        />
                        <span className="text-tile">
                            <span className="text-label">200</span>
                        </span>
                    </label>
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="Quantity"
                            value="300"
                            checked={options.Quantity === '300'}
                            onChange={() => handleOptionChange('Quantity', '300')}
                        />
                        <span className="text-tile">
                            <span className="text-label">300</span>
                        </span>
                    </label>
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="Quantity"
                            value="400"
                            checked={options.Quantity === '400'}
                            onChange={() => handleOptionChange('Quantity', '400')}
                        />
                        <span className="text-tile">
                            <span className="text-label">400</span>
                        </span>
                    </label>
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="Quantity"
                            value="500"
                            checked={options.Quantity === '500'}
                            onChange={() => handleOptionChange('Quantity', '500')}
                        />
                        <span className="text-tile">
                            <span className="text-label">500</span>
                        </span>
                    </label>
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="Quantity"
                            value="750"
                            checked={options.Quantity === '750'}
                            onChange={() => handleOptionChange('Quantity', '750')}
                        />
                        <span className="text-tile">
                            <span className="text-label">750</span>
                        </span>
                    </label>

                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="Quantity"
                            value="1000"
                            checked={options.Quantity === '1000'}
                            onChange={() => handleOptionChange('Quantity', '1000')}
                        />
                        <span className="text-tile">
                            <span className="text-label">1000</span>
                        </span>
                    </label>
                </div>
            </div>
            <div className="FormBox">
                <h5>Choose Delivery</h5>
                <div className="Boxes">
                    <label>
                        <input
                            className="radio-input"
                            type="radio"
                            name="engine"
                            value="Delivery"
                            checked={options.Delivery === '1-2'}
                            onChange={() => handleOptionChange('Delivery', '1-2')}
                        />
                        <span className="radio-tile">
                            <span className="radio-icon">
                                <img src="/Icons/Delivery.png" alt="Bicycle" className='radio-icons' />
                            </span>
                            <span className="radio-label">1-2 Delivery Days</span>
                        </span>
                    </label>
                    <label>
                        <input
                            className="radio-input"
                            type="radio"
                            name="engine"
                            value="Delivery"
                            checked={options.Delivery === '3-4'}
                            onChange={() => handleOptionChange('Delivery', '3-4')}
                        />
                        <span className="radio-tile">
                            <span className="radio-icon">
                                <img src="/Icons/Delivery.png" alt="Bicycle" className='radio-icons' />
                            </span>
                            <span className="radio-label">3-4 Delivery Days</span>
                        </span>
                    </label>
                </div>

                <div className='FormSend'>
                    <div className="AFrameForm-2">
                        <input type="text" placeholder="Name" value={Name} onChange={(e) => setName(e.target.value)} />
                        <input type="text" placeholder="Email" value={Email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="AFrameForm-2">
                        <input type="text" placeholder="Phone" value={Phone} onChange={(e) => setPhone(e.target.value)} />
                        <input type="text" placeholder="Address" value={Address} onChange={(e) => setAddress(e.target.value)} />
                    </div>

                    <div className="RequestQuote" onClick={Submit}>
                        Request Quote
                    </div>
                </div>

            </div>
        </FormControl>
    );
};

const FoilLeafletForm = () => {
    const [options, setOptions] = React.useState({
        Sizes: '',
        UVSpot: '',
        Quantity: 0,
        Delivery: '',
        Name: '',
        Email: '',
        Phone: '',
        Address: '',
    });

    const [Name, setName] = React.useState('');
    const [Email, setEmail] = React.useState('');
    const [Phone, setPhone] = React.useState('');
    const [Address, setAddress] = React.useState('');

    const handleOptionChange = (category, value) => {
        setOptions((prevOptions) => ({
            ...prevOptions,
            [category]: value,
        }));
    };

    const Submit = () => {
        if (options.Sizes === '' || options.UVSpot === '' || options.Quantity === 0 || options.Delivery === '') {
            notification.open({
                message: 'Please Select All Options',
                description:
                    'Please Select All Options',
                icon: <DoneAllIcon style={{ color: '#108ee9' }} />,
            })
            return;
        }
        if (ValidateForm(Name, Email, Phone, Address)) {
            SuccessNotification();
            CallAPI({
                Name: Name,
                Email: Email,
                Phone: Phone,
                Address: Address,
                Quantity: options.Quantity,
                Delivery: options.Delivery,
                Sizes: options.Sizes,
                UVSpot: options.UVSpot,
            })
        }
    }

    return (
        <FormControl size="small">
            <div className="FormBox">
                <h5>Choose Paper Size</h5>
                <div className='Boxes'>
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="Sizes"
                            value="A4"
                            checked={options.Sizes === 'A4'}
                            onChange={() => handleOptionChange('Sizes', 'A4')}
                        />
                        <span className="text-tile">
                            <span className="text-label">A4</span>
                        </span>
                    </label>
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="Sizes"
                            value="A5"
                            checked={options.Sizes === 'A5'}
                            onChange={() => handleOptionChange('Sizes', 'A5')}
                        />
                        <span className="text-tile">
                            <span className="text-label">A5</span>
                        </span>
                    </label>
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="Sizes"
                            value="A6"
                            checked={options.Sizes === 'A6'}
                            onChange={() => handleOptionChange('Sizes', 'A6')}
                        />
                        <span className="text-tile">
                            <span className="text-label">A6</span>
                        </span>
                    </label>
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="Sizes"
                            value="DL"
                            checked={options.Sizes === 'DL'}
                            onChange={() => handleOptionChange('Sizes', 'DL')}
                        />
                        <span className="text-tile">
                            <span className="text-label">DL</span>
                        </span>
                    </label>
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="Sizes"
                            value="148"
                            checked={options.Sizes === '148'}
                            onChange={() => handleOptionChange('Sizes', '148')}
                        />
                        <span className="text-tile">
                            <span className="text-label">148x148mm</span>
                        </span>
                    </label>
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="Sizes"
                            value="210"
                            checked={options.Sizes === '210'}
                            onChange={() => handleOptionChange('Sizes', '210')}
                        />
                        <span className="text-tile">
                            <span className="text-label">210x210mm</span>
                        </span>
                    </label>
                </div>
            </div>
            <div className="FormBox">
                <h5>Choose UV Spot</h5>
                <div className="Boxes">
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="UVSpot"
                            value="None"
                            checked={options.UVSpot === 'None'}
                            onChange={() => handleOptionChange('UVSpot', 'None')}
                        />
                        <span className="text-tile">
                            <span className="radio-icon">
                                <img src="/Icons/NoUV.png" alt="Bicycle" className='radio-icons-2' />
                            </span>
                            <span className="text-label">None</span>
                        </span>
                    </label>
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="UVSpot"
                            value="Gold-UVSpot"
                            checked={options.UVSpot === 'Gold-UVSpot'}
                            onChange={() => handleOptionChange('UVSpot', 'Gold-UVSpot')}
                        />
                        <span className="text-tile">
                            <span className="radio-icon">
                                <img src="/Icons/GoldUV.png" alt="Bicycle" className='radio-icons-2' />
                            </span>
                            <span className="text-label">Gold UV Spot</span>
                        </span>
                    </label>
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="UVSpot"
                            value="Silver-UVSpot"
                            checked={options.UVSpot === 'Silver-UVSpot'}
                            onChange={() => handleOptionChange('UVSpot', 'Silver-UVSpot')}
                        />
                        <span className="text-tile">
                            <span className="radio-icon">
                                <img src="/Icons/SilverUV.png" alt="Bicycle" className='radio-icons-2' />
                            </span>
                            <span className="text-label">Silver UV Spot</span>
                        </span>
                    </label>
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="UVSpot"
                            value="Chrome-UVSpot"
                            checked={options.UVSpot === 'Chrome-UVSpot'}
                            onChange={() => handleOptionChange('UVSpot', 'Chrome-UVSpot')}
                        />
                        <span className="text-tile">
                            <span className="radio-icon">
                                <img src="/Icons/ChromeUV.png" alt="Bicycle" className='radio-icons-2' />
                            </span>
                            <span className="text-label">Chrome UV Spot</span>
                        </span>
                    </label>
                </div>
            </div>
            <div className="FormBox">
                <h5>Choose Quantity</h5>
                <div className="Boxes">
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="Quantity"
                            value="100"
                            checked={options.Quantity === '50'}
                            onChange={() => handleOptionChange('Quantity', '50')}
                        />
                        <span className="text-tile">
                            <span className="text-label">50</span>
                        </span>
                    </label>
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="Quantity"
                            value="100"
                            checked={options.Quantity === '100'}
                            onChange={() => handleOptionChange('Quantity', '100')}
                        />
                        <span className="text-tile">
                            <span className="text-label">100</span>
                        </span>
                    </label>
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="Quantity"
                            value="200"
                            checked={options.Quantity === '200'}
                            onChange={() => handleOptionChange('Quantity', '200')}
                        />
                        <span className="text-tile">
                            <span className="text-label">200</span>
                        </span>
                    </label>
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="Quantity"
                            value="300"
                            checked={options.Quantity === '300'}
                            onChange={() => handleOptionChange('Quantity', '300')}
                        />
                        <span className="text-tile">
                            <span className="text-label">300</span>
                        </span>
                    </label>
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="Quantity"
                            value="400"
                            checked={options.Quantity === '400'}
                            onChange={() => handleOptionChange('Quantity', '400')}
                        />
                        <span className="text-tile">
                            <span className="text-label">400</span>
                        </span>
                    </label>
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="Quantity"
                            value="500"
                            checked={options.Quantity === '500'}
                            onChange={() => handleOptionChange('Quantity', '500')}
                        />
                        <span className="text-tile">
                            <span className="text-label">500</span>
                        </span>
                    </label>
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="Quantity"
                            value="750"
                            checked={options.Quantity === '750'}
                            onChange={() => handleOptionChange('Quantity', '750')}
                        />
                        <span className="text-tile">
                            <span className="text-label">750</span>
                        </span>
                    </label>

                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="Quantity"
                            value="1000"
                            checked={options.Quantity === '1000'}
                            onChange={() => handleOptionChange('Quantity', '1000')}
                        />
                        <span className="text-tile">
                            <span className="text-label">1000</span>
                        </span>
                    </label>
                </div>
            </div>
            <div className="FormBox">
                <h5>Choose Delivery</h5>
                <div className="Boxes">
                    <label>
                        <input
                            className="radio-input"
                            type="radio"
                            name="engine"
                            value="Delivery"
                            checked={options.Delivery === '1-2'}
                            onChange={() => handleOptionChange('Delivery', '1-2')}
                        />
                        <span className="radio-tile">
                            <span className="radio-icon">
                                <img src="/Icons/Delivery.png" alt="Bicycle" className='radio-icons' />
                            </span>
                            <span className="radio-label">1-2 Delivery Days</span>
                        </span>
                    </label>
                    <label>
                        <input
                            className="radio-input"
                            type="radio"
                            name="engine"
                            value="Delivery"
                            checked={options.Delivery === '3-4'}
                            onChange={() => handleOptionChange('Delivery', '3-4')}
                        />
                        <span className="radio-tile">
                            <span className="radio-icon">
                                <img src="/Icons/Delivery.png" alt="Bicycle" className='radio-icons' />
                            </span>
                            <span className="radio-label">3-4 Delivery Days</span>
                        </span>
                    </label>
                </div>

                <div className='FormSend'>
                    <div className="AFrameForm-2">
                        <input type="text" placeholder="Name" value={Name} onChange={(e) => setName(e.target.value)} />
                        <input type="text" placeholder="Email" value={Email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="AFrameForm-2">
                        <input type="text" placeholder="Phone" value={Phone} onChange={(e) => setPhone(e.target.value)} />
                        <input type="text" placeholder="Address" value={Address} onChange={(e) => setAddress(e.target.value)} />
                    </div>

                    <div className="RequestQuote" onClick={Submit}>
                        Request Quote
                    </div>
                </div>

            </div>
        </FormControl>
    );
};

const FoilInviteForm = () => {
    const [options, setOptions] = React.useState({
        Sizes: '',
        PaperWeight: '',
        Sides: '',
        Lamination: '',
        Envelope: '',
        Quantity: 0,
        Delivery: '',
        Name: '',
        Email: '',
        Phone: '',
    });

    const [Name, setName] = React.useState('');
    const [Email, setEmail] = React.useState('');
    const [Phone, setPhone] = React.useState('');
    const [Address, setAddress] = React.useState('');

    const handleOptionChange = (category, value) => {
        setOptions((prevOptions) => ({
            ...prevOptions,
            [category]: value,
        }));
    };

    const Submit = () => {
        if (options.Sizes === '' || options.PaperWeight === '' || options.Sides === '' || options.Lamination === '' || options.Envelope === '' || options.Quantity === 0 || options.Delivery === '') {
            notification.open({
                message: 'Please Select All Options',
                description:
                    'Please Select All Options',
                icon: <DoneAllIcon style={{ color: '#108ee9' }} />,
            })
            return;
        }
        if (ValidateForm(Name, Email, Phone, Address)) {
            SuccessNotification();
            CallAPI({
                Name: Name,
                Email: Email,
                Phone: Phone,
                Address: Address,
                Quantity: options.Quantity,
                Delivery: options.Delivery,
                Sizes: options.Sizes,
                PaperWeight: options.PaperWeight,
                Sides: options.Sides,
                Lamination: options.Lamination,
                Envelope: options.Envelope,
            })
        }
    }

    return (
        <FormControl size="small">
            <div className="FormBox">
                <h5>Choose Paper Size</h5>
                <div className="Boxes">
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="Sizes"
                            value="A5"
                            checked={options.Sizes === 'A5'}
                            onChange={() => handleOptionChange('Sizes', 'A5')}
                        />
                        <span className="text-tile">
                            <span className="text-label">A5</span>
                        </span>
                    </label>
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="Sizes"
                            value="A6"
                            checked={options.Sizes === 'A6'}
                            onChange={() => handleOptionChange('Sizes', 'A6')}
                        />
                        <span className="text-tile">
                            <span className="text-label">A6</span>
                        </span>
                    </label>
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="Sizes"
                            value="DL"
                            checked={options.Sizes === 'DL'}
                            onChange={() => handleOptionChange('Sizes', 'DL')}
                        />
                        <span className="text-tile">
                            <span className="text-label">DL</span>
                        </span>
                    </label>
                </div>
            </div>
            <div className="FormBox">
                <h5>Choose Paper Weight</h5>
                <div className="Boxes">
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="PaperWeight"
                            value="250"
                            checked={options.PaperWeight === '250'}
                            onChange={() => handleOptionChange('PaperWeight', '250')}
                        />
                        <span className="text-tile">
                            <span className="text-label">250 gsm Silk</span>
                        </span>
                    </label>
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="PaperWeight"
                            value="350"
                            checked={options.PaperWeight === '350'}
                            onChange={() => handleOptionChange('PaperWeight', '350')}
                        />
                        <span className="text-tile">
                            <span className="text-label">350 gsm Silk</span>
                        </span>
                    </label>
                </div>
            </div>
            <div className="FormBox">
                <h5>Choose Sides</h5>
                <div className="Boxes">
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="Sides"
                            value="Single"
                            checked={options.Sides === 'Single'}
                            onChange={() => handleOptionChange('Sides', 'Single')}
                        />
                        <span className="text-tile">
                            <span className="radio-icon">
                                <img src="/Icons/SingleSide.png" alt="Bicycle" className='radio-icons-2' />
                            </span>
                            <span className="text-label">Single</span>
                        </span>
                    </label>
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="Sides"
                            value="Double"
                            checked={options.Sides === 'Double'}
                            onChange={() => handleOptionChange('Sides', 'Double')}
                        />
                        <span className="text-tile">
                            <span className="radio-icon">
                                <img src="/Icons/DoubleSide.png" alt="Bicycle" className='radio-icons-2' />
                            </span>
                            <span className="text-label">Double</span>
                        </span>
                    </label>
                </div>
            </div>
            <div className="FormBox">
                <h5>Choose Lamination</h5>
                <div className="Boxes">
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="Lamination"
                            value="Matt"
                            checked={options.Lamination === 'Matt'}
                            onChange={() => handleOptionChange('Lamination', 'Matt')}
                        />
                        <span className="text-tile">
                            <span className="radio-icon">
                                <img src="/Icons/MattLamination.png" alt="Bicycle" className='radio-icons-2' />
                            </span>
                            <span className="text-label">Matt</span>
                        </span>
                    </label>
                </div>
            </div>
            <div className="FormBox">
                <h5>Choose Envelope</h5>
                <div className="Boxes">
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="Envelope"
                            value="Envelope"
                            checked={options.Envelope === 'Standard'}
                            onChange={() => handleOptionChange('Envelope', 'Standard')}
                        />
                        <span className="text-tile">
                            <span className="radio-icon">
                                <img src="/Icons/StandardEnvelope.png" alt="Bicycle" className='radio-icons-2' />
                            </span>
                            <span className="text-label">Standard</span>
                        </span>
                    </label>
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="Envelope"
                            value="Envelope"
                            checked={options.Envelope === 'Premium'}
                            onChange={() => handleOptionChange('Envelope', 'Premium')}
                        />
                        <span className="text-tile">
                            <span className="radio-icon">
                                <img src="/Icons/PremiumEnvelope.png" alt="Bicycle" className='radio-icons-2' />
                            </span>
                            <span className="text-label">Premium</span>
                        </span>
                    </label>
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="Envelope"
                            value="Envelope"
                            checked={options.Envelope === 'Red'}
                            onChange={() => handleOptionChange('Envelope', 'Red')}
                        />
                        <span className="text-tile">
                            <span className="radio-icon">
                                <img src="/Icons/RedEnvelope.png" alt="Bicycle" className='radio-icons-2' />
                            </span>
                            <span className="text-label">Red</span>
                        </span>
                    </label>
                </div>


            </div>
            <div className="FormBox">
                <h5>Choose Quantity</h5>
                <div className="Boxes">
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="Quantity"
                            value="1"
                            checked={options.Quantity === '1'}
                            onChange={() => handleOptionChange('Quantity', '1')}
                        />
                        <span className="text-tile">
                            <span className="text-label">1</span>
                        </span>
                    </label>
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="Quantity"
                            value="2"
                            checked={options.Quantity === '2'}
                            onChange={() => handleOptionChange('Quantity', '2')}
                        />
                        <span className="text-tile">
                            <span className="text-label">2</span>
                        </span>
                    </label>
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="Quantity"
                            value="5"
                            checked={options.Quantity === '5'}
                            onChange={() => handleOptionChange('Quantity', '5')}
                        />
                        <span className="text-tile">
                            <span className="text-label">5</span>
                        </span>
                    </label>
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="Quantity"
                            value="10"
                            checked={options.Quantity === '10'}
                            onChange={() => handleOptionChange('Quantity', '10')}
                        />
                        <span className="text-tile">
                            <span className="text-label">10</span>
                        </span>
                    </label>
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="Quantity"
                            value="20"
                            checked={options.Quantity === '20'}
                            onChange={() => handleOptionChange('Quantity', '20')}
                        />
                        <span className="text-tile">
                            <span className="text-label">20</span>
                        </span>
                    </label>
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="Quantity"
                            value="30"
                            checked={options.Quantity === '30'}
                            onChange={() => handleOptionChange('Quantity', '30')}
                        />
                        <span className="text-tile">
                            <span className="text-label">30</span>
                        </span>
                    </label>
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="Quantity"
                            value="40"
                            checked={options.Quantity === '40'}
                            onChange={() => handleOptionChange('Quantity', '40')}
                        />
                        <span className="text-tile">
                            <span className="text-label">40</span>
                        </span>
                    </label>
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="Quantity"
                            value="50"
                            checked={options.Quantity === '50'}
                            onChange={() => handleOptionChange('Quantity', '50')}
                        />
                        <span className="text-tile">
                            <span className="text-label">50</span>
                        </span>
                    </label>

                </div>
            </div>
            <div className="FormBox">
                <h5>Choose Delivery</h5>
                <div className="Boxes">
                    <label>
                        <input
                            className="radio-input"
                            type="radio"
                            name="engine"
                            value="Delivery"
                            checked={options.Delivery === '1-2'}
                            onChange={() => handleOptionChange('Delivery', '1-2')}
                        />
                        <span className="radio-tile">
                            <span className="radio-icon">
                                <img src="/Icons/Delivery.png" alt="Bicycle" className='radio-icons' />
                            </span>
                            <span className="radio-label">1-2 Delivery Days</span>
                        </span>
                    </label>
                    <label>
                        <input
                            className="radio-input"
                            type="radio"
                            name="engine"
                            value="Delivery"
                            checked={options.Delivery === '3-4'}
                            onChange={() => handleOptionChange('Delivery', '3-4')}
                        />
                        <span className="radio-tile">
                            <span className="radio-icon">
                                <img src="/Icons/Delivery.png" alt="Bicycle" className='radio-icons' />
                            </span>
                            <span className="radio-label">3-4 Delivery Days</span>
                        </span>
                    </label>
                </div>
            </div>
            <div className='FormSend'>
                <div className="AFrameForm-2">
                    <input type="text" placeholder="Name" value={Name} onChange={(e) => setName(e.target.value)} />
                    <input type="text" placeholder="Email" value={Email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="AFrameForm-2">
                    <input type="text" placeholder="Phone" value={Phone} onChange={(e) => setPhone(e.target.value)} />
                    <input type="text" placeholder="Address" value={Address} onChange={(e) => setAddress(e.target.value)} />
                </div>

                <div className="RequestQuote" onClick={Submit}>
                    Request Quote
                </div>
            </div>
        </FormControl>
    )
}

const FoilFolderForm = () => {
    const [options, setOptions] = React.useState({
        FolderType: '',
        Sides: '',
        UVSpot: '',
        Quantity: 0,
        Delivery: '',
        Name: '',
        Email: '',
        Phone: '',
    });

    const [Name, setName] = React.useState('');
    const [Email, setEmail] = React.useState('');
    const [Phone, setPhone] = React.useState('');
    const [Address, setAddress] = React.useState('');

    const handleOptionChange = (category, value) => {
        setOptions((prevOptions) => ({
            ...prevOptions,
            [category]: value,
        }));
    };

    const Submit = () => {
        if (options.FolderType === '' || options.Sides === '' || options.UVSpot === '' || options.Quantity === 0 || options.Delivery === '') {
            notification.open({
                message: 'Please Select All Options',
                description:
                    'Please Select All Options',
                icon: <DoneAllIcon style={{ color: '#108ee9' }} />,
            })
            return;
        }
        if (ValidateForm(Name, Email, Phone, Address)) {
            SuccessNotification();
            CallAPI({
                Name: Name,
                Email: Email,
                Phone: Phone,
                Address: Address,
                Quantity: options.Quantity,
                Delivery: options.Delivery,
                Sizes: options.FolderType,
                Sides: options.Sides,
                UVSpot: options.UVSpot,
            })
        }
    }

    return (
        <FormControl size="small">
            <div className="FormBox">
                <h5>Choose Folder Type</h5>
                <div className="Boxes">
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="FolderType"
                            value="A4-Interlocking"
                            checked={options.FolderType === 'A4-Interlocking'}
                            onChange={() => handleOptionChange('FolderType', 'A4-Interlocking')}
                        />
                        <span className="text-tile">
                            <span className="text-label">A4 Interlocking</span>
                        </span>
                    </label>
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="FolderType"
                            value="A4-Interlocking-7mm"
                            checked={options.FolderType === 'A4-Interlocking-7mm'}
                            onChange={() => handleOptionChange('FolderType', 'A4-Interlocking-7mm')}
                        />
                        <span className="text-tile">
                            <span className="text-label">A4 Interlocking with 7mm Spinet</span>
                        </span>
                    </label>
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="FolderType"
                            value="A5-Interlocking"
                            checked={options.FolderType === 'A5-Interlocking'}
                            onChange={() => handleOptionChange('FolderType', 'A5-Interlocking')}
                        />
                        <span className="text-tile">
                            <span className="text-label">A5 Interlocking</span>
                        </span>
                    </label>
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="FolderType"
                            value="A5-Interlocking-7mm"
                            checked={options.FolderType === 'A5-Interlocking-7mm'}
                            onChange={() => handleOptionChange('FolderType', 'A5-Interlocking-7mm')}
                        />
                        <span className="text-tile">
                            <span className="text-label">A5 Interlocking with 7mm Spinet</span>
                        </span>
                    </label>
                </div>
            </div>
            <div className="FormBox">
                <h5>Choose Sides</h5>
                <div className="Boxes">
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="Sides"
                            value="Single"
                            checked={options.Sides === 'Single'}
                            onChange={() => handleOptionChange('Sides', 'Single')}
                        />
                        <span className="text-tile">
                            <span className="radio-icon">
                                <img src="/Icons/SingleSide.png" alt="Bicycle" className='radio-icons-2' />
                            </span>
                            <span className="text-label">Single</span>
                        </span>
                    </label>
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="Sides"
                            value="Double"
                            checked={options.Sides === 'Double'}
                            onChange={() => handleOptionChange('Sides', 'Double')}
                        />
                        <span className="text-tile">
                            <span className="radio-icon">
                                <img src="/Icons/DoubleSide.png" alt="Bicycle" className='radio-icons-2' />
                            </span>
                            <span className="text-label">Double</span>
                        </span>
                    </label>
                </div>
            </div>
            <div className="FormBox">
                <h5>Choose UV Spot</h5>
                <div className="Boxes">
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="UVSpot"
                            value="None"
                            checked={options.UVSpot === 'None'}
                            onChange={() => handleOptionChange('UVSpot', 'None')}
                        />
                        <span className="text-tile">
                            <span className="radio-icon">
                                <img src="/Icons/NoUV.png" alt="Bicycle" className='radio-icons-2' />
                            </span>
                            <span className="text-label">None</span>
                        </span>
                    </label>
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="UVSpot"
                            value="Gold-UVSpot"
                            checked={options.UVSpot === 'Gold-UVSpot'}
                            onChange={() => handleOptionChange('UVSpot', 'Gold-UVSpot')}
                        />
                        <span className="text-tile">
                            <span className="radio-icon">
                                <img src="/Icons/GoldUV.png" alt="Bicycle" className='radio-icons-2' />
                            </span>
                            <span className="text-label">Gold UV Spot</span>
                        </span>
                    </label>
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="UVSpot"
                            value="Silver-UVSpot"
                            checked={options.UVSpot === 'Silver-UVSpot'}
                            onChange={() => handleOptionChange('UVSpot', 'Silver-UVSpot')}
                        />
                        <span className="text-tile">
                            <span className="radio-icon">
                                <img src="/Icons/SilverUV.png" alt="Bicycle" className='radio-icons-2' />
                            </span>
                            <span className="text-label">Silver UV Spot</span>
                        </span>
                    </label>
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="UVSpot"
                            value="Chrome-UVSpot"
                            checked={options.UVSpot === 'Chrome-UVSpot'}
                            onChange={() => handleOptionChange('UVSpot', 'Chrome-UVSpot')}
                        />
                        <span className="text-tile">
                            <span className="radio-icon">
                                <img src="/Icons/ChromeUV.png" alt="Bicycle" className='radio-icons-2' />
                            </span>
                            <span className="text-label">Chrome UV Spot</span>
                        </span>
                    </label>
                </div>
            </div>
            <div className="FormBox">
                <h5>Choose Quantity</h5>
                <div className="Boxes">
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="Quantity"
                            value="1"
                            checked={options.Quantity === '1'}
                            onChange={() => handleOptionChange('Quantity', '1')}
                        />
                        <span className="text-tile">
                            <span className="text-label">1</span>
                        </span>
                    </label>
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="Quantity"
                            value="2"
                            checked={options.Quantity === '2'}
                            onChange={() => handleOptionChange('Quantity', '2')}
                        />
                        <span className="text-tile">
                            <span className="text-label">2</span>
                        </span>
                    </label>
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="Quantity"
                            value="5"
                            checked={options.Quantity === '5'}
                            onChange={() => handleOptionChange('Quantity', '5')}
                        />
                        <span className="text-tile">
                            <span className="text-label">5</span>
                        </span>
                    </label>
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="Quantity"
                            value="10"
                            checked={options.Quantity === '10'}
                            onChange={() => handleOptionChange('Quantity', '10')}
                        />
                        <span className="text-tile">
                            <span className="text-label">10</span>
                        </span>
                    </label>
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="Quantity"
                            value="20"
                            checked={options.Quantity === '20'}
                            onChange={() => handleOptionChange('Quantity', '20')}
                        />
                        <span className="text-tile">
                            <span className="text-label">20</span>
                        </span>
                    </label>
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="Quantity"
                            value="30"
                            checked={options.Quantity === '30'}
                            onChange={() => handleOptionChange('Quantity', '30')}
                        />
                        <span className="text-tile">
                            <span className="text-label">30</span>
                        </span>
                    </label>
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="Quantity"
                            value="40"
                            checked={options.Quantity === '40'}
                            onChange={() => handleOptionChange('Quantity', '40')}
                        />
                        <span className="text-tile">
                            <span className="text-label">40</span>
                        </span>
                    </label>
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="Quantity"
                            value="50"
                            checked={options.Quantity === '50'}
                            onChange={() => handleOptionChange('Quantity', '50')}
                        />
                        <span className="text-tile">
                            <span className="text-label">50</span>
                        </span>
                    </label>

                </div>
            </div>
            <div className="FormBox">
                <h5>Choose Delivery</h5>
                <div className="Boxes">
                    <label>
                        <input
                            className="radio-input"
                            type="radio"
                            name="engine"
                            value="Delivery"
                            checked={options.Delivery === '1-2'}
                            onChange={() => handleOptionChange('Delivery', '1-2')}
                        />
                        <span className="radio-tile">
                            <span className="radio-icon">
                                <img src="/Icons/Delivery.png" alt="Bicycle" className='radio-icons' />
                            </span>
                            <span className="radio-label">1-2 Delivery Days</span>
                        </span>
                    </label>
                    <label>
                        <input
                            className="radio-input"
                            type="radio"
                            name="engine"
                            value="Delivery"
                            checked={options.Delivery === '3-4'}
                            onChange={() => handleOptionChange('Delivery', '3-4')}
                        />
                        <span className="radio-tile">
                            <span className="radio-icon">
                                <img src="/Icons/Delivery.png" alt="Bicycle" className='radio-icons' />
                            </span>
                            <span className="radio-label">3-4 Delivery Days</span>
                        </span>
                    </label>
                </div>
            </div>
            <div className='FormSend'>
                <div className="AFrameForm-2">
                    <input type="text" placeholder="Name" value={Name} onChange={(e) => setName(e.target.value)} />
                    <input type="text" placeholder="Email" value={Email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="AFrameForm-2">
                    <input type="text" placeholder="Phone" value={Phone} onChange={(e) => setPhone(e.target.value)} />
                    <input type="text" placeholder="Address" value={Address} onChange={(e) => setAddress(e.target.value)} />
                </div>

                <div className="RequestQuote" onClick={Submit}>
                    Request Quote
                </div>
            </div>
        </FormControl>
    )
}
