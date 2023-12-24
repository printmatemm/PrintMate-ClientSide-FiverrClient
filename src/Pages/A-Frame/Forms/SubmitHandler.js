
import { notification } from 'antd';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import emailjs from "@emailjs/browser";


const CallAPI = async (body) => {
    notification.open({
        message: 'Sending Request',
        description:
            'Please Wait, We are sending your request',
        icon: <DoneAllIcon style={{ color: '#108ee9' }} />,
        duration: 3
    })

    const Response = await fetch(`${process.env.REACT_APP_API_URL}/addQuotation`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
    const ResponseData = await Response.json();
    if (ResponseData.success) {
        const serviceId = "service_h501omo";
        const templateId = "template_epta9ma";
        SuccessNotification();
        setTimeout(function() {
            window.location.href = "/";
          }, 2000); 
                  await emailjs.send(serviceId, templateId, {
            to_name: "mansoor@printmate.uk",
            name: body.Name || "N/A",
            email: body.Email || "N/A",
            phone: body.Phone || "N/A",
            address: body.Address || "N/A",
            product: body.Product || "N/A",
            quantity: body.Quantity || "N/A",
            paperType: body.PaperType || "N/A",
            paperWeight: body.PaperWeight || "N/A",
            sides: body.Sides || "N/A",
            lamination: body.Lamination || "N/A",
            uVSpot: body.UVSpot || "N/A" ,
            corner: body.Corner || "N/A",
            fold: body.Fold || "N/A",
            sizes: body.Sizes || "N/A",
            envelope: body.Envelope || "N/A",
            drillOption: body.DrillOption ||"N/A" ,
            rollerBannerType: body.RollerBannerType || "N/A",
            flagType: body.FlagType || "N/A",
            amountOfPrintedPages: body.AmountOfPrintedPages || "N/A",
            coverOption: body.CoverOptiont || "N/A",
            folderType: body.FolderType || "N/A",
            finishing: body.Finishing || "N/A",
            menuType: body.MenuType || "N/A"
          });  
    }    
    else 
    { 
        ErrorNotification();
    }
}

const SuccessNotification = () => {
    notification.open({
        message: 'Request Sent',
        description:
            'Your Request has been sent successfully',
        icon: <DoneAllIcon style={{ color: '#108ee9' }} />,
        duration: 3
    })
}

const ErrorNotification = () => {
    notification.open({
        message: 'Request Failed',
        description:
            'Your Request has been failed',
        icon: <DoneAllIcon style={{ color: '#108ee9' }} />,
        duration: 3
    })
}


export default CallAPI;