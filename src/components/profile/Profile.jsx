import React from 'react';
import ProfileInfo from './ProfileInfo';
import Posts from '../posts/Posts';

const Profile = ({posts, createPost, removePost}) => {
    return (
        <div>
            <ProfileInfo/>
            <Posts
                posts={posts}
                createPost={createPost}
                removePost={removePost}
            />
        </div>
    );
};

export default Profile;