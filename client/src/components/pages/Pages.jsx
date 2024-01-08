import React, { useContext, useState, useEffect } from 'react';
import './Pages.css';
import { observer } from 'mobx-react-lite';
import { Context } from '../../index';

const Pages = observer(() => {
    const { product } = useContext(Context);
    const [activePage, setActivePage] = useState(1);

    const pageCount = Math.ceil(product.totalCount / product.limit)
    const pages = []

    for (let i = 0; i < pageCount; i++) {
        pages.push(i + 1)
    }

    const handlePageClick = (page) => {
        product.setPage(page)
        setActivePage(page);
    };

    useEffect(() => {
        setActivePage(product.page)
    }, [product.page])

    return (
        <div className="pages-container">
            {pages.map((page) => (
                <div
                    key={page}
                    onClick={() => handlePageClick(page)} // Добавляем обработчик клика
                    className={`pages-container__item ${page === activePage ? 'active' : ''}`}
                >
                    {page}
                </div>
            ))}
        </div>
    );
});

export default Pages;
