import React from 'react';
import cl from "./UI.module.css"

const Button = ({children, click, margin = 0}) => {
    const boxStyle = {
        margin: margin,
        width: "fit-content"
    }

    const handleClick = () => {
        if (click !== undefined) {
            click()
        } 
    }

    return (
        <div style={boxStyle}>
            <button onClick={handleClick} className={cl.btn}>
                {children}
            </button>
        </div>
    );
};

export default Button;