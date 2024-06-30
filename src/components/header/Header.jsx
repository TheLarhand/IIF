import React, { useState } from 'react';
import cl from './Header.module.css';
import Modal from '../modal/Modal';
import Registration from './Registration';
import Login from './Login';
import Button from '../UI/Button';

const Header = () => {
  const [modalActive, setModalActive] = useState({ reg: false, log: false });

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
        <Registration />
      </Modal>

      <Modal active={modalActive.log} setActive={setModalActive}>
        <Login />
      </Modal>
    </div>
  );
};

export default Header;
