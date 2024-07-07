import React from 'react';
import cl from "./UI.module.css"

const Button = ({children, click, margin = 0, type}) => {
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
            { 
            type === 2 ? 
                <button onClick={handleClick} className={cl.btn2}>
                    {children}
                </button>
                :
                <button onClick={handleClick} className={cl.btn}>
                    {children}
                </button>
            }
            
        </div>
    );
};

export default Button;