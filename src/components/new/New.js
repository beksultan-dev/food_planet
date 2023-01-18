import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './New.module.css';
import minus from '../../images/minus.svg';
import plus from '../../images/plus.svg';

const NewItem = ({ img_src, title, title_desc, price, id }) => {
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
		const item = { img_src, title, title_desc, price, id, count }
		const cart = getCart();
		let data = {};
		if (cart) {
			alert('Добавлено в корзину');
			data = { [title]: item, ...cart };
		} else {
			alert('Добавлено в корзину');
			data[title] = item;
		}
		localStorage.setItem('cart', JSON.stringify(data))
	}

	return (
		<div className={ styles.new_wrapper_item }>
			<img className={ styles.burger_item } src={ img_src } alt="item" />
			<h3>{ title }</h3>
			<p className={ styles.new_p1 }>{ title_desc }</p>
			<p className={ styles.new_p2 }>{ price } сом</p>

			<div className={ styles.counter }>
				<img className={ styles.minus } src={ minus } alt="minus" onClick={ decrease } />
				<p>{ count }</p>
				<img className={ styles.plus } src={ plus } alt="minus" onClick={ increase } />
			</div>
			<button onClick={ addToCart }>В корзину</button>
		</div>
	)
}

const New = () => {
	const [foods, setFoods] = useState([]);


	const getBurgers = () => {
		const url = 'http://localhost:3001/burgers?_start=4&_end=8';

		fetch(url)
			.then(response => response.json())
			.then(data => setFoods(data))
	}
	useEffect(() => { getBurgers() }, []);


	const getSushi = () => {
		const url = 'http://localhost:3001/sushi?_start=4&_end=8';

		fetch(url)
			.then(response => response.json())
			.then(data => setFoods(data))
	}
	useEffect(() => { getSushi() }, []);


	const getRolls = () => {
		const url = 'http://localhost:3001/rolls?_start=4&_end=8';

		fetch(url)
			.then(response => response.json())
			.then(data => setFoods(data))
	}
	useEffect(() => { getRolls() }, []);


	const getSalats = () => {
		const url = 'http://localhost:3001/salats?_start=4&_end=8';

		fetch(url)
			.then(response => response.json())
			.then(data => setFoods(data))
	}
	useEffect(() => { getSalats() }, []);


	const getDeserts = () => {
		const url = 'http://localhost:3001/deserts?_start=4&_end=8';

		fetch(url)
			.then(response => response.json())
			.then(data => setFoods(data))
	}
	useEffect(() => { getDeserts() }, []);


	const getDrinks = () => {
		const url = 'http://localhost:3001/drinks?_start=4&_end=8';

		fetch(url)
			.then(response => response.json())
			.then(data => setFoods(data))
	}
	useEffect(() => { getDrinks() }, []);


	const getPizza = () => {
		const url = 'http://localhost:3001/pizza?_start=4&_end=8';

		fetch(url)
			.then(response => response.json())
			.then(data => setFoods(data))
	}
	useEffect(() => { getPizza() }, []);


	return (
		<section className={ styles.new }>
			<div className={ styles.container }>

				{/* Nav */ }
				<h2 className={ styles.title }>Новинки</h2>
				<nav className={ styles.new_nav }>
					<ul className={ styles.new_ul }>
						<li><NavLink onClick={ getPizza }>Пицца</NavLink></li>
						<li><NavLink onClick={ getBurgers }>Бургер</NavLink></li>
						<li><NavLink onClick={ getSushi }>Суши</NavLink></li>
						<li><NavLink onClick={ getRolls }>Роллы</NavLink></li>
						<li><NavLink onClick={ getSalats }>Салаты</NavLink></li>
						<li><NavLink onClick={ getDeserts }>Десерты</NavLink></li>
						<li><NavLink onClick={ getDrinks }>Напитки</NavLink></li>
					</ul>
				</nav>

				{/* Goods */ }
				<div className={ styles.new_wrapper }>
					{
						foods.map((item, index) => {
							return (
								<NewItem
									key={ index + 1 }
									img_src={ item.img_src }
									title={ item.title }
									title_desc={ item.title_desc }
									price={ item.price }
									id={ item.id }
								/>
							)
						})
					}
				</div>
			</div>
		</section >
	);
};

export default New;