import React from 'react'

import { notification } from 'antd';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import Context from '../../../Context/Context'
import { FormControl } from '@mui/material';
import { useContext } from 'react';
import CallAPI from './SubmitHandler';
import ValidateForm from './Validation';

const RollerBannerForm = () => {
    const Product = useContext(Context).Product;
    const [options, setOptions] = React.useState({
        RollerBannerType: '',
        Quantity: 0,
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
        if (options.RollerBannerType === '' || options.Quantity === 0 ) {
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
                RollerBannerType: options.RollerBannerType,
                Product: Product?.Description
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

export default RollerBannerForm