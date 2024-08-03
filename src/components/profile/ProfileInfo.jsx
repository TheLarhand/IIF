import React from 'react';
import Ava from '../UI/Ava';
import Heading from '../UI/Heading';
import Button from '../UI/Button';
import cl from './Profile.module.css'

const ProfileInfo = ({userInfo, setEditingProfile}) => {

    const editProfile = () => {
        setEditingProfile(true)
    }

    return (
        <div className={cl.profileInfo}>

            <Ava size = {"250px"}/>
            <Heading size={"30px"} color="white">{userInfo.name}</Heading>

            <Button click={editProfile}>Редактировать профиль</Button>
        </div>
    );
};

export default ProfileInfo;