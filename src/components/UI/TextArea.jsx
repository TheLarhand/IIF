import React from 'react';
import cl from "./UI.module.css"

const TextArea = ({name, value, onChange, width = "200px", height = "100px"}) => {
    const boxStyle = {
        width: width,
        height: height,
    }

    return (
        <div style={boxStyle}>
            <textarea className={cl.myInput}
                name={name}
                value={value}
                onChange={onChange}
          />
        </div>
    );
};

export default TextArea;