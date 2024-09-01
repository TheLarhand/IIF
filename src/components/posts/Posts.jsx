import React, { useState } from 'react';
import Post from './Post';
import cl from './Posts.module.css';
import Modal from '../modal/Modal';
import PostForm from './PostForm';
import Button from '../UI/Button';
import Heading from '../UI/Heading';
import Search from './Search';

const Posts = ({filter, setFilter, posts, createPost, removePost }) => {
  const [modalActive, setModalActive] = useState(false);

  const reversedPosts = [...posts].reverse();

  return (
    <div className={cl.posts}>
      <Search
        filter={filter}
        setFilter={setFilter}
      />
      <Button type={2} click={() => setModalActive(true)}>создать пост</Button>

      {reversedPosts.length === 0 ?
        <Heading color='white'>Постов нет :(</Heading> :
          reversedPosts.map(post => (
            <Post
              post={post}
              key={post.id}
              removePost={removePost}
            />
          ))
      }


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
