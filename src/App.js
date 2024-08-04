import './App.css';
import Header from './components/header/Header';
import Profile from './components/profile/Profile';
import { useEffect, useState } from 'react';
import PostService from './components/API/PostService';
import MainPage from './components/mainPage/MainPage';

function App() {

  const [posts, setPosts] = useState([])
  const [isPostsLoading, setIsPostsLoading] = useState(false)

  const [contentPage, setContentPage] = useState({
    mainPage: true, 
    profile: false,
  })

  useEffect(() => {
    fetchPosts();
  }, [])

  async function fetchPosts() {
    setIsPostsLoading(true)
    try {
      const fetchedPosts = await PostService.getAll();
      setPosts(fetchedPosts);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
    setIsPostsLoading(false)
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
        profileEdit: false,
      });
    } else if (page === "profile") {
      setContentPage({
        mainPage: false,
        profile: true,
        profileEdit: false,
      });
    }
  }

  let contentToShow = null;

  if(contentPage.mainPage) {
    contentToShow = (
      <MainPage
        posts={posts}
        isPostsLoading={isPostsLoading}
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
