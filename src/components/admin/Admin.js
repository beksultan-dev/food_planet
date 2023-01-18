import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Admin.module.css';
import Food from './Food';

const Admin = () => {
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
		<div className={ styles.admin }>
			<div className={ styles.container }>
				<h1 className={ styles.title }>Админ панель</h1>

				<nav className={ styles.menu_nav }>
					<ul className={ styles.menu_ul }>
						<li><NavLink className={ styles.li_item } onClick={ getPizza }>Пицца</NavLink></li>
						<li><NavLink onClick={ getBurgers }>Бургер</NavLink></li>
						<li><NavLink onClick={ getSushi }>Суши</NavLink></li>
						<li><NavLink onClick={ getRolls }>Роллы</NavLink></li>
						<li><NavLink onClick={ getSalats }>Салаты</NavLink></li>
						<li><NavLink onClick={ getDeserts }>Десерты</NavLink></li>
						<li><NavLink onClick={ getDrinks }>Напитки</NavLink></li>
					</ul>
				</nav>
				<div className={ styles.title_wrapper }>
					<div className={ styles.goods_desc }>
						<div className={ styles.product }>Продукт</div>
						<div className={ styles.amount }>Описание</div>
						<div className={ styles.price }>Цена</div>
					</div>
				</div>
				<div className={ styles.all_products_wrapper }>
					{
						foods.map((item) => <Food
							img_src={ item.img_src }
							title={ item.title }
							title_desc={ item.title_desc }
							price={ item.price }
							id={ item.id }
						/>)
					}
				</div>
				<div className={ styles.btn_block }>
					<NavLink to="/add_foods"><button className={ styles.btn }>Добавить новый товар</button></NavLink>
				</div>
			</div>
		</div>
	);
};

export default Admin;