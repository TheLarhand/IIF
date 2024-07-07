import React from 'react';
import cl from './UI.module.css'
import image from '../../images/comment.svg'

const Comment = ({children}) => {
    return (
        <div className={cl.socialBtn}>
            <img src={image}/> {children} 
        </div>
    );
};

export default Comment;