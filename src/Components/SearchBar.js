import React from 'react';
import '../style/SearchBar.css';
import SearchIcon from '@material-ui/icons/Search';
import { useStateValue } from '../StateProvider';

const { REACT_APP_API_URL } = process.env;

function SearchBar() {
    const [
        { searchWord, qty, products, accountName },
        dispatch,
    ] = useStateValue();

    const loadProducts = async () => {
        const API_URL =
            searchWord === ''
                ? `${REACT_APP_API_URL}/accounts/${accountName}/products?page=1&per_page=10`
                : `${REACT_APP_API_URL}/accounts/${accountName}/products?query=${searchWord}&page=1&per_page=10`;
        const response = await fetch(API_URL);
        const data = await response.json();

        dispatch({
            type: 'LOAD_SEARCHED_PRODUCTS',
            item: {
                data,
                qty: qty[products.index],
            },
        });
    };

    const handleInputChange = (event) => {
        event.preventDefault();
        dispatch({
            type: 'SEARCH_PRODUCT',
            item: {
                value: event.target.value,
            },
        });
    };

    const handleKeyPress = (event) => {
        if (event.code === "Enter") {
            loadProducts();
        }
    };

    return (
        <div className="search__bar__container">
            <div className="search__bar">
                <input
                    className="search__bar__input"
                    type="text"
                    placeholder="Ingrese un artículo para buscar"
                    onChange={handleInputChange}
                    value={searchWord}
                    onKeyPress={handleKeyPress}
                />
                <SearchIcon className="search__icon" onClick={loadProducts} />
            </div>
        </div>
    );
}

export default SearchBar;
