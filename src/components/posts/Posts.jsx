import React, { useState } from 'react';
import Post from './Post';
import cl from './Posts.module.css';
import Modal from '../modal/Modal';
import PostForm from './PostForm';
import Button from '../UI/Button';
import Heading from '../UI/Heading';
import Search from './Search';
import Pagination from '../UI/Pagination';

const Posts = ({filter, setFilter, posts, changePostsPage, pagesArray, page, setPage, createPost, removePost }) => {
  const [modalActive, setModalActive] = useState(false);

  return (
    <div className={cl.posts}>
      <Search
        filter={filter}
        setFilter={setFilter}
      />
      <Button type={2} click={() => setModalActive(true)}>создать пост</Button>

      <Pagination
        pagesArray={pagesArray}
        page={page}
        setPage={setPage}
        changePostsPage={changePostsPage}
      />

      {posts.length === 0 ?
        <h1 className={cl.noPosts}>Постов нет :(</h1> :
          posts.map(post => (
            <Post
              post={post}
              key={post.id}
              removePost={removePost}
            />
          ))
      }

      <Pagination
        pagesArray={pagesArray}
        page={page}
        setPage={setPage}
        changePostsPage={changePostsPage}
      />

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
