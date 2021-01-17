import React from 'react';
import './style/Landing.css';
import Productos from './Productos';
import SearchBar from './SearchBar';

function Landing() {
    return <div>
        <SearchBar />
        <Productos />
    </div>;
}

export default Landing;
