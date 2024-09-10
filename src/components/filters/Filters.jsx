import React, { useState }  from 'react';
import cl from './Filters.module.css';
import Filter from './Filter';

const Filters = ({filter, setFilter}) => {

  const options = [
    {value: "title", sortInvert: true, name: "Sort by name A-Z"},
    {value: "title", sortInvert: false, name: "Sort by name Z-A"},
]

  const [checkedSorts, setCheckedSorts] = useState([false, false, false, false, false, false])

  const switchSort = (index, value, isInvert) => {
      const newCheckedSorts = [false, false, false, false, false, false]
      if(checkedSorts[index]){
          setFilter({...filter, sort: ''})
      } else {
          setFilter({...filter, sort: value, sortInvert: isInvert})
          newCheckedSorts[index] = !newCheckedSorts[index]
      }
      setCheckedSorts(newCheckedSorts)
  }

  return (
    <div className={cl.filters}>
      {options.map((option, index) => (
        <Filter
          key={index}
          option={option}
          index={index}
          switchSort={switchSort}
          checkedSorts={checkedSorts}
        />
      ))}
    </div>
  );
};

export default Filters;
