import React from 'react'

import { notification } from 'antd';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import Context from '../../../Context/Context'
import { FormControl } from '@mui/material';
import { useContext } from 'react';
import CallAPI from './SubmitHandler';
import ValidateForm from './Validation';

const CardboardForm = () => {
    const Product = useContext(Context).Product;
    const [options, setOptions] = React.useState({
        Sizes: '',
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
        if (ValidateForm(Name, Email, Phone, Address)) {
            CallAPI({
                Name: Name,
                Email: Email,
                Phone: Phone,
                Address: Address,
                Quantity: options.Quantity,
                Sizes: options.Sizes,
                Product: Product?.Description
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


export default CardboardForm