import React, { useState } from 'react';
import ProfileInfo from './ProfileInfo';
import Posts from '../posts/Posts';
import ProfileEdit from './ProfileEdit';

const Profile = ({posts, createPost, removePost}) => {

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
                    <Posts
                        posts={posts}
                        createPost={createPost}
                        removePost={removePost}
                    />
                </div>
            }
        </div>
    );
};

export default Profile;