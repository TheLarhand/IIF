import React from 'react';
import Filters from '../filters/Filters';
import Posts from '../posts/Posts';
import cl from './MainPage.module.css'
import Loader from '../UI/Loader';

const MainPage = ({posts, pagesArray, page, setPage, changePostsPage, isPostsLoading, postError, filter, setFilter, createPost, removePost}) => {
    return (
        
        <div className={cl.mainPage}>
            <Filters 
                filter={filter}
                setFilter={setFilter}
            />
            <div className={cl.leftSpace}></div>
            {postError 
                ?
                <h1 className={cl.error}>Произошла ошибка {postError}</h1>
                :
                isPostsLoading
                ? 
                <div className={cl.loader}><Loader/></div>
                : 
                <div >
                    
                    <Posts
                        filter={filter}
                        setFilter={setFilter}
                        posts={posts}
                        page={page}
                        setPage={setPage}
                        changePostsPage={changePostsPage}
                        pagesArray={pagesArray}
                        createPost={createPost}
                        removePost={removePost}
                    />
                </div>
            }
        </div>
    );
};

export default MainPage;