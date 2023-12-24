import React from 'react'

import { notification } from 'antd';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import Context from '../../../Context/Context'
import { FormControl } from '@mui/material';
import { useContext } from 'react';
import CallAPI from './SubmitHandler';
import ValidateForm from './Validation';

const AFrameForm = () => {
    const Product = useContext(Context).Product;
    const [Quantity, setQuantity] = React.useState(0);
    const [Name, setName] = React.useState('');
    const [Email, setEmail] = React.useState('');
    const [Phone, setPhone] = React.useState('');
    const [Address, setAddress] = React.useState('');

    const handlequantityChange = (event) => {
        setQuantity(event.target.value);
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
            CallAPI({
                Name: Name,
                Email: Email,
                Phone: Phone,
                Address: Address,
                Quantity: Quantity,
                Product: Product?.Description
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

export default AFrameForm
