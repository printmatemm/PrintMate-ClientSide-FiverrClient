import React from 'react'

import { notification } from 'antd';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import Context from '../../../Context/Context'
import { FormControl } from '@mui/material';
import { useContext } from 'react';
import CallAPI from './SubmitHandler';
import ValidateForm from './Validation';

const StretchStraightFabricForm = () => {
    const Product = useContext(Context).Product;
    const [options, setOptions] = React.useState({
        Sizes: '',
        PaperType: '',
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
        if (options.Sizes === '' || options.PaperType === '' || options.Quantity === 0 ) {
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
                Sizes: options.Sizes,
                PaperType: options.PaperType,
                Product: Product?.Description
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

export default StretchStraightFabricForm
