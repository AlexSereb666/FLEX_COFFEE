import React from 'react';
import './MenuProducts.css';
import TypeBar from '../../components/typeBar/TypeBar';
import ViewBar from '../../components/viewBar/ViewBar';
import ProductList from '../../components/productList/ProductList';
import Stetchem from '../../assets/img/Стетхем.png'
import Pages from '../../components/pages/Pages';

function MenuProducts() {
  return (
    <div className="product-menu">
      <div className="product-menu__left-section">
        <TypeBar/>
      </div>

      <div className="product-menu__right-section">
        <div className="product-menu__top-section">
          <ViewBar/>
          <img className="product-menu__stetchem" src={Stetchem} alt="нема картинки:("/>
        </div>

        <div className="product-menu__bottom-section">
          <ProductList/>
        </div>
        <div className="product-menu__pages">
          <Pages/>
        </div>
      </div>
    </div>
  );
}

export default MenuProducts;
