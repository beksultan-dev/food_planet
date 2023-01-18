import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import styles from './Header.module.css';
import logo from '../../../images/logo.svg';
import toBottom from '../../../images/menu-nav-icon.svg';
import phone from '../../../images/header-phone.svg';
import cart from '../../../images/header-cart.svg';

const Header = () => {
	const setActive = ({ isActive }) => (isActive ? "active_nav" : "");
	const [count, setCount] = useState(0);


	const getCart = () => JSON.parse(localStorage.getItem('cart'));
	const cartData = getCart() ? Object.values(getCart()) : Object.values({});
	useEffect(() => {
		setCount(cartData.length);
	}, [count]);

	return (
		<div className={ styles.wrapper }>
			<header className={ styles.container }>
				<div className={ styles.logo_block }>
					<img src={ logo } alt="logo" />
					<div className="logo_block_texts">
						<p className={ styles.p1 }><Link to="/">food planet</Link></p>
						<p className={ styles.p2 }>Планета вкусной еды</p>
					</div>
				</div>
				<nav>
					<ul className={ styles.header_ul }>
						<li className={ styles.li_1 }><NavLink className={ setActive } to="/">Главная</NavLink></li>
						<li className={ styles.li_2 }>
							<NavLink className={ setActive } to="/admin">Меню <img src={ toBottom } alt="bottom" /></NavLink>
						</li>
						<li className={ styles.li_3 }><NavLink className={ setActive } to="/deliver">Доставка</NavLink></li>
						<li className={ styles.li_4 }><NavLink className={ setActive } to="/contacts">Контакты</NavLink></li>
						<li className={ styles.li_5 }>
							<NavLink className={ setActive } to="/number"><img src={ phone } alt="phone" /> +996500405988</NavLink>
						</li>
						<li className={ styles.li_6 }>
							<NavLink className={ setActive } to="/cart"><img src={ cart } alt="cart" /> { count }</NavLink>
						</li>
					</ul>
				</nav>
			</header>
		</div>
	);
};

export default Header;