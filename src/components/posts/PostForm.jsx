import React, { useState } from 'react';
import cl from './Posts.module.css';
import PostService from '../API/PostService';

export default function PostForm({createPost}) {
  const [postData, setPostData] = useState({
    title: '',
    body: '',
    userId: 1,
    id: 101 
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
}
