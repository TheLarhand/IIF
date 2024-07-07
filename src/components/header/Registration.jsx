import React from 'react';
import cl from './Header.module.css';
import Input from '../UI/Input';
import Button from '../UI/Button';
import Heading from '../UI/Heading';
import Label from '../UI/Label';

const Registration = ({switchModal}) => {
    return (
        <div className={cl.form}>
            <Heading>Регистрация</Heading>
            <Label className={cl.myLabel} width={"100%"}>Логин</Label>
            <Input 
                type="text"
                width="100%" 
            />

            <Label className={cl.myLabel} width={"100%"}>Пароль</Label>
            <Input 
                type="password"
                width="100%" 
            />

            <Label className={cl.myLabel} width={"100%"}>Повторите пароль</Label>
            <Input 
                type="password"
                width="100%" 
            />

            <Label className={cl.myLabel} width={"100%"}>Никнейм</Label>
            <Input 
                type="text"
                width="100%" 
            />

            <Label className={cl.myLabel} width={"100%"}>Email</Label>
            <Input 
                type="text"
                width="100%" 
            />
            <div className={cl.buttons}>
                <Button click={switchModal} type={2}>Авторизация</Button>
                <Button>Зарегистрироваться</Button>
            </div>
        </div>
    );
};

export default Registration;