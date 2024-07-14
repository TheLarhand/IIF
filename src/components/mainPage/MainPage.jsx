import React from 'react';
import Filters from '../filters/Filters';
import Posts from '../posts/Posts';
import cl from './MainPage.module.css'

const MainPage = ({posts, createPost, removePost}) => {
    return (
        <div className={cl.mainPage}>
            <Filters />
            <Posts
                posts={posts}
                createPost={createPost}
                removePost={removePost}
            />
        </div>
    );
};

export default MainPage;