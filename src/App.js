import { usePosts } from './hooks/usePosts';
import './App.css';
import Header from './components/header/Header';
import Profile from './components/profile/Profile';
import { useEffect, useState } from 'react';
import PostService from './API/PostService';
import MainPage from './components/mainPage/MainPage';
import { useFetching } from './hooks/useFetching';
import { getPageCount, getPagesArray } from './utils/pages';

function App() {

  const [posts, setPosts] = useState([])
  const [totalPages, setTotalPages] = useState(0)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)

  let pagesArray = getPagesArray(totalPages)
  // Сделай свой хук UsePagginaion используя UseMemo, а не через массив
  // как это сделано внутри

  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);
    setPosts(response.data);
    const totalCount = response.headers['x-total-count']
    setTotalPages(getPageCount(totalCount, limit))
  })

  const [contentPage, setContentPage] = useState({
    mainPage: true, 
    profile: false,
  })

  useEffect(() => {
    fetchPosts();
  }, [])

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

  //temp  2 06
  const changePostsPage = (page) => {
    setPage(page)
    fetchPosts()
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
        pagesArray={pagesArray}
        page={page}
        setPage={setPage}
        changePostsPage={changePostsPage}
        isPostsLoading={isPostsLoading}
        postError={postError}
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
