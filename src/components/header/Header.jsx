import React from 'react'
import cl from './Header.module.css'

export default function Header() {
  return (
    <div className={cl.header}>
        <div className={cl.wrapper}>

            <div className={cl.headerSide}>
                <h1>IgorIgorForum</h1>
            </div>

            <div className={cl.headerSide}>
                <button>Регистрация</button>
                <button>Войти</button>
            </div>
            
        </div>
        
    </div>
  )
}
