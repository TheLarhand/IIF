import React from 'react';
import cl from "./UI.module.css"

const Label = ({children, width, color = "var(--text-color)"}) => {
    
    const boxStyle = {
        width: width,
        color: color
    }

    return (
        <div className={cl.myLabel} style={boxStyle}>
            {children}
        </div>
    );
};

export default Label;