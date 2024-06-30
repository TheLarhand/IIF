import React, { useState } from 'react';
import cl from './Posts.module.css';
import PostService from '../API/PostService';

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
      <h2>Создать пост</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Заголовок:</label>
          <input
            type="text"
            name="title"
            value={postData.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Текст:</label>
          <textarea
            name="body"
            value={postData.body}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Создать пост</button>
      </form>
    </div>
  );
};

export default PostForm;
