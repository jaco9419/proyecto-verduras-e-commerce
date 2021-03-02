import React from 'react';
import '../style/SearchBar.css';
import SearchIcon from '@material-ui/icons/Search';
import { useStateValue } from '../StateProvider';

function SearchBar() {
    const [{ searchWord, qty, products, accountName }, dispatch] = useStateValue();

    const loadProducts = async () => {
        const API_URL = `https://us-central1-duleri-69cbb.cloudfunctions.net/api_quote_v2/accounts/${accountName}/products`;
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
        loadProducts();
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
                />
                <SearchIcon className="search__icon" />
            </div>
        </div>
    );
}

export default SearchBar;
