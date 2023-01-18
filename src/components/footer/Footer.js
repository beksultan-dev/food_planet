import React from 'react';
import styles from './Footer.module.css';
import logo from '../../images/logo_white.svg';
import phone from '../../images/phone_white.svg';

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				{/* Wrapper */}
				<div className={styles.wrapper}>

					{/* Logo */}
					<div className={styles.logo_block}>
						<img src={logo} alt="logo" />
						<div className="logo_block_texts">
							<p className={styles.p1}><a href="#">food planet</a></p>
							<p className={styles.p2}>Планета вкусной еды</p>
						</div>
					</div>

					{/* Nav */}
					<ul className={styles.nav}>
						<li><a href="#">Главная</a></li>
						<li><a href="#">Меню</a></li>
						<li><a href="#">Доставка</a></li>
						<li><a href="#">Контакты</a></li>
						<li>
							<a href="#" className={styles.last_nav}>
								<img src={phone} alt="phone" />
								+996500405988
							</a>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
};

export default Footer;