import React from 'react'
import cl from './Header.module.css'

export default function Header({active, setActive}) {
  return (
    <div className={cl.header}>
        <div className={cl.wrapper}>

            <div className={cl.headerSide}>
                <h1>IgorIgorForum</h1>
            </div>

            <div className={cl.headerSide}>
                <button onClick={() => {setActive(true)}}>Регистрация</button>
                <button onClick={() => {setActive(true)}}>Войти</button>
            </div>
            
        </div>
        
    </div>
  )
}
