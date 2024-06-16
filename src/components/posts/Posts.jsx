import React from 'react'
import Post from './Post'
import cl from './Posts.module.css';

export default function Posts({posts, removePost}) {

  const reversedPosts = [...posts].reverse();

  return (
    <div className={cl.posts}>
      {reversedPosts.map(post => (
        <Post 
          post={post} 
          key={post.id}
          removePost={removePost}
        />
      ))}
      
    </div>
  )
}
