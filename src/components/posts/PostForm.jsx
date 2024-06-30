import React, { useState } from 'react';
import cl from './Posts.module.css';
import PostService from '../API/PostService';
import Input from '../UI/Input';
import Button from '../UI/Button';
import TextArea from '../UI/TextArea';

const PostForm = ({ createPost, setActive, posts }) => {
  const lastPostId = posts.length > 0 ? posts[0].id : 0;

  const [postData, setPostData] = useState({
    title: '',
    body: '',
    userId: 1,
    id: lastPostId + 1
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPostData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    PostService.addPost(postData);
    createPost(postData);
    setActive(false);
  };

  return (
    <div className={cl.postForm}>
      <form onSubmit={handleSubmit}>
        <div>
          <label className={cl.myLabel}>Заголовок поста:</label>
          <Input
            type="text"
            name="title"
            value={postData.title}
            onChange={handleChange}
            width='100%'
          />
        </div>
        <div>
          <label className={cl.myLabel}>Текст поста:</label>
          <TextArea
            name="body"
            value={postData.body}
            onChange={handleChange}
            width='100%'
            height='300px'
          />
        </div>
        <Button type="submit" margin={"10px 0 0 auto"}>Создать пост</Button>
      </form>
    </div>
  );
};

export default PostForm;
