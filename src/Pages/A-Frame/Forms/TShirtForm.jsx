import React from 'react'

import { notification } from 'antd';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import Context from '../../../Context/Context'
import { FormControl } from '@mui/material';
import { useContext } from 'react';
import CallAPI from './SubmitHandler';
import ValidateForm from './Validation';

const TShirtForm = () => {
    const Product = useContext(Context).Product;
    const [options, setOptions] = React.useState({
        PaperType: '',
        Finishing: '',
        Sizes: '',
        Quantity: 0,
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
        if (options.PaperType === '' || options.Finishing === '' || options.Sizes === '' || options.Quantity === 0 ) {
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
                PaperType: options.PaperType,
                Finishing: options.Finishing,
                Sizes: options.Sizes,
                Product: Product?.Description,
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
                            value="White"
                            checked={options.PaperType === 'White'}
                            onChange={() => handleOptionChange('PaperType', 'White')}
                        />

                        <span className="text-tile">
                            <span className="text-label">White</span>
                        </span>
                    </label>
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="PaperType"
                            value="Black"
                            checked={options.PaperType === 'Black'}
                            onChange={() => handleOptionChange('PaperType', 'Black')}
                        />
                        <span className="text-tile">
                            <span className="text-label">Black</span>
                        </span>
                    </label>
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="PaperType"
                            value="RoyalBlue"
                            checked={options.PaperType === 'RoyalBlue'}
                            onChange={() => handleOptionChange('PaperType', 'RoyalBlue')}
                        />
                        <span className="text-tile">
                            <span className="text-label">Royal Blue</span>
                        </span>
                    </label>
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="PaperType"
                            value="Grey"
                            checked={options.PaperType === 'Grey'}
                            onChange={() => handleOptionChange('PaperType', 'Grey')}
                        />
                        <span className="text-tile">
                            <span className="text-label">Grey</span>
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
                            value="FrontAndBack"
                            checked={options.Finishing === 'FrontAndBack'}
                            onChange={() => handleOptionChange('Finishing', 'FrontAndBack')}
                        />
                        <span className="text-tile">
                            <span className="text-label">Front And Back</span>
                        </span>
                    </label>
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="Finishing"
                            value="FrontOnly"
                            checked={options.Finishing === 'FrontOnly'}
                            onChange={() => handleOptionChange('Finishing', 'FrontOnly')}
                        />
                        <span className="text-tile">
                            <span className="text-label">Front Only</span>
                        </span>
                    </label>
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="Finishing"
                            value="BackOnly"
                            checked={options.Finishing === 'BackOnly'}
                            onChange={() => handleOptionChange('Finishing', 'BackOnly')}
                        />
                        <span className="text-tile">
                            <span className="text-label">Back Only</span>
                        </span>
                    </label>
                </div>
            </div>

            <div className="FormBox">
                <h5>Choose Paper Size</h5>
                <div className="Boxes">
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="Sizes"
                            value="Small"
                            checked={options.Sizes === 'Small'}
                            onChange={() => handleOptionChange('Sizes', 'Small')}
                        />
                        <span className="text-tile">
                            <span className="text-label">Small</span>
                        </span>
                    </label>
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="Sizes"
                            value="Medium"
                            checked={options.Sizes === 'Medium'}
                            onChange={() => handleOptionChange('Sizes', 'Medium')}
                        />
                        <span className="text-tile">
                            <span className="text-label">Medium</span>
                        </span>
                    </label>
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="Sizes"
                            value="Large"
                            checked={options.Sizes === 'Large'}
                            onChange={() => handleOptionChange('Sizes', 'Large')}
                        />
                        <span className="text-tile">
                            <span className="text-label">Large</span>
                        </span>
                    </label>
                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="Sizes"
                            value="XLarge"
                            checked={options.Sizes === 'XLarge'}
                            onChange={() => handleOptionChange('Sizes', 'XLarge')}
                        />
                        <span className="text-tile">
                            <span className="text-label">XLarge</span>
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
    )
}

export default TShirtForm