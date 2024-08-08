import React, { useState } from 'react';
import Ava from '../UI/Ava';
import Heading from '../UI/Heading';
import Input from '../UI/Input';
import Button from '../UI/Button';
import cl from './Profile.module.css'

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

    const closeEditing = () => {
        setNewUserInfo({...userInfo, password: ""})
        setRepeatPassword("");
        setEditingProfile(false)
    }

    return (
        <div>
            <div className={cl.profileEdit}>

                <div className={cl.editLeft}>
                    <Ava size='250px' />
                    <Button>Изменить фото</Button>
                </div>

                <div className={cl.editRight}>

                    <div className={cl.editRightRow}>
                        <label>Имя</label>
                        <Input
                            name="name"
                            value={newUserInfo.name}
                            onChange={handleInputChange}
                            width="600px"
                            placeholder={"Введите имя"}
                        />
                    </div>
                    
                    <div className={cl.editRightRow}>
                        <label>Почта</label>
                        <Input
                            name="email"
                            value={newUserInfo.email}
                            onChange={handleInputChange}
                            width="600px"
                            placeholder={"Введите почту"}
                        />
                    </div>

                    <div className={cl.editRightRow}>
                        <label>Старый пароль</label>
                        <Input 
                            name="repeatPassword"
                            value={repeatPassword}
                            onChange={handlePasswordChange}
                            type={"password"}
                            width="600px"
                            placeholder={"Введите старый пароль"}
                        />
                    </div>
                    
                    <div className={cl.editRightRow}>
                        <label>Новый пароль</label>
                        <Input
                            name="password"
                            value={newUserInfo.password}
                            onChange={handleInputChange}
                            type={"password"}
                            width="600px"
                            placeholder={"Введите новый пароль"}
                        />
                    </div>
                    
                    {notificationType === 1 && <span>Введите пароль!</span>}
                    {notificationType === 2 && <span>Пароли не совпадают!</span>}
                </div>
                
                <div className={cl.btnBox}>
                    <Button click={closeEditing}>Сбросить</Button>
                    <Button click={updateUserInfo}>Сохранить</Button>
                </div>
                
            </div>
        </div>
    );
};

export default ProfileEdit;