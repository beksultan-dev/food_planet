import React, {useEffect, useState} from 'react';
import Footer from '../footer/Footer';
import styles from './Cart.module.css';
import {NavLink} from 'react-router-dom';
import Product from './Product';

const Cart = () => {
    const [products, setProducts] = useState([]);

    const getCart = () => JSON.parse(localStorage.getItem('cart'));
    const cartData = getCart() ? Object.values(getCart()) : Object.values({});

    useEffect(() => {
        setProducts(cartData);
    }, []);

    const deleteData = (title) => {
        localStorage.setItem(
            'cart',
            JSON.stringify(cartData.filter((item) => item.title !== title))
        );
    };

    return (
        <div className={styles.cart}>
            <div className={styles.container}>
                <div>
                    <h1 className={styles.title}>Корзина</h1>
                    <p className={styles.desc}>Товары в вашей корзине</p>
                    <div className={styles.title_wrapper}>
                        <div className={styles.goods_desc}>
                            <div className={styles.product}>Продукт</div>
                            <div className={styles.amount}>Количество</div>
                            <div className={styles.price}>Цена</div>
                            <div className={styles.price_all}>К оплате</div>
                        </div>
                    </div>
                    <div className={styles.goods_wrapper}>
                        {products.map((item) => (
                            <Product
                                key={item.id}
                                title={item.title}
                                title_desc={item.title_desc}
                                price={item.price}
                                count={item.count}
                                id={item.id}
                                img_src={item.img_src}
                                deleteData={deleteData}
                            />
                        ))}
                    </div>
                    <p className={styles.final_price}>
                        Итого:{' '}
                        <span>
                            {products.reduce(
                                (acc, item) => acc + item.price * item.count,
                                0
                            )}{' '}
                            сом
                        </span>
                    </p>
                    <div className={styles.btn_inner}>
                        <NavLink to="/">
                            <button className={styles.btn_back}>
                                Вернутся на главную
                            </button>
                        </NavLink>
                        <NavLink to="/order">
                            <button className={styles.btn}>
                                Оформить заказ
                            </button>
                        </NavLink>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Cart;
