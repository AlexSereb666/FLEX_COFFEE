import React, { useContext, useEffect } from 'react';
import './ProductList.css';
import { observer } from 'mobx-react-lite'
import { Context } from '../../index';
import ProductItem from '../productItem/ProductItem';
import { fetchProducts } from '../../http/productAPI';

const ProductList = observer(() => {
    const { product } = useContext(Context)

    useEffect(() => {
        fetchProducts(product.selectedType.id, product.selectedView.id, product.page, product.limit).then(data => {
            product.setProducts(data.rows)
            product.setTotalCount(data.count)
        })
    }, [])

    useEffect(() => {
        fetchProducts(product.selectedType.id, product.selectedView.id, product.page, product.limit).then(data => {
            product.setProducts(data.rows)
            product.setTotalCount(data.count)
        })
        console.log(JSON.stringify(product.products))
    }, [product.page, product.selectedType, product.selectedView])

    return (
        <div className="product-list">
            {product.products.map(product => 
                <ProductItem key={product.id} product={product}/>   
            )}
        </div>
    );
})

export default ProductList;
