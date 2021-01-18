import React from 'react';
import "./style/SearchBar.css";
import SearchIcon from '@material-ui/icons/Search';

function SearchBar() {
    return <div className="search__bar__container">
        <div className="search__bar">
            <input className="search__bar__input" type="text"/>
            <SearchIcon className="search__icon" />
        </div>
        
    </div>;
}

export default SearchBar;
