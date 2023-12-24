
import { notification } from 'antd';
import DoneAllIcon from '@mui/icons-material/DoneAll';


const ValidateForm = (Name, Email, Phone, Address) => {
    if (Name === '') {
        notification.open({
            message: 'Please Enter Name',
            description:
                'Please Enter Name',
            icon: <DoneAllIcon style={{ color: '#108ee9' }} />,
        })
        return false;
    }
    if (Email === '') {
        notification.open({
            message: 'Please Enter Email',
            description:

                'Please Enter Email',
            icon: <DoneAllIcon style={{ color: '#108ee9' }} />,
        })
        return false;
    }
    if (Phone === '') {
        notification.open({
            message: 'Please Enter Phone',
            description:

                'Please Enter Phone',
            icon: <DoneAllIcon style={{ color: '#108ee9' }} />,
        })
        return false;
    }
    if (Email.includes('@') === false || Email.includes('.') === false) {
        notification.open({
            message: 'Please Enter Valid Email',
            description:
                "Please Enter Valid Email",
            icon: <DoneAllIcon style={{ color: '#108ee9' }} />,
        })
        return false;
    }
    if (Address === '') {
        notification.open({
            message: 'Please Enter Address',
            description:
                "Please Enter Address",
            icon: <DoneAllIcon style={{ color: '#108ee9' }} />,
        })
    }
    return true;

}


export default ValidateForm;