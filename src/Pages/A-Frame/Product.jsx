import React, { useContext, useEffect } from 'react'
import Navigation from '../../Components/Navigation/Navigation'
import Context from '../../Context/Context'
import './product.modules.css'
import Pathway from '../../Components/ProductBar/Pathway'
import Footer from '../../Components/Navigation/Footer'
import DoneAllIcon from '@mui/icons-material/DoneAll';
import { FormControl, InputLabel, MenuItem, Select, AppBar, Toolbar, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { notification } from 'antd'

import { Collapse } from 'antd';

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

const CallAPI = (body) => {
    console.log(body)
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


const AFrameForm = () => {

    const [Quantity, setQuantity] = React.useState(0);
    const [selectedDelivery, setSelectedDelivery] = React.useState('1-2');
    const [Name, setName] = React.useState('');
    const [Email, setEmail] = React.useState('');
    const [Phone, setPhone] = React.useState('');
    const [Address, setAddress] = React.useState('');

    const handlequantityChange = (event) => {
        setQuantity(event.target.value);
    };

    const handleDeliveryChange = (event) => {
        setSelectedDelivery(event.target.value);
    };

    const Submit = () => {
        if (Quantity === 0) {
            notification.open({
                message: 'Please Select Quantity',
                description:
                    'Please Select Quantity',
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
                Quantity: Quantity,
                Delivery: selectedDelivery
            })
        }
    }

    return (
        <>
            <FormControl className='Select' size="small">
                <div className="AFrameForm">
                    <div className="quantity-inputs">
                        <select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={Quantity}
                            label="Quantity"
                            onChange={handlequantityChange}
                            className='Select'
                        >
                            <option value={0} disabled>Select Quantity</option>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={5}>5</option>
                            <option value={10}>10</option>
                            <option value={20}>20</option>
                        </select>
                    </div>
                    <div className="radio-inputs">
                        <label>
                            <input
                                className="radio-input"
                                type="radio"
                                name="engine"
                                value="1-2"
                                checked={selectedDelivery === '1-2'}
                                onChange={handleDeliveryChange}
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
                                value="3-4"
                                checked={selectedDelivery === '3-4'}
                                onChange={handleDeliveryChange}
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
        </>
    )
}

const StardardBusinessCardForm = () => {
    const [options, setOptions] = React.useState({
        PaperType: '',
        PaperWeight: '',
        Sides: '',
        Lamination: '',
        UVSpot: '',
        Corner: '',
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
        if (options.PaperType === '') {
            notification.open({
                message: 'Please Select Paper Type',
                description:
                    'Please Select Paper Type',
                icon: <DoneAllIcon style={{ color: '#108ee9' }} />,
            })
            return;
        }
        if (options.PaperWeight === '') {
            notification.open({
                message: 'Please Select Paper Weight',
                description:
                    'Please Select Paper Weight',
                icon: <DoneAllIcon style={{ color: '#108ee9' }} />,
            })
            return;
        }
        if (options.Sides === '') {
            notification.open({
                message: 'Please Select Sides',
                description:
                    'Please Select Sides',
                icon: <DoneAllIcon style={{ color: '#108ee9' }} />,
            })
            return;
        }
        if (options.Lamination === '') {
            notification.open({
                message: 'Please Select Lamination',
                description:
                    'Please Select Lamination',
                icon: <DoneAllIcon style={{ color: '#108ee9' }} />,
            })
            return;
        }
        if (options.UVSpot === '') {
            notification.open({
                message: 'Please Select UV Spot',
                description:
                    'Please Select UV Spot',
                icon: <DoneAllIcon style={{ color: '#108ee9' }} />,
            })
            return;
        }
        if (options.Corner === '') {
            notification.open({
                message: 'Please Select Corner',
                description:
                    'Please Select Corner',
                icon: <DoneAllIcon style={{ color: '#108ee9' }} />,
            })
            return;
        }
        if (options.Quantity === 0) {
            notification.open({
                message: 'Please Select Quantity',
                description:
                    'Please Select Quantity',
                icon: <DoneAllIcon style={{ color: '#108ee9' }} />,
            })
            return;
        }
        if (options.Delivery === '') {
            notification.open({
                message: 'Please Select Delivery',
                description:
                    'Please Select Delivery',
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
                PaperType: options.PaperType,
                PaperWeight: options.PaperWeight,
                Sides: options.Sides,
                Lamination: options.Lamination,
                UVSpot: options.UVSpot,
                Corner: options.Corner,
            })
        }
    }

    return (
        <FormControl size="small">
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
                <label>
                    <input
                        className="text-input"
                        type="radio"
                        name="PaperWeight"
                        value="450"
                        checked={options.PaperWeight === '450'}
                        onChange={() => handleOptionChange('PaperWeight', '450')}
                    />
                    <span className="text-tile">
                        <span className="text-label">450 gsm Silk</span>
                    </span>
                </label>
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
                            value="None"
                            checked={options.Lamination === 'None'}
                            onChange={() => handleOptionChange('Lamination', 'None')}
                        />
                        <span className="text-tile">
                            <span className="radio-icon">
                                <img src="/Icons/NoLamination.png" alt="Bicycle" className='radio-icons-2' />
                            </span>
                            <span className="text-label">None</span>
                        </span>
                    </label>
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
                            value="Gloss"
                            checked={options.Lamination === 'Gloss'}
                            onChange={() => handleOptionChange('Lamination', 'Gloss')}
                        />
                        <span className="text-tile">
                            <span className="radio-icon">
                                <img src="/Icons/GlossLamination.png" alt="Bicycle" className='radio-icons-2' />
                            </span>
                            <span className="text-label">Gloss</span>
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
                        <span className="text-label">None</span>
                    </span>
                </label>
            </div>
            <div className="FormBox">
                <h5>Choose Corner</h5>
                <div className="Boxes">
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="Corner"
                            value="None"
                            checked={options.Corner === 'None'}
                            onChange={() => handleOptionChange('Corner', 'None')}
                        />
                        <span className="text-tile">
                            <span className="radio-icon">
                                <img src="/Icons/NoCorners.png" alt="Bicycle" className='radio-icons-2' />
                            </span>

                            <span className="text-label">None</span>
                        </span>
                    </label>
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="Corner"
                            value="Round"
                            checked={options.Corner === 'Round'}
                            onChange={() => handleOptionChange('Corner', 'Round')}
                        />
                        <span className="text-tile">
                            <span className="radio-icon">
                                <img src="/Icons/RoundedCorners.png" alt="Bicycle" className='radio-icons-2' />
                            </span>
                            <span className="text-label">Round</span>
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

const BusinessCardType2 = () => {
    const [options, setOptions] = React.useState({
        Sides: '',
        Lamination: '',
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
        if (options.Sides === '') {
            notification.open({
                message: 'Please Select Sides',
                description:
                    'Please Select Sides',
                icon: <DoneAllIcon style={{ color: '#108ee9' }} />,
            })
            return;
        }
        if (options.Lamination === '') {
            notification.open({
                message: 'Please Select Lamination',
                description:
                    'Please Select Lamination',
                icon: <DoneAllIcon style={{ color: '#108ee9' }} />,
            })
            return;
        }
        if (options.UVSpot === '') {
            notification.open({
                message: 'Please Select UV Spot',
                description:
                    'Please Select UV Spot',
                icon: <DoneAllIcon style={{ color: '#108ee9' }} />,
            })
            return;
        }
        if (options.Quantity === 0) {
            notification.open({
                message: 'Please Select Quantity',
                description:
                    'Please Select Quantity',
                icon: <DoneAllIcon style={{ color: '#108ee9' }} />,
            })
            return;
        }
        if (options.Delivery === '') {
            notification.open({
                message: 'Please Select Delivery',
                description:
                    'Please Select Delivery',
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
                Sides: options.Sides,
                Lamination: options.Lamination,
                UVSpot: options.UVSpot,
            })
        }
    }





    return (
        <FormControl size="small">
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
                            value="None"
                            checked={options.Lamination === 'None'}
                            onChange={() => handleOptionChange('Lamination', 'None')}
                        />
                        <span className="text-tile">
                            <span className="radio-icon">
                                <img src="/Icons/NoLamination.png" alt="Bicycle" className='radio-icons-2' />
                            </span>
                            <span className="text-label">None</span>
                        </span>
                    </label>
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
                            value="Gloss"
                            checked={options.Lamination === 'Gloss'}
                            onChange={() => handleOptionChange('Lamination', 'Gloss')}
                        />
                        <span className="text-tile">
                            <span className="radio-icon">
                                <img src="/Icons/GlossLamination.png" alt="Bicycle" className='radio-icons-2' />
                            </span>
                            <span className="text-label">Gloss</span>
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
                        <span className="text-label">None</span>
                    </span>
                </label>
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

const BusinessCardType3 = () => {
    const [options, setOptions] = React.useState({
        PaperWeight: '',
        Sides: '',
        Fold: '',
        Lamination: '',
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
        if (options.PaperWeight === '') {
            notification.open({
                message: 'Please Select Paper Weight',
                description:
                    'Please Select Paper Weight',
                icon: <DoneAllIcon style={{ color: '#108ee9' }} />,
            })
            return;
        }
        if (options.Sides === '') {
            notification.open({
                message: 'Please Select Sides',
                description:
                    'Please Select Sides',
                icon: <DoneAllIcon style={{ color: '#108ee9' }} />,
            })
            return;
        }
        if (options.Fold === '') {
            notification.open({
                message: 'Please Select Fold',
                description:
                    'Please Select Fold',
                icon: <DoneAllIcon style={{ color: '#108ee9' }} />,
            })
            return;
        }
        if (options.Lamination === '') {
            notification.open({
                message: 'Please Select Lamination',
                description:
                    'Please Select Lamination',
                icon: <DoneAllIcon style={{ color: '#108ee9' }} />,
            })
            return;
        }
        if (options.Quantity === 0) {
            notification.open({
                message: 'Please Select Quantity',
                description:
                    'Please Select Quantity',
                icon: <DoneAllIcon style={{ color: '#108ee9' }} />,
            })
            return;
        }
        if (options.Delivery === '') {
            notification.open({
                message: 'Please Select Delivery',
                description:
                    'Please Select Delivery',
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
                PaperWeight: options.PaperWeight,
                Sides: options.Sides,
                Fold: options.Fold,
                Lamination: options.Lamination,
            })
        }
    }

    return (
        <FormControl size="small">
            <div className="FormBox">
                <h5>Choose Paper Weight</h5>
                <div className="Boxes">
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="PaperWeight"
                            value="350"
                            checked={options.PaperWeight === '350'}
                            onChange={() => handleOptionChange('PaperWeight', '350 gsm Silk')}
                        />
                        <span className="text-tile">
                            <span className="text-label">350 gsm Silk</span>
                        </span>
                    </label>
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="PaperWeight"
                            value="351"
                            checked={options.PaperWeight === '351'}
                            onChange={() => handleOptionChange('PaperWeight', '350 gsm Unsilk')}
                        />
                        <span className="text-tile">
                            <span className="text-label">350 gsm Unsilk</span>
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
                            value="None"
                            checked={options.Lamination === 'None'}
                            onChange={() => handleOptionChange('Lamination', 'None')}
                        />
                        <span className="text-tile">
                            <span className="radio-icon">
                                <img src="/Icons/NoLamination.png" alt="Bicycle" className='radio-icons-2' />
                            </span>
                            <span className="text-label">None</span>
                        </span>
                    </label>
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
                            value="Gloss"
                            checked={options.Lamination === 'Gloss'}
                            onChange={() => handleOptionChange('Lamination', 'Gloss')}
                        />
                        <span className="text-tile">
                            <span className="radio-icon">
                                <img src="/Icons/GlossLamination.png" alt="Bicycle" className='radio-icons-2' />
                            </span>
                            <span className="text-label">Gloss</span>
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


const BusinessCardType4 = () => {
    const [options, setOptions] = React.useState({
        Sides: '',
        Corner: '',
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
        if (options.Sides === '') {
            notification.open({
                message: 'Please Select Sides',
                description:
                    'Please Select Sides',
                icon: <DoneAllIcon style={{ color: '#108ee9' }} />,
            })
            return;
        }
        if (options.Corner === '') {
            notification.open({
                message: 'Please Select Corner',
                description:
                    'Please Select Corner',
                icon: <DoneAllIcon style={{ color: '#108ee9' }} />,
            })
            return;
        }
        if (options.Quantity === 0) {
            notification.open({
                message: 'Please Select Quantity',
                description:
                    'Please Select Quantity',
                icon: <DoneAllIcon style={{ color: '#108ee9' }} />,
            })
            return;
        }
        if (options.Delivery === '') {
            notification.open({
                message: 'Please Select Delivery',
                description:
                    'Please Select Delivery',
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
                Sides: options.Sides,
                Corner: options.Corner,
            })
        }
    }

    return (
        <FormControl size="small">
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
                <h5>Choose Corner</h5>
                <div className="Boxes">
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="Corner"
                            value="None"
                            checked={options.Corner === 'None'}
                            onChange={() => handleOptionChange('Corner', 'None')}
                        />
                        <span className="text-tile">
                            <span className="radio-icon">
                                <img src="/Icons/NoCorners.png" alt="Bicycle" className='radio-icons-2' />
                            </span>

                            <span className="text-label">None</span>
                        </span>
                    </label>
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="Corner"
                            value="Round"
                            checked={options.Corner === 'Round'}
                            onChange={() => handleOptionChange('Corner', 'Round')}
                        />
                        <span className="text-tile">
                            <span className="radio-icon">
                                <img src="/Icons/RoundedCorners.png" alt="Bicycle" className='radio-icons-2' />
                            </span>
                            <span className="text-label">Round</span>
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

const BusinessCardType5 = () => {
    const [options, setOptions] = React.useState({
        Sides: '',
        Lamination: '',
        Corner: '',
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
        if (options.Sides === '') {
            notification.open({
                message: 'Please Select Sides',
                description:
                    'Please Select Sides',
                icon: <DoneAllIcon style={{ color: '#108ee9' }} />,
            })
            return;
        }
        if (options.Corner === '') {
            notification.open({
                message: 'Please Select Corner',
                description:
                    'Please Select Corner',
                icon: <DoneAllIcon style={{ color: '#108ee9' }} />,
            })
            return;
        }
        if (options.Lamination === '') {
            notification.open({
                message: 'Please Select Lamination',
                description:
                    'Please Select Lamination',
                icon: <DoneAllIcon style={{ color: '#108ee9' }} />,
            })
            return;
        }
        if (options.Quantity === 0) {
            notification.open({
                message: 'Please Select Quantity',
                description:
                    'Please Select Quantity',
                icon: <DoneAllIcon style={{ color: '#108ee9' }} />,
            })
            return;
        }
        if (options.Delivery === '') {
            notification.open({
                message: 'Please Select Delivery',
                description:
                    'Please Select Delivery',
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
                Sides: options.Sides,
                Lamination: options.Lamination,
                Corner: options.Corner,
            })
        }
    }

    return (
        <FormControl size="small">
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
                            value="None"
                            checked={options.Lamination === 'None'}
                            onChange={() => handleOptionChange('Lamination', 'None')}
                        />
                        <span className="text-tile">
                            <span className="radio-icon">
                                <img src="/Icons/NoLamination.png" alt="Bicycle" className='radio-icons-2' />
                            </span>
                            <span className="text-label">None</span>
                        </span>
                    </label>
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
                            value="Gloss"
                            checked={options.Lamination === 'Gloss'}
                            onChange={() => handleOptionChange('Lamination', 'Gloss')}
                        />
                        <span className="text-tile">
                            <span className="radio-icon">
                                <img src="/Icons/GlossLamination.png" alt="Bicycle" className='radio-icons-2' />
                            </span>
                            <span className="text-label">Gloss</span>
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
                <h5>Choose Corner</h5>
                <div className="Boxes">
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="Corner"
                            value="None"
                            checked={options.Corner === 'None'}
                            onChange={() => handleOptionChange('Corner', 'None')}
                        />
                        <span className="text-tile">
                            <span className="radio-icon">
                                <img src="/Icons/NoCorners.png" alt="Bicycle" className='radio-icons-2' />
                            </span>

                            <span className="text-label">None</span>
                        </span>
                    </label>
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="Corner"
                            value="Round"
                            checked={options.Corner === 'Round'}
                            onChange={() => handleOptionChange('Corner', 'Round')}
                        />
                        <span className="text-tile">
                            <span className="radio-icon">
                                <img src="/Icons/RoundedCorners.png" alt="Bicycle" className='radio-icons-2' />
                            </span>
                            <span className="text-label">Round</span>
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

const BusinessCardType6 = () => {
    const [options, setOptions] = React.useState({
        Sides: '',
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
        if (options.Sides === '') {
            notification.open({
                message: 'Please Select Sides',
                description:
                    'Please Select Sides',
                icon: <DoneAllIcon style={{ color: '#108ee9' }} />,
            })
            return;
        }
        if (options.Quantity === 0) {
            notification.open({
                message: 'Please Select Quantity',
                description:
                    'Please Select Quantity',
                icon: <DoneAllIcon style={{ color: '#108ee9' }} />,
            })
            return;
        }
        if (options.Delivery === '') {
            notification.open({
                message: 'Please Select Delivery',
                description:
                    'Please Select Delivery',
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
                Sides: options.Sides,
            })
        }
    }

    return (
        <FormControl size="small">
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

const BusinessCardType7 = () => {
    const [options, setOptions] = React.useState({
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
        if (options.Sides === '') {
            notification.open({
                message: 'Please Select Sides',
                description:
                    'Please Select Sides',
                icon: <DoneAllIcon style={{ color: '#108ee9' }} />,
            })
            return;
        }
        if (options.UVSpot === '') {
            notification.open({
                message: 'Please Select UV Spot',
                description:
                    'Please Select UV Spot',
                icon: <DoneAllIcon style={{ color: '#108ee9' }} />,
            })
            return;
        }
        if (options.Quantity === 0) {
            notification.open({
                message: 'Please Select Quantity',
                description:
                    'Please Select Quantity',
                icon: <DoneAllIcon style={{ color: '#108ee9' }} />,
            })
            return;
        }
        if (options.Delivery === '') {
            notification.open({
                message: 'Please Select Delivery',
                description:
                    'Please Select Delivery',
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
                Sides: options.Sides,
                UVSpot: options.UVSpot,
            })
        }
    }

    return (
        <FormControl size="small">
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

const CalenderForm = () => {
    const [options, setOptions] = React.useState({
        Sizes: '',
        PaperWeight: '',
        Sides: '',
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
        if (options.Sizes === '') {
            notification.open({
                message: 'Please Select Paper Size',
                description:
                    'Please Select Paper Size',
                icon: <DoneAllIcon style={{ color: '#108ee9' }} />,
            }
            )
            return;
        }
        if (options.PaperWeight === '') {
            notification.open({
                message: 'Please Select Paper Weight',
                description:
                    'Please Select Paper Weight',
                icon: <DoneAllIcon style={{ color: '#108ee9' }} />,
            })
            return;
        }
        if (options.Sides === '') {
            notification.open({
                message: 'Please Select Sides',
                description:
                    'Please Select Sides',
                icon: <DoneAllIcon style={{ color: '#108ee9' }} />,
            })
            return;
        }
        if (options.Quantity === 0) {
            notification.open({
                message: 'Please Select Quantity',
                description:
                    'Please Select Quantity',
                icon: <DoneAllIcon style={{ color: '#108ee9' }} />,
            })
            return;
        }
        if (options.Delivery === '') {
            notification.open({
                message: 'Please Select Delivery',
                description:
                    'Please Select Delivery',
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
                            value="150"
                            checked={options.PaperWeight === '150'}
                            onChange={() => handleOptionChange('PaperWeight', '150')}
                        />
                        <span className="text-tile">
                            <span className="text-label">150 gsm</span>
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
                            <span className="text-label">250 gsm</span>
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
                            value="25"
                            checked={options.Quantity === '25'}
                            onChange={() => handleOptionChange('Quantity', '25')}
                        />
                        <span className="text-tile">
                            <span className="text-label">25</span>
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

const CalenderForm2 = () => {
    const [options, setOptions] = React.useState({
        Sizes: '',
        PaperWeight: '',
        Sides: '',
        Fold: '',
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
        if (options.Fold === '') {
            notification.open({
                message: 'Please Select Fold',
                description:
                    'Please Select Fold',
                icon: <DoneAllIcon style={{ color: '#108ee9' }} />,
            })
            return;
        }
        if (options.Sizes === '') {
            notification.open({
                message: 'Please Select Paper Size',
                description:
                    'Please Select Paper Size',
                icon: <DoneAllIcon style={{ color: '#108ee9' }} />,
            }
            )
            return;
        }
        if (options.PaperWeight === '') {
            notification.open({
                message: 'Please Select Paper Weight',
                description:
                    'Please Select Paper Weight',
                icon: <DoneAllIcon style={{ color: '#108ee9' }} />,
            })
            return;
        }
        if (options.Sides === '') {
            notification.open({
                message: 'Please Select Sides',
                description:
                    'Please Select Sides',
                icon: <DoneAllIcon style={{ color: '#108ee9' }} />,
            })
            return;
        }
        if (options.Quantity === 0) {
            notification.open({
                message: 'Please Select Quantity',
                description:
                    'Please Select Quantity',
                icon: <DoneAllIcon style={{ color: '#108ee9' }} />,
            })
            return;
        }
        if (options.Delivery === '') {
            notification.open({
                message: 'Please Select Delivery',
                description:
                    'Please Select Delivery',
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
                Fold: options.Fold,
                Sizes: options.Sizes,
                PaperWeight: options.PaperWeight,
                Sides: options.Sides,
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
                            value="A3"
                            checked={options.Sizes === 'A3'}
                            onChange={() => handleOptionChange('Sizes', 'A3')}
                        />
                        <span className="text-tile">
                            <span className="text-label">A3</span>
                        </span>
                    </label>
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
                            value="150"
                            checked={options.PaperWeight === '150'}
                            onChange={() => handleOptionChange('PaperWeight', '150')}
                        />
                        <span className="text-tile">
                            <span className="text-label">150 gsm</span>
                        </span>
                    </label>
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="PaperWeight"
                            value="170"
                            checked={options.PaperWeight === '170'}
                            onChange={() => handleOptionChange('PaperWeight', '170')}
                        />
                        <span className="text-tile">
                            <span className="text-label">170 gsm</span>
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
                            <span className="text-label">250 gsm</span>
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
                            value="25"
                            checked={options.Quantity === '25'}
                            onChange={() => handleOptionChange('Quantity', '25')}
                        />
                        <span className="text-tile">
                            <span className="text-label">25</span>
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

const CardboardForm = () => {
    const [options, setOptions] = React.useState({
        Sizes: '',
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
        if (options.Sizes === '') {
            notification.open({
                message: 'Please Select Paper Size',
                description:
                    'Please Select Paper Size',
                icon: <DoneAllIcon style={{ color: '#108ee9' }} />,
            }
            )
            return;
        }
        if (options.Quantity === 0) {
            notification.open({
                message: 'Please Select Quantity',
                description:
                    'Please Select Quantity',
                icon: <DoneAllIcon style={{ color: '#108ee9' }} />,
            })
            return;
        }
        if (options.Delivery === '') {
            notification.open({
                message: 'Please Select Delivery',
                description:
                    'Please Select Delivery',
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
                            value="A1"
                            checked={options.Sizes === 'A1'}
                            onChange={() => handleOptionChange('Sizes', 'A1')}
                        />
                        <span className="text-tile">
                            <span className="text-label">A1</span>
                        </span>
                    </label>
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="Sizes"
                            value="A2"
                            checked={options.Sizes === 'A2'}
                            onChange={() => handleOptionChange('Sizes', 'A2')}
                        />
                        <span className="text-tile">
                            <span className="text-label">A2</span>
                        </span>
                    </label>
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="Sizes"
                            value="A3"
                            checked={options.Sizes === 'A3'}
                            onChange={() => handleOptionChange('Sizes', 'A3')}
                        />
                        <span className="text-tile">
                            <span className="text-label">A3</span>
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

const ChristmasCardForm = () => {
    const [options, setOptions] = React.useState({
        Sizes: '',
        PaperType: '',
        PaperWeight: '',
        Sides: '',
        Lamination: '',
        Fold: '',
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
        if (options.Sizes === '' || options.PaperType === '' || options.PaperWeight === '' || options.Sides === '' || options.Lamination === '' || options.Fold === '' || options.Envelope === '' || options.Quantity === 0 || options.Delivery === '') {
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
                PaperType: options.PaperType,
                PaperWeight: options.PaperWeight,
                Sides: options.Sides,
                Lamination: options.Lamination,
                Fold: options.Fold,
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
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="Sizes"
                            value="148mm By 148mm"
                            checked={options.Sizes === '148mm By 148mm'}
                            onChange={() => handleOptionChange('Sizes', '148mm By 148mm')}
                        />
                        <span className="text-tile">
                            <span className="text-label">148mm By 148mm</span>
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
                            value="None"
                            checked={options.Lamination === 'None'}
                            onChange={() => handleOptionChange('Lamination', 'None')}
                        />
                        <span className="text-tile">
                            <span className="radio-icon">
                                <img src="/Icons/NoLamination.png" alt="Bicycle" className='radio-icons-2' />
                            </span>
                            <span className="text-label">None</span>
                        </span>
                    </label>
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
                            value="Gloss"
                            checked={options.Lamination === 'Gloss'}
                            onChange={() => handleOptionChange('Lamination', 'Gloss')}
                        />
                        <span className="text-tile">
                            <span className="radio-icon">
                                <img src="/Icons/GlossLamination.png" alt="Bicycle" className='radio-icons-2' />
                            </span>
                            <span className="text-label">Gloss</span>
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

const CorrexForm = () => {
    const [options, setOptions] = React.useState({
        Sizes: '',
        Sides: '',
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
        if (options.Sizes === '' || options.Sides === '' || options.Quantity === '' || options.Delivery === 0) {
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
                Sides: options.Sides,
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
                            value="A0"
                            checked={options.Sizes === 'A0'}
                            onChange={() => handleOptionChange('Sizes', 'A0')}
                        />
                        <span className="text-tile">
                            <span className="text-label">A0</span>
                        </span>
                    </label>
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="Sizes"
                            value="A1"
                            checked={options.Sizes === 'A1'}
                            onChange={() => handleOptionChange('Sizes', 'A1')}
                        />
                        <span className="text-tile">
                            <span className="text-label">A1</span>
                        </span>
                    </label>
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="Sizes"
                            value="A2"
                            checked={options.Sizes === 'A2'}
                            onChange={() => handleOptionChange('Sizes', 'A2')}
                        />
                        <span className="text-tile">
                            <span className="text-label">A2</span>
                        </span>
                    </label>
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="Sizes"
                            value="A3"
                            checked={options.Sizes === 'A3'}
                            onChange={() => handleOptionChange('Sizes', 'A3')}
                        />
                        <span className="text-tile">
                            <span className="text-label">A3</span>
                        </span>
                    </label>
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

const AluminumForm = () => {
    const [options, setOptions] = React.useState({
        Sizes: '',
        DrillOption: '',
        Corner: '',
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
        if (options.DrillOption === '' || options.Corner === '' || options.Sizes === '' || options.Delivery === '' || options.Quantity === 0) {
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
                DrillOption: options.DrillOption,
                Corner: options.Corner,
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
                            value="A0"
                            checked={options.Sizes === 'A0'}
                            onChange={() => handleOptionChange('Sizes', 'A0')}
                        />
                        <span className="text-tile">
                            <span className="text-label">A0</span>
                        </span>
                    </label>
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="Sizes"
                            value="A1"
                            checked={options.Sizes === 'A1'}
                            onChange={() => handleOptionChange('Sizes', 'A1')}
                        />
                        <span className="text-tile">
                            <span className="text-label">A1</span>
                        </span>
                    </label>
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="Sizes"
                            value="A2"
                            checked={options.Sizes === 'A2'}
                            onChange={() => handleOptionChange('Sizes', 'A2')}
                        />
                        <span className="text-tile">
                            <span className="text-label">A2</span>
                        </span>
                    </label>
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="Sizes"
                            value="A3"
                            checked={options.Sizes === 'A3'}
                            onChange={() => handleOptionChange('Sizes', 'A3')}
                        />
                        <span className="text-tile">
                            <span className="text-label">A3</span>
                        </span>
                    </label>
                </div>
            </div>
            <div className="FormBox">
                <h5>Choose Drill Option</h5>
                <div className="Boxes">
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="DrillOption"
                            value="None"
                            checked={options.DrillOption === 'None'}
                            onChange={() => handleOptionChange('DrillOption', 'None')}
                        />
                        <span className="text-tile">
                            <span className="radio-icon">
                                <img src="/Icons/NoCorners.png" alt="Bicycle" className='radio-icons-2' />
                            </span>
                            <span className="text-label">None</span>
                        </span>
                    </label>
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="DrillOption"
                            value="Drilled"
                            checked={options.DrillOption === 'Drilled'}
                            onChange={() => handleOptionChange('DrillOption', 'Drilled')}
                        />
                        <span className="text-tile">
                            <span className="radio-icon">
                                <img src="/Icons/Drilled.png" alt="Bicycle" className='radio-icons-2' />
                            </span>
                            <span className="text-label">Drilled</span>
                        </span>
                    </label>
                </div>
            </div>
            <div className="FormBox">
                <h5>Choose Corner</h5>
                <div className="Boxes">
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="Corner"
                            value="Square"
                            checked={options.Corner === 'Square'}
                            onChange={() => handleOptionChange('Corner', 'Square')}
                        />
                        <span className="text-tile">
                            <span className="radio-icon">
                                <img src="/Icons/SquereCorners.png" alt="Bicycle" className='radio-icons-2' />
                            </span>

                            <span className="text-label">Square</span>
                        </span>
                    </label>
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="Corner"
                            value="Rounded"
                            checked={options.Corner === 'Rounded'}
                            onChange={() => handleOptionChange('Corner', 'Rounded')}
                        />
                        <span className="text-tile">
                            <span className="radio-icon">
                                <img src="/Icons/RoundedCorners.png" alt="Bicycle" className='radio-icons-2' />
                            </span>

                            <span className="text-label">Rounded</span>
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

const RollerBannerForm = () => {
    const [options, setOptions] = React.useState({
        RollerBannerType: '',
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
    }

    const Submit = () => {
        if (options.RollerBannerType === '' || options.Quantity === 0 || options.Delivery === '') {
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
                RollerBannerType: options.RollerBannerType,
            })
        }
    }

    return (
        <FormControl size="small">
            <div className="FormBox">
                <h5>Choose Roller Banner Type</h5>
                <div className="Boxes">
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="RollerBannerType"
                            value="Standard"
                            checked={options.RollerBannerType === 'Standard'}
                            onChange={() => handleOptionChange('RollerBannerType', 'Standard')}
                        />
                        <span className="text-tile">
                            <span className="radio-icon">
                                <img src="/Banners/Banner-Product1/Banner-Product1-1.jpg" alt="Bicycle" className='radio-icons-2' />
                            </span>
                            <span className="text-label">Standard</span>
                        </span>
                    </label>
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="RollerBannerType"
                            value="Premium"
                            checked={options.RollerBannerType === 'Premium'}
                            onChange={() => handleOptionChange('RollerBannerType', 'Premium')}
                        />
                        <span className="text-tile">
                            <span className="radio-icon">
                                <img src="/Banners/Banner-Product1/Banner-Product1-2.jpg" alt="Bicycle" className='radio-icons-2' />
                            </span>
                            <span className="text-label">Premium</span>
                        </span>
                    </label>
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="RollerBannerType"
                            value="Extra-Wide"
                            checked={options.RollerBannerType === 'Extra-Wide'}
                            onChange={() => handleOptionChange('RollerBannerType', 'Extra-Wide')}
                        />
                        <span className="text-tile">
                            <span className="radio-icon">
                                <img src="/Banners/Banner-Product1/Banner-Product1-3.jpg" alt="Bicycle" className='radio-icons-2' />
                            </span>

                            <span className="text-label">Extra-Wide</span>
                        </span>
                    </label>
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="RollerBannerType"
                            value="Double-Sided"
                            checked={options.RollerBannerType === 'Double-Sided'}
                            onChange={() => handleOptionChange('RollerBannerType', 'Double-Sided')}
                        />
                        <span className="text-tile">
                            <span className="radio-icon">
                                <img src="/Banners/Banner-Product1/Banner-Product1-4.jpg" alt="Bicycle" className='radio-icons-2' />
                            </span>
                            <span className="text-label">Double-Sided</span>
                        </span>
                    </label>
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="RollerBannerType"
                            value="Desktop"
                            checked={options.RollerBannerType === 'Desktop'}
                            onChange={() => handleOptionChange('RollerBannerType', 'Desktop')}
                        />
                        <span className="text-tile">
                            <span className="radio-icon">
                                <img src="/Banners/Banner-Product1/Banner-Product1-4.jpg" alt="Bicycle" className='radio-icons-2' />
                            </span>
                            <span className="text-label">Desktop</span>
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

const FlagForm = () => {
    const [options, setOptions] = React.useState({
        FlagType: '',
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
    }

    const Submit = () => {
        if (options.FlagType === '' || options.Quantity === 0 || options.Delivery === '') {
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
                FlagType: options.FlagType,
            })
        }
    }

    return (
        <FormControl size="small">
            <div className="FormBox">
                <h5>Choose Flag Type</h5>
                <div className="Boxes">
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="FlagType"
                            value="Feather"
                            checked={options.FlagType === 'Feather'}
                            onChange={() => handleOptionChange('FlagType', 'Feather')}
                        />
                        <span className="text-tile">
                            <span className="radio-icon">
                                <img src="/Banners/Banner-Product2/Banner-Product1-2.jpg" alt="Bicycle" className='radio-icons-2' />
                            </span>
                            <span className="text-label">Feather</span>
                        </span>
                    </label>
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="FlagType"
                            value="Teardrop"
                            checked={options.FlagType === 'Teardrop'}
                            onChange={() => handleOptionChange('FlagType', 'Teardrop')}
                        />
                        <span className="text-tile">
                            <span className="radio-icon">
                                <img src="/Banners/Banner-Product2/Banner-Product1-4.jpg" alt="Bicycle" className='radio-icons-2' />
                            </span>
                            <span className="text-label">Teardrop</span>
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

const PVCBannerForm = () => {
    const [options, setOptions] = React.useState({
        Sizes: '',
        PaperType: '',
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
    }

    const Submit = () => {
        if (options.Sizes === '' || options.PaperType === '' || options.Quantity === 0 || options.Delivery === '') {
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
                PaperType: options.PaperType,
            })
        }

    }

    const handleTypeChange = (value) => {
        handleOptionChange('PaperType', value);
    }

    const handleWeightChange = (value) => {
        handleOptionChange('Sizes', value);
    }

    return (
        <FormControl size="small">

            <div className="FormBox">
                <h5>Choose Paper Size</h5>
                <select
                    className="Selection"
                    onChange={(e) => handleWeightChange(e.target.value)}
                >
                    <option value="0.5m x 1m">0.5m x 1m</option>
                    <option value="1m x 0.5m">1m x 0.5m</option>
                    <option value="1m x 1m">1m x 1m</option>
                    <option value="1.5m x 1m">1.5m x 1m</option>
                    <option value="1m x 2m">1m x 2m</option>
                    <option value="2.5m x 1m">2.5m x 1m</option>
                    <option value="3m x 1m">3m x 1m</option>
                    <option value="3.5m x 1m">3.5m x 1m</option>
                    <option value="4m x 1m">4m x 1m</option>
                    <option value="2.5m x 1.5m">2.5m x 1.5m</option>
                    <option value="3.5m x 1.5m">3.5m x 1.5m</option>
                    <option value="2m x 2m">2m x 2m</option>
                    <option value="3m x 2m">3m x 2m</option>
                    <option value="4m x 2m">4m x 2m</option>
                    <option value="6m x 2m">6m x 2m</option>
                </select>
            </div>

            <div className="FormBox">
                <h5>Choose Paper Type</h5>
                <select
                    className="Selection"
                    onChange={(e) => handleTypeChange(e.target.value)}

                >
                    <option value="450 gsm Banner PVC">450 gsm Banner PVC</option>
                    <option value="330 gsm Kavalan Greyback">330 gsm Kavalan Greyback</option>
                    <option value="300 gsm Kavalan">300 gsm Kavalan</option>
                    <option value="300 gsm Mesh">300 gsm Mesh</option>
                    <option value="450 gsm PVC">450 gsm PVC</option>
                </select>
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

const PVCBannerForm2 = () => {
    const [options, setOptions] = React.useState({
        Sizes: '',
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
    }

    const Submit = () => {
        if (options.Sizes === '' || options.Quantity === 0 || options.Delivery === '') {
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
            })
        }

    }

    const handleWeightChange = (value) => {
        handleOptionChange('Sizes', value);
    }

    return (
        <FormControl size="small">

            <div className="FormBox">
                <h5>Choose Paper Size</h5>
                <select
                    className="Selection"
                    onChange={(e) => handleWeightChange(e.target.value)}
                >
                    <option value="0.5m x 1m">0.5m x 1m</option>
                    <option value="1m x 0.5m">1m x 0.5m</option>
                    <option value="1m x 1m">1m x 1m</option>
                    <option value="1.5m x 1m">1.5m x 1m</option>
                    <option value="1m x 2m">1m x 2m</option>
                    <option value="2.5m x 1m">2.5m x 1m</option>
                    <option value="3m x 1m">3m x 1m</option>
                    <option value="3.5m x 1m">3.5m x 1m</option>
                    <option value="4m x 1m">4m x 1m</option>
                    <option value="2.5m x 1.5m">2.5m x 1.5m</option>
                    <option value="3.5m x 1.5m">3.5m x 1.5m</option>
                    <option value="2m x 2m">2m x 2m</option>
                    <option value="3m x 2m">3m x 2m</option>
                    <option value="4m x 2m">4m x 2m</option>
                    <option value="6m x 2m">6m x 2m</option>
                </select>
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

const StretchStraightFabricForm = () => {
    const [options, setOptions] = React.useState({
        Sizes: '',
        PaperType: '',
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
    }

    const Submit = () => {
        if (options.Sizes === '' || options.PaperType === '' || options.Quantity === 0 || options.Delivery === '') {
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
                PaperType: options.PaperType,
            })
        }

    }

    const handleTypeChange = (value) => {
        handleOptionChange('PaperType', value);
    }

    const handleWeightChange = (value) => {
        handleOptionChange('Sizes', value);
    }

    return (
        <FormControl size="small">

            <div className="FormBox">
                <h5>Choose Paper Size</h5>
                <select
                    className="Selection"
                    onChange={(e) => handleWeightChange(e.target.value)}
                >
                    <option value="1m straight 2280x1000mm">1m straight 2280x1000mm</option>
                    <option value="1.5m straight 2280x1500mm">1.5m straight 2280x1500mm</option>
                    <option value="2m straight 2280x2000mm">2m straight 2280x2000mm</option>
                    <option value="2.5m straight 2500x2280mm">2.5m straight 2500x2280mm</option>
                    <option value="3m straight 2922x2280mm">3m straight 2922x2280mm</option>
                    <option value="4m straight 4000x2280mm">4m straight 4000x2280mm</option>
                    <option value="5m straight 5000x2280mm">5m straight 5000x2280mm</option>
                    <option value="6m straight 5960x2280mm">6m straight 5960x2280mm</option>
                </select>
            </div>

            <div className="FormBox">
                <h5>Choose Paper Type</h5>
                <select
                    className="Selection"
                    onChange={(e) => handleTypeChange(e.target.value)}
                >
                    <option value="Stretch Fabric Straight">Stretch Fabric Straight</option>
                    <option value="Stretch Fabric Straight Graphic">Stretch Fabric Straight Graphic </option>
                </select>
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

const StretchCurvedFabricForm = () => {
    const [options, setOptions] = React.useState({
        Sizes: '',
        PaperType: '',
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
    }

    const Submit = () => {
        if (options.Sizes === '' || options.PaperType === '' || options.Quantity === 0 || options.Delivery === '') {
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
                PaperType: options.PaperType,
            })
        }

    }

    const handleTypeChange = (value) => {
        handleOptionChange('PaperType', value);
    }

    const handleWeightChange = (value) => {
        handleOptionChange('Sizes', value);
    }

    return (
        <FormControl size="small">

            <div className="FormBox">
                <h5>Choose Paper Size</h5>
                <select
                    className="Selection"
                    onChange={(e) => handleWeightChange(e.target.value)}
                >
                    <option value="2.5m curved 2640x2280mm">2.5m curved 2640x2280mm</option>
                    <option value="3m curved 3230x2280mm">3m curved 3230x2280mm</option>
                    <option value="4m curved 4380x2280mm">4m curved 4380x2280mm</option>
                    <option value="5m curved 5480x2280mm">5m curved 5480x2280mm</option>
                    <option value="6m curved 6540x2280mm">6m curved 6540x2280mm</option>
                </select>
            </div>
            <div className="FormBox">
                <h5>Choose Paper Type</h5>
                <select
                    className="Selection"
                    onChange={(e) => handleTypeChange(e.target.value)}
                >
                    <option value="Stretch Fabric Curved">Stretch Fabric Curved</option>
                    <option value="Stretch Fabric Curved Graphic">Stretch Fabric Straight Curved</option>
                </select>
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

const ExhibitionStandForm = () => {
    const [options, setOptions] = React.useState({
        Sizes: '',
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
    }

    const Submit = () => {
        if (options.Sizes === '' || options.Quantity === 0 || options.Delivery === '') {
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
            })
        }

    }

    const handleWeightChange = (value) => {
        handleOptionChange('Sizes', value);
    }

    return (
        <FormControl size="small">

            <div className="FormBox">
                <h5>Choose Paper Size</h5>
                <select
                    className="Selection"
                    onChange={(e) => handleWeightChange(e.target.value)}
                >
                    <option value="1x3 Exhibition Stand">1x3 Exhibition Stand</option>
                    <option value="2x3 Exhibition Stand">2x3 Exhibition Stand</option>
                    <option value="3x3 Exhibition Stand">3x3 Exhibition Stand</option>
                    <option value="4x3 Exhibition Stand">4x3 Exhibition Stand</option>
                    <option value="">Podium Graphics</option>
                </select>
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

const FlyerForm = () => {
    const [options, setOptions] = React.useState({
        PaperType: '',
        PaperWeight: '',
        Sides: '',
        Lamination: '',
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
        if (options.PaperType === '' || options.PaperWeight === '' || options.Sides === '' || options.Lamination === '' || options.UVSpot === '' || options.Quantity === 0 || options.Delivery === '') {
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
                PaperType: options.PaperType,
                PaperWeight: options.PaperWeight,
                Sides: options.Sides,
                Lamination: options.Lamination,
                UVSpot: options.UVSpot,
            })
        }
    }
    return (
        <FormControl size="small">
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
                <div className='Boxes'>
                    <div className="FormBox">
                        <h5>Choose Paper Weight</h5>
                        <div className='Boxes'>
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
                                    <span className="text-label">150 gsm</span>
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
                                    <span className="text-label">250 gsm</span>
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
                                    <span className="text-label">350 gsm</span>
                                </span>
                            </label>
                            <label>
                                <input
                                    className="text-input"
                                    type="radio"
                                    name="PaperWeight"
                                    value="450"
                                    checked={options.PaperWeight === '450'}
                                    onChange={() => handleOptionChange('PaperWeight', '450')}
                                />
                                <span className="text-tile">
                                    <span className="text-label">450 gsm</span>
                                </span>
                            </label>
                        </div>
                    </div>
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
                            value="None"
                            checked={options.Lamination === 'None'}
                            onChange={() => handleOptionChange('Lamination', 'None')}
                        />
                        <span className="text-tile">
                            <span className="radio-icon">
                                <img src="/Icons/NoLamination.png" alt="Bicycle" className='radio-icons-2' />
                            </span>
                            <span className="text-label">None</span>
                        </span>
                    </label>
                </div>
            </div>
            <div className="FormBox">
                <h5>Choose UV Spot</h5>
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
                        <span className="text-label">None</span>
                    </span>
                </label>
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

const FoilFlyerForm = () => {

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
            SuccessNotification();
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
            SuccessNotification();
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

const LetterHeadForm = () => {
    const [options, setOptions] = React.useState({
        PaperType: '',
        PaperWeight: '',
        Sides: '',
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
        if (options.PaperType === '' || options.PaperWeight === '' || options.Sides === '' || options.Quantity === 0 || options.Delivery === '') {
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
                PaperType: options.PaperType,
                PaperWeight: options.PaperWeight,
                Sides: options.Sides,
            })
        }
    }

    return (
        <FormControl size="small">
            <div className="FormBox">
                <h5>Choose Paper Type</h5>
                <div className='Boxes'>
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
                            value="90"
                            checked={options.PaperWeight === '90'}
                            onChange={() => handleOptionChange('PaperWeight', '90')}
                        />
                        <span className="text-tile">
                            <span className="text-label">90 gsm Silk</span>
                        </span>
                    </label>

                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="PaperWeight"
                            value="120"
                            checked={options.PaperWeight === '120'}
                            onChange={() => handleOptionChange('PaperWeight', '120')}
                        />
                        <span className="text-tile">
                            <span className="text-label">120 gsm Silk</span>
                        </span>
                    </label>
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="PaperWeight"
                            value="170"
                            checked={options.PaperWeight === '170'}
                            onChange={() => handleOptionChange('PaperWeight', '170')}
                        />
                        <span className="text-tile">
                            <span className="text-label">170 gsm Silk</span>
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
    )
};

const NoteCardForm = () => {
    const [options, setOptions] = React.useState({
        PaperType: '',
        PaperWeight: '',
        Sides: '',
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
        if (options.PaperType === '' || options.PaperWeight === '' || options.Sides === '' || options.Quantity === 0 || options.Delivery === '') {
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
                PaperType: options.PaperType,
                PaperWeight: options.PaperWeight,
                Sides: options.Sides,
            })
        }
    }

    return (
        <FormControl size="small">
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
    )
};

const NotepadForm = () => {
    const [options, setOptions] = React.useState({
        Sizes: '',
        Sides: '',
        Lamination: '',
        Finishing: '',
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
        if (options.Sizes === '' || options.Sides === '' || options.Lamination === '' || options.Finishing === '' || options.Quantity === 0 || options.Delivery === '') {
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
                Sides: options.Sides,
                Lamination: options.Lamination,
                Finishing: options.Finishing,
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
                            value="Gloss"
                            checked={options.Lamination === 'Gloss'}
                            onChange={() => handleOptionChange('Lamination', 'Gloss')}
                        />
                        <span className="text-tile">
                            <span className="radio-icon">
                                <img src="/Icons/GlossLamination.png" alt="Bicycle" className='radio-icons-2' />
                            </span>
                            <span className="text-label">Gloss</span>
                        </span>
                    </label>

                </div>
            </div>
            <div className="FormBox">
                <h5>Choose Finishing</h5>
                <div className="Boxes">
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="Finishing"
                            value="LinedPages"
                            checked={options.Finishing === 'LinedPages'}
                            onChange={() => handleOptionChange('Finishing', 'LinedPages')}
                        />
                        <span className="text-tile">
                            <span className="radio-icon">
                                <img src="/Icons/LinedPages.png" alt="Bicycle" className='radio-icons-2' />
                            </span>
                            <span className="text-label">Lined Pages</span>
                        </span>
                    </label>
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="Finishing"
                            value="PlainPages"
                            checked={options.Finishing === 'PlainPages'}
                            onChange={() => handleOptionChange('Finishing', 'PlainPages')}
                        />
                        <span className="text-tile">
                            <span className="radio-icon">
                                <img src="/Icons/PlainPages.png" alt="Bicycle" className='radio-icons-2' />
                            </span>
                            <span className="text-label">Plain Pages</span>
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
    )
}

const  BookmarkForm = () => {
    const [options, setOptions] = React.useState({
        Sides: '',
        Lamination: '',
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
        if (options.Sides === '' || options.Lamination === '' || options.Quantity === 0 || options.Delivery === '') {
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
                Sides: options.Sides,
                Lamination: options.Lamination,
            })
        }
    }

    return (
        <FormControl size="small">
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
                            value="None"
                            checked={options.Lamination === 'None'}
                            onChange={() => handleOptionChange('Lamination', 'None')}
                        />
                        <span className="text-tile">
                            <span className="radio-icon">
                                <img src="/Icons/NoLamination.png" alt="Bicycle" className='radio-icons-2' />
                            </span>
                            <span className="text-label">None</span>
                        </span>
                    </label>

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
                            value="Gloss"
                            checked={options.Lamination === 'Gloss'}
                            onChange={() => handleOptionChange('Lamination', 'Gloss')}
                        />
                        <span className="text-tile">
                            <span className="radio-icon">
                                <img src="/Icons/GlossLamination.png" alt="Bicycle" className='radio-icons-2' />
                            </span>
                            <span className="text-label">Gloss</span>
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
                            value="25"
                            checked={options.Quantity === '25'}
                            onChange={() => handleOptionChange('Quantity', '25')}
                        />
                        <span className="text-tile">
                            <span className="text-label">25</span>
                        </span>
                    </label>

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
    )
}

