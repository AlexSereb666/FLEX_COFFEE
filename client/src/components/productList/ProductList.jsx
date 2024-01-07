import React, { useContext } from 'react';
import './ProductList.css';
import { observer } from 'mobx-react-lite'
import { Context } from '../../index';
import ProductItem from '../productItem/ProductItem';

const ProductList = observer(() => {
    const { product } = useContext(Context)
    return (
        <div className="product-list">
            {product.products.map(product => 
                <ProductItem key={product.id} product={product}/>   
            )}
        </div>
    );
})

export default ProductList;
