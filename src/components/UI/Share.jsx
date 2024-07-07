import React from 'react';
import cl from './UI.module.css'
import image from '../../images/share.svg'

const Share = ({children}) => {
    return (
        <div className={cl.socialBtn}>
            <img src={image}/> {children} 
        </div>
    );
};

export default Share;