import React from 'react';
import logo from '../../images/logo.svg'

const Logo = ({size = "50px", onClick}) => {

    const boxStyle = {
        width: size,
        cursor: "pointer",
    }

    return (
        <img src={logo} style={boxStyle}  onClick={onClick} alt="logo" />
    );
};

export default Logo;