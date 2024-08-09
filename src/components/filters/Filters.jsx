import React from 'react';
import cl from './Filters.module.css';
import Filter from './Filter';

const Filters = () => {
  return (
    <div className={cl.filters}>
      <Filter>filter 1</Filter>
      <Filter>filter 1</Filter>
      <Filter>filter 1</Filter>
      <Filter>filter 1</Filter>
      <Filter>filter 1</Filter>
    </div>
  );
};

export default Filters;
