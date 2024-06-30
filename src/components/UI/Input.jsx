import React from 'react';
import cl from "./UI.module.css"

const Input = ({placeholder, type, name, value, onChange, width = "200px", height = "auto"}) => {
    const boxStyle = {
        width: width,
        height: height,
    }

    return (
        <div style={boxStyle}>
            <input className={cl.myInput}
                placeholder={placeholder}
                type={type} 
                name={name}
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

export default Input;