import React from 'react'

import { notification } from 'antd';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import Context from '../../../Context/Context'
import { FormControl } from '@mui/material';
import { useContext } from 'react';
import CallAPI from './SubmitHandler';
import ValidateForm from './Validation';

const LeafletForm = () => {
    const Product = useContext(Context).Product;
    const [options, setOptions] = React.useState({
        Sizes: '',
        PaperType: '',
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
                            value="Gloss"
                            checked={options.PaperType === 'Gloss'}
                            onChange={() => handleOptionChange('PaperType', 'Gloss')}
                        />

                        <span className="text-tile">
                            <span className="radio-icon">
                                <img src="/Icons/Gloss.png" alt="Bicycle" className='radio-icons-2' />
                            </span>
                            <span className="text-label">Gloss</span>
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

export default LeafletForm