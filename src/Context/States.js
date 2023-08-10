import React, { useState } from "react";
import Context from "./Context";
const States= (props)=>
{
    const [Product , SetProduct ] = useState({})
    const [AdminLoggedIn , SetAdminLoggedIn ] = useState(false)

    return (
        <Context.Provider value={ {Product,SetProduct,
            AdminLoggedIn,SetAdminLoggedIn        
        }}>
            {props.children}
        </Context.Provider>
    )
}

export default States;