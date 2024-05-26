import React from 'react';
import cl from './Posts.module.css';

const Post = ({post}) => {
    return (
        <div className={cl.post}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </div>
    );
};

export default Post;