import React from 'react';
import reasons from '../../constants/reasons';
import styles from './Reasons.module.css';

const Item = ({ img, title, title_desc }) => {
	return (
		<li>
			<div className={styles.circle}>
				<img src={img} alt="image" />
			</div>

			<h3 className={styles.item_title}>{title}</h3>
			<p className={styles.item_desc}>{title_desc}</p>
		</li>
	)
}

const Reasons = () => {
	return (
		<section className={styles.reasons}>
			<div className={styles.container}>
				{/* Title */}
				<h2 className={styles.title}>Почему выбирают нас:</h2>

				{/* Items */}
				<ul className={styles.blocks_inner}>
					{
						reasons.map((item, index) => <Item
							key={index + 1}
							img={item.img}
							title={item.title}
							title_desc={item.title_desc}
						/>)
					}
				</ul>
			</div>
		</section>
	);
};

export default Reasons;