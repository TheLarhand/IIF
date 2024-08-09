import React from 'react';
import cl from './Header.module.css';
import Input from '../UI/Input';
import Button from '../UI/Button';
import Heading from '../UI/Heading';
import Label from '../UI/Label';

const Login = ({switchModal}) => {
    return (
        <div className={cl.form}>
            <Heading color='var(--primary-color)'>Авторизация</Heading>
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

            <div className={cl.buttons}>
                <Button type={2}>Забыли пароль?</Button>
                <Button click={switchModal} type={2}>Регистрация</Button>
                <Button>Войти</Button>
            </div>
        </div>
    );
};

export default Login;