import React, { useState } from 'react'
import Post from './Post'
import cl from './Posts.module.css';
import Modal from '../modal/Modal';
import PostForm from './PostForm';

export default function Posts({posts, createPost, removePost}) {

  const [modalActive, setModalActive] = useState(false)

  const reversedPosts = [...posts].reverse();

  return (
    <div className={cl.posts}>
      <button onClick={() => {setModalActive(true)}}>
        создать пост
      </button>
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
  )
}
