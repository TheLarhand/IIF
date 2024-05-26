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

  return (
    <div className="App">
      <Header/>
      <PostForm/>
      <div className='mainContent'>
        <Filters/>
        <Posts posts={posts}/>
      </div>
      <button onClick={fetchPosts}>clcik</button>
    </div>
  );
}

export default App;
