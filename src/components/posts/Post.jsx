import React, { useState } from 'react';
import cl from './Posts.module.css';
import Button from '../UI/Button';
import Heading from '../UI/Heading';
import LikeBtn from '../UI/LikeBtn';
import CommentBtn from '../UI/CommentBtn';
import ShareBtn from '../UI/ShareBtn';
import Comments from './comments/Comments';

const Post = ({post, removePost}) => {
    const[commentsSection, setCommentsSection] = useState(false)

    const toogleComments = () => {
        setCommentsSection(!commentsSection)
    }

    const handleClick = () => {
        removePost(post.id)
    } 
    return (
        <div className={cl.post}>
            <Heading size={"20px"} color="rgb(130, 139, 255)">{post.id}. {post.title}</Heading>
            <p className={cl.postBody}>{post.body}</p>
            <div className={cl.buttons}>
                <div className={cl.socialBox}>
                    <LikeBtn>123</LikeBtn>
                    <CommentBtn click={toogleComments}>123</CommentBtn>
                    <ShareBtn>123</ShareBtn>
                </div>
                <Button click={handleClick} margin={"10px 0 0 auto"}>удалить</Button>
            </div>
            {commentsSection ? 
            <Comments/> : 
            <div></div>}
            
        </div>
    );
};

export default Post;