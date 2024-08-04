import React, { useState } from 'react';
import Ava from '../UI/Ava';
import Heading from '../UI/Heading';
import Input from '../UI/Input';
import Button from '../UI/Button';

const ProfileEdit = ({userInfo, setUserInfo, setEditingProfile}) => {

    const [newUserInfo, setNewUserInfo] = useState({...userInfo, password: ""});
    const [repeatPassword, setRepeatPassword] = useState("")
    const [notificationType, setNotificationType] = useState(0)


    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewUserInfo(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handlePasswordChange = (event) => {
        setRepeatPassword(event.target.value)
    };

    const updateUserInfo = () => {
        if (newUserInfo.password === "") {
            setNotificationType(1)
        } else if (newUserInfo.password !== repeatPassword) {
            setNotificationType(2)
        } else {
            setUserInfo(newUserInfo)
            setNewUserInfo({...userInfo, password: ""})
            setRepeatPassword("");
            setEditingProfile(false)
            setNotificationType(0)
        }
        
    }

    return (
        <div>
            <div>
                <Ava size='250px' />
                <Heading>Имя</Heading>
                <Input
                    name="name"
                    value={newUserInfo.name}
                    onChange={handleInputChange}
                />
                <Heading>Почта</Heading>
                <Input
                    name="email"
                    value={newUserInfo.email}
                    onChange={handleInputChange}
                />
                <Heading>Старый пароль</Heading>
                <Input 
                    name="repeatPassword"
                    value={repeatPassword}
                    onChange={handlePasswordChange}
                    type={"password"}
                />
                <Heading>Новый пароль</Heading>
                <Input
                    name="password"
                    value={newUserInfo.password}
                    onChange={handleInputChange}
                    type={"password"}
                />

                {notificationType === 1 && <span>Введите пароль!</span>}
                {notificationType === 2 && <span>Пароли не совпадают!</span>}

                <Button click={updateUserInfo}>Сохранить</Button>
            </div>
        </div>
    );
};

export default ProfileEdit;