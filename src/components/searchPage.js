import React, { useState, useEffect } from 'react';
import axios from 'axios';
import List from './list';

const Search = () => {
    const [products, setProducts] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {
        const API_URL = 'https://run.mocky.io/v3/128675fd-afe3-43fd-9b9a-cf7a0ee511ef'
        axios
            .get(API_URL)
            .then(res => {
                const products = res.data
                setProducts(products)
            })
    }, [])

    const filteredProducts = search.length === 0 ? products :
        products.filter(product => product.name.
            toLowerCase().includes(search.toLowerCase()))

    return (
        <div>
            <h3>PRODUCTS LIST</h3>
            <input
                type="text"
                placeholder="Search name"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <List products={filteredProducts} />
        </div>
    )
}

export default Search

