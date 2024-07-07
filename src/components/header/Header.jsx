import React, { useState } from 'react';
import cl from './Header.module.css';
import Modal from '../modal/Modal';
import Registration from './Registration';
import Login from './Login';
import Button from '../UI/Button';

const Header = () => {
  const [modalActive, setModalActive] = useState({ reg: false, log: false });

  const switchModal = () => {
    if (modalActive.reg){
      setModalActive({ reg: false, log: true })
    } else if (modalActive.log){
      setModalActive({ reg: true, log: false })
    }
  }

  return (
    <div className={cl.header}>
      <div className={cl.wrapper}>
        <div className={cl.headerSide}>
          <h1>IIF</h1>
        </div>

        <div className={cl.headerSide}>
          <Button click={() => setModalActive({ ...modalActive, reg: true })}>
            Регистрация
          </Button>
          <Button click={() => setModalActive({ ...modalActive, log: true })}>
          Войти
          </Button>
        </div>
      </div>

      <Modal active={modalActive.reg} setActive={setModalActive}>
        <Registration
          switchModal={switchModal}
        />
      </Modal>

      <Modal active={modalActive.log} setActive={setModalActive}>
        <Login 
          switchModal={switchModal} 
        />
      </Modal>
    </div>
  );
};

export default Header;
