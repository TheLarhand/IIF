import { useState } from 'react';
import cl from './Header.module.css'
import Modal from '../modal/Modal';
import Registration from './Registration';
import Login from './Login';

export default function Header() {
  
  const [modalActive, setModalActive] = useState({reg: false, log: false})

  return (
    <div className={cl.header}>
        <div className={cl.wrapper}>

            <div className={cl.headerSide}>
                <h1>IgorIgorForum</h1>
            </div>

            <div className={cl.headerSide}>
                <button onClick={() => {setModalActive({...modalActive, reg: true})}}>
                  Регистрация
                </button>
                <button onClick={() => {setModalActive({...modalActive, log: true})}}>
                  Войти
                </button>
            </div>
            
        </div>

        <Modal
          active={modalActive.reg}
          setActive={setModalActive}
        >
          <Registration /> 
        </Modal>

        <Modal
          active={modalActive.log}
          setActive={setModalActive}
        >
          <Login /> 
        </Modal>
    </div>
  )
}
