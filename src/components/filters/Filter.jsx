import React from 'react';
import classNames from 'classnames';
import cl from './Filters.module.css';

const Filter = ({ option, index, switchSort, checkedSorts }) => {
  const handleClick = () => {
    switchSort(index, option.value, option.sortInvert);
  };

  const filterClass = classNames({
    [cl.filter]: true, 
    [cl.checkedFilter]: checkedSorts[index] 
  });

  return (
    <div onClick={handleClick} className={filterClass}>
      {option.name}
    </div>
  );
};

export default Filter;
