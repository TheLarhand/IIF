import React from 'react'
import Post from './Post'
import cl from './Posts.module.css';

export default function Posts({posts}) {
  return (
    <div className={cl.posts}>
      {posts.map(post => (
        <Post post={post} key={post.id}/>
      ))}
      
    </div>
  )
}
