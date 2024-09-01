import React from 'react';
import Filters from '../filters/Filters';
import Posts from '../posts/Posts';
import cl from './MainPage.module.css'
import Loader from '../UI/Loader';

const MainPage = ({posts, isPostsLoading, filter, setFilter, createPost, removePost}) => {
    return (
        <div>
            {/* Сделай паггинацию и хуки для загрузки и постов */}
            {isPostsLoading
                ? 
                <div className={cl.loader}><Loader/></div>
                : 
                <div className={cl.mainPage}>
                    <Filters 
                        filter={filter}
                        setFilter={setFilter}
                    />
                    <Posts
                        filter={filter}
                        setFilter={setFilter}
                        posts={posts}
                        createPost={createPost}
                        removePost={removePost}
                    />
                </div>
                
            }
        </div>
    );
};

export default MainPage;