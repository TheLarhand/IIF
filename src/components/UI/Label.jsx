import React from 'react';
import cl from "./UI.module.css"

const Label = ({children, width}) => {
    
    const boxStyle = {
        width: width,
    }

    return (
        <div className={cl.myLabel} style={boxStyle}>
            {children}
        </div>
    );
};

export default Label;