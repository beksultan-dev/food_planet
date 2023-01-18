import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Menu.module.css';
import minus from '../../images/minus.svg';
import plus from '../../images/plus.svg';
import toBottom from '../../images/menu-nav-icon.svg';

const GoodsItem = ({ img_src, title, title_desc, price, id }) => {
	const [count, setCount] = useState(1);

	const increase = () => {
		return setCount(count + 1)
	}

	const decrease = () => {
		if (count > 1) {
			return setCount(count - 1)
		}
	}

	const getCart = () => JSON.parse(localStorage.getItem('cart'));

	const addToCart = () => {
		const item = { img_src, title, title_desc, price, id, count };
		const cart = getCart();
		let data = {};
		if (cart) {
			alert('Добавлено в корзину');
			data = { ...cart, [title]: item };
		} else {
			alert('Добавлено в корзину');
			data[title] = item;
		}
		localStorage.setItem('cart', JSON.stringify(data))
	}

	return (
		<div className={ styles.menu_list_item }>
			<img className={ styles.menu_item_img } src={ img_src } alt="item" />
			<h3>{ title }</h3>
			<p className={ styles.menu_p1 }>{ title_desc }</p>
			<p className={ styles.menu_p2 }>{ price } сом</p>

			<div className={ styles.counter }>
				<img className={ styles.minus } src={ minus } alt="minus" onClick={ decrease } />
				<p>{ count }</p>
				<img className={ styles.plus } src={ plus } alt="minus" onClick={ increase } />
			</div>
			<button onClick={ addToCart }>В корзину</button>
		</div>
	)
}

const Menu = () => {
	const [foods, setFoods] = useState([]);

	const getBurgers = () => {
		const url = 'http://localhost:3001/burgers?_start=0&_end=8';

		fetch(url)
			.then(response => response.json())
			.then(data => setFoods(data))
	}
	useEffect(() => { getBurgers() }, []);


	const getSushi = () => {
		const url = 'http://localhost:3001/sushi?_start=0&_end=8';

		fetch(url)
			.then(response => response.json())
			.then(data => setFoods(data))
	}
	useEffect(() => { getSushi() }, []);


	const getRolls = () => {
		const url = 'http://localhost:3001/rolls?_start=0&_end=8';

		fetch(url)
			.then(response => response.json())
			.then(data => setFoods(data))
	}
	useEffect(() => { getRolls() }, []);


	const getSalats = () => {
		const url = 'http://localhost:3001/salats?_start=0&_end=8';

		fetch(url)
			.then(response => response.json())
			.then(data => setFoods(data))
	}
	useEffect(() => { getSalats() }, []);


	const getDeserts = () => {
		const url = 'http://localhost:3001/deserts?_start=0&_end=8';

		fetch(url)
			.then(response => response.json())
			.then(data => setFoods(data))
	}
	useEffect(() => { getDeserts() }, []);


	const getDrinks = () => {
		const url = 'http://localhost:3001/drinks?_start=0&_end=8';

		fetch(url)
			.then(response => response.json())
			.then(data => setFoods(data))
	}
	useEffect(() => { getDrinks() }, []);


	const getPizza = () => {
		const url = 'http://localhost:3001/pizza?_start=0&_end=8';

		fetch(url)
			.then(response => response.json())
			.then(data => setFoods(data))
	}
	useEffect(() => { getPizza() }, []);

	return (
		<section className={ styles.menu } id="menu">
			<div className={ styles.container }>
				{/* Nav */ }
				<h2 className={ styles.title }>Меню</h2>
				<nav className={ styles.menu_nav }>
					<ul className={ styles.menu_ul }>
						<li><NavLink onClick={ getPizza }>Пицца</NavLink></li>
						<li><NavLink onClick={ getBurgers }>Бургер</NavLink></li>
						<li><NavLink onClick={ getSushi }>Суши</NavLink></li>
						<li><NavLink onClick={ getRolls }>Роллы</NavLink></li>
						<li><NavLink onClick={ getSalats }>Салаты</NavLink></li>
						<li><NavLink onClick={ getDeserts }>Десерты</NavLink></li>
						<li><NavLink onClick={ getDrinks }>Напитки</NavLink></li>
					</ul>
				</nav>

				{/* Sort By */ }
				<div className={ styles.sort_wrapper }>
					<h3>Сортировать по:</h3>
					<div className={ styles.sort_btn }>
						<p>По умолчанию</p>
						<img src={ toBottom } alt="icon" />
					</div>
				</div>

				{/* Goods */ }
				<div className={ styles.menu_list }>
					{
						foods.map((item, index) => <GoodsItem
							key={ index + 1 }
							title={ item.title }
							img_src={ item.img_src }
							title_desc={ item.title_desc }
							price={ item.price }
							id={ item.id }
						/>)
					}
				</div>

				<button className={ styles.show_more }>Показать еще</button>
			</div>
		</section>
	);
};

export default Menu;