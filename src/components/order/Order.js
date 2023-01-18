import React, { useEffect, useState } from 'react';
import styles from './Order.module.css';
import Footer from '../footer/Footer.js';
import Product from './Product';

const Order = () => {
	const [products, setProducts] = useState([]);
	const getCart = () => JSON.parse(localStorage.getItem('cart'));

	const cartData = getCart() ? Object.values(getCart()) : Object.values({});
	useEffect(() => {
		setProducts(cartData);
	}, []);

	const totalPrice = products.reduce((acc, item) => acc + (item.price * item.count), 0)


	const [surname, setSurname] = useState('');
	const [name, setName] = useState('');
	const [mobile, setMobile] = useState('');
	const [email, setEmail] = useState('');
	const [address, setAddress] = useState('');
	const [promocode, setPromocode] = useState('');
	const [comment, setComment] = useState('');

	const saveData = () => {
		const userInfo = {
			name,
			surname,
			mobile,
			email,
			address,
			comment,
			promocode,
			totalPrice,
			cart: cartData
		};

		const url = 'http://localhost:3001/order';
		const options = {
			method: 'POST',
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(userInfo)
		}

		fetch(url, options)
			.then(response => {
				if (response.status === 201) {
					alert("Успешно добавлено")
				} else {
					alert('Ошибка!!!!!!!');
				}
			})
	}

	return (
		<>
			<div className={ styles.container }>
				<h1 className={ styles.title }>Оформление заказа</h1>

				<p className={ styles.subtitle }>Ваши контактные данные</p>
				<form className={ styles.form }>
					<input id='surname' type="text" placeholder='Фамилия' onChange={ (event) => setSurname(event.target.value) } />
					<input id='name' type="text" placeholder='Имя' onChange={ (event) => setName(event.target.value) } />
					<input id='mobile' type="text" placeholder='Мобильный телефон' onChange={ (event) => setMobile(event.target.value) } />
					<input id='email' type="text" placeholder='email' onChange={ (event) => setEmail(event.target.value) } />
				</form>

				<p className={ styles.subtitle }>Ваш заказ</p>
				<div>
					<div className={ styles.title_wrapper }>
						<div className={ styles.goods_desc }>
							<div className={ styles.product }>Продукт</div>
							<div className={ styles.amount }>Количество</div>
							<div className={ styles.price }>Цена</div>
							<div className={ styles.price_all }>К оплате</div>
						</div>
					</div>
					<div className={ styles.goods_wrapper }>
						{
							products.map((item) => <Product
								key={ item.id }
								title={ item.title }
								title_desc={ item.title_desc }
								price={ item.price }
								count={ item.count }
								id={ item.id }
								img_src={ item.img_src }
							/>)
						}
					</div>
				</div>

				<p className={ styles.subtitle }>Адрес доставки</p>
				<form className={ styles.form }>
					<select className={ styles.select }>
						<option value disabled="выберите">Выберите страну доставки</option>
						<option value="kg">Кыргызстан</option>
						<option value="kz">Казахстан</option>
					</select>
					<input id='address' type="text" placeholder='Введите адрес доставки' onChange={ (event) => setAddress(event.target.value) } />
				</form>

				<p className={ styles.subtitle }>Способ оплаты</p>
				<div className={ styles.payment_inner }>
					<label className={ styles.payment }><input type="radio" name='payment' />Наличными</label>
					<label className={ styles.payment }><input type="radio" name='payment' />Банковский перевод</label>
					<label className={ styles.payment }><input type="radio" name='payment' />Денежный перевод</label>
					<label className={ styles.payment }><input type="radio" name='payment' />Оплата курьеру на месте</label>
				</div>

				<p className={ styles.subtitle }>Комментраий к заказу</p>
				<textarea id='comment' name="comment" placeholder='Комментарий' className={ styles.textarea } onChange={ (event) => setComment(event.target.value) } ></textarea>
				<div className={ styles.aside }>
					<div>Промокод</div>
					<input id='promocode' type="text" placeholder='Промокод' onChange={ (event) => setPromocode(event.target.value) } />
					<div className={ styles.final }>
						<div className={ styles.final_price }>Итого:</div>
						<div className={ styles.to_pay }>{ totalPrice } сом</div>
					</div>
					<button className={ styles.btn } onClick={ saveData }>Подтвердить заказ</button>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Order;