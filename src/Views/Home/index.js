import React, { useState } from 'react';
import ProductList from './ProductList';
import { useSelector } from "react-redux";


const Index = () => {
    const data1 = useSelector(state => state.allData);

    const [filter, setFilter] = useState('all');

    return (
        <>

            <h3 style={{ padding: '10px' }}>PRICE</h3>
            <div style={{ display: 'flex', flexDirection: 'column', padding: '10px' }}>
                <div>
                    <input
                        type="checkbox"
                        id="price1"
                        checked={filter === 'price1'}
                        onChange={() => setFilter('price1')}
                    />
                    <label htmlFor="price1">Rs 1-1000</label>
                </div>
                <div>
                    <input
                        type="checkbox"
                        id="price2"
                        checked={filter === 'price2'}
                        onChange={() => setFilter('price2')}
                    />
                    <label htmlFor="price2">1000 and above</label>
                </div>

            </div>


            <ProductList
                products={
                    filter === 'price1'
                        ? data1.filter((product) => parseInt(product.price.split(' ')[1]) < 1000)
                        : filter === 'price2'
                            ? data1.filter((product) => parseInt(product.price.split(' ')[1]) >= 1000)
                            : data1
                }
            />
        </>
    )
}

export default Index