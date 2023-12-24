import React from 'react'

import { notification } from 'antd';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import Context from '../../../Context/Context'
import { FormControl } from '@mui/material';
import { useContext } from 'react';
import CallAPI from './SubmitHandler';
import ValidateForm from './Validation';

const PosterForm = () => {
    const Product = useContext(Context).Product;
    const [options, setOptions] = React.useState({
        PaperWeight: '',
        PaperType: '',
        Lamination: '',
        Quantity: 0,
//        Delivery: '',
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
        if (options.PaperWeight === '' || options.PaperType === '' || options.Lamination === '' || options.Quantity === 0 ) {
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
//                Delivery: options.Delivery,
                PaperWeight: options.PaperWeight,
                PaperType: options.PaperType,
                Lamination: options.Lamination,
                Product: Product?.Description,
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
                            value="170-gsm-Silk"
                            checked={options.PaperWeight === '170-gsm-Silk'}
                            onChange={() => handleOptionChange('PaperWeight', '170-gsm-Silk')}
                        />
                        <span className="text-tile">
                            <span className="text-label">170 gsm Silk</span>
                        </span>
                    </label>

                    <label>
                        <input
                            className="text-input"
                            type="radio"
                            name="PaperWeight"
                            value="250-gsm-Silk"
                            checked={options.PaperWeight === '250-gsm-Silk'}
                            onChange={() => handleOptionChange('PaperWeight', '250-gsm-Silk')}
                        />
                        <span className="text-tile">
                            <span className="text-label">250 gsm Silk</span>
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
                </div>
            </div>
            <div className="FormBox">
                {/*
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
                    <label>
                        <input
                            className="radio-input"
                            type="radio"
                            name="engine"
                            value="Delivery"
                            checked={options.Delivery === '4-7'}
                            onChange={() => handleOptionChange('Delivery', '4-7')}
                        />
                        <span className="radio-tile">
                            <span className="radio-icon">
                                <img src="/Icons/Delivery.png" alt="Bicycle" className='radio-icons' />
                            </span>
                            <span className="radio-label">4-7 Delivery Days</span>
                        </span>
                    </label>
                </div>
                */}
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

export default PosterForm