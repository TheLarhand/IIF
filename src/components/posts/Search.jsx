import React, { useState } from 'react';
import Input from '../UI/Input';
import Button from '../UI/Button';
import cl from './Posts.module.css';
import close from '../../images/close.svg'

const Search = ({filter, setFilter}) => {

    const [query, setQuery] = useState("")
    const [currentQuery, setCurrentQuery] = useState(filter.query)

    const handleSearch = () => {
        setFilter({...filter, query})
        setCurrentQuery(query)
        setQuery("")
    }
    const resetSearch = () => {
        setQuery("")
        setCurrentQuery("")
        setFilter({...filter, query})
    }
    return (
        <div>
            <div className={cl.search}>
            <Input
                width='100%'
                value={query}
                onChange={e => setQuery(e.target.value)}
            />
            <Button click={handleSearch}>Найти</Button>
            </div>
            {
                currentQuery && 
                <div className={cl.searchRequest}> 
                <   img onClick={resetSearch} src={close} alt="close" />{currentQuery}
                </div>
            }
            
        </div>
        
    );
};

export default Search;