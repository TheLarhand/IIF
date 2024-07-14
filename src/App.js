import './App.css';
import Filters from './components/filters/Filters';
import Header from './components/header/Header';
import Posts from './components/posts/Posts';
import Profile from './components/profile/Profile';
import { useEffect, useState } from 'react';
import PostService from './components/API/PostService';
import MainPage from './components/mainPage/MainPage';


function App() {

  const [posts, setPosts] = useState([])

  const [contentPage, setContentPage] = useState({
    mainPage: true , 
    profile: false ,
  })

  useEffect(() => {
    fetchPosts();
  }, [])

  async function fetchPosts() {
    try {
      const fetchedPosts = await PostService.getAll();
      setPosts(fetchedPosts);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  } 

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (id) => {
    const updatedPosts = posts.filter(post => post.id !== id);
    setPosts(updatedPosts);
  }

  const changePage = (page) => {
    if (page === "mainPage") {
      setContentPage({
        mainPage: true,
        profile: false,
      });
    } else if (page === "profile") {
      setContentPage({
        mainPage: false,
        profile: true,
      });
    }
  }

  let contentToShow = null;

  if(contentPage.mainPage) {
    contentToShow = (
      <MainPage
        posts={posts}
        createPost={createPost}
        removePost={removePost}
      />
    )} else if (contentPage.profile) {
    contentToShow = (
      <Profile 
        posts={posts}
        createPost={createPost}
        removePost={removePost}
      />
  )} 

  return (
    <div className="App">
      <Header
        changePage={changePage}
      />
      <div className='content'>
        {contentToShow}
      </div>
      
    </div>
  );
}

export default App;
