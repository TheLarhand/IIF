import React from 'react';
import cl from "./UI.module.css"

const Heading = ({children, size, color = "var(--text-color)"}) => {

    const boxStyle = {
        fontSize: size,
        color: color
    }

    return (
        <div style={boxStyle} className={cl.heading}>
            {children}
        </div>
    );
};

export default Heading;