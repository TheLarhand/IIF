import React from 'react';
import cl from './Filters.module.css';

const Filter = ({children}) => {
  return (
    <div className={cl.filter}>
        {children}
    </div>
  );
};

export default Filter;
