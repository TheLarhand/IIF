import React, { useState } from 'react';
import axios from 'axios';
import cl from './Posts.module.css';

export default function PostForm() {
  const [postData, setPostData] = useState({
    title: '',
    body: '',
    userId: 1 // Здесь вы можете указать ID пользователя, создающего пост
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
    CreatePost(); 
  };

  const CreatePost = () => { 
    axios.post('https://jsonplaceholder.typicode.com/posts', postData)
      .then((response) => {
        console.log('Пост успешно создан:', response.data);
      })
      .catch((error) => {
        console.error('Ошибка при создании поста:', error);
      });
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
