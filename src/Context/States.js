import React, { useState } from "react";
import Context from "./Context";
const States= (props)=>
{
    const [Product , SetProduct ] = useState({})
    return (
        <Context.Provider value={ {Product,SetProduct}}>
            {props.children}
        </Context.Provider>
    )
}

export default States;