import './App.css';
import Filters from './components/filters/Filters';
import Header from './components/header/Header';
import Posts from './components/posts/Posts';
import { useEffect, useState } from 'react';
import PostForm from './components/posts/PostForm';
import PostService from './components/API/PostService';
import Modal from './components/modal/Modal';

function App() {

  const [modalActive, setModalActive] = useState(false)

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
      <Header
        active={modalActive}
        setActive={setModalActive}
      />
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
      <Modal
        active={modalActive}
        setActive={setModalActive}
      />
    </div>
  );
}

export default App;
