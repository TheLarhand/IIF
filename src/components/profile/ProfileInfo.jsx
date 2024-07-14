import React from 'react';
import Ava from '../UI/Ava';
import Heading from '../UI/Heading';
import Button from '../UI/Button';
import cl from './Profile.module.css'

const ProfileInfo = ({nickName = "your_nickname"}) => {
    return (
        <div className={cl.profileInfo}>

            <Ava size = {"250px"}/>
            <Heading size={"30px"} color="white">{nickName}</Heading>

            <Button>Редактировать профиль</Button>
        </div>
    );
};

export default ProfileInfo;