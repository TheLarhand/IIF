import React from 'react';
import cl from './Posts.module.css';
import Button from '../UI/Button';

const Post = ({post, removePost}) => {
    const handleClick = () => {
        removePost(post.id)
    } 
    return (
        <div className={cl.post}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <Button click={handleClick} margin={"10px 0 0 auto"}>удалить</Button>
        </div>
    );
};

export default Post;