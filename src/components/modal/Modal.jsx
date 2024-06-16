import React from 'react';
import cl from './Modal.module.css'

const Modal = ({active, setActive, children}) => {

    const rootClassesModal = [cl.modal]
    const rootClassesContent = [cl.modal_content]

    const handleInnerClick = (e) => {
        e.stopPropagation(); 
    };

    const close = () => {
        setActive(false)
    }

    if(active){
        rootClassesModal.push(cl.modal_active)
        rootClassesContent.push(cl.modal_content_active)
    }

    return (
        <div className={rootClassesModal.join(' ')} onClick={close}>
            <div className={rootClassesContent.join(' ')} onClick={handleInnerClick}>
                {children}
            </div>
        </div>
    );
};

export default Modal;