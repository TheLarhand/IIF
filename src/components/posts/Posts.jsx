import React, { useState } from 'react';
import Post from './Post';
import cl from './Posts.module.css';
import Modal from '../modal/Modal';
import PostForm from './PostForm';
import Button from '../UI/Button';

const Posts = ({ posts, createPost, removePost }) => {
  const [modalActive, setModalActive] = useState(false);

  const reversedPosts = [...posts].reverse();

  return (
    <div className={cl.posts}>
      <Button click={() => setModalActive(true)}>создать пост</Button>
      {reversedPosts.map(post => (
        <Post
          post={post}
          key={post.id}
          removePost={removePost}
        />
      ))}

      <Modal
        active={modalActive}
        setActive={setModalActive}
      >
        <PostForm
          setActive={setModalActive}
          createPost={createPost}
          posts={posts}
        />
      </Modal>

    </div>
  );
};

export default Posts;
