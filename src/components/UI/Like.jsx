import React from 'react';
import cl from './UI.module.css'
import image from '../../images/like.svg'

const Like = ({children}) => {
    return (
        <div className={cl.socialBtn}>
            <img src={image}/> {children} 
        </div>
    );
};

export default Like;