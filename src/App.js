import './App.css';
import Filters from './components/filters/Filters';
import Header from './components/header/Header';
import Posts from './components/posts/Posts';
import { useEffect, useState } from 'react';
import PostForm from './components/posts/PostForm';
import PostService from './components/API/PostService';

function App() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetchPosts();
  }, [])

  async function fetchPosts() {
    const posts = await PostService.getAll()
    setPosts(posts)
    console.log(posts);
  }

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (id) => {
    const tempPosts = posts.filter(post => {
      const newPosts = post.id != id
      return newPosts
    })

    console.log(tempPosts);

    setPosts([...tempPosts])
  }

  return (
    <div className="App">
      <Header/>
      <PostForm 
        createPost={createPost}
      />
      <div className='mainContent'>
        <Filters/>
        <Posts
         posts={posts}
         removePost={removePost}
        />
      </div>
    </div>
  );
}

export default App;
