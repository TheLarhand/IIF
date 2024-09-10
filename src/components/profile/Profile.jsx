import React, { useState } from 'react';
import ProfileInfo from './ProfileInfo';
import Posts from '../posts/Posts';
import ProfileEdit from './ProfileEdit';
import Loader from '../UI/Loader';

const Profile = ({posts, isPostsLoading, createPost, removePost}) => {

    const [editingProfile, setEditingProfile] = useState(false)

    const [userInfo, setUserInfo] = useState({
        name: "userName", 
        passworrd: "123", 
        email: "test@gmail.com"
    })

    return (
        <div>
            {editingProfile ? 
                <div>
                    <ProfileEdit
                        userInfo={userInfo}
                        setUserInfo={setUserInfo}
                        setEditingProfile={setEditingProfile}
                    />
                </div> :
                <div>
                    <ProfileInfo
                        userInfo={userInfo}
                        setEditingProfile={setEditingProfile}
                    />
{/* 
                    {isPostsLoading
                    ? 
                    <Loader/>
                    : 
                    <Posts
                        posts={posts}
                        createPost={createPost}
                        removePost={removePost}
                    />
                    } */}
                </div>
            }
        </div>
    );
};

export default Profile;