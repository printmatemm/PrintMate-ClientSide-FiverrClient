import React from 'react'

import { notification } from 'antd';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import Context from '../../../Context/Context'
import { FormControl } from '@mui/material';
import { useContext } from 'react';
import CallAPI from './SubmitHandler';
import ValidateForm from './Validation';

const ChristmasCardForm = () => {
    const Product = useContext(Context).Product;
    const [options, setOptions] = React.useState({
        Sizes: '',
        PaperType: '',
        PaperWeight: '',
        Sides: '',
        Lamination: '',
        Fold: '',
        Envelope: '',
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
        if (options.Sizes === '' || options.PaperType === '' || options.PaperWeight === '' || options.Sides === '' || options.Lamination === '' || options.Fold === '' || options.Envelope === '' || options.Quantity === 0 ) {
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
                PaperWeight: options.PaperWeight,
                Sides: options.Sides,
                Lamination: options.Lamination,
                Fold: options.Fold,
                Envelope: options.Envelope,
                Product: Product?.Description,
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
                        value="350gsm"
                        checked={options.PaperWeight === '350gsm'}
                        onChange={() => handleOptionChange('PaperWeight', '350gsm')}
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

export default ChristmasCardForm