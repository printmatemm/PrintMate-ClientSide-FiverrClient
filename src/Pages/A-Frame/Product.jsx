import React, { useContext, useEffect } from 'react'
import Navigation from '../../Components/Navigation/Navigation'
import Context from '../../Context/Context'
import './product.modules.css'
import Pathway from '../../Components/ProductBar/Pathway'
import Footer from '../../Components/Navigation/Footer'
import DoneAllIcon from '@mui/icons-material/DoneAll';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { notification } from 'antd'


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

                            {/*}
                            <div className="SideImages">
                                {Product?.SecondaryImages?.map((item, index) => {
                                    return <img key={index} src={item} alt="AFrame" onClick={() => ChangeProductImage(item, index)} id={`Image-${index}`} />
                                }
                                )}
                            </div>
                            <div className="MainImage">
                                <img src={Product?.SecondaryImages?.[0]} alt="AFrame" id="MainImage" />

                            </div>
                            */}
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
                        value="300"
                        checked={options.PaperWeight === '300'}
                        onChange={() => handleOptionChange('PaperWeight', '300')}
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




