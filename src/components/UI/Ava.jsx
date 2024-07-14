import React from 'react';
import emptyAva from '../../images/empty_ava.png'

const Ava = ({src = emptyAva, size = "50px", borderRadius = "50%", onClick}) => {

    const boxStyle = {
        width: size,
        height: size,
        objectFit: "cover",
        borderRadius: borderRadius,
        cursor: "pointer",
    }

    return (
        <img src={src} style={boxStyle}  onClick={onClick} alt="ava" />
    );
};

export default Ava;