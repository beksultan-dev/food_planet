import React from 'react';
import styles from './Main.module.css';
import btn_right from '../../images/btn-right-icon.svg';
import cola from '../../images/cola-main.png';
import burger from '../../images/burger.png';
import burger_price from '../../images/burger_price.png';

const Main = () => {
	return (
		<section className={ styles.main }>
			<div className={ styles.container }>

				{/* Main text */ }
				<div className={ styles.flex_left }>
					<h1 className={ styles.text_h1 }>Доставка вкусной еды до 30 минут + напиток в подарок!</h1>
					<p className={ styles.text_p }>Доставим заказ вовремя и можете рассчитывать, что еда будет доставлен всегда горячим и ароматным.</p>
					<button className={ styles.btn_red }>
						<p>Перейти в меню</p>
						<div><img src={ btn_right } alt="right" /></div>
					</button>
				</div>

				{/* Main images */ }
				<div className={ styles.burger }><img src={ burger } alt="burger" /></div>
				<div className={ styles.burger_price }><img src={ burger_price } alt="burger-price" /></div>
				<div className={ styles.cola }><img src={ cola } alt="cola" /></div>
			</div>
		</section>
	);
};

export default Main;