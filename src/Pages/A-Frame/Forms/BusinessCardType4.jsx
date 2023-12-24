import React from 'react'

import { notification } from 'antd';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import Context from '../../../Context/Context'
import { FormControl } from '@mui/material';
import { useContext } from 'react';
import CallAPI from './SubmitHandler';
import ValidateForm from './Validation';


const BusinessCardType4 = () => {
    const Product = useContext(Context).Product;
    const [options, setOptions] = React.useState({
        Sides: '',
        Corner: '',
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
        if (ValidateForm(Name, Email, Phone, Address)) {
            CallAPI({
                Name: Name,
                Email: Email,
                Phone: Phone,
                Address: Address,
                Quantity: options.Quantity,
                Sides: options.Sides,
                Corner: options.Corner,
                Product: Product?.Description
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

export default BusinessCardType4;

