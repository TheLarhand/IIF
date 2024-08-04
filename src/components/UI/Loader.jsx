import React from 'react';
import cl from './UI.module.css'

const Loader = () => {
    return (
        <div className={cl.loader}>
            <div className={cl.innerLoader}/>
        </div>
    );
};

export default Loader;