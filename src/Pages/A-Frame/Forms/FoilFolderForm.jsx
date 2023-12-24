import React from 'react'

import { notification } from 'antd';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import Context from '../../../Context/Context'
import { FormControl } from '@mui/material';
import { useContext } from 'react';
import CallAPI from './SubmitHandler';
import ValidateForm from './Validation';

const FoilFolderForm = () => {
    const Product = useContext(Context).Product;
    const [options, setOptions] = React.useState({
        FolderType: '',
        Sides: '',
        UVSpot: '',
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
        if (options.FolderType === '' || options.Sides === '' || options.UVSpot === '' || options.Quantity === 0 ) {
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
                FolderType: options.FolderType,
                Sides: options.Sides,
                UVSpot: options.UVSpot,
                Product: Product.Description
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

export default FoilFolderForm