import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NotFound.module.css';

const NotFound = () => {
	return (
		<div className={styles.container}>
			<div className={styles.not_found}>
				<h1 >Ошибка 404</h1>
				<NavLink className={styles.link} to="/">Перейти на главную</NavLink>
			</div>
		</div>
	);
};

export default NotFound;