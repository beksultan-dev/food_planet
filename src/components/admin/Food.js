import styles from './Admin.module.css';
import remove from '../../images/remove.png';
import change from '../../images/change.png';

const Food = ({ img_src, price, title, title_desc, id }) => {
	return (
		<>
			<div className={ styles.goods }>
				<div className={ styles.product_item }>
					<img src={ img_src } alt="img" />
					<p>{ title }</p>
				</div>
				<div className={ styles.desc }>
					{ title_desc }
				</div>
				<div className={ styles.price_item }>
					<p>{ price } сом</p>
				</div>
				<img className={ styles.change } src={ change } alt="change" />
				<img className={ styles.remove } src={ remove } alt="remove" />
			</div>
		</>
	);
};

export default Food;