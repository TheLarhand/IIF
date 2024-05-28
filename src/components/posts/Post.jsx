import React from 'react';
import cl from './Posts.module.css';

const Post = ({post, removePost}) => {
    const handleClick = () => {
        removePost(post.id)
    } 
    return (
        <div className={cl.post}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <button onClick={handleClick}>удалить</button>
        </div>
    );
};

export default Post;