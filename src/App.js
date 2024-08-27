import { usePosts } from './hooks/usePosts';
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
      console.log(fetchedPosts); // Проверьте структуру данных
      setPosts(fetchedPosts);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
    setIsPostsLoading(false)
  } 

  const[filter, setFilter] = useState({
    sort: '',
    sortInvert: false, 
    query: '', 
  })

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.sortInvert, filter.query)

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
        posts={sortedAndSearchedPosts}
        isPostsLoading={isPostsLoading}
        filter={filter}
        setFilter={setFilter}
        createPost={createPost}
        removePost={removePost}
      />
    )} else if (contentPage.profile) {
    contentToShow = (
      <Profile 
        posts={sortedAndSearchedPosts}
        isPostsLoading={isPostsLoading}
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
