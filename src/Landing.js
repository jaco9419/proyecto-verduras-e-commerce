import React from 'react';
import './style/Landing.css';
import Header from './Header';
import Productos from './Productos';
import SearchBar from './SearchBar';

function Landing() {
    return <div>
        <Header />
        <SearchBar />
        <Productos />
    </div>;
}

export default Landing;
