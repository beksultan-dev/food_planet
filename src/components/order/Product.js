import { useState } from 'react';
import styles from './Order.module.css';

const Product = ({ title, title_desc, img_src, price, id, count }) => {
	const totalPrice = count * price;

	return (
		<>
			<div className={ styles.goods }>
				<div className={ styles.product_item }>
					<img src={ img_src } alt="img" />
					<p>{ title }</p>
				</div>
				<div className={ styles.amount_item }>
					<p>{ count }</p>
				</div>
				<div className={ styles.price_item }>
					<p>{ price } сом</p>
				</div>
				<div className={ styles.price_all_item }>
					<p>{ totalPrice } сом</p>
				</div>
			</div>
		</>
	)
}

export default Product;