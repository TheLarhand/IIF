import React from 'react';
import cl from './Posts.module.css';
import Button from '../UI/Button';
import Heading from '../UI/Heading';
import Like from '../UI/Like';
import Comment from '../UI/Comment';
import Share from '../UI/Share';

const Post = ({post, removePost}) => {
    const handleClick = () => {
        removePost(post.id)
    } 
    return (
        <div className={cl.post}>
            <Heading size={"20px"} color="rgb(130, 139, 255)">{post.title}</Heading>
            <p>{post.body}</p>
            <div className={cl.buttons}>
                <div className={cl.socialBox}>
                    <Like>123</Like>
                    <Comment>123</Comment>
                    <Share>123</Share>
                </div>
                <Button click={handleClick} margin={"10px 0 0 auto"}>удалить</Button>
            </div>
            
        </div>
    );
};

export default Post;