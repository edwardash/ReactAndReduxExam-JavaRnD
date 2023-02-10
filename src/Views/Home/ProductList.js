import React from 'react'
import { useNavigate } from 'react-router-dom';

const ProductList = ({ products }) => {
    const navigate = useNavigate();

    let pushTodetailPage = (id) => {
        navigate(`/product/${id}`);
    }

    return (
        <ul style={{ listStyleType: 'none', display: 'flex', textAlign: 'center', flexWrap: 'wrap', margin: 0, padding: 0 }}>
            {products.map((product) => (
                <li key={product.id} style={{ margin: '10px 10px' }} onClick={() => pushTodetailPage(product.id)}>
                    <img src={product.image} alt={product.name} style={{ width: '16rem', height: '16rem' }} />
                    <p style={{ margin: 0 }}>{product.name}</p>
                    <p style={{ margin: 0 }}>{product.des}</p>
                    <p style={{ margin: 0 }}>{product.price}</p>
                </li>
            ))}
        </ul>
    );
};


export default ProductList