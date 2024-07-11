import React from 'react';
import cl from './UI.module.css'
import image from '../../images/comment.svg'

const CommentBtn = ({children, click}) => {
    const handleClick = () => {
        if (click !== undefined) {
            click()
        } 
    }

    return (
        <div onClick={handleClick} className={cl.socialBtn}>
            <img src={image}/> {children} 
        </div>
    );
};

export default CommentBtn;