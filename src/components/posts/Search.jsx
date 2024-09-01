import React, { useState } from 'react';
import Input from '../UI/Input';
import Button from '../UI/Button';
import cl from './Posts.module.css';

const Search = ({filter, setFilter}) => {

    const [query, setQuery] = useState('')

    const handleSearch = () => {
        setFilter({...filter, query})
    }
    return (
        <div className={cl.search}>
            <Input
                width='100%'
                value={query}
                onChange={e => setQuery(e.target.value)}
            />
            <Button click={handleSearch}>Найти</Button>
        </div>
    );
};

export default Search;